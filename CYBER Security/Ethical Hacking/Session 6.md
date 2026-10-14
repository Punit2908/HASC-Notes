
Learning objective: Understand how Linux controls access to files and directories, inspect user permissions, create a safe permission-testing lab, and investigate common security misconfigurations.

## 1. Today's practical mission

Imagine you are assessing a Linux server used by a small company.

The server contains three files:

- `public-info.txt`: information everyone on the system may read.
    
- `staff-report.txt`: information only authorized staff should read.
    
- `admin-notes.txt`: sensitive information that should be restricted.
    

A security problem occurs if every user can read every file, regardless of their role.

Today, you will learn how Linux prevents that problem. You will create fictional users and groups, assign file ownership, change permissions, test access restrictions, and investigate what happens when permissions are configured incorrectly.

By the end, you should be able to answer questions such as:

- Who owns a file?
    
- Which users can read or modify it?
    
- What does `chmod 640` actually mean?
    
- Why can a user sometimes access a file even when its permissions look restrictive?
    
- What is the difference between `sudo` and logging in as root?
    

We will use a dedicated lab directory and, where possible, test permissions with ordinary user accounts. Do not modify permissions on real system files during this exercise.

## 2. The three identities Linux checks

Linux normally evaluates file access using three categories:

1. Owner: The user who owns the file.
    
2. Group: Users associated with the file's owning group.
    
3. Others: Everyone who is neither the owner nor a member of the owning group.
    

Each category can have different permissions.

For example, a file might allow its owner to read and edit it, members of a particular group to read it, and everyone else to do nothing.

This is useful on shared systems because different people can work on the same computer without automatically receiving access to one another's information.

### A simple company example

Imagine these employees:

- A manager who owns a confidential report.
    
- Two staff members who belong to the `staff` group.
    
- A visitor account that is not part of the staff group.
    

The manager might need to read and edit the report. Staff may need to read it. The visitor should have no access.

Linux can express that policy through ownership and permissions.

Important distinction: A Linux user is an account identity, not necessarily a human being. Applications and system services can also run under dedicated user accounts.

## 3. Practical 1: Inspect users and groups

Before changing anything, let's investigate the accounts that already exist on your Linux system.

### 3.1 Find out who you are

Run:

```
id
```

The `id` command displays your user ID, primary group ID, and supplementary groups.

You may see output similar to:

```
uid=1000(student) gid=1000(student) groups=1000(student),998(wheel)
```

This is illustrative output. Your values and group names may differ.

Understand the important terms:

- UID (User ID): The numerical identifier of a user account.
    
- GID (Group ID): The numerical identifier of a group.
    
- Primary group: The main group associated with the user for file creation and other operations.
    
- Supplementary groups: Additional groups that can grant the user access to files or resources.
    

Linux checks numerical IDs when enforcing many access-control rules. Two accounts with different names but the same UID are not treated as separate identities in the usual way.

### 3.2 See which groups you belong to

Run:

```
groups
```

This displays the groups associated with your current user.

Now run:

```
id -Gn
```

The `-G` option requests group IDs, and `-n` requests their names instead of numbers.

Why does this matter?

Suppose a file belongs to the `developers` group and grants that group read access. A user who belongs to `developers` may be able to read it even though they are not the file's owner.

### 3.3 Look up a particular account

The `getent` command retrieves entries from the system's configured account databases.

Run:

```
getent passwd "$USER"
```

This displays the account entry for your current user.

The `passwd` database contains account information, including usernames, UIDs, GIDs, home directories, and login shells. The command does not display the user's password.

To look up a group:

```
getent group
```

This lists group entries available through the system's configured account databases. There may be many, including groups used by system services.

To look up one particular group:

```
getent group wheel
```

On some distributions, administrative users belong to `wheel`. Ubuntu and other distributions may use `sudo` as the relevant administrative group instead.

Do not assume that every group with an important-sounding name grants administrative privileges. The actual configuration determines what it can do.

### Student challenge

Run `id`, `groups`, and `getent passwd "$USER"`.

Write down:

1. Your UID.
    
2. Your primary group.
    
3. Two supplementary groups, if present.
    
4. Your home directory.
    
5. Your configured login shell.
    

Then explain why group membership can affect file access.

## 4. Practical 2: Understand read, write, and execute permissions

Linux permissions are often represented by the letters `r`, `w`, and `x`.

|Permission|For a regular file|For a directory|
|---|---|---|
|`r`|Read the file's contents|List directory entries, subject to other permissions|
|`w`|Modify the file's contents|Create, remove, or rename entries, subject to other permissions|
|`x`|Execute the file if it is executable|Traverse or access entries within the directory, subject to other permissions|

The meaning of execute is different for a file and a directory. For a directory, it primarily controls traversal.

### 4.1 Read a permission string

Suppose a file has these permissions:

```
-rwxr-x---
```

Break it into four parts:

```
- | rwx | r-x | ---
```

- `-` means it is a regular file.
    
- `rwx` means the owner can read, write, and execute it.
    
- `r-x` means the group can read and execute it but cannot write it.
    
- `---` means other users have no permissions through this mode.
    

Now inspect a real file from your lab:

```
stat -c '%A %a %U %G %n' ~/cyber-lab/session-5/notes/observations.txt
```

This introduces another useful command: `stat`.

`stat` displays file metadata, such as permissions, ownership, size, and timestamps.

In this example:

- `%A` displays symbolic permissions, such as `-rw-r--r--`.
    
- `%a` displays the numeric permission mode.
    
- `%U` displays the owner's username.
    
- `%G` displays the owning group's name.
    
- `%n` displays the filename.
    

The result may look like this:

```
-rw-r--r-- 644 student student /home/student/cyber-lab/session-5/notes/observations.txt
```

Again, your actual output may differ.

### 4.2 What is the difference between `r` and `x`?

Consider a file containing a shell script.

If you have read permission, you can inspect its contents. If you have execute permission, you may be able to run it, subject to other system rules and the file's format.

For a directory, execute permission means you can traverse it. A user may be unable to access a file through a directory even when that file's own permissions appear to allow reading, because the user lacks the necessary directory permissions.

This is why access checks involve more than looking at one permission string.

## 5. Practical 3: Decode numeric permissions

Linux commonly uses octal numbers to represent permissions.

The basic values are:

|Permission|Value|
|---|---|
|Read (`r`)|4|
|Write (`w`)|2|
|Execute (`x`)|1|

Add the values together to calculate a permission digit.

|Digit|Calculation|Permissions|
|---|---|---|
|0|0|`---`|
|1|1|`--x`|
|2|2|`-w-`|
|3|2 + 1|`-wx`|
|4|4|`r--`|
|5|4 + 1|`r-x`|
|6|4 + 2|`rw-`|
|7|4 + 2 + 1|`rwx`|

Three digits usually represent the owner, group, and others, in that order.

### Example: `640`

```
6 | 4 | 0
```

- Owner: `6` = `rw-`
    
- Group: `4` = `r--`
    
- Others: `0` = `---`
    

So `640` means:

- The owner can read and modify the file.
    
- Members of the owning group can read it.
    
- Other users have no permissions through this mode.
    

### Example: `755`

```
7 | 5 | 5
```

- Owner: `rwx`
    
- Group: `r-x`
    
- Others: `r-x`
    

This is a common permission mode for executable programs and directories that users need to access. It is not automatically the right setting for every file.

### Example: `600`

```
6 | 0 | 0
```

Only the owner has read and write permissions. The group and others have none.

This can be suitable for a private text file, although the security of the containing directories and other access mechanisms must also be considered.

### Check your understanding

Without running commands, work out the permissions represented by:

1. `644`
    
2. `700`
    
3. `750`
    
4. `444`
    

Explain which one you would choose for a private report and why.

## 6. Practical 4: Change Permissions with `chmod`

Now we will control file access ourselves.

### 6.1 What is `chmod`?

`chmod` stands for change mode. It changes a file's permission bits.

You briefly encountered this command in Session 4. Today, we will investigate its behavior and test the security consequences.

Create a practice file:

```
mkdir -p ~/cyber-lab/session-6
printf 'Confidential training report\n' \
  > ~/cyber-lab/session-6/report.txt
```

Here, `printf` prints formatted text. Like `echo`, it can send text to a file through redirection.

Inspect the permissions:

```
stat -c '%A %a %U %G' ~/cyber-lab/session-6/report.txt
```

Your file's initial permissions depend on your system's defaults and umask.

A umask is a setting that determines which permissions are removed from the defaults when new files and directories are created. We will investigate it shortly.

### 6.2 Restrict the file to its owner

Run:

```
chmod 600 ~/cyber-lab/session-6/report.txt
```

Verify:

```
stat -c '%A %a %U %G' ~/cyber-lab/session-6/report.txt
```

You should see numeric permissions `600`, usually displayed symbolically as:

```
-rw-------
```

The file's owner can read and write it, while group and other users receive no permissions through this mode.

### 6.3 Allow the group to read

Now run:

```
chmod 640 ~/cyber-lab/session-6/report.txt
```

The permissions become:

```
-rw-r-----
```

The owner can read and write. The owning group can read. Other users have no permissions.

### 6.4 Use symbolic permissions

You do not always have to calculate numeric values. `chmod` also accepts symbolic modes.

For example:

```
chmod g+r ~/cyber-lab/session-6/report.txt
```

This adds read permission for the owning group.

The symbols mean:

- `u`: owner (user).
    
- `g`: owning group.
    
- `o`: others.
    
- `a`: all three categories.
    
- `+`: add a permission.
    
- `-`: remove a permission.
    
- `=`: set the specified permissions for that category.
    

Try removing group read permission:

```
chmod g-r ~/cyber-lab/session-6/report.txt
```

Check:

```
stat -c '%A %a' ~/cyber-lab/session-6/report.txt
```

Now restore group read permission:

```
chmod g+r ~/cyber-lab/session-6/report.txt
```

### Student challenge: Repair a permission mistake

Suppose a private report accidentally has permissions `644`.

1. Explain who can read it.
    
2. Change it to `600`.
    
3. Verify the change.
    
4. Change it to `640`.
    
5. Explain which additional users may now be able to read it.
    

The key skill is not simply entering `chmod`. It is understanding how the permission change alters access.

## 7. Practical 5: Understand Ownership with `chown`

### 7.1 What is ownership?

Every file has an owner and an owning group. These determine which permission category applies to a user.

For example, a report owned by `alice` and assigned to group `cywda_staff` may grant Alice read/write access and the staff group read-only access.

The `chown` command changes file ownership.

Before using it, remember that changing ownership generally requires administrator privileges when assigning ownership to another user or group.

### 7.2 What is `sudo`?

`sudo` is a command that allows an authorized user to execute a command with elevated privileges, according to the system's configuration.

It is commonly used for administrative operations such as creating user accounts or changing ownership.

For example:

```
sudo chown "$USER":"$(id -gn)" \
  ~/cyber-lab/session-6/report.txt
```

Let's decode the command:

- `sudo` requests execution with elevated privileges.
    
- `chown` changes the file's owner and/or group.
    
- `"$USER"` expands to your current username.
    
- `$(id -gn)` runs the command inside the parentheses and substitutes its output, which is your primary group name.
    
- The colon separates the owner from the group.
    

This command assigns the file to your current user and primary group. If it already has that ownership, the visible result may not change.

Check the result:

```
stat -c '%U:%G %A %a' ~/cyber-lab/session-6/report.txt
```

### 7.3 Change only the owning group

Suppose the `cywda_staff` group already exists. You can assign the report to it:

```
sudo chown :"cywda_staff" \
  ~/cyber-lab/session-6/report.txt
```

This changes the owning group without specifying a new owner.

Verify it:

```
stat -c '%U:%G %A %a' ~/cyber-lab/session-6/report.txt
```

Important: This example works only if the group exists. We will create that group in the next practical.

### 7.4 What is the difference between `chmod` and `chown`?

|Command|What it changes|
|---|---|
|`chmod`|Permissions|
|`chown`|Owner and/or owning group|
|`chgrp`|Owning group|

Changing ownership does not automatically make a file private. You must still examine its permissions and the access controls on the surrounding directories.

## 8. Practical 6: Create Users and Groups for a Security Test

This is the most important practical of the session. We will simulate a small company on your own Linux machine.

We will create:

- A group named `cywda_staff`.
    
- A test user named `cywda_alice`, who belongs to that group.
    
- A separate test user named `cywda_visitor`, who does not belong to the staff group.
    
- A report that only the owner and staff group should be able to read.
    

These are local test accounts. You do not need to assign them passwords because we will use `sudo -u` to run individual commands as those users.

### 8.1 What do `groupadd` and `useradd` do?

- `groupadd` creates a group.
    
- `useradd` creates a user account.
    
- `-M` tells `useradd` not to create a home directory.
    
- `-g` specifies the primary group.
    
- `-s` sets the login shell.
    

For these test accounts, we will use a non-login shell. This reduces the chance of someone using them for a normal interactive login, while still allowing an administrator to run specific commands as the account.

First, check whether the test group already exists:

```
getent group cywda_staff
```

If the command returns nothing, create the group:

```
sudo groupadd cywda_staff
```

If it already exists from an earlier attempt, do not create it again.

Now check whether the test user exists:

```
id cywda_alice
```

If the account does not exist, create it:

```
sudo useradd -M -g cywda_staff \
  -s /usr/sbin/nologin cywda_alice
```

Do the same for the visitor group and user. First check whether the group exists:

```
getent group cywda_visitors
```

If it does not exist:

```
sudo groupadd cywda_visitors
```

Then check the user:

```
id cywda_visitor
```

If it does not exist:

```
sudo useradd -M -g cywda_visitors \
  -s /usr/sbin/nologin cywda_visitor
```

The exact path to `nologin` can vary across systems. Check it using:

```
command -v nologin
```

If your system uses a different path, substitute the path it reports when creating a new account. If the users already exist, do not recreate them.

### 8.2 Verify group membership

Run:

```
id cywda_alice
```

Then:

```
id cywda_visitor
```

Alice should have `cywda_staff` as her primary group. The visitor should have `cywda_visitors`.

Security question: Why are we creating two different users?

Because testing with only the owner tells us very little about whether permissions protect information from other users. We need to test both an authorized group member and someone outside that group.

### 8.3 Prepare the test report

Create a shared directory for this experiment:

```
sudo mkdir -p /tmp/cywda-permission-lab
```

A path beginning with `/tmp` is used here because it is a standard temporary-file location. The test is isolated to this named directory, not the whole system.

Make the directory traversable by users for this exercise:

```
sudo chmod 755 /tmp/cywda-permission-lab
```

Now create the report:

```
sudo sh -c 'printf "Staff-only training report\n" > /tmp/cywda-permission-lab/staff-report.txt'
```

Here, `sh -c` runs the quoted text as a shell command. We use it because the redirection must also happen with elevated privileges. Putting `sudo` in front of `printf` alone would not elevate the shell's file-redirection operation.

Assign ownership to your current user and the staff group:

```
sudo chown "$USER":cywda_staff \
  /tmp/cywda-permission-lab/staff-report.txt
```

Restrict the report to owner read/write and group read:

```
sudo chmod 640 /tmp/cywda-permission-lab/staff-report.txt
```

Inspect it:

```
stat -c '%U:%G %A %a %n' \
  /tmp/cywda-permission-lab/staff-report.txt
```

You should see your username as the owner, `cywda_staff` as the owning group, and permissions `640`.

### 8.4 Test access as the staff user

What is `sudo -u`?

It tells `sudo` to execute a command as a specified user, rather than as the current user.

Run:

```
sudo -u cywda_alice cat \
  /tmp/cywda-permission-lab/staff-report.txt
```

Expected result:

```
Staff-only training report
```

Why can Alice read it?

Because she belongs to the owning group, and that group has read permission.

### 8.5 Test access as the visitor

Now run:

```
sudo -u cywda_visitor cat \
  /tmp/cywda-permission-lab/staff-report.txt
```

The command should fail with a permission error.

Why?

The visitor is neither the file's owner nor a member of the owning group. The final permission digit is `0`, so other users have no permissions through this mode.

This is a real demonstration of access control, not just a table of letters in a notebook.

### 8.6 Change one permission and observe the difference

Suppose the organization decides that all local users may read the report.

Change the mode:

```
sudo chmod 644 /tmp/cywda-permission-lab/staff-report.txt
```

Test again:

```
sudo -u cywda_visitor cat \
  /tmp/cywda-permission-lab/staff-report.txt
```

The visitor should now be able to read it.

Restore the intended staff-only mode:

```
sudo chmod 640 /tmp/cywda-permission-lab/staff-report.txt
```

Test the visitor again to verify that access is denied.

### What did we prove?

We demonstrated how file ownership and permission changes affect access:

|Permission mode|Owner|Owning group|Others|
|---|---|---|---|
|`600`|Read/write|No access|No access|
|`640`|Read/write|Read|No access|
|`644`|Read/write|Read|Read|
|`700`|Read/write/execute|No access|No access|

These modes apply to regular files in the examples. Execute permission has a different practical meaning for directories, as discussed earlier.

Security lesson: A small permission mistake can expose confidential information. That is why security testers inspect ownership and permissions instead of assuming that a file is private because of its name.

## 9. Practical 7: Investigate `umask`

We have already discussed how `chmod` changes permissions after a file exists. But how does Linux decide the initial permissions of a newly created file?

One important factor is umask.

The umask specifies which permission bits should be removed from the permissions that an application requests when creating a file or directory.

### 9.1 Inspect your current umask

Run:

You may see:

This is a common setting, but your result may differ.

A typical application requests default permissions of `666` for regular files and `777` for directories. The umask removes selected permission bits.

For example, with a typical umask of `022`:

- A new regular file commonly gets `644`.
    
- A new directory commonly gets `755`.
    

This happens because execute permission is not normally requested for newly created regular files.

### 9.2 Test a more restrictive umask

Run these commands in the same terminal session:

This changes the umask for the current shell and its child processes.

Create a new file and directory:

Inspect their permissions:

With the usual creation defaults, you should see file permissions of `600` and directory permissions of `700`.

Why is this useful?

A restrictive umask helps prevent newly created files and directories from automatically granting access to other users. This can be useful when working with confidential reports or security evidence.

The setting affects future file creation; it does not automatically change permissions on files that already exist.

To restore a common default for the remainder of your current shell session, run:

Your system's normal default may differ. This command changes the current shell's setting and does not necessarily change the system-wide configuration.

### Student challenge

Predict the usual permissions for a new regular file and a new directory under each of these umask settings:

- `022`
    
- `027`
    
- `077`
    

Then verify your predictions by creating test files and directories and inspecting them with `stat`.

## 10. Security Investigation: Find the Misconfiguration

Now imagine you are reviewing a fictional server's security settings. You discover a report with these permissions:

The report contains confidential staff information.

### Investigation questions

1. What is the numeric permission mode?
    
2. Can users outside the owning group read the file?
    
3. Why might this be a security problem?
    
4. What permission mode would allow the owner to read and edit it, allow the staff group to read it, and deny access through ordinary permissions to others?
    
5. Which command would you use to apply that mode?
    
6. How would you verify the change?
    

### Suggested solution

The existing mode is `644`. Other users have read permission.

If the intended policy is owner read/write, group read-only, and no access for others, use:

Then verify:

Replace `filename` with the actual file path in your authorized lab.

This corrects the permission mode, but a full security review should also consider directory permissions, group membership, access-control lists, privileged processes, and any other access mechanisms.

## 11. Understanding `sudo` and the Principle of Least Privilege

We used `sudo` several times today. Let's make sure you understand the security implications.

### What is the root user?

The root user is the traditional Linux superuser. It has extensive privileges to administer the system, including modifying protected files and managing user accounts.

### What is the difference between root and `sudo`?

- Root account: An account with UID 0 and extensive system privileges.
    
- `sudo`: A mechanism that allows authorized users to execute particular commands with elevated privileges according to the configured policy.
    

For example:

requests elevated privileges to create a group.

Not every user can use `sudo`. The system's configuration determines which users and commands are permitted.

To inspect what your current account is allowed to run through `sudo`, use:

This lists the applicable `sudo` permissions for your account. Depending on the system configuration, you may be asked to authenticate.

Treat the output as security-relevant information. Administrative permissions can substantially increase the impact of a compromised account.

### Why not use root for everything?

Because mistakes become more dangerous when commands have unrestricted privileges.

For example, an ordinary user might be prevented from changing a protected system file. A command run as root may succeed, even if the path is wrong or the change is harmful.

The principle of least privilege means using only the permissions needed for the task.

During security testing, prefer ordinary accounts for ordinary work and use elevated privileges only when necessary and authorized.

## 12. Practical Cleanup

We created temporary test accounts and a report during this lesson. If you do not need them for the next class, remove the test resources after completing the exercises.

First, delete the two test users: