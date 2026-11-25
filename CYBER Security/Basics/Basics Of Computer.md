
---

# 📚 Complete Computer & Linux Notes

**Table of Contents**
1. [Chapter 1 – Computer Fundamentals](#chapter-1--computer-fundamentals)
2. [Chapter 2 – Operating Systems & Installation](#chapter-2--operating-systems--installation)
3. [Chapter 3 – Basic Linux Commands](#chapter-3--basic-linux-commands)
4. [Chapter 4 – Text Editors: vi, vim, nano](#chapter-4--text-editors-vi-vim-nano)
5. [Chapter 5 – Advanced Linux Commands](#chapter-5--advanced-linux-commands)
6. [Chapter 6 – Shell Scripting](#chapter-6--shell-scripting)
7. [Appendix – Quick Revision Cheat Sheet](#appendix--quick-revision-cheat-sheet)

---

# Chapter 1 – Computer Fundamentals

## 1.1 What is a Computer?

A **computer** is an electronic device that accepts data (**input**), processes it according to instructions (**processing**), produces meaningful results (**output**), and stores them (**storage**) for future use.

**IPOS Cycle:**

```
  INPUT  →  PROCESS  →  OUTPUT
 (data)    (CPU)      (result)
              ↕
           STORAGE
```

## 1.2 Characteristics of Computers

| Characteristic | Meaning |
|---|---|
| **Speed** | Performs billions of operations per second (measured in GHz / FLOPS) |
| **Accuracy** | 100% accurate; errors occur only due to wrong input (**GIGO – Garbage In, Garbage Out**) |
| **Storage** | Can store huge amounts of data permanently |
| **Diligence** | Never gets tired; works continuously without loss of concentration |
| **Versatility** | Can do many different types of tasks (accounting, gaming, designing...) |
| **Automation** | Works automatically once instructed |
| **No IQ / No feelings** | Cannot think or decide on its own; only follows instructions |

## 1.3 Block Diagram of a Computer

```
                 ┌──────────────────────────────┐
                 │            CPU               │
 INPUT ───────►  │  ┌────┐  ┌─────┐  ┌───────┐  │  ──────►  OUTPUT
 (keyboard,      │  │ CU │  │ ALU │  │Registers│ │        (monitor,
  mouse...)      │  └────┘  └─────┘  └───────┘  │         printer...)
                 └──────────────┬───────────────┘
                                ↕
                       ┌────────────────┐
                       │     MEMORY     │
                       │ Primary + Sec. │
                       └────────────────┘
```

- **Input Unit** – takes data & instructions from user (keyboard, mouse, scanner, mic).
- **CPU (Central Processing Unit)** – the "brain":
  - **ALU (Arithmetic Logic Unit)** – performs arithmetic (+, −, ×, ÷) and logical (>, <, =, AND/OR) operations.
  - **CU (Control Unit)** – controls and coordinates all units; fetches, decodes, executes instructions.
  - **Registers / Cache** – very fast, small temporary storage inside the CPU.
- **Memory Unit** – stores data, instructions, and results (primary + secondary).
- **Output Unit** – presents processed data (monitor, printer, speakers).

## 1.4 Classification of Computers

### (a) Based on data handling

| Type | Description | Example |
|---|---|---|
| **Analog** | Works on continuous physical values (voltage, temperature) | Thermometer, speedometer |
| **Digital** | Works on binary digits (0 and 1) | PC, laptop, calculator |
| **Hybrid** | Combines both analog + digital | ICU medical machines, petrol pumps |

### (b) Based on size & power

| Type | Description | Example |
|---|---|---|
| **Supercomputer** | Fastest, most expensive; scientific research, weather forecasting | PARAM, Fugaku |
| **Mainframe** | Large orgs; supports thousands of users simultaneously | Banking systems, IBM Z |
| **Minicomputer** | Mid-size; supports hundreds of users | Small servers |
| **Microcomputer** | Single-user personal computer | Desktop, laptop, tablet |

### (c) Based on purpose
- **General purpose** – can perform many tasks (normal PC).
- **Special purpose** – built for one specific task (washing machine controller, ATM).

## 1.5 Units of Memory

| Unit | Value |
|---|---|
| Bit | 0 or 1 (smallest unit) |
| Nibble | 4 bits |
| **Byte** | 8 bits (1 character) |
| Kilobyte (KB) | 1024 Bytes |
| Megabyte (MB) | 1024 KB |
| Gigabyte (GB) | 1024 MB |
| Terabyte (TB) | 1024 GB |
| Petabyte (PB) | 1024 TB |
| Exabyte (EB) | 1024 PB |
| Zettabyte (ZB) | 1024 EB |
| Yottabyte (YB) | 1024 ZB |

> 💡 Manufacturers sometimes use 1 KB = 1000 bytes (decimal), while operating systems use 1 KB = 1024 bytes (binary). This is why a "500 GB" disk shows ~465 GB in the OS.

## 1.6 Hardware Components

**Hardware** = all physical, touchable parts of a computer.

| Component | Function |
|---|---|
| **Motherboard** | Main circuit board connecting all components |
| **CPU / Processor** | Executes instructions; speed in GHz; modern CPUs have multiple **cores** |
| **RAM (Random Access Memory)** | Primary/volatile memory; temporary working space; data lost on power off |
| **ROM (Read Only Memory)** | Non-volatile; stores firmware/BIOS instructions |
| **HDD (Hard Disk Drive)** | Secondary storage; magnetic platters; slower, cheaper |
| **SSD (Solid State Drive)** | Flash storage; faster, silent, costlier |
| **GPU (Graphics Card)** | Processes images/video; also used for AI |
| **SMPS / PSU** | Converts AC mains into regulated DC power |
| **NIC (Network Interface Card)** | Connects computer to a network (Ethernet/Wi-Fi) |

### HDD vs SSD

| Feature | HDD | SSD |
|---|---|---|
| Technology | Magnetic platters + spinning head | Flash memory (no moving parts) |
| Speed | Slow (~100 MB/s) | Very fast (500–7000 MB/s) |
| Durability | Fragile (moving parts) | Shock-resistant |
| Cost | Cheaper per GB | Costlier per GB |
| Noise | Yes | None |

### Input Devices
Keyboard, mouse, scanner, microphone, webcam, joystick, barcode reader, touch screen, OMR/OCR readers.

### Output Devices
Monitor, printer, plotter, speaker, projector.

**Softcopy output** (monitor) vs **Hardcopy output** (printer).

## 1.7 Software

**Software** = set of programs/instructions that tells hardware what to do. It is *intangible*.

```
                        SOFTWARE
                       /        \
          SYSTEM SOFTWARE        APPLICATION SOFTWARE
         /    |      |     \          /           \
      OS   Drivers Utilities Translators  General-purpose   Tailor-made
                                              (MS Word,      (custom payroll
                                               browsers)      software)
```

### (a) System Software
Controls and manages hardware; provides platform for other software.

- **Operating System** – Windows, Linux, macOS, Android.
- **Device Drivers** – let the OS talk to hardware (printer driver, graphics driver).
- **Firmware** – software embedded in hardware (BIOS/UEFI).
- **Utility Programs** – antivirus, disk cleanup, backup tools, compression tools.
- **Language Translators**:
  - **Assembler** – assembly → machine code.
  - **Compiler** – whole high-level program → machine code at once (C, C++). Fast execution; shows all errors together.
  - **Interpreter** – translates & executes line by line (Python, JavaScript). Easier debugging; slower.

### (b) Application Software
Helps the user perform a specific task.

| Type | Description | Example |
|---|---|---|
| General purpose (packaged) | Made for many users | MS Word, Chrome, Photoshop |
| Tailor-made (custom) | Made for one organisation | Railway reservation software |
| Utility software | Maintains/manages the computer | WinRAR, McAfee |

## 1.8 Hardware vs Software

| Hardware | Software |
|---|---|
| Physical parts | Set of instructions |
| Can be touched | Cannot be touched |
| Made by manufacturers | Developed by programmers |
| Gets damaged physically | Gets corrupted / has bugs |
| Example: CPU, RAM, keyboard | Example: Windows, MS Office |

## 1.9 Applications of Computers

- **Education** – e-learning, online exams, digital libraries.
- **Banking & Finance** – ATMs, online transactions, UPI.
- **Healthcare** – CT/MRI scans, patient records, robotic surgery.
- **Business** – billing, payroll, e-commerce, email.
- **Science & Engineering** – simulations, research, CAD.
- **Government** – Aadhaar, tax filing, e-governance.
- **Entertainment** – gaming, streaming, VFX.
- **Communication** – email, video calls, social media.
- **Weather forecasting, defence, railways, air traffic control...**

## 1.10 Number Systems (Quick Reference)

| System | Base | Digits | Example |
|---|---|---|---|
| Binary | 2 | 0, 1 | 11001 |
| Octal | 8 | 0–7 | 31 |
| Decimal | 10 | 0–9 | 25 |
| Hexadecimal | 16 | 0–9, A–F | 19 |

**Decimal → Binary** (divide by 2, read remainders bottom-up):
```
25 ÷ 2 = 12 R1
12 ÷ 2 = 6  R0
 6 ÷ 2 = 3  R0
 3 ÷ 2 = 1  R1
 1 ÷ 2 = 0  R1     →  (25)₁₀ = (11001)₂
```

**Binary → Decimal** (multiply each bit by powers of 2):
```
1011₂ = 1×8 + 0×4 + 1×2 + 1×1 = 11₁₀
```

---

# Chapter 2 – Operating Systems & Installation

## 2.1 What is an Operating System?

An **Operating System (OS)** is system software that acts as an **interface between the user and the computer hardware**, and manages all hardware and software resources.

```
   User  →  Application Programs  →  OPERATING SYSTEM  →  Hardware
```

> Without an OS, the computer is just dead hardware.

## 2.2 Functions of an Operating System

| Function | What it does |
|---|---|
| **Process Management** | Creates, schedules, and terminates processes; handles multitasking and CPU scheduling |
| **Memory Management** | Allocates/deallocates RAM; virtual memory; keeps track of used/free memory |
| **File Management** | Creates/reads/writes/deletes files & folders; maintains file system |
| **Device Management** | Controls I/O devices through drivers |
| **Security & Protection** | User authentication, permissions, protects data from unauthorized access |
| **User Interface** | Provides CLI (Command Line Interface) and/or GUI |
| **Error Handling** | Detects and reports errors |
| **Resource Allocation** | Shares CPU, memory, devices among programs |

## 2.3 Main Components of an OS

1. **Kernel** – the heart/core of the OS; directly interacts with hardware; manages memory, CPU, devices.
2. **Shell** – the outer layer; takes commands from the user and gives them to the kernel (CLI = bash, GUI = Explorer/Nautilus).
3. **File System** – organizes data on disk (NTFS, ext4, FAT32).
4. **System Libraries & Utilities** – helper programs/functions used by applications.

```
   User
    ↓
 Applications
    ↓
  Shell  ← (user commands)
    ↓
  Kernel  ← (manages hardware)
    ↓
 Hardware
```

## 2.4 Types of Operating Systems

| Type | Description | Example/Use |
|---|---|---|
| **Batch OS** | Jobs grouped in batches; no user interaction | Old payroll systems |
| **Multiprogramming OS** | Many programs kept in memory; CPU switches when one waits for I/O | Mainframes |
| **Time-sharing / Multitasking OS** | CPU time sliced among many users/tasks | Windows, Linux |
| **Real-time OS (RTOS)** | Responds within strict time limits | Airbags, missile systems, pacemakers |
| **Distributed OS** | Many networked computers work as one system | Clusters |
| **Network OS** | Server OS managing clients, resources, sharing | Windows Server, Linux server |
| **Embedded OS** | Built into devices with limited resources | Smart watches, routers, IoT |
| **Mobile OS** | Optimized for touch devices | Android, iOS |

**Single-user vs Multi-user:** Windows 10 Home = single user at a time; Linux servers = many users log in simultaneously via SSH.

## 2.5 Popular Operating Systems

| OS | Kernel | Type | Notes |
|---|---|---|---|
| Windows | NT | GUI, proprietary | Most used on desktops |
| Linux | Linux kernel | Open source (GPL) | Powers servers, Android, supercomputers |
| macOS | XNU (Darwin) | Proprietary, Apple | Based on UNIX |
| Android | Linux kernel | Mobile, open source | Most used OS in the world |
| UNIX | Proprietary/variants | Multi-user | Father of Linux & macOS |

## 2.6 How a Computer Boots (Boot Process)

```
Power ON → POST → BIOS/UEFI loads Bootloader → Bootloader loads OS Kernel → OS starts → Login screen
```

1. **POST (Power-On Self Test)** – hardware check (RAM, keyboard, disks).
2. **BIOS / UEFI** – firmware that finds the boot device:
   - **BIOS (Legacy)** – old standard, reads boot code from **MBR**.
   - **UEFI (modern)** – faster, supports drives > 2 TB, secure boot, uses **GPT**.
3. **Bootloader** – loads the OS kernel (Windows Boot Manager, **GRUB** for Linux).
4. **Kernel initialization** – kernel loads drivers, mounts root file system.
5. **Init/Systemd** – starts background services, then login/display manager.

### MBR vs GPT

| Feature | MBR (Master Boot Record) | GPT (GUID Partition Table) |
|---|---|---|
| Max disk size | 2 TB | 9.4 ZB (practically unlimited) |
| Max partitions | 4 primary | 128 |
| Works with | BIOS | UEFI |
| Redundancy | None | Has backup partition table |

## 2.7 Ways to Install / Use an OS

1. **Bare metal installation** – directly on the hard disk (replaces or joins existing OS).
2. **Dual boot** – two OS on one machine; choose at startup via GRUB menu.
3. **Virtual Machine (VM)** – run a guest OS inside your current OS using **VirtualBox / VMware / Hyper-V**. ✅ *Best & safest way to practice Linux.*
4. **Live USB** – boot and try Linux without installing (made with Rufus / balenaEtcher).
5. **WSL (Windows Subsystem for Linux)** – run a Linux terminal inside Windows 10/11: `wsl --install`.

## 2.8 Step-by-Step Linux (Ubuntu) Installation

**Requirements:** 4 GB+ RAM, 25 GB+ free disk, 4 GB+ bootable USB.

**Steps:**

1. Download the ISO from `ubuntu.com/download`.
2. Create a bootable USB with **Rufus** (Windows) or `dd` / Startup Disk Creator.
3. Boot from USB: press boot-menu key (**F12/F9/Esc/Del** depending on vendor) → select USB.
4. Choose **"Install Ubuntu"**.
5. Select language, keyboard layout.
6. Choose network connection.
7. **Installation type:**
   - *Erase disk and install* → simplest, wipes disk.
   - *Install alongside (dual boot)* → shrinks Windows, keeps both.
   - *Something else* → manual partitioning (see below).
8. Set location & time zone.
9. Create user: name, computer name, username, password.
10. Install → reboot → remove USB → login.

### Manual Partitioning (Something else)

| Mount Point | Purpose | Suggested Size |
|---|---|---|
| `/boot/efi` | EFI boot files (UEFI systems) | 512 MB |
| `/` (root) | OS + programs | 30–50 GB |
| `swap` | Virtual memory (extends RAM) | ≈ RAM size (or less) |
| `/home` | User files & settings | Remaining space |

## 2.9 After Installation (Must-Do Steps)

```bash
sudo apt update            # refresh package list
sudo apt upgrade           # upgrade installed packages
sudo apt install build-essential curl git vim  # common tools
```

> 💡 **VirtualBox quick setup (for practice):** New VM → Type: Linux, Version: Ubuntu 64-bit → RAM: 4 GB → Disk: 25 GB (dynamically allocated) → Attach Ubuntu ISO in Settings → Storage → Start → install as above.

---

# Chapter 3 – Basic Linux Commands

## 3.1 Introduction to Linux

- **Linux** is a free, open-source, UNIX-like operating system.
- Created by **Linus Torvalds in 1991**; kernel + GNU tools + desktop environment = a complete OS.
- **Open source** → source code is freely available, modifiable, distributable.

### Linux Distributions (Distros)

| Distro | Based on | Package manager | Use |
|---|---|---|---|
| Ubuntu | Debian | apt | Beginners, desktop |
| Debian | – | apt | Stable servers |
| Fedora | – | dnf | Latest tech, RedHat testing |
| RHEL / CentOS / Rocky | – | yum/dnf | Enterprise servers |
| Kali | Debian | apt | Security & penetration testing |
| Mint | Ubuntu/Debian | apt | Windows-like desktop |

## 3.2 The Shell & Terminal

- **Terminal** = window where you type commands.
- **Shell** = program inside the terminal that interprets them (default: **bash**).

**Prompt anatomy:**
```
dev@ubuntu:~$ 
│    │     │ │
user host ~ $  → ~ = home directory,  $ = normal user
                 # = root (admin) user
```

### Useful Terminal Shortcuts

| Keys | Action |
|---|---|
| `Tab` | Auto-complete command/file names |
| `Ctrl + C` | Kill current command |
| `Ctrl + L` | Clear screen (same as `clear`) |
| `Ctrl + D` | Exit terminal / send EOF |
| `Ctrl + R` | Search command history |
| `Ctrl + A / E` | Move to start / end of line |
| `↑ / ↓` | Previous / next command |
| `Ctrl + U / K` | Delete before / after cursor |

## 3.3 Linux File System Hierarchy (Directory Structure)

Everything starts from `/` (root). There are no drive letters like `C:`.

| Directory | Contents |
|---|---|
| `/` | Root of the entire file system |
| `/bin` | Essential user binaries (ls, cp, cat) |
| `/sbin` | System binaries (admin commands, fdisk) |
| `/etc` | Configuration files (e.g., `/etc/passwd`) |
| `/home` | Personal directories of normal users (`/home/dev`) |
| `/root` | Home of the root/admin user |
| `/boot` | Boot loader & kernel files |
| `/dev` | Device files (`/dev/sda` = disk) |
| `/lib` | Shared libraries |
| `/media`, `/mnt` | Mount points for USB/disks |
| `/opt` | Optional/third-party software |
| `/tmp` | Temporary files (cleared on reboot) |
| `/usr` | User programs & libraries |
| `/var` | Variable data: logs (`/var/log`), mail, cache |
| `/proc` | Virtual FS with process/system info |

## 3.4 Navigation Commands

### `pwd` – Print Working Directory
```bash
$ pwd
/home/dev
```

### `cd` – Change Directory
```bash
cd /home/dev/Documents   # absolute path (starts from /)
cd Downloads             # relative path (from current dir)
cd ..                    # go up one level
cd ../..                 # go up two levels
cd ~        or  cd       # go to home directory
cd -                     # go to previous directory
```

> **Absolute path** starts from `/` (full address). **Relative path** starts from current location.

### `ls` – List files

| Command | Meaning |
|---|---|
| `ls` | List files in current dir |
| `ls -l` | Long listing (details, permissions) |
| `ls -a` | Show hidden files (starting with `.`) |
| `ls -lh` | Human-readable sizes (KB, MB) |
| `ls -R` | Recursive (subdirectories too) |
| `ls -ltr` | Sort by time, oldest first |
| `ls /etc` | List another directory |

**Reading `ls -l` output:**
```
-rw-r--r--  1 dev dev  4096 Jan 10 14:22 notes.txt
│└─┘└─┘└─┘   │  │   │   │    └── time     └── name
│ owner group other│ owner group size
└ file type: - file, d directory, l link
```

## 3.5 File & Directory Commands

### `touch` – create empty file(s) / update timestamp
```bash
touch file1.txt
touch a.txt b.txt c.txt
```

### `mkdir` – make directory
```bash
mkdir mydir
mkdir -p parent/child/grandchild   # create nested dirs in one go
```

### `rmdir` – remove *empty* directory
```bash
rmdir emptydir
```

### `cp` – copy
```bash
cp source.txt dest.txt          # copy file
cp file1 file2 /backup/         # copy multiple into dir
cp -r dir1 dir2                 # copy directory recursively
cp -i file.txt /tmp/            # ask before overwriting
```

### `mv` – move / rename
```bash
mv oldname.txt newname.txt      # rename
mv file.txt /home/dev/          # move to another dir
mv -i a.txt b.txt               # confirm before overwrite
```

### `rm` – remove ⚠️
```bash
rm file.txt
rm -i file.txt      # ask before deleting
rm -r mydir         # delete directory + contents
rm -f file.txt      # force, no prompt
rm -rf dir          # ⚠️ delete forcefully & recursively (dangerous!)
```

> ⚠️ There is **no recycle bin** in the Linux terminal. `rm -rf /` will destroy the system.

## 3.6 Viewing File Contents

### `cat` – display / create / concatenate
```bash
cat file.txt              # show whole file
cat > note.txt            # create file, type text, Ctrl+D to save
cat f1.txt f2.txt > merged.txt   # join files
cat -n file.txt           # show with line numbers
```

### `head` / `tail` – beginning / end of file
```bash
head file.txt             # first 10 lines
head -5 file.txt          # first 5 lines
tail file.txt             # last 10 lines
tail -3 file.txt          # last 3 lines
tail -f /var/log/syslog   # follow file live (great for logs)
```

### `more` / `less` – page-by-page viewing
```bash
less bigfile.log          # scroll with ↑↓, PgUp/PgDn
                          # /word = search,  q = quit
```
> `less` is more powerful than `more` (can scroll both ways) — hence the joke *"less is more"*.

### `wc` – word count
```bash
wc file.txt          # lines  words  chars  filename
wc -l file.txt       # count lines only
wc -w file.txt       # words
```

## 3.7 System Information Commands

```bash
whoami          # current username
who             # who is logged in
w               # who + what they are doing
id              # user id, group id, groups
uname           # kernel name
uname -a        # full system info (kernel, hostname, arch)
hostname        # computer name
uptime          # how long system has been running + load
date            # current date & time
date +%d-%m-%Y  # custom format e.g. 10-01-2026
cal             # calendar of current month
cal 2026        # full year calendar
```

## 3.8 Help & Miscellaneous

```bash
man ls               # manual page (press q to quit)
ls --help            # short help
whatis cp            # one-line description
history              # list previously used commands
history 10           # last 10 commands
!!                   # repeat last command
clear                # clear screen
exit                 # close terminal / logout
echo "Hello World"   # print text
echo $HOME           # print value of a variable → /home/dev

alias ll='ls -l'     # create shortcut for a command
unalias ll           # remove alias

which python3        # path of a command's executable
file notes.txt       # tells the file type
```

---

# Chapter 4 – Text Editors: vi, vim, nano

## 4.1 Overview

| Editor | Type | Notes |
|---|---|---|
| **vi** | Modal, present on EVERY Linux system | Must-know for sysadmins |
| **vim** | "Vi IMproved" – vi with colors, plugins, undo levels | Default in most distros |
| **nano** | Simple, mode-less, beginner friendly | Perfect for quick edits |

```bash
sudo apt install vim nano     # if not installed
vim file.txt
nano file.txt
```

## 4.2 vi/vim – The Three Modes

```
                    i, a, o, ...
   ┌──────────────────────────────►
   │   INSERT MODE                      COMMAND MODE
   │   (type text)                 ◄── (Esc)  default mode
   │                                     │
   │                                     │ type  :
   ▼                                     ▼
                              LAST-LINE (EX) MODE
                              :w  :q  :wq  :q!  :%s/...
```

- **Command (Normal) mode** – default; every key is a command (navigate, delete, copy).
- **Insert mode** – actually type text; press `Esc` to return to command mode.
- **Last-line (Ex) mode** – press `:` to enter; used to save/quit/replace.

> 🧠 Golden rule: **Lost in vim? Press `Esc` twice.**

## 4.3 Opening & Saving / Quitting (Last-line commands)

| Command | Action |
|---|---|
| `vim file.txt` | Open/create file |
| `:w` | Save (write) |
| `:q` | Quit |
| `:wq` or `:x` or `ZZ` | Save and quit |
| `:q!` | Quit **without** saving |
| `:w filename` | Save as new name |
| `:w !sudo tee %` | Save a file opened without sudo 😉 |

## 4.4 Entering Insert Mode

| Key | Action |
|---|---|
| `i` | Insert **before** cursor |
| `a` | Insert **after** cursor |
| `I` | Insert at **beginning of line** |
| `A` | Insert at **end of line** |
| `o` | Open a new line **below** current line |
| `O` | Open a new line **above** current line |
| `r` | Replace single character |
| `R` | Replace mode (overwrite until Esc) |

## 4.5 Navigation (Command mode)

| Key | Action |
|---|---|
| `h` `j` `k` `l` | Left, down, up, right |
| Arrow keys | Also work |
| `0` / `^` | Start of line |
| `$` | End of line |
| `w` / `b` | Next / previous word |
| `gg` | Go to first line |
| `G` | Go to last line |
| `nG` (e.g. `5G`) | Go to line 5 |
| `Ctrl+f` / `Ctrl+b` | Page down / page up |

## 4.6 Editing, Delete, Copy, Paste

| Key | Action |
|---|---|
| `x` | Delete character at cursor |
| `dd` | Delete (cut) entire line |
| `3dd` | Delete 3 lines |
| `dw` | Delete word |
| `d$` | Delete to end of line |
| `yy` | Copy (yank) line |
| `3yy` | Copy 3 lines |
| `p` / `P` | Paste below / above |
| `u` | Undo |
| `Ctrl + r` | Redo |
| `. ` | Repeat last change |

## 4.7 Search & Replace

| Command | Action |
|---|---|
| `/word` | Search forward (press `n` = next, `N` = previous) |
| `?word` | Search backward |
| `:s/old/new/` | Replace first match **in current line** |
| `:s/old/new/g` | Replace all in current line |
| `:%s/old/new/g` | Replace in **whole file** |
| `:%s/old/new/gc` | Replace in whole file **with confirmation** |

## 4.8 Useful vim Settings

```
:set number          " show line numbers
:set nonumber        " hide them
:set hlsearch        " highlight search results
:syntax on           " syntax colors
```
Save favorite settings in `~/.vimrc`.

## 4.9 nano Editor

nano has **no modes** — just type directly. Shortcuts are shown at the bottom; `^` means **Ctrl**.

| Shortcut | Action |
|---|---|
| `nano file.txt` | Open/create file |
| `Ctrl + O` → Enter | Save |
| `Ctrl + X` | Exit (asks to save if changed) |
| `Ctrl + K` | Cut line |
| `Ctrl + U` | Paste line |
| `Alt + 6` | Copy line |
| `Ctrl + W` | Search |
| `Ctrl + \` | Search & replace |
| `Ctrl + G` | Help |
| `Ctrl + C` | Show cursor line number |
| `Ctrl + _` | Go to line number |
| `Ctrl + Z` | Undo |

**nano workflow example:**
```bash
nano hello.txt
# type: Hello Linux
# Ctrl+O, Enter  (save)
# Ctrl+X         (exit)
```

## 4.10 vim vs nano

| Feature | vim | nano |
|---|---|---|
| Modes | Yes (3 modes) | No modes |
| Learning curve | Steep | Very easy |
| Power | Huge (macros, splits, plugins) | Basic editing |
| Availability | Almost every system | Most modern distros |
| Best for | Power users, servers | Beginners, quick edits |

**Mini practice:** run `vim practice.txt`, type 3 lines, delete one, undo it, search a word, replace a word, then `:wq`.

---

# Chapter 5 – Advanced Linux Commands

## 5.1 Wildcards (Glob Patterns)

| Pattern | Meaning | Example |
|---|---|---|
| `*` | Any number of any characters | `ls *.txt` |
| `?` | Exactly one character | `ls file?.txt` |
| `[abc]` | One char from the set | `ls file[12].txt` |
| `[a-z]` | Range of characters | `ls [a-c]*.sh` |
| `[!a]` | NOT that character | `ls file[!1].txt` |

## 5.2 Redirection & Pipes

```bash
command > file      # redirect output to file (overwrite)
command >> file     # append output to file
command < file      # take input from file
command 2> err.txt  # redirect error messages
command > out.txt 2> err.txt   # separate output & errors
command &> all.txt  # both output and errors
```

```bash
ls -l > list.txt       # save listing into file
echo "new line" >> list.txt
sort < names.txt       # read input from file
```

**Pipes (`|`)** – send output of one command as input of the next:
```bash
ls -l | grep ".txt"           # list only .txt files
cat file.txt | wc -l          # count lines
ps aux | grep chrome          # find chrome processes
history | tail -5             # last 5 commands
cat /etc/passwd | sort        # sorted users
command | tee file.txt        # show output AND save to file
```

## 5.3 File Permissions

Every file has permissions for **3 classes**: owner (u), group (g), others (o) and **3 rights**: read (r=4), write (w=2), execute (x=1).

```
- rwx r-x r--
│  │   │   └── others: read only
│  │   └────── group:  read + execute
│  └────────── owner:  read + write + execute
└ file type (- file, d dir, l link)

rwx = 4+2+1 = 7
r-x = 4+0+1 = 5
r-- = 4+0+0 = 4        →  754
```

### Octal Permission Table

| Digit | Binary | Permission |
|---|---|---|
| 7 | rwx | read + write + execute |
| 6 | rw- | read + write |
| 5 | r-x | read + execute |
| 4 | r-- | read only |
| 0 | --- | no permission |

### `chmod` – change permissions

**Symbolic way:**
```bash
chmod u+x script.sh      # give execute to owner
chmod g-w file.txt       # remove write from group
chmod o=r file.txt       # others get only read
chmod a+r file.txt       # all users read
chmod u+x,g+w file.txt   # multiple changes
```

**Numeric (octal) way:**
```bash
chmod 777 file.txt       # everyone: everything (⚠️ avoid)
chmod 755 script.sh      # owner rwx, others r-x  (standard for scripts)
chmod 644 file.txt       # owner rw, others r     (standard for files)
chmod -R 755 mydir       # recursive
```

### `chown` / `chgrp` – change ownership
```bash
sudo chown dev file.txt             # change owner
sudo chown dev:developers file.txt  # owner + group
sudo chgrp developers file.txt      # change group only
sudo chown -R dev:dev project/      # recursive
```

### `umask` – default permissions for new files
```bash
umask          # shows mask, e.g. 0022
umask 077      # new files only readable by owner
```

## 5.4 User & Group Management

**`/etc/passwd` line format:**
```
dev:x:1000:1000:Dev,/home/dev:/bin/bash
│   │  │    │     │          │        └ login shell
│   │  │    │     │          └ home directory
│   │  │    │     └ comment (full name)
│   │  │    └ group ID (GID)
│   │  └ user ID (UID)
│   └ password placeholder (real hash is in /etc/shadow)
└ username
```

### Commands

```bash
sudo useradd -m dev          # add user (-m creates home dir)
sudo passwd dev              # set/change password
sudo usermod -aG sudo dev    # add user to sudo group
sudo userdel -r dev          # delete user + home dir

sudo groupadd developers     # create group
sudo groupdel developers     # delete group
id dev                       # show uid, gid, groups
groups dev                   # list user's groups
whoami / who / w             # login info

su dev                       # switch user (asks dev's password)
su -                         # switch to root with root's environment
sudo command                 # run ONE command as root (asks YOUR password)
```

**su vs sudo**

| su | sudo |
|---|---|
| Switch to another user completely | Run a single command as root |
| Needs root's password | Needs your own password |
| Full root session (risky) | Controlled & logged (safer) |

## 5.5 Process Management

A **process** = a running program. Each has a **PID** (Process ID).

```bash
ps                     # processes of current terminal
ps -f                  # full listing
ps -ef                 # all processes, full format
ps aux                 # all processes, CPU/MEM usage

top                    # live process monitor (q to quit)
htop                   # prettier version (install separately)
pgrep chrome           # find PIDs by name
pidof sshd             # PID of a program

kill 1234              # send SIGTERM(15) - polite terminate
kill -9 1234           # SIGKILL - force kill ⚠️
killall firefox        # kill by name
pkill -u dev           # kill all processes of user dev

sleep 100              # demo process (Ctrl+C to stop)
```

**Common signals:** `1` SIGHUP (reload), `9` SIGKILL (force), `15` SIGTERM (default terminate).

### Background jobs
```bash
firefox &              # run in background
jobs                   # list background jobs
fg %1                  # bring job 1 to foreground
bg %1                  # resume job in background
Ctrl + Z               # suspend current process
nohup ./script.sh &    # keep running even after logout
```

### Priority
```bash
nice -n 10 ./task.sh      # start with lower priority
renice -n 5 -p 1234       # change priority of running process
```

## 5.6 Networking Commands

```bash
ping google.com            # test connectivity (Ctrl+C to stop)
ping -c 4 google.com       # send only 4 packets

ip a                       # show IP addresses (modern)
ifconfig                   # older equivalent
ip route                   # routing table / gateway

hostname                   # system name
hostname -I                # system's IP address

ssh dev@192.168.1.10       # secure remote login
scp file.txt dev@192.168.1.10:/home/dev/    # secure copy to remote
scp dev@192.168.1.10:~/a.txt .              # copy from remote

wget https://example.com/file.zip       # download file
curl https://api.example.com            # make HTTP request / fetch URL
curl -O https://site.com/file.zip       # download with original name

netstat -tuln              # listening ports (older)
ss -tuln                   # same, modern

nslookup google.com        # DNS lookup
dig google.com             # detailed DNS info
traceroute google.com      # route packets take (install: traceroute)
```

## 5.7 Package Management

```bash
# Debian/Ubuntu family (apt)
sudo apt update                  # refresh package index
sudo apt upgrade                 # upgrade all packages
sudo apt install nginx           # install
sudo apt remove nginx            # uninstall (keep config)
sudo apt purge nginx             # uninstall + config
sudo apt search python           # search
apt list --installed             # list installed
sudo apt autoremove              # remove unused dependencies

# Low-level .deb
sudo dpkg -i package.deb         # install a .deb file
dpkg -l                          # list installed .deb packages

# RedHat family
sudo dnf install httpd           # Fedora/RHEL 8+
sudo yum install httpd           # CentOS/RHEL 7
sudo rpm -ivh package.rpm        # install rpm
```

## 5.8 Archiving & Compression

**tar** = Tape ARchive → bundles many files into one (compression optional).

| Command | Meaning |
|---|---|
| `tar -cvf archive.tar dir/` | **c**reate archive, **v**erbose, **f**ile |
| `tar -tvf archive.tar` | list contents |
| `tar -xvf archive.tar` | extract |
| `tar -czvf archive.tar.gz dir/` | create **g**zipped archive |
| `tar -xzvf archive.tar.gz` | extract .tar.gz |
| `tar -cjvf archive.tar.bz2 dir/` | create bzip2 archive |
| `tar -xjvf archive.tar.bz2` | extract .tar.bz2 |

```bash
gzip bigfile.log          # compress → bigfile.log.gz
gunzip bigfile.log.gz     # decompress
zip backup.zip file1 file2
unzip backup.zip
unzip backup.zip -d /tmp  # extract to /tmp
bzip2 file.txt / bunzip2 file.txt.bz2
```

> Memory trick: **c**reate, e**x**tract, **t**est/list — **z** = gzip, **j** = bzip2, **v** = verbose, **f** = file.

## 5.9 Disk & Memory Commands

```bash
df -h                 # disk space usage per filesystem (h = human readable)
du -h file.txt        # size of file
du -sh /home/dev      # total size of a folder (s = summary)
free -h               # RAM & swap usage
lsblk                 # list block devices (disks & partitions)
sudo fdisk -l         # detailed partition table
mount /dev/sdb1 /mnt  # attach a disk to /mnt
umount /mnt           # detach it
```

## 5.10 Searching Commands

### `find` – search files by name/size/time
```bash
find /home -name notes.txt            # by name
find . -name "*.log"                  # all .log in current tree
find . -iname "READ*"                 # case-insensitive
find . -type d                        # only directories
find . -type f -size +10M             # files bigger than 10 MB
find . -mtime -7                      # modified in last 7 days
find . -name "*.tmp" -delete          # delete matches
find . -name "*.sh" -exec chmod +x {} \;   # run command on each match
```

### `grep` – search *inside* files (Global Regex Print)

| Flag | Meaning |
|---|---|
| `-i` | ignore case |
| `-n` | show line numbers |
| `-r` | recursive (directories) |
| `-v` | invert match (lines WITHOUT pattern) |
| `-c` | count matching lines |
| `-l` | list files containing match |
| `-w` | match whole word |

```bash
grep "error" app.log
grep -in "warning" app.log        # ignore case + line numbers
grep -rn "TODO" ~/project/        # search whole project
grep -v "#" config.conf           # show lines without comments
ps aux | grep ssh                 # combine with pipes
```

```bash
which python3                     # where a command is installed
whereis ls                        # binary + source + man page locations
sudo updatedb && locate notes.txt # fast search using index
```

## 5.11 Text Processing Commands

```bash
sort names.txt                    # alphabetical
sort -r names.txt                 # reverse
sort -n numbers.txt               # numeric
sort -k2 marks.txt                # sort by 2nd column
sort -t: -k3 -n /etc/passwd       # field sep ':' , sort col 3 numerically

uniq data.txt                     # remove adjacent duplicates
sort data.txt | uniq -c           # count occurrences
sort data.txt | uniq -d           # show only duplicates

cut -d: -f1 /etc/passwd           # 1st field, ':' as delimiter → usernames
cut -c1-5 file.txt                # first 5 characters of each line

echo "hello world" | tr 'a-z' 'A-Z'   # HELLO WORLD
echo "helloworld" | tr -d 'l'         # heworld (delete chars)

diff file1.txt file2.txt          # compare two files
comm file1.txt file2.txt          # common/uncommon lines (sorted files)

awk '{print $1}' file.txt         # print 1st column
awk -F: '{print $1, $7}' /etc/passwd  # user & shell (delimiter :)
awk '{print NR": "$0}' file.txt   # line numbers
awk 'NR==2 {print}' file.txt      # print 2nd line
awk '$3 > 50 {print $1}' marks.txt    # conditional print
df -h | awk 'NR==2 {print $5}'    # disk usage % (used in scripts!)

sed 's/hello/hi/' file.txt        # replace 1st match per line (print only)
sed 's/hello/hi/g' file.txt       # replace all per line
sed -i 's/hello/hi/g' file.txt    # edit file in place ⚠️
sed -n '5p' file.txt              # print 5th line
sed '3d' file.txt                 # delete 3rd line (print result)
sed '/^$/d' file.txt              # delete blank lines
```

## 5.12 Job Scheduling with `cron`

`cron` runs commands automatically at scheduled times.

**Crontab format:**
```
┌───────── minute        (0–59)
│ ┌─────── hour          (0–23)
│ │ ┌───── day of month  (1–31)
│ │ │ ┌─── month         (1–12)
│ │ │ │ ┌─ day of week   (0–7, 0 & 7 = Sunday)
* * * * * command
```

| Expression | Meaning |
|---|---|
| `* * * * *` | Every minute |
| `0 2 * * *` | Daily at 2:00 AM |
| `*/10 * * * *` | Every 10 minutes |
| `0 0 * * 0` | Every Sunday midnight |
| `0 9 1 * *` | 1st of every month, 9 AM |
| `0 12 * * 1-5` | Weekdays at noon |

```bash
crontab -e          # edit your cron jobs
crontab -l          # list cron jobs
crontab -r          # remove all cron jobs
```

**Example – daily 2 AM backup:**
```
0 2 * * * /home/dev/scripts/backup.sh >> /home/dev/scripts/backup.log 2>&1
```

## 5.13 Managing Services (systemd)

```bash
systemctl status ssh        # view service status
sudo systemctl start ssh    # start now
sudo systemctl stop ssh     # stop
sudo systemctl restart ssh  # restart
sudo systemctl enable ssh   # start automatically at boot
sudo systemctl disable ssh  # don't start at boot
systemctl list-units --type=service   # all services
journalctl -u ssh           # logs of a service
```

## 5.14 Links: Hard vs Soft

```bash
ln file.txt hardlink.txt    # hard link (same inode, same data)
ln -s /home/dev/file.txt shortcut   # soft (symbolic) link
ls -li                      # -i shows inode numbers
```

| Hard Link | Soft (Symbolic) Link |
|---|---|
| Another name for the same data | Like a Windows shortcut (points to path) |
| Same inode number | Different inode |
| Works even if original is deleted | Breaks (dangling) if original is deleted |
| Cannot link directories / cross filesystems | Can link dirs & across filesystems |

## 5.15 Environment Variables

```bash
echo $HOME          # home directory
echo $PATH          # where shell looks for commands
echo $USER, $SHELL, $PWD, $HOSTNAME

export MYVAR="hello"       # create env variable (current session)
env                        # list all variables
export PATH=$PATH:/opt/tools   # add a folder to PATH
```

Make it permanent by adding `export MYVAR="hello"` to `~/.bashrc`, then `source ~/.bashrc`.

---

# Chapter 6 – Shell Scripting

## 6.1 What is a Shell?

A **shell** is a command interpreter — it reads your commands and asks the kernel to execute them. A **shell script** is a text file containing a series of shell commands, executed together automatically.

### Types of Shells

| Shell | Path | Notes |
|---|---|---|
| `sh` (Bourne) | `/bin/sh` | The classic shell |
| **bash** (Bourne Again) | `/bin/bash` | Default on Linux; most used |
| `zsh` | `/bin/zsh` | macOS default; rich features |
| `ksh` (Korn) | `/bin/ksh` | Powerful scripting |
| `csh` / `tcsh` | `/bin/csh` | C-like syntax |

```bash
echo $SHELL       # your current shell
cat /etc/shells   # available shells
```

## 6.2 Your First Script

**Step 1 – Create the file:** `vim hello.sh` or `nano hello.sh`

**Step 2 – Write the script:**
```bash
#!/bin/bash
# This is my first shell script
echo "Hello, World!"
echo "Today is: $(date)"
```

> **Shebang (`#!/bin/bash`)** on line 1 tells the system *which interpreter* to use.

**Step 3 – Give execute permission:**
```bash
chmod +x hello.sh
```

**Step 4 – Run it (any of these):**
```bash
./hello.sh          # as executable
bash hello.sh       # via bash (no chmod needed)
sh hello.sh         # via sh
```

## 6.3 Comments
```bash
# single line comment
echo "code line"
<<COMMENT
multi-line
comment block
COMMENT
```

## 6.4 Variables

**Rules:** no spaces around `=`; names start with letter/underscore; no spaces inside names; conventionally UPPERCASE.

```bash
NAME="Dev"                # correct
AGE=25
name="wrong"              # name = "wrong"  ❌ error: command not found

echo "My name is $NAME"          # use with $
echo "Details: ${NAME}s"         # use {} to join with text

echo "Enter your name:"
read USERNAME                    # read from keyboard
read -p "Enter age: " AGE        # with prompt
read -sp "Password: " PASS       # silent (hidden input)
echo

CITY="Pune"
readonly CITY                    # cannot be changed now
# CITY="Mumbai"                  # error
unset AGE                        # delete variable

TODAY=$(date)                    # command substitution  ✔ preferred
NOW=`date`                       # backticks (old style)
SUM=$((5 + 3))                   # arithmetic substitution
```

### Single vs Double Quotes

```bash
NAME="Dev"
echo 'Hello $NAME'    # Hello $NAME   (single = literal)
echo "Hello $NAME"    # Hello Dev     (double = variable expanded)
```

## 6.5 Special Variables

| Variable | Meaning |
|---|---|
| `$0` | Name of the script |
| `$1`…`$9` | 1st…9th command-line argument |
| `${10}` | 10th argument (needs braces) |
| `$#` | Number of arguments |
| `$@` / `$*` | All arguments |
| `$?` | Exit status of last command (0 = success) |
| `$$` | PID of current script |
| `$!` | PID of last background command |
| `$_` | Last argument of previous command |

**Example:** `args.sh`
```bash
#!/bin/bash
echo "Script name : $0"
echo "First arg   : $1"
echo "Second arg  : $2"
echo "Total args  : $#"
echo "All args    : $@"
```
```bash
./args.sh apple banana
# Script name : ./args.sh
# First arg   : apple
# Second arg  : banana
# Total args  : 2
# All args    : apple banana
```

## 6.6 Operators

### Arithmetic (use `$(( ))` — spaces not needed)
```bash
a=10; b=3
echo $((a + b))     # 13
echo $((a - b))     # 7
echo $((a * b))     # 30
echo $((a / b))     # 3   (integer division)
echo $((a % b))     # 1   (remainder)
echo $((a ** 2))    # 100 (power)

x=5
((x++))             # increment inside (( ))
let "x = x + 2"     # let keyword
expr 10 \* 3        # old-style expr (needs spaces & escapes)
```

### Relational (for NUMBERS, used with `[ ]`)

| Operator | Meaning |
|---|---|
| `-eq` | equal |
| `-ne` | not equal |
| `-gt` | greater than |
| `-lt` | less than |
| `-ge` | greater or equal |
| `-le` | less or equal |

### String Comparison

| Operator | Meaning |
|---|---|
| `=` / `==` | equal |
| `!=` | not equal |
| `-z` | string is **z**ero length (empty) |
| `-n` | string is **n**ot empty |
| `<` / `>` | alphabetical order (escape: `\<`, `\>`) |

### Logical

| Operator | Meaning |
|---|---|
| `&&` | AND |
| `\|\|` | OR |
| `!` | NOT |

### File Test Operators

| Operator | True if |
|---|---|
| `-e` | file/directory **e**xists |
| `-f` | regular **f**ile exists |
| `-d` | **d**irectory exists |
| `-r` | readable |
| `-w` | writable |
| `-x` | executable |
| `-s` | size > 0 |
| `-z "$VAR"` | variable empty |

> ⚠️ **Spaces are mandatory inside brackets:** `[ $a -eq $b ]` ✔ / `[$a -eq $b]` ✘

## 6.7 Decision Making

### if / if-else / if-elif-else

```bash
#!/bin/bash
read -p "Enter a number: " n
if [ $n -gt 0 ]; then
    echo "Positive"
elif [ $n -lt 0 ]; then
    echo "Negative"
else
    echo "Zero"
fi
```

### Multiple conditions
```bash
if [ $age -ge 18 ] && [ $age -le 60 ]; then
    echo "Eligible to work"
fi

if [ -f /etc/passwd ] && [ -r /etc/passwd ]; then
    echo "passwd file exists and is readable"
fi
```

### Nested if
```bash
if [ $n -gt 0 ]; then
    if [ $((n % 2)) -eq 0 ]; then
        echo "Positive even"
    else
        echo "Positive odd"
    fi
fi
```

### `case` statement (like switch)

```bash
#!/bin/bash
echo "1) Date  2) Calendar  3) Who am I"
read -p "Enter choice: " ch
case $ch in
    1) date ;;
    2) cal ;;
    3) whoami ;;
    *) echo "Invalid choice" ;;
esac
```

With patterns:
```bash
read -p "Enter a letter: " letter
case $letter in
    [a-z]) echo "Lowercase letter" ;;
    [A-Z]) echo "Uppercase letter" ;;
    [0-9]) echo "Digit" ;;
    *)     echo "Other character" ;;
esac
```

## 6.8 Loops

### for loop (list form)
```bash
for i in 1 2 3 4 5
do
    echo "Number: $i"
done

for name in Dev Raj Amit
do
    echo "Hello $name"
done

for file in *.txt            # loop over files
do
    echo "File: $file"
done

for i in {1..10}             # range
do
    echo $i
done

for i in {1..10..2}          # range with step 2 → 1 3 5 7 9
do
    echo $i
done
```

### for loop (C-style)
```bash
for ((i=1; i<=5; i++))
do
    echo "i = $i"
done
```

### while loop
```bash
i=1
while [ $i -le 5 ]
do
    echo "Count: $i"
    ((i++))
done

# read file line by line
while read line
do
    echo "$line"
done < myfile.txt
```

### until loop (runs WHILE condition is FALSE)
```bash
i=1
until [ $i -gt 5 ]
do
    echo "i = $i"
    ((i++))
done
```

### break & continue
```bash
for i in 1 2 3 4 5
do
    if [ $i -eq 3 ]; then
        break            # exit the loop completely
    fi
    echo $i              # prints 1 2
done

for i in 1 2 3 4 5
do
    if [ $i -eq 3 ]; then
        continue         # skip this iteration only
    fi
    echo $i              # prints 1 2 4 5
done
```

## 6.9 Functions

```bash
#!/bin/bash

# definition
greet() {
    echo "Hello $1, welcome!"       # $1 = function's 1st parameter
}

# call
greet "Dev"
greet "Riya"
```

**Returning values:**
```bash
#!/bin/bash

add() {
    sum=$(( $1 + $2 ))
    return $sum          # return only 0–255 (exit status)
}

add 5 7
echo "Result: $?"       # 12  (via $?)

add() {
    local result=$(( $1 + $2 ))   # 'local' keeps variable inside function
    echo $result                  # output-based return
}

total=$(add 20 30)      # capture with $()
echo "Total: $total"
```

**Recursive function – factorial:**
```bash
factorial() {
    if [ $1 -le 1 ]; then
        echo 1
    else
        prev=$(factorial $(( $1 - 1 )))
        echo $(( $1 * prev ))
    fi
}
echo "5! = $(factorial 5)"    # 120
```

## 6.10 Arrays

```bash
FRUITS=("apple" "banana" "mango")

echo "${FRUITS[0]}"        # apple
echo "${FRUITS[@]}"        # all elements
echo "${#FRUITS[@]}"       # number of elements (3)
echo "${FRUITS[-1]}"       # last element (bash 4.3+)
echo "${FRUITS[@]:1:2}"    # slice from index 1, 2 items → banana mango

FRUITS+=("orange")         # append element
FRUITS[1]="grape"          # modify
unset FRUITS[2]            # delete element

for f in "${FRUITS[@]}"    # loop an array
do
    echo "Fruit: $f"
done

# indexed array
declare -a nums=(10 20 30)
echo ${nums[2]}            # 30
```

## 6.11 String Operations

```bash
STR="Hello World"

echo "${#STR}"           # 11  (length)
echo "${STR:0:5}"        # Hello   (substring: start:count)
echo "${STR:6}"          # World   (from index 6 to end)
echo "${STR/World/Linux}"    # Hello Linux  (replace first)
echo "${STR//l/L}"           # HeLLo WorLd  (replace ALL)
echo "${STR^^}"          # HELLO WORLD (uppercase)
echo "${STR,,}"          # hello world (lowercase)
STR1="Hello"; STR2="World"
echo "$STR1 $STR2"       # concatenation: Hello World
```

## 6.12 Exit Status

Every command returns 0 = **success**, 1–255 = **failure**.
```bash
ls /etc
echo $?        # 0 (success)
ls /nope
echo $?        # non-zero (failed)

exit 0         # script ends successfully
exit 1         # script ends with error
```

## 6.13 Heredoc (multi-line input)
```bash
cat << EOF
This is line 1
This is line 2
Name: $USER
EOF
```

## 6.14 Practical Example Scripts

### (1) Even / Odd
```bash
#!/bin/bash
read -p "Enter a number: " n
if [ $((n % 2)) -eq 0 ]; then
    echo "$n is Even"
else
    echo "$n is Odd"
fi
```

### (2) Largest of Three Numbers
```bash
#!/bin/bash
read -p "Enter three numbers: " a b c
if [ $a -gt $b ] && [ $a -gt $c ]; then
    echo "$a is largest"
elif [ $b -gt $c ]; then
    echo "$b is largest"
else
    echo "$c is largest"
fi
```

### (3) Leap Year
```bash
#!/bin/bash
read -p "Enter year: " y
if [ $((y % 4)) -eq 0 ] && [ $((y % 100)) -ne 0 ] || [ $((y % 400)) -eq 0 ]; then
    echo "$y is a leap year"
else
    echo "$y is NOT a leap year"
fi
```

### (4) Fibonacci Series
```bash
#!/bin/bash
read -p "How many terms? " n
a=0; b=1
echo "Fibonacci series:"
for ((i=0; i<n; i++))
do
    echo -n "$a "
    next=$((a + b))
    a=$b
    b=$next
done
echo ""
```

### (5) Factorial (loop)
```bash
#!/bin/bash
read -p "Enter a number: " n
fact=1
for ((i=1; i<=n; i++))
do
    fact=$((fact * i))
done
echo "Factorial of $n is $fact"
```

### (6) Prime Number Check
```bash
#!/bin/bash
read -p "Enter a number: " n
prime=1
if [ $n -lt 2 ]; then prime=0; fi
for ((i=2; i*i<=n; i++))
do
    if [ $((n % i)) -eq 0 ]; then
        prime=0
        break
    fi
done
if [ $prime -eq 1 ]; then
    echo "$n is a prime number"
else
    echo "$n is NOT prime"
fi
```

### (7) Reverse a Number & Palindrome
```bash
#!/bin/bash
read -p "Enter a number: " n
temp=$n; rev=0
while [ $n -gt 0 ]
do
    digit=$((n % 10))
    rev=$((rev * 10 + digit))
    n=$((n / 10))
done
echo "Reverse of $temp = $rev"
if [ $temp -eq $rev ]; then
    echo "$temp is a palindrome"
else
    echo "$temp is not a palindrome"
fi
```

### (8) Menu-driven Calculator
```bash
#!/bin/bash
while true
do
    echo "===== CALCULATOR ====="
    echo "1) Add  2) Subtract  3) Multiply  4) Divide  5) Exit"
    read -p "Choose: " ch
    if [ $ch -eq 5 ]; then echo "Bye!"; break; fi
    read -p "Enter two numbers: " a b
    case $ch in
        1) echo "Sum     = $((a + b))" ;;
        2) echo "Diff    = $((a - b))" ;;
        3) echo "Product = $((a * b))" ;;
        4) if [ $b -ne 0 ]; then echo "Divide  = $((a / b))"
           else echo "Cannot divide by zero"; fi ;;
        *) echo "Invalid choice!" ;;
    esac
done
```

### (9) Simple Interest
```bash
#!/bin/bash
read -p "Principal: " p
read -p "Rate (%):  " r
read -p "Time (yr): " t
si=$(( p * r * t / 100 ))
echo "Simple Interest = $si"
```

### (10) Count Words/Lines of a File
```bash
#!/bin/bash
read -p "Enter filename: " f
if [ -f "$f" ]; then
    echo "Lines: $(wc -l < "$f")"
    echo "Words: $(wc -w < "$f")"
else
    echo "File does not exist!"
fi
```

### (11) Automatic Backup Script (cron-friendly)
```bash
#!/bin/bash
SRC="/home/dev/documents"
DEST="/home/dev/backups"
STAMP=$(date +%Y-%m-%d_%H-%M-%S)
ARCHIVE="$DEST/backup_$STAMP.tar.gz"

mkdir -p "$DEST"
if tar -czf "$ARCHIVE" "$SRC"; then
    echo "[$(date)] Backup OK → $ARCHIVE"
else
    echo "[$(date)] Backup FAILED!" >&2
    exit 1
fi

# keep only the last 5 backups
ls -1t "$DEST"/backup_*.tar.gz | tail -n +6 | xargs -r rm -f
```

### (12) Disk Usage Alert
```bash
#!/bin/bash
THRESHOLD=80
USAGE=$(df / | awk 'NR==2 {print $5}' | tr -d '%')
if [ "$USAGE" -gt "$THRESHOLD" ]; then
    echo "⚠️  WARNING: root disk usage is ${USAGE}%"
    # mail -s "Disk Alert" admin@example.com <<< "Usage: ${USAGE}%"
else
    echo "OK: disk usage is ${USAGE}%"
fi
```

### (13) Check Whether a User Exists
```bash
#!/bin/bash
read -p "Enter username: " u
if grep -q "^$u:" /etc/passwd; then
    echo "User '$u' exists."
else
    echo "User '$u' does not exist."
fi
```

### (14) Loop Over Command-line Arguments
```bash
#!/bin/bash
echo "You passed $# arguments"
for arg in "$@"
do
    echo "→ $arg"
done
```

## 6.15 Debugging & Best Practices

```bash
bash -x script.sh     # show each command as it runs (trace)
bash -n script.sh     # check syntax without running
set -x                # enable tracing inside script
set +x                # disable tracing
set -e                # stop script on first error
set -u                # error when using undefined variables
```

**Best practices:**
- Always start with shebang: `#!/bin/bash`.
- Always quote variables: `"$FILE"` — protects against spaces.
- Use `$(command)` instead of backticks.
- Use meaningful names in UPPERCASE for variables.
- Add comments for anything non-obvious.
- Test scripts with `bash -x` before scheduling with cron.
- Never run `rm -rf` with unquoted/unverified variables.

---

# Appendix – Quick Revision Cheat Sheet

| Task | Command |
|---|---|
| Where am I | `pwd` |
| List files | `ls -l` / `ls -la` |
| Change dir | `cd path` / `cd ..` / `cd ~` |
| Make dir/file | `mkdir d` / `touch f` |
| Copy/Move/Delete | `cp` / `mv` / `rm -r` |
| View file | `cat` `less` `head` `tail` |
| Find file | `find . -name "*.txt"` |
| Search text | `grep -rn "word" dir` |
| Permissions | `chmod 755 f` `chown user f` |
| Processes | `ps aux` `top` `kill -9 PID` |
| Disk/RAM | `df -h` `du -sh` `free -h` |
| Network | `ping` `ip a` `ssh` `scp` `curl` |
| Archive | `tar -czvf a.tar.gz dir` / `tar -xzvf` |
| Packages | `apt update` `apt install pkg` |
| Users | `useradd` `passwd` `usermod -aG sudo u` |
| Schedule | `crontab -e` → `0 2 * * * cmd` |
| Services | `systemctl status/start/stop svc` |
| Editor save/quit | vim: `Esc → :wq`; nano: `Ctrl+O, Ctrl+X` |
| Run script | `chmod +x s.sh && ./s.sh` |

### ⭐ One-liners worth remembering
```bash
sudo !!                       # repeat last command with sudo
grep -rn "TODO" .             # find TODOs in a project
ps aux | grep python          # find python processes
find . -type f -name "*.log" -exec rm -i {} \;
tar -xzvf archive.tar.gz -C /target/dir
df -h | awk 'NR==2 {print $5}'
```

---

