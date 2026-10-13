
## Linux Fundamentals & Building Your First Security Lab

# Part 1. Start with a real-world scenario

> Imagine a company hires you to investigate a Linux server. You have access to the machine, but you don't know where its important files are, which user you're logged in as, or which services are running. How will you investigate it?

A cybersecurity professional must first understand the system before attempting to assess its security.

They need to answer questions such as:
- Which user am I operating as?
- What operating system and kernel are running?
- Which files and directories exist?
- Who can read or modify those files?
 - Which programs are running?
- Which network services are listening?
    

# Part 2. What is Linux?
Linux is an operating-system kernel. Distributions such as Ubuntu, Debian, Kali Linux, Fedora, and Arch Linux package the kernel with software and tools to create usable operating systems.
Explain it with this analogy:

![Linux Logo, Tux, Linux Kernel, Ubuntu, Free Software, Linux Mint, MX Linux, Bird transparent background PNG clipart | HiClipart|54](https://images.openai.com/static-rsc-4/Mx33ePpDQHTLNCIx6yM2G2r7epZI8MSfs24YhuRaZLdRGPhOS63CIjkUDVIRV69Q1EGaPfxIgpnGSLdCjdEnYS5Gc1-N_3ZWZoQtxvUtFVTZUHm-8BQlcHhp7WekPcLH_T6BLTXm0xl5tYrfW89zJ70aTTIo03ZEjjXN5pc6QuE?purpose=inline)

Linux kernel
The core that manages hardware, memory, processes, and system resources.

![Kali Linux 2025.2 Released with Revamped Kali Menu, 13 New Hacking Tools - 9to5Linux](https://images.openai.com/static-rsc-4/xwGH7q0kTCWP8ORHvyP9v2WcaclKjWaj0oYFhZVPlUEYXWbnv_gEuZ-zJ121CROd76UmctTXee1V7uSYlvhalmPMEUAc5dvSI8_PTPyUtRCNOpxCsPSa2qra7pIIDdhzVo6X2z5ulhpmiah4dcoGqbUY9sU4Bw0AU_nUPwnnXeg?purpose=inline)

Linux distribution

The kernel combined with utilities, applications, package management, and often a desktop environment.

### Why is Linux useful in cybersecurity?

- Many servers run Linux.
- It provides powerful command-line tools.
- Users and file permissions are easy to inspect.
- Networking and process information are readily available.
- Security tools can be installed and automated.

Important: Kali Linux is not a magical hacking operating system. It is a Linux distribution containing security tools. Learning Linux fundamentals matters more than changing your wallpaper to a black terminal and calling yourself a penetration tester.

# Part 3. Understanding the terminal

## 3.1 What is a terminal?

A terminal lets you interact with the operating system by typing commands instead of clicking buttons.

For example, instead of opening the file manager and clicking through folders, you can type:

```
pwd
```

The terminal sends your command to a shell, such as Bash, which interprets it and runs the appropriate program.

The basic flow is:

```
Student types command
        ↓
      Shell
        ↓
 Operating system
        ↓
      Result
```

## 3.2 First five commands

Have every student open a terminal and run these commands individually.

### Command 1: `whoami`

```
whoami
```

Purpose: Shows the username of the current user.

Possible output:

```
your-profile-name
```

Explain: "Before investigating a computer, we need to know which account we're using."

### Command 2: `pwd`

```
pwd
```

Purpose: Prints the current working directory.

Example output:

```
/home/Batman
```

Explain that `/home/student` is a location in the filesystem, similar to a folder path in Windows.

### Command 3: `ls`

```
ls
```

Purpose: Lists files and directories in the current directory.

Try:

```
ls -l
ls -a
ls -la
```

Explain:

- `ls`: list directory contents.
    
- `-l`: show a detailed listing.
    
- `-a`: include hidden files.
    
- `-la`: combine both options.
    

Linux hidden filenames usually begin with a dot, such as `.bashrc`.

### Command 4: `cd`

```
cd /tmp
pwd
```

Expected output from `pwd`:

```
/tmp
```

Return to your home directory:

```
cd ~
pwd
```

Explain these useful shortcuts:

|Command|Meaning|
|---|---|
|`cd ~`|Go to your home directory|
|`cd ..`|Go up one directory|
|`cd /`|Go to the filesystem root|
|`cd -`|Return to the previous directory|

### Command 5: `clear`

```
clear
```

Clears the terminal display. It does not delete files or erase command history.

Quick student check: Ask everyone to show their current username and working directory. They should use `whoami` and `pwd` without looking at the notes.

# Part 4. Understand the Linux filesystem

In Windows, students may be familiar with paths such as:

```
C:\Users\Student\Documents
```

Linux generally uses forward slashes:

```
/home/student/Documents
```

## 4.1 Important directories

Explain these directories using the following table.

|Directory|Purpose|
|---|---|
|`/`|Root of the filesystem|
|`/home`|Home directories for regular users|
|`/etc`|System and application configuration|
|`/var`|Variable data, including many logs|
|`/tmp`|Temporary files|
|`/usr`|Many programs, libraries, and shared resources|
|`/bin`|Essential command programs on many systems; may link to `/usr/bin`|
|`/opt`|Often used for additional software|
|`/root`|Home directory of the root administrator|

Do not make students memorize every directory immediately. They should understand the purpose of the most common ones.

### Practical: Explore the filesystem

Run:

```
cd /
ls
```

Ask students to identify `/home`, `/etc`, `/tmp`, and `/var`.

Now inspect configuration files:

```
ls /etc
```

Explain that `/etc` commonly contains configuration for services, networking, users, and other system components.

Next, inspect logs:

```
ls /var/log
```

Explain:

> Logs are records of events. During a security investigation, logs can help us understand what happened, when it happened, and which services were involved.

Some files and directories will be inaccessible to ordinary users. That is expected and provides a useful introduction to permissions.

# Part 5. Your first proper Linux practical

## Practical 1: Build a security investigation workspace

Objective: Create a directory structure for recording the results of a security investigation.
### Step 1: Go to the home directory

```
cd ~
```

### Step 2: Create the main directory

```
mkdir cyber-lab
```

`mkdir` means "make directory."

### Step 3: Enter the directory

```
cd cyber-lab
```

### Step 4: Create three subdirectories

```
mkdir notes evidence reports
```

The directory structure should now look like this:

```
cyber-lab/
├── notes/
├── evidence/
└── reports/
```

### Step 5: Create a notes file

```
touch notes/investigation.txt
```

`touch` creates an empty file if it does not already exist.

### Step 6: Add information to the file

```
echo "Session 2: Linux Investigation" > notes/investigation.txt
```

Now display the contents:

```
cat notes/investigation.txt
```

Expected output:

```
Session 2: Linux Investigation
```

Explain the `>` symbol: it redirects output into a file, replacing the file's previous contents.

By contrast:

```
echo "System inspection completed" >> notes/investigation.txt
```

The `>>` symbol appends text instead of replacing the existing contents.

Verify:

```
cat notes/investigation.txt
```

### Step 7: Copy the file

```
cp notes/investigation.txt evidence/
```

Check:

```
ls evidence
```

### Step 8: Rename a file

```
mv evidence/investigation.txt evidence/session2.txt
```

Check:

```
ls evidence
```

### Step 9: View the complete directory structure

```
find cyber-lab -type f
```

Run this from your home directory. If you're already inside `cyber-lab`, use:

```
find . -type f
```

What students have learned: directory navigation, file creation, writing text, reading files, copying files, renaming files, and searching a directory tree.

These are real skills used in security work. Evidence and reports are useless if you can't organize or retrieve them.

## Command reference

|Command|Purpose|
|---|---|
|`mkdir`|Create a directory|
|`touch`|Create an empty file|
|`echo`|Print text or redirect it into a file|
|`cat`|Display file contents|
|`cp`|Copy files|
|`mv`|Move or rename files|
|`find`|Search for files and directories|
|`rm`|Remove files|

Safety note: Avoid practising destructive commands such as `rm -rf` on important files or system directories. For this class, deletion exercises should use only disposable files created inside `cyber-lab`.

# Part 6. Linux users and permissions

This is where Linux starts becoming directly relevant to cybersecurity.

> If everyone could edit every file on a server, what would happen?

Possible answers:

- Anyone could change configuration.
- Users could delete important files.
- Private information could be exposed.
- An attacker with a normal account might cause greater damage.

Linux uses users, groups, and permissions to control access.

## 6.1 Users and groups

Run:

```
whoami
id
groups
```

Explain:

- `whoami` identifies the current username.
    
- `id` displays the user's UID, primary GID, and supplementary groups.
    
- `groups` lists the groups associated with the user.
    

A user may belong to several groups, allowing access to files or services shared with those groups.

## 6.2 Read file permissions

Run:

```
ls -l notes/investigation.txt
```

A sample listing might look like:

```
-rw-r--r-- 1 student student 62 Oct 12 10:00 notes/investigation.txt
```

Your output will differ. Explain the first ten characters:

```
-rw-r--r--
│└──┬──┘
│   └──── Permissions
└──────── File type indicator
```

Break down the permissions:

```
- rw- r-- r--
  │   │   │
  │   │   └── Others
  │   └────── Group
  └────────── Owner
```

The three permissions are:

- `r`: read
    
- `w`: write
    
- `x`: execute
    

The leading `-` indicates a regular file. A `d` indicates a directory.

For a regular file, `rw-r--r--` means:

- Owner: read and write.
    
- Group: read only.
    
- Others: read only.
    

This is a basic access-control mechanism.

## 6.3 Practical: Change permissions

Create a dedicated practice file:

```
cd ~/cyber-lab
touch permissions-demo.txt
chmod 600 permissions-demo.txt
ls -l permissions-demo.txt
```

Expected permissions:

```
-rw-------
```

Explain that `chmod` changes permissions.

The numeric system uses these values:

|Permission|Number|
|---|---|
|Read (`r`)|4|
|Write (`w`)|2|
|Execute (`x`)|1|

Numbers are added together for each permission group.

For example:

```
6 = 4 + 2 = read + write
7 = 4 + 2 + 1 = read + write + execute
5 = 4 + 1 = read + execute
```

Now try:

```
chmod 644 permissions-demo.txt
ls -l permissions-demo.txt
```

Expected permissions:

```
-rw-r--r--
```

Then restore restrictive permissions:

```
chmod 600 permissions-demo.txt
```

### Challenge: Interpret the permissions

Ask students to explain these modes without looking at the table:

|Mode|Meaning|
|---|---|
|`600`|Owner reads/writes; group and others have no permissions|
|`644`|Owner reads/writes; group and others read|
|`755`|Owner has all permissions; group and others read/execute|

Important distinction: directory permissions have additional effects. Read permission allows listing names, execute permission allows traversing the directory, and write permission generally allows creating, removing, or renaming entries subject to other controls.

## 6.4 What is `sudo`?

`sudo` allows an authorized user to run a command with elevated privileges according to the system's configuration.

Example:

```
sudo -l
```

This asks which commands the current user is permitted to run through `sudo`. It may request authentication, or the user may not be permitted to use it.

Explain:

> Never run commands with administrator privileges just because a tutorial tells you to. First understand what the command does.

For today's lab, students do not need to modify system files or become root.

# Part 7. Processes and running services

## 7.1 What is a process?

A process is a running instance of a program.

For example, when you open a browser, the operating system runs one or more browser processes.


> If malware runs on a computer, where can we start looking to understand what is happening?

One useful starting point is to inspect running processes. This alone won't identify all malware, but it helps us understand what is running.

### Commands to demonstrate

```
ps
```

Shows processes associated with the current terminal.

```
ps aux
```

Shows a broader list of processes.

```
top
```

Displays a live view of processes and resource usage. Press `q` to exit.

Explain the terms:

- PID: Process ID, a number assigned to a process.
    
- CPU: Processing resources used by a process.
    
- Memory: RAM used by a process.
    
- Command: Program or command associated with the process.
    

### Student task

Ask students to run:

```
ps aux
```

Have them identify three processes and note their names and PIDs.

Do not ask them to kill random processes. Terminating system processes without understanding their purpose is an excellent way to turn a perfectly good class into a troubleshooting workshop.

## 7.2 What is a service?

A service is a program that provides functionality to other programs or users, often in the background.

Examples include:
- A web server
- An SSH server
- A database server
- A printing service

Some services listen for network connections; others perform background tasks without listening on a network port.

### Practical: Inspect services

Run:

```
systemctl --type=service --state=running
```

This lists running services managed by systemd, where applicable.

To check one specific service:

```
systemctl status ssh
```

The service may instead be named `sshd`, or it may not be installed. That is normal. The command is an example, not a promise that every Linux machine has an SSH server.

**What is a Daemon?**

A **daemon** (pronounced _"demon"_ or _"day-mon"_) is a **background process that runs continuously** without any direct user interaction.

- **How it works:** It starts up silently, usually when the system boots, and sits in the background waiting for a specific task or request to arrive.
- **The Analogy:** Think of a daemon like a **refrigerator**. It runs quietly in the background 24/7. You don't actively interact with its engine, but it is always there, waiting to keep things cold the moment you put food in.
- **Naming Convention:** In Linux, daemons almost always end with the letter **"d"** (e.g., `sshd` for the SSH daemon, `httpd` for the Apache HTTP daemon, `syslogd` for system logging).

---

**What is systemctl?**

`systemctl` is the **command-line tool used to control and manage daemons** and services. It is the central control panel for **systemd**, which is the primary system and service manager in modern Linux operating systems.

- **How it works:** You use `systemctl` to tell daemons exactly what to do—whether to start, stop, restart, enable at boot, or show their current status.
- **The Analogy:** If a daemon is the refrigerator, `systemctl` is the **thermostat dial or the power switch** on the wall. It is the tool _you_ use to turn the appliance on, off, or check if it’s running correctly.

---

**How They Work Together**

When you ran your previous command:

bash

```
systemctl status sshd
```

Use code with caution.

You used **`systemctl`** (the tool) to ask for the **`status`** (the action) of **`sshd`** (the background daemon that listens for remote login connections).

Quick Command Guide

|What you want to do|The `systemctl` command|
|---|---|
|**Check** if a daemon is running|`systemctl status <daemon_name>`|
|**Start** a daemon right now|`sudo systemctl start <daemon_name>`|
|**Stop** a daemon right now|`sudo systemctl stop <daemon_name>`|
|Make a daemon start **automatically on boot**|`sudo systemctl enable <daemon_name>`|

If the service is absent, explain the difference between a service that is not installed and one that is installed but stopped.

Teaching point: A running service is not automatically a vulnerability. Its purpose, exposure, configuration, and security matter.

# Part 8. Basic networking inspection

Session 1 introduced IP addresses and listening ports. Now students will practise finding that information themselves.

## 8.1 Find your IP address

Run:

```
ip addr
```

Ask students to identify:

- Interface name
    
- IP address
    
- Whether the interface is active
    

Common interface names include `eth0`, `wlan0`, `enp...`, and `wlp...`. Names vary across systems.

An address beginning with `127.0.0.1` is the IPv4 loopback address. It refers to the local machine, not another computer on the network.

## 8.2 Check listening ports

Run:

```
ss -tuln
```

Break down the options:

|Option|Meaning|
|---|---|
|`-t`|TCP sockets|
|`-u`|UDP sockets|
|`-l`|Listening sockets|
|`-n`|Numeric addresses and ports|

A sample TCP listening entry might include:

```
127.0.0.1:8080
```

Explain that this service is bound to the loopback address, so it is listening locally rather than on every network interface.

Compare that with:

```
0.0.0.0:8080
```

For IPv4, this usually means the service is listening on all local IPv4 interfaces. Whether other machines can actually reach it depends on the firewall, network configuration, and other controls.

**Question: Which service is safer: one listening only on `127.0.0.1`, or one listening on `0.0.0.0`?**

Answer: A service bound to `127.0.0.1` is generally less exposed to remote network connections. However, safety still depends on the application and local security. Binding to `0.0.0.0` is not automatically a vulnerability either.

## 8.3 Check network connectivity
The **`unset ping` command checks if a remote device or website is online and reachable** by sending small packets of data and measuring how long they take to return. It uses the Internet Control Message Protocol (ICMP).

- **When to use:** To test basic internet connectivity or see if a specific server is up.
- **Example:** Check if your system can reach Google's servers.
    
    bash
    
    ```
      ping -c 4 google.com
    ```
    
    Use code with caution.
    
    _(The `-c 4` flag tells it to stop after sending 4 packets; on Linux, ping will run forever until you press `Ctrl + C` if you don't limit it)._

Run:

```
ping -c 4 127.0.0.1
```

This tests connectivity to the local loopback interface.

Then, if internet access is available:

```
ping -c 4 1.1.1.1
```

Explain that a failed ping does not necessarily mean the internet is unavailable. Firewalls and network policies may block ICMP.

If students have connectivity, they can also try:

```
curl -I https://example.com
```

This requests HTTP response headers from a public website. It is a connectivity demonstration, not a penetration test.
The **`unset nslookup` command queries Domain Name System (DNS) servers to find the IP address associated with a domain name**, acting like a digital phonebook lookup.

- **When to use:** To troubleshoot DNS issues (e.g., when a website won't load but its raw IP address works).
- **Example:** Find the IP address of Wikipedia.
    
    bash
    
    ```
    nslookup wikipedia.org
    ```
    
    Use code with caution.
    

_Output will display both the DNS server used for the query and the target domain's IP addresses.

The **`unset curl` command transfers data to or from a server using various protocols (like HTTP, HTTPS, FTP)**, allowing you to interact with websites directly from the terminal without a web browser.

- **When to use:** To download files, fetch website HTML source code, or test API endpoints.
- **Example 1:** View the raw HTML source of a website.

    bash

    ```
    curl https://example.com
    ```

- **Example 2:** Download a file from the web and save it with a specific name.

    bash
    ```
    curl -o document.pdf https://example.com
    ```

---

**Core Network Configuration Commands**

Linux systems rely on specific utilities to inspect local network configurations, adapters, and active connections.

**ip a (or ip address)**

The **`unset ip a` command displays all network interfaces (Wi-Fi, Ethernet, Loopback) along with their assigned IP addresses** on your local machine. It replaced the older `ifconfig` command.

- **When to use:** To find your machine's local IP address or check if your network card is connected.
- **Example:**
    
    bash
    
    ```
    ip a
    ```
    
    Use code with caution.
    
    _Look for sections labeled `eth0` (Ethernet) or `wlan0` (Wi-Fi) to find your local network IP next to the word `inet`._

 **ss (Socket Statistics)**

The **`unset ss` command shows active network connections and listening ports** on your machine, replacing the deprecated `netstat` tool.

- **When to use:** To discover what ports are open or what background applications are communicating over the network.
- **Example:** View all active TCP connections alongside the application names using them.
    
    bash
    
    ```
    sudo ss -tulpn
    ```
    
    Use code with caution.
    

 **traceroute**

The **`unset traceroute` command maps out the exact path data packets take to reach a destination**, listing every router (hop) they pass along the way.

- **When to use:** To isolate exactly where a connection drops or slows down between your computer and a remote server.
- **Example:** Trace the path to Cloudflare's DNS server.
    
    bash
    
    ```
    traceroute 1.1.1.1
    ```
    
    Use code with caution.

---

Summary Reference Table

|Command|Primary Purpose|Real-world Analogy|
|---|---|---|
|**`ping`**|Tests end-to-end network connectivity.|Knocking on a door to see if anyone answers.|
|**`nslookup`**|Looks up the IP address of a domain name.|Looking up a business name in a phonebook to find their number.|
|**`curl`**|Downloads web content or files.|Asking someone to fetch a specific document from an office.|
|**`ip a`**|Shows local IP and hardware address configurations.|Checking your own home mailing address.|
|**`ss`**|Monitors open network ports and active connections.|Checking which doors and windows in your house are currently unlocked.|
|**`traceroute`**|Maps the path of a connection.|Reviewing a turn-by-turn road trip itinerary across checkpoints.|
# Part 9. Main practical: Investigate your own Linux machine

This is the main activity of the session. Students should collect evidence, interpret results, and write a short report.

## Lab 1: Linux Security Baseline

Recommended duration: 20–25 minutes

Objective: Collect basic system, user, filesystem, process, and network information from a machine you own or are authorized to inspect.

Rules: Do not scan other machines, attempt password attacks, change system configuration, or access files without permission.

## Step 1: Create your investigation directory

The `-p` option creates parent directories when needed and avoids an error if the directory already exists.

## Step 2: Record the username

View the result:

## Step 3: Record system information

Ask students what the output tells