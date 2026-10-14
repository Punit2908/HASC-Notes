
## 2. Mission 1: Identify Your Linux Environment

### 2.1 What is Linux?

Linux is an operating system kernel. The kernel manages hardware resources, memory, processes, devices, and communication between software and the computer.

A Linux distribution combines the Linux kernel with system utilities, software management tools, libraries, and often a desktop environment to create a usable operating system.

Examples include Ubuntu, Debian, Fedora, Arch Linux, and Kali Linux.

![What Is Ubuntu?|361](https://images.openai.com/static-rsc-4/CVNhAzxyLXkQp7kEd2V091JS60bdVxc0tCnP-fbeDWu3wCOA4S1_zONIsu6MVjTgPERdKdu48NwoKw5dDv27GJxw2YMY-7Y05d8PV8P3OrkhRwvufre_CNCFZkGho9D3HHMWsFirOhVbHbUCa4KYp3O0pQDBFoT18ozaIPZ5So4?purpose=inline)

Ubuntu

A widely used Linux distribution for desktops, servers, and development.

![How to Get Started with Kali Linux in 2020 :: Null Byte|310](https://images.openai.com/static-rsc-4/QR5lBdOHMnlG5E8_Rfd4ZQgLIBhYK6EfGOy4ySZrw2UutFYjUiC3fAH16MMzGbjV3oWtbJMqSbXcenIf3B_rPQzMVodSFokDtWK2xGM-l7HY6B4JlGVJTN04nGBzebJ8dLp5lLCA4Bmp8PE5NT1UAquUaAzQW_-c-krkarhBClo?purpose=inline)

Kali Linux

A security-focused distribution that includes many tools for penetration testing and digital forensics.

![Ghostty vs Kitty: Which Modern Terminal is the Best for Linux Users?|343](https://images.openai.com/static-rsc-4/Em3IyT7zAdTQG5vyv7wUOcZg4C1XY2ErYbkg3RsTrSLNArl0PziZk4xT8kroDBKDtuMPLBbnjCE_JvKAyBWwPd09w9VUdBUNGuGDl78gsuN0-QviOddVerwOE7LdWnLZWKgH6exDaRCFqH-XshC9lQtpD_a5MxlMIt1pSE3H09k?purpose=inline)

Arch Linux

A flexible, rolling-release distribution that gives users extensive control over system configuration.

Important: Kali Linux is not a requirement for learning ethical hacking. You can learn many Linux fundamentals and security concepts on your existing Linux system.

### 2.2 First practical: Discover your system

Open the terminal and run these commands one at a time.

```
whoami
```

Question: Who are you logged in as?

This command prints the current username.

Next:

```
hostname
```

Question: What is your computer called?

This displays the machine's configured hostname.

Now:

```
cat /etc/os-release
```

Question: Which Linux distribution are you using?

This reads the operating system identification file. It usually displays the distribution name and version.

Finally:

```
uname -r
```

Question: Which kernel version is running?

The `-r` option asks `uname` to display the kernel release.

### Student challenge

Without copying the previous commands, answer these questions in your notebook:

1. Which user are you logged in as?
    
2. What is the hostname?
    
3. Which Linux distribution is installed?
    
4. What is the kernel release?
    
5. Why could this information be useful during a security assessment?
    

## 3. Mission 2: Understand the Terminal and Shell

### 3.1 What is a terminal?

A terminal is an interface where you can enter text commands and read their output.

Instead of clicking a folder in a graphical file manager, you can type a command to navigate directly to that folder.

### 3.2 What is a shell?

A shell is a program that interprets commands and runs the requested programs. Bash and Zsh are common examples.

When you type a command into a terminal, the terminal provides the interface, while the shell interprets your input.

For example, if you type:

```
pwd
```

the shell runs the `pwd` command, which displays the current working directory.

### 3.3 Practical: Learn where you are

Run:

```
pwd
```

`pwd` stands for print working directory. It tells you the directory in which your shell is currently working.

You might see a result similar to:

```
/home/student
```

Your result will depend on your username and system configuration.

Now run:

```
ls
```

`ls` lists the files and directories in the current location.

Try:

```
ls -a
```

The `-a` option also shows hidden entries, including filenames that begin with a dot, such as `.config`.

Next:

```
ls -lh
```

This displays a detailed listing with human-readable file sizes.

The options are combined:

- `-l`: detailed listing.
    
- `-h`: human-readable sizes.
    

### Quick prediction challenge

Before running each command, predict what it will display.

```
pwd
```

```
ls
```

```
ls -a
```

```
ls -lh
```

Question: Why might a security investigator care about hidden files?

Hidden files can contain application settings, shell configuration, or other useful information. However, hidden does not mean secret, encrypted, or automatically sensitive.

## 4. Mission 3: Navigate the Linux Filesystem

### 4.1 How are files organized in Linux?

Linux organizes files and directories in a tree-like structure. At the top is the root directory, represented by `/`.

Do not confuse the root directory `/` with the root user, which is the administrator account. They are different things.

Here is a simplified view of common Linux directories:

/

Root directory

/home

Personal directories for regular users

/etc

System-wide configuration files

/var

Frequently changing data, such as logs

/tmp

Temporary files

/usr

Many user-space programs and shared resources

/bin

Essential command programs; may link to /usr/bin

/root

Home directory of the root user

/dev

Device-related filesystem entries

These are standard locations, but exact layouts and symbolic links can vary between distributions.

### 4.2 The three paths you must understand

Before we start moving around, learn these three symbols.

|Symbol|Meaning|Example|
|---|---|---|
|`/`|Root of the filesystem|`/etc/os-release`|
|`~`|Your home directory|`~/Documents`|
|`.`|Current directory|`./notes.txt`|
|`..`|Parent directory|`cd ..`|

A path is the address of a file or directory.

For example:

```
/home/student/cyber-lab/notes.txt
```

This path identifies a file named `notes.txt` inside `cyber-lab`, which is inside the `student` home directory.

### 4.3 Absolute paths versus relative paths

An absolute path begins from the filesystem root `/`.

Example:

```
cd /etc
```

This tells the shell to move into `/etc`, regardless of the current directory.

A relative path is interpreted from your current working directory.

For example, if you are currently in `/home/student` and a directory named `Documents` exists there, then:

```
cd Documents
```

moves you into `/home/student/Documents`.

Both commands can reach a directory, but the starting point is different.

### 4.4 Practical: Move around without getting lost

Run the following commands one by one.

First, return to your home directory:

```
cd ~
```

`cd` means change directory.

Check your location:

```
pwd
```

Now move to `/tmp`:

```
cd /tmp
```

Check again:

```
pwd
```

Return to your home directory:

```
cd
```

When used without a path, `cd` normally returns you to your home directory.

Now move one directory upward:

```
cd ..
```

Check the result:

```
pwd
```

Finally, return home:

```
cd ~
```

### Student challenge: Predict your location

Assume you begin at:

```
/home/student
```

Predict the result after each command:

```
cd ..
```

```
cd /etc
```

```
cd ..
```

```
cd ~
```

Do not execute them until you have written your predictions.

Expected lesson: `cd ..` moves one level upward from the current directory. It does not always move to `/home`.

### 4.5 Use Tab completion

Typing long paths repeatedly is slow and creates opportunities for spelling mistakes.

Most Linux shells support Tab completion. Start typing a filename or directory name and press the Tab key. The shell may complete the name or show possible matches.

For example, type:

```
cd /et
```

Then press Tab. Depending on your shell and available matches, it may complete the path to `/etc`.

If multiple entries match, pressing Tab twice may show possible choices.

Tab completion is particularly useful when dealing with long filenames or deep directory structures.

### 4.6 Use command history

Run a few commands, such as:

```
pwd
ls
whoami
```

Now press the Up Arrow key in the terminal.

You can cycle through previously entered commands and run one again by pressing Enter.

The `history` command also displays a list of commands recorded by the shell:

```
history
```

Be careful when sharing terminal history. Depending on your configuration and previous activity, it may contain sensitive values or commands that should not be exposed.

## 5. Mission 4: Create Your Own Investigation Workspace

Now we will create a realistic folder structure for a cybersecurity practical.

### 5.1 Create directories

Run:

```
mkdir -p ~/cyber-lab/session-5/{notes,evidence,practice}
```

This creates the `notes`, `evidence`, and `practice` directories inside `~/cyber-lab/session-5`.

Let's verify:

```
ls -R ~/cyber-lab/session-5
```

You should see the three directories.

### 5.2 Create files

The `touch` command can create an empty file when the file does not exist.

Create three files:

```
touch ~/cyber-lab/session-5/notes/observations.txt
touch ~/cyber-lab/session-5/evidence/system-info.txt
touch ~/cyber-lab/session-5/practice/challenge.txt
```

Now list the structure:

```
ls -R ~/cyber-lab/session-5
```

Question: What is the difference between `mkdir` and `touch`?

- `mkdir` creates directories.
    
- `touch` creates an empty file if it does not already exist, or updates timestamps on an existing file.
    

### 5.3 Write information into a file

Let's write a short observation:

```
echo "My first Linux investigation" \
  > ~/cyber-lab/session-5/notes/observations.txt
```

Read the file:

```
cat ~/cyber-lab/session-5/notes/observations.txt
```

Now append another line:

```
echo "I practiced filesystem navigation" \
  >> ~/cyber-lab/session-5/notes/observations.txt
```

Read it again:

```
cat ~/cyber-lab/session-5/notes/observations.txt
```

You should see both lines.

Remember:

- `>` writes output to a file and replaces its existing contents.
    
- `>>` appends output to the end of a file.
    
- `cat` displays the contents of a file.
    

### Student challenge: What happens next?

Suppose `notes.txt` contains:

```
First line
```

You run:

```
echo "Second line" >> notes.txt
```

Then you run:

```
echo "Third line" > notes.txt
```

What will the file contain?

Answer: Only `Third line`, because `>` replaces the previous contents. The earlier lines are lost.

## 6. Mission 5: Copy, Move, and Rename Files

Security investigators frequently organize configuration files, logs, notes, and evidence. Let's practice the basic file-management commands.

### 6.1 Copy a file with `cp`

The `cp` command copies files or directories.

Create a sample file:

```
echo "Training evidence: sample record" \
  > ~/cyber-lab/session-5/practice/original.txt
```

Copy it:

```
cp ~/cyber-lab/session-5/practice/original.txt \
   ~/cyber-lab/session-5/evidence/copy.txt
```

Check the evidence directory:

```
ls ~/cyber-lab/session-5/evidence
```

Read the copy:

```
cat ~/cyber-lab/session-5/evidence/copy.txt
```

The original file should remain in `practice/`, while the copy should exist in `evidence/`.

Question: If you edit the copy, will the original normally change too?

No. These are separate files. Changing one does not normally change the other.

### 6.2 Move or rename a file with `mv`

The `mv` command moves files and directories. It can also rename them.

Rename the original file:

```
mv ~/cyber-lab/session-5/practice/original.txt \
   ~/cyber-lab/session-5/practice/renamed.txt
```

Check the result:

```
ls ~/cyber-lab/session-5/practice
```

You should see `renamed.txt` instead of `original.txt`.

Now move it to the notes directory:

```
mv ~/cyber-lab/session-5/practice/renamed.txt \
   ~/cyber-lab/session-5/notes/renamed.txt
```

Check both locations:

```
ls ~/cyber-lab/session-5/practice
```

```
ls ~/cyber-lab/session-5/notes
```

The file should now be in `notes/`.

### 6.3 Delete a file with `rm`

The `rm` command removes files. It generally does not send them to a graphical trash bin, so recovering them may be difficult.

Create a disposable practice file:

```
touch ~/cyber-lab/session-5/practice/delete-me.txt
```

Confirm it exists:

```
ls ~/cyber-lab/session-5/practice
```

Remove it:

```
rm ~/cyber-lab/session-5/practice/delete-me.txt
```

Check again:

```
ls ~/cyber-lab/session-5/practice
```

The file should no longer appear.

Safety rule: Never experiment with `rm` using important files or unfamiliar paths. Avoid commands such as `rm -rf` unless you understand exactly what they target and have a legitimate reason to use them. A tiny typo can turn a five-minute practical into an afternoon of regret.

### Quick command comparison

|Command|Purpose|Does the original remain?|
|---|---|---|
|`cp source destination`|Copy a file|Yes, normally|
|`mv source destination`|Move or rename a file|No, not at the original location|
|`rm filename`|Remove a file|No|

### Student challenge

Without looking at the previous examples, perform these tasks:

1. Create a file named `test.txt` in `practice/`.
    
2. Write the text `Linux practice` into it.
    
3. Copy it into `evidence/`.
    
4. Rename the original to `final-test.txt`.
    
5. Display the copied file's contents.
    

Try to use the commands from memory.

## 7. Mission 6: Find Files Like an Investigator

Imagine that a computer contains hundreds of files. Someone tells you that a file called `system-info.txt` exists somewhere inside your training workspace.

Opening each folder individually would be tedious. We can use the `find` command instead.

### 7.1 Search for a filename

Run:

```
find ~/cyber-lab/session-5 -name "system-info.txt"
```

Let's break it down:

- `find` searches for files and directories.
    
- `~/cyber-lab/session-5` is the directory where the search begins.
    
- `-name` filters results by filename.
    
- `"system-info.txt"` is the exact filename pattern.
    

The command searches the specified directory and its subdirectories.

You should find the file you created in `evidence/`.

### 7.2 Search without worrying about capitalization

Linux filenames are generally case-sensitive. For example, `Notes.txt` and `notes.txt` are different filenames.

To search without case sensitivity, use `-iname`:

```
find ~/cyber-lab/session-5 -iname "NOTES.TXT"
```

This can match filenames such as `notes.txt` or `Notes.txt`.

### 7.3 Find only directories

Use `-type d` to search for directories:

```
find ~/cyber-lab/session-5 -type d
```

### 7.4 Find only files

Use `-type f`:

```
find ~/cyber-lab/session-5 -type f
```

Here, `f` means a regular file and `d` means a directory.

### 7.5 Search for a particular file extension

To find text files:

```
find ~/cyber-lab/session-5 -type f -name "*.txt"
```

The `*` is a wildcard meaning that any sequence of characters can appear before `.txt`.

The quotation marks prevent the shell from expanding the wildcard before `find` receives it.

### Student challenge: The missing evidence file

Suppose you know that a file called `challenge.txt` exists somewhere inside `cyber-lab`, but you have forgotten where you saved it.

Run:

Then answer:

1. What path did the command return?
    
2. Why is `find` useful during an investigation?
    
3. What would change if you searched from `~` instead of `~/cyber-lab`?
    

Expected insight: The starting directory controls the search area. Searching from your home directory may