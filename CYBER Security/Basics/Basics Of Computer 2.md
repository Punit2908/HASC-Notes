# 📘 Complete Notes: Computer Fundamentals → OS → Linux → Shell Scripting
---

## 📑 Table of Contents

1. [Computer Fundamentals](#1-computer-fundamentals)
2. [Computer Hardware](#2-computer-hardware)
3. [Computer Software](#3-computer-software)
4. [Operating Systems Basics](#4-operating-systems-basics)
5. [Operating System Installation](#5-operating-system-installation)
6. [Linux Basics & Filesystem](#6-linux-basics--filesystem)
7. [Basic Linux Commands](#7-basic-linux-commands)
8. [Text Editors: nano, vi & Vim](#8-text-editors-nano-vi--vim)
9. [Advanced Linux Commands](#9-advanced-linux-commands)
10. [Shell Scripting (Bash)](#10-shell-scripting-bash)
11. [Quick Reference Cheat Sheet](#11-quick-reference-cheat-sheet)
12. [Study Roadmap & Practice Plan](#12-study-roadmap--practice-plan)

---

## 1. Computer Fundamentals

### 1.1 What is a Computer?
A **computer** is an electronic device that accepts data (**input**), processes it according to instructions (**process**), produces meaningful information (**output**), and stores it (**storage**). This is the **IPO cycle**.

```
Input  →  Processor (CPU)  →  Output
              ↑
         Memory / Storage
```

### 1.2 Generations of Computers
| Generation | Period | Technology | Example |
|---|---|---|---|
| 1st | 1940–1956 | Vacuum tubes | ENIAC |
| 2nd | 1956–1963 | Transistors | IBM 1401 |
| 3rd | 1964–1971 | Integrated circuits (IC) | IBM System/360 |
| 4th | 1971–present | Microprocessors / VLSI | Modern PCs, smartphones |
| 5th | Present–future | AI, parallel processing, quantum | Watson, quantum computers |

### 1.3 Types of Computers
- **Supercomputer** – fastest; used in weather forecasting, research (e.g., Frontier).
- **Mainframe** – large, reliable; banks, airlines (IBM zSeries).
- **Minicomputer / Mid-range server** – between mainframe and PC.
- **Workstation** – powerful single-user machine for CAD/animation.
- **Microcomputer (PC)** – desktops, laptops, tablets.
- **Embedded computer** – inside washing machines, cars, microwaves.

### 1.4 Number Systems & Conversions
Four systems: **Binary (2)**, **Octal (8)**, **Decimal (10)**, **Hexadecimal (16)**.
Hex digits: `0-9, A=10, B=11, C=12, D=13, E=14, F=15`

**Examples:**
```
(10110)₂    = 1×16 + 0×8 + 1×4 + 1×2 + 0×1      = 22 (decimal)
(45)₁₀      → 32 + 8 + 4 + 1 → (0010 1101)₂
(A3F)₁₆     = 10×256 + 3×16 + 15                = 2623 (decimal)
(647)₈      = 6×64 + 4×8 + 7                    = 423 (decimal)
(1101 1010)₂ grouped in 4 bits → D A → (DA)₁₆
```

**Exercise:** Convert `(1011)₂` → decimal → hex. *(Answer: 11 → B)*

### 1.5 Data Representation
- **Bit** – smallest unit (0 or 1)
- **Nibble** – 4 bits
- **Byte** – 8 bits
- **KB** = 1024 bytes, **MB** = 1024 KB, **GB** = 1024 MB, **TB**, **PB**, **EB**
- **ASCII** – 7-bit, 128 characters (A=65, a=97)
- **Unicode (UTF-8)** – supports all world languages; 1–4 bytes per char

### 1.6 Characteristics & Applications
**Characteristics:** speed, accuracy, storage, diligence, automation, versatility, reliability.
**Applications:** scientific computing, business/data processing, education, healthcare, entertainment, communication, AI/ML, IoT.

---

## 2. Computer Hardware

### 2.1 System Unit Components
The main parts inside the case: **CPU, motherboard, RAM, storage drives, power supply, cooling fans, expansion cards**.

### 2.2 Von Neumann Architecture
Five logical units:
```
Input Unit        →  Keyboard, mouse, scanner
Output Unit       →  Monitor, printer, speakers
Memory Unit       →  RAM (primary), HDD/SSD (secondary)
ALU (Arithmetic & Logic Unit) → math + logic calculations
CU (Control Unit) → directs operations
```
Modern computers follow this stored-program concept [citation:4].

### 2.3 Central Processing Unit (CPU)
- **Control Unit (CU)** – fetches, decodes and directs.
- **Arithmetic Logic Unit (ALU)** – does math & comparisons.
- **Registers** – tiny, ultra-fast storage inside CPU.
- **Cache** – L1 (fastest/smallest) → L2 → L3 (shared).
- **Clock speed** – cycles per second (GHz); higher = faster instructions.

**Example comparison:**

| CPU | Cores/Threads | Base Clock | Typical Use |
|---|---|---|---|
| Intel Core i5-13400 | 10C/16T | 2.5 GHz | Everyday desktop |
| AMD Ryzen 7 7800X3D | 8C/16T | 4.2 GHz | Gaming |
| Apple M3 | 8C | 4.0 GHz | MacBooks |
| Server Xeon w/ 64 cores | 64C/128T | 2.0 GHz | Virtualization |

### 2.4 Memory Hierarchy
| Level | Size | Speed | Volatile? |
|---|---|---|---|
| Registers | KBs | Fastest | Yes |
| Cache (L1/L2/L3) | MBs | Very fast | Yes |
| RAM | 8–64 GB | Fast | Yes (loses data on power off) |
| SSD / HDD | 256 GB–4 TB | Slow | No |

### 2.5 Types of Memory
**Primary (RAM):**
- **SRAM** – static, fast, expensive → cache.
- **DRAM** – needs refreshing → system RAM. Generations: DDR2 → DDR3 → DDR4 → **DDR5** (current; ~50 GB/s bandwidth).

**ROM (Read Only, non-volatile):**

| Type | Description |
|---|---|
| PROM | Programmed once |
| EPROM | Erasable by UV light |
| EEPROM | Electrically erasable (BIOS chips, USB sticks) |

### 2.6 Storage Devices
- **HDD (Hard Disk)** – magnetic platters; cheap, slow (~150 MB/s). Sizes: 1–20 TB.
- **SSD (Solid State)** – flash memory; silent, fast.
  - **SATA SSD**: ~550 MB/s
  - **NVMe M.2 SSD**: ~3,500–7,000 MB/s
- **Optical** – CD (700 MB), DVD (4.7 GB), Blu-ray (25–50 GB).
- **Flash** – USB drives, SD cards.

### 2.7 Motherboard
The main circuit board connecting everything. Key parts:
- **Form factors:** ATX (standard), Micro-ATX, Mini-ITX.
- **Chipset** – manages data flow (e.g., Intel Z790, AMD B650).
- **Slots:** RAM (DIMM), PCIe x16 (GPU), PCIe x1 (WiFi card), M.2 (NVMe SSD), SATA ports.
- **Rear ports:** USB-A/C, HDMI/DisplayPort, Ethernet (RJ45), audio jacks.
- **BIOS/UEFI chip** – firmware for startup.

### 2.8 Input Devices
Keyboard, mouse (mechanical/optical), scanner, touchscreen, microphone, webcam, joystick, barcode reader, stylus, fingerprint sensor.

### 2.9 Output Devices
- **Monitors:** LCD/LED, OLED, refresh rate 60Hz vs 144Hz (gaming); resolutions HD/FHD/QHD/4K.
- **Printers:** Inkjet (home), Laser (office, fast, cheap/page), Dot-matrix (receipts), 3D printers.
- **Projectors**, speakers, headphones, plotters.

### 2.10 Power Supply & Cooling
- **PSU** – converts AC to DC; rated in watts (e.g., 550W, 750W, 80+ Bronze/Gold efficiency rating).
- **Cooling:** heat sinks + fans, liquid/AIO cooling for CPUs & GPUs.
- **UPS** – battery backup protecting against power cuts.

### 2.11 POST & Troubleshooting
When powered on, the **POST (Power-On Self Test)** checks hardware before boot. Failures trigger **beep codes** or diagnostic LEDs. Common fixes: reseat RAM, check PSU cables, clear CMOS (reset BIOS).

---

## 3. Computer Software

### 3.1 Definition
Software = programs, data and documentation that tell hardware what to do. A machine with **no software is called a "bare machine"** [citation:4].

### 3.2 Categories of Software

| Category | Purpose | Examples |
|---|---|---|
| **System software** | Manages hardware & runs other software | Windows 11, Ubuntu, macOS, device drivers, BIOS/UEFI, antivirus, disk utilities |
| **Application software** | Solves user tasks | MS Office, Chrome, Photoshop, AutoCAD, Zoom |
| **Utility/support software** | Maintenance and diagnostics | CCleaner, WinRAR, Defragmenter |
| **Programming software** | Create other software | VS Code, GCC, Python interpreter |

### 3.3 Language Translators
- **Assembler** – converts assembly → machine code.
- **Compiler** – translates whole program at once (C, C++, Rust); produces `.exe`.
- **Interpreter** – executes line by line (Python, JavaScript); no standalone exe.

### 3.4 Programming Languages
```
Low level:    Machine (binary) → Assembly (mnemonics)
High level:   C, C++, Java, Python, C#, Go, Rust
Scripting:    Bash, Python, PHP, Node.js
Database:     SQL
```

### 3.5 Licensing Models
- **Proprietary** – paid, closed source (Windows, Adobe PS).
- **Open source** – free, source visible (Linux, Firefox, VS Code).
- **Freeware** – free but closed source (Skype).
- **Shareware** – trial then pay.

### 3.6 Software Development Life Cycle (SDLC)
`Requirement → Design → Coding → Testing → Deployment → Maintenance`

---

## 4. Operating Systems Basics

### 4.1 Definition
An **Operating System** is system software that acts as an intermediary between the user/application programs and the computer hardware [citation:10]. It is the first software loaded at boot.

### 4.2 Main Functions of an OS
| Function | What it does | Example |
|---|---|---|
| **Process management** | Runs programs, schedules CPU | Task Manager |
| **Memory management** | Allocates RAM & virtual memory | Swapping |
| **File management** | Creates/reads/writes/deletes files | NTFS, ext4 |
| **Device management** | Communicates via drivers | Printer driver |
| **Security & access** | Users, passwords, permissions | Admin/sudo |
| **User interface** | CLI or GUI | Terminal / Desktop |
| **Network management** | IP configuration, sharing | Wi-Fi settings |

### 4.3 Types of Operating Systems
| Type | Description | Examples |
|---|---|---|
| Batch | Jobs grouped; no interaction | Payroll systems (old) |
| Time-sharing / Multi-tasking | Many users, CPU time slices | Unix, Windows, Linux |
| Real-time (RTOS) | Instant response guaranteed | QNX (cars), VxWorks (space) |
| Distributed | Manages multiple networked machines | Cluster OS |
| Embedded | Small, dedicated | Android TV, router firmware |
| Mobile | Touch-first, app-driven | Android, iOS |
| Network OS | Optimized for servers | Windows Server, RHEL |

### 4.4 Kernel Architectures
| Kernel type | Mechanism | Examples |
|---|---|---|
| Monolithic | All services in kernel space | Linux, traditional Unix |
| Microkernel | Minimal; services in user space | Minix, QNX |
| Hybrid | Mix of both | Windows NT, macOS XNU |
| Exokernel | Minimal; apps manage resources | Research systems |

### 4.5 User Interfaces
- **CLI (Command Line Interface)** – type commands (Terminal, PowerShell).
- **GUI (Graphical User Interface)** – windows, icons, pointer (Windows Explorer, GNOME).
- **Shell** – the program that interprets your typed commands (Bash, Zsh, sh).

### 4.6 Popular Operating Systems Compared
| OS | Type | License | Best for |
|---|---|---|---|
| Windows 10/11 | Proprietary | Commercial | Gaming, offices |
| Ubuntu / Linux Mint | Open source | Free | Servers, developers |
| Fedora / RHEL | Open source | Free / Subscription | Enterprise servers |
| macOS | Proprietary | Free w/ Apple hardware | Media, development |
| Android | Open core | Apache | Phones/tablets |
| iOS | Proprietary | Apple only | iPhone/iPad |

### 4.7 Linux Distributions (Distros)
Distro = Linux kernel + GNU tools + package manager + desktop.
- **Debian-based:** Debian, Ubuntu, Linux Mint, Kali (security), Pop!_OS
- **Red Hat-based:** RHEL, CentOS Stream, Rocky Linux, AlmaLinux, Fedora
- **Arch-based:** Arch, Manjaro, EndeavourOS
- **SUSE-based:** openSUSE, SUSE Linux Enterprise
- **Independent:** Gentoo, Slackware

### 4.8 The Boot Process (Step by Step)
```
1. Power ON
2. POST (checks CPU, RAM, GPU)
3. Firmware runs: BIOS (legacy) or UEFI (modern)
4. Finds boot device (SSD > USB > Network)
5. Loads Bootloader (GRUB on Linux, BOOTMGR on Windows)
6. Bootloader loads Kernel into RAM (initramfs unpacked)
7. Kernel mounts root filesystem, starts init (systemd)
8. systemd starts services → login screen / GUI
```

**BIOS vs UEFI:**

| Feature | BIOS (Legacy) | UEFI (Modern) |
|---|---|---|
| Partition support | MBR only | MBR + GPT |
| Max disk size | 2 TB | 9.4 ZB |
| Boot speed | Slower | Faster |
| Security | Basic | Secure Boot, TPM support |

### 4.9 Process Management Concepts
- **Process** = a program in execution.
- **States:** `New → Ready → Running ⇄ Waiting → Terminated`
- **PCB (Process Control Block)** stores PID, state, registers, memory info.
- **Multitasking:** OS rapidly switches CPU between processes (time slicing).

### 4.10 Memory Management & Virtual Memory
- Each process gets its own **virtual address space**.
- When RAM fills, the OS moves idle pages to disk → **swap space** (Linux) / pagefile (Windows). This process is **paging**.
- **Swappiness** on Linux controls how aggressively swap is used.

### 4.11 File Systems
| FS | OS | Max File Size | Features |
|---|---|---|---|
| FAT32 | Universal | 4 GB | Compatible everywhere |
| exFAT | Windows/macOS/Linux | 16 EB | Flash drives |
| NTFS | Windows | 16 EB | Permissions, compression |
| ext4 | Linux | 16 TB | Journaling (default since years) |
| XFS | Linux | 8 EB | High performance large files |
| Btrfs | Linux | 16 EB | Snapshots, checksums |
| APFS | macOS/iOS | 8 EB | Clones, encryption |

### 4.12 Virtualization
- **Hypervisor Type 1 (bare-metal):** ESXi, Hyper-V, Xen.
- **Hypervisor Type 2 (hosted):** VirtualBox, VMware Workstation, Parallels.
- **WSL2** on Windows 11 lets you run Linux inside Windows.

---

## 5. Operating System Installation

### 5.1 Pre-Installation Checklist
1. Verify **minimum hardware requirements**:
   - **Windows 11:** 1 GHz dual-core 64-bit CPU, 4 GB RAM, 64 GB storage, TPM 2.0, UEFI Secure Boot.
   - **Ubuntu 24.04 LTS:** 2 GHz dual-core, 4 GB RAM (25 GB disk recommended).
2. **Backup** important data (external drive/cloud).
3. Make sure you have a valid **license/product key**.
4. Check **driver availability** for critical hardware.
5. Download the official ISO (never third-party modified images).

### 5.2 Partition Schemes: MBR vs GPT
| Feature | MBR | GPT |
|---|---|---|
| Disk size limit | 2 TB | 9.4 ZB |
| Primary partitions | 4 (or 3 + extended) | 128 |
| Boot mode | Legacy BIOS | UEFI (also legacy) |
| Reliability | Single copy of table | Backup copies + CRC checksums |

### 5.3 Boot Modes
- **Legacy/CSM** – traditional BIOS, works with MBR disks.
- **UEFI** – modern, faster, supports mouse in firmware UI, GPT required for full benefits.
- **Secure Boot** – only signed bootloaders allowed (improves security).

### 5.4 Creating Bootable Media
Tools: **Rufus / balenaEtcher / Ventoy / UNetbootin** (Windows); `dd` or Ventoy on Linux.

Example with `dd`:
```bash
sudo dd if=ubuntu-24.04.iso of=/dev/sdb bs=4M status=progress && sync
```

### 5.5 Partition Planning Examples

**Linux (600 GB SSD) – typical layout:**

| Mount Point | Size | FS | Purpose |
|---|---|---|---|
| `/boot/efi` | 512 MB | FAT32 | UEFI boot loader |
| `/` (root) | 100 GB | ext4 | OS + programs |
| `/home` | rest (~490 GB) | ext4 | User data |
| `swap` | 8–16 GB | swap | Overflow / hibernation |

**Smaller system:** `/` 40 GB + `/home` rest + swap 4 GB.
**With hibernation:** swap ≥ RAM size.

**Windows (1 TB) layout:**
```
EFI System Partition   500 MB  FAT32
MSR (reserved)         16 MB
C: (Windows)          300 GB NTFS
D: (Data)             699 GB NTFS
```

### 5.6 Step-by-Step: Installing Ubuntu (Guest / Live USB)
1. Insert USB, reboot, press boot menu key (F12/F10/Esc — varies by brand).
2. Select the USB in **UEFI mode**.
3. Choose **"Try or Install Ubuntu"** → installer opens.
4. Select language, keyboard layout; choose **"Normal installation"**.
5. At **"Installation type"** pick *Erase disk and install Ubuntu* (or *Something else* for manual partitions per §5.5).
6. Set timezone, then create user (name, computer name, password, login auto/manual).
7. Click Install → copy files (10–20 min) → **Restart Now**, remove USB.
8. Run updates: `sudo apt update && sudo apt upgrade -y`.

### 5.7 Step-by-Step: Installing Windows 11
1. Create media with **Media Creation Tool** or Rufus (enable TPM override if needed).
2. Boot from USB → language → **Install now** → enter product key.
3. Select edition (Home/Pro) → accept license.
4. **Custom install** → choose/create/delete partitions → select target.
5. Setup region, keyboard, Microsoft account / offline account.
6. Desktop appears → install drivers and Windows Updates.

### 5.8 Creating & Formatting Partitions (Linux commands)
```bash
lsblk                              # list disks
sudo fdisk -l /dev/sda             # inspect disk (MBR)
sudo gdisk -l /dev/sda             # inspect disk (GPT)
sudo parted /dev/sda               # interactive partitioning
sudo mkfs.ext4 /dev/sda2           # format partition as ext4
sudo mkfs.vfat -F32 /dev/sda1      # format as FAT32 (EFI)
sudo mount /dev/sda2 /mnt          # mount temporarily
```

### 5.9 Post-Installation Tasks
- Install/activate OS.
- Update system and install drivers.
- Enable firewall (`ufw enable`, Windows Defender on).
- Install essentials: browser, office suite, antivirus (only for Windows), archives.
- Configure backups (Timeshift on Linux, File History on Windows).
- Join domain/Wi-Fi; disable unwanted startup programs.

### 5.10 Dual-Booting Tips
- Install **Windows first, Linux second** (Windows ignores others; GRUB detects Windows).
- Turn off Windows **Fast Startup** and **BitLocker** before resizing.
- Resize Windows partition from within Windows (Disk Management), not from Linux.
- Use UEFI mode for both (mixing Legacy/UEFI causes boot trouble).
- Keep a **live USB** handy to repair the bootloader:
  ```bash
  sudo grub-install /dev/sda
  sudo update-grub
  ```

### 5.11 Common Installation Problems
| Symptom | Likely cause | Fix |
|---|---|---|
| "No bootable device" | Wrong boot order / broken bootloader | Set UEFI order; run boot-repair |
| Black screen after logo | GPU driver issue | Boot in safe mode, reinstall driver |
| Stuck at installer | Bad ISO / incompatible HW | Re-verify ISO checksum; disable Secure Boot |
| Can't detect disk | RAID/NVMe driver missing | Load driver or switch SATA to AHCI |

---

## 6. Linux Basics & Filesystem

### 6.1 What is Linux?
Linux = a free, open-source **kernel** created by Linus Torvalds (1991), packaged as **distributions** with GNU tools. Runs on servers, phones (Android), routers, supercomputers, and PCs.

### 6.2 Shells & Login
Login with username/password → shell prompt appears:
```bash
user@hostname:~$      # $ = normal user, # = root
```
Common shells: **sh** (basic), **bash** (default most distros), **zsh**, **fish**.

### 6.3 Command Syntax
```
command -options arguments
```
```bash
ls -la /home/user     # -l = long format, -a = show hidden
rm -rf folder            # -r recursive, -f force
```
- Short options start with `-`, long options start with `--`.
- Multiple short flags can combine: `-lah`.

### 6.4 Linux Directory Structure (Filesystem Hierarchy)
| Dir | Meaning |
|---|---|
| `/` | Root of the filesystem |
| `/bin` | Essential command binaries (ls, cp) |
| `/sbin` | System admin binaries (fdisk, iptables) |
| `/etc` | Configuration files |
| `/home` | User home folders |
| `/root` | Home of root user |
| `/var` | Variable data: logs, mail, cache |
| `/tmp` | Temporary files (cleared on reboot) |
| `/usr` | Installed programs & libraries |
| `/dev` | Device files (sda, tty…) |
| `/proc` | Running processes & kernel info (virtual) |
| `/boot` | Kernel & boot files (grub.cfg) |
| `/opt` | Optional/add-on software |
| `/mnt` `/media` | Mount points for external drives |
| `/lib` `/lib64` | Shared libraries |
| `/snap` | Snap packages (Ubuntu) |

### 6.5 Paths
```bash
/home/user/docs/report.txt    # absolute path (starts with /)
./                           # current directory
../                          # parent directory
~/                           # your home directory
-                            # previous directory
```

### 6.6 Getting Help
```bash
man ls                       # full manual (q to quit, /word to search)
ls --help                    # short summary
info bash                    # GNU manuals
whatis grep                  # one-line description
apropos compress             # search manual names/descriptions
tldr tar                     # simplified practical examples
```

### 6.7 Useful Terminal Shortcuts
| Keys | Action |
|---|---|
| `Tab` | Auto-complete file/command names |
| `Ctrl + C` | Kill current command |
| `Ctrl + Z` | Suspend current command |
| `Ctrl + L` | Clear screen |
| `Ctrl + R` | Reverse-search command history |
| `Ctrl + A / E` | Move cursor to start/end of line |
| `Ctrl + U / K` | Delete to start/end of line |
| `↑ / ↓` | Browse previous/next commands |

---

## 7. Basic Linux Commands

### 7.1 Navigation & Listing
```bash
pwd                          # print working directory
cd /var/log                  # change directory
cd ~                         # go home
cd -                         # go back to previous dir
ls                           # list files
ls -la                       # long list incl. hidden files
ls -lh                       # human-readable sizes (KB/MB)
ls -R                        # recursive listing
tree                         # tree view (install with apt)
```

### 7.2 Creating Files & Folders
```bash
mkdir projects                      # create dir
mkdir -p a/b/c                      # create nested dirs
touch file.txt                      # empty file (or update timestamp)
rmdir emptydir                      # remove EMPTY directory
```

### 7.3 Copy, Move, Remove
```bash
cp a.txt b.txt                      # copy
cp -r dir1 dir2                     # copy dir recursively
cp -p file dest                     # preserve timestamps/permissions
mv old.txt new.txt                  # rename/move
rm file.txt                         # delete file (gone forever!)
rm -r folder                        # delete folder with contents
rm -i file.txt                      # confirm each deletion (safe)
```
⚠️ **There is no recycle bin in the CLI.** Use `trash-cli` package for safety.

### 7.4 Viewing File Contents
```bash
cat file.txt                 # dump entire file
tac file.txt                 # reverse lines
nl file.txt                  # numbered lines
less big.log                 # paginated (q quit, /search)
more file.txt                # simple pager
head -n 5 file.txt           # first 5 lines
tail -n 20 file.txt          # last 20 lines
tail -f /var/log/syslog      # follow live log output
```

### 7.5 Echo & Printing
```bash
echo "Hello World"
echo "Today is $(date)"      # command substitution
printf "%-10s %5.2f\n" Pen 1.234
```

### 7.6 System & User Information
```bash
whoami                   # username
who                      # who is logged in
w                        # who + what they're doing
id                       # uid/gid details
uname -a                 # kernel version, hostname
hostname
date                     # current date/time
cal                      # calendar
uptime                   # load averages
clear                    # clean terminal
history                  # list past commands
```

### 7.7 File Permissions (Important!)
Every file has: **owner / group / others** × **read/write/execute** (rwx).

```bash
ls -l                 # shows like: rw-r--r--
chmod 755 script.sh   # rwxr-xr-x (owner all, others read+execute)
chmod 640 secret.txt  # rw-r-----
chmod +x file         # add execute (symbolic style)
chown alice file.txt          # change owner
chown alice:devs file.txt     # change owner AND group
chgrp devs file.txt           # change group only
```
**Octal table:** r=4, w=2, x=1 → `7=rwx, 6=rw-, 4=r--, 5=r-x`
**Umask** defines default permissions (default 022 → files 644, dirs 755).

Example:
```bash
chmod u+x,g-w,o=r file.txt   # symbolic: owner+exec, group-remove-write, others=read
```

### 7.8 Links
```bash
ln file.txt hardlink.txt            # hard link (same inode)
ln -s /path/target shortcut         # symbolic link (like a shortcut)
```
Rule: hard links can't cross filesystems; symlinks point to paths (break if target moved).

### 7.9 Wildcards (Globbing)
```bash
ls *.txt              # all .txt files
ls report?.pdf        # report1.pdf, reportA.pdf
ls file[0-9].txt      # file1.txt … file9.txt
ls [!a]*              # files NOT starting with 'a'
cp *.jpg /backup/
```

### 7.10 Redirection & Pipes
```bash
echo hi > file.txt        # stdout → file (overwrite)
echo again >> file.txt    # append
cmd 2> errors.log         # redirect stderr
cmd 2>&1 > out.log       # merge stderr into stdout stream
grep x < input.txt        # stdin from file
ls -l | wc -l             # pipe output of ls into wc (count lines)
ps aux | grep firefox | wc -l
```

### 7.11 Practice Exercise
```bash
mkdir -p ~/linuxlab && cd ~/linuxlab
echo "line one" > a.txt
echo "line two" >> a.txt
cp a.txt b.txt
grep "two" a.txt
chmod 644 a.txt && ls -l
cat a.txt | tr 'a-z' 'A-Z'    # OUTPUT: LINE ONE / LINE TWO
```

---

## 8. Text Editors: nano, vi & Vim

### 8.1 Editor Comparison

| Editor | Difficulty | Strengths | Best for |
|---|---|---|---|
| **nano** | Easy | Always visible shortcuts | Quick edits, beginners |
| **vi** | Medium | On every Unix/Linux by default | Minimal systems/rescue |
| **vim** | Steep | Powerful, modes, plugins | Programming/pro admins |
| emacs | Steep | Extensible "OS-like" env | Heavy customization |

### 8.2 nano — Quick Start
Start: `nano myfile.txt`. At bottom you see shortcuts (`^X` means `Ctrl+X`).

| Shortcut | Action |
|---|---|
| `Ctrl + O` | Save (WriteOut) |
| `Ctrl + X` | Exit |
| `Ctrl + K` | Cut current line |
| `Ctrl + U` | Paste (Uncut) |
| `Ctrl + W` | Search |
| `Ctrl + \` | Replace |
| `Ctrl + G` | Help |
| `Ctrl + C` | Show cursor position |

Full-screen session example:
```bash
nano hello.txt        # opens editor
# type: print("Hello Linux")
# Ctrl+O → Enter to save
# Ctrl+X to leave
```

Set defaults in `~/.nanorc`:
```bash
set linenumbers        # always show line numbers
set tabsize 4
set mouse              # enable mouse support
```

### 8.3 vi & Vim Concepts [citation:19]
**Vim = Vi IMproved** — an enhanced version of vi present on nearly every Unix/Linux system [citation:16].

**Modes (most important idea in Vim):**

| Mode | Purpose | How to reach | How to leave |
|---|---|---|---|
| Normal (Command) | Navigate, delete, copy | Default on open / `Esc` | Switch to another mode |
| Insert | Type/edit text | `i`, `a`, `o` | `Esc` |
| Visual | Select text blocks | `v`, `V`, `Ctrl+v` | `Esc` |
| Command-line (`:`) | Save, quit, replace | `:` | `Esc` / `Enter` |

Golden rule: **press `i` to type text, `Esc` to stop typing.** [citation:19]

### 8.4 Vim Survival Commands
```bash
vim myfile.txt          # open file
vim +LINE file          # open at line number
vim -R file             # open read-only
vim -O f1 f2            # open in vertical splits
```
Save / quit (in Normal mode, press `:`):
```text
:w          save
:q          quit (fails if unsaved changes)
:wq  or  x  save and quit
:q!         quit discarding changes
:w newname  save as ...
:e file     edit another file
```

### 8.5 Cursor Movement (Normal Mode)
| Key | Moves cursor |
|---|---|
| `h j k l` | left, down, up, right |
| `w / b` | next word / previous word |
| `0 / $` | start / end of line |
| `gg / G` | first / last line of file |
| `:{n}` | go to line n |
| `Ctrl + d / u` | half page down / up |
| `%` | jump to matching bracket |

### 8.6 Editing Operations
| Command | Effect |
|---|---|
| `i` | insert before cursor |
| `I` | insert at beginning of line |
| `a` | append after cursor |
| `A` | append at end of line |
| `o / O` | new line below / above |
| `x` | delete char under cursor |
| `dd` | delete (cut) line — `5dd` deletes 5 lines |
| `yy` | yank (copy) line — `3yy` copies 3 |
| `p / P` | paste after / before |
| `D` | delete to end of line |
| `u` | undo — `Ctrl + r` redo |
| `.` | repeat last action |
| `>>`, `<<` | indent / unindent line |
| `*` | search word under cursor forward |

### 8.7 Search & Replace
```text
/keyword        search forward      n  next match   N  previous
:%s/old/new/g   substitute ALL in file
:%s/old/new/gc  ask confirmation each time
:%s/old/new/gi  case-insensitive
:2,10s/a/b/g    only lines 2–10
:s/^/# /        comment every line:   :%s/^/# /g
```
Example: replace `root` with `admin` everywhere → `:%s/root/admin/g`

### 8.8 Windows & Tabs
```text
:split file      horizontal split      :vsplit file   vertical split
Ctrl+w w         switch window         :q             close window
:tabnew          new tab               gt / gT        next/prev tab
:set number      show line numbers
:set paste       use before pasting code (avoids auto-indent mess)
```

### 8.9 Configuring Vim — `~/.vimrc`
```vim
set nocompatible
syntax on
set number            " line numbers
set relativenumber
set tabstop=4
set shiftwidth=4
set expandtab         " spaces instead of tabs
set autoindent
set hlsearch          " highlight search
set incsearch
set ignorecase smartcase
set mouse=a
colorscheme desert
```
Built-in tutorial (highly recommended): run `vimtutor` in terminal — takes ~30 minutes [citation:16].

### 8.10 Vim Demo Walkthrough
```bash
vim demo.txt
# → machine opens in NORMAL mode
# press i, type: Hello, Vim!
# press Esc, type :wq → saves and closes
vim demo.txt
# press G (last line), o (new line), type more text
# press /Vim then n to find "Vim"
# press dd on an unwanted line
# :%s/Hello/Hi/g  replaces all
# :wq  done
```

---

## 9. Advanced Linux Commands

### 9.1 Process Management
```bash
ps aux                     # snapshot of all processes
ps -ef
top                        # live system monitor (q to quit)
htop                       # prettier top (apt install htop)
pgrep firefox              # find PIDs by name
kill 1234                  # gentle terminate (SIGTERM)
kill -9 1234               # force kill (SIGKILL)
pkill chrome               # kill by name
jobs                       # background jobs of this shell
fg %1                      # bring job 1 to foreground
bg %1                      # send to background
&                          # run command in background: sleep 500 &
nohup ./long_script.sh > out.log 2>&1 &   # survives logout
nice -n 10 cmd              # low priority (-20 highest … 19 lowest)
renice -5 <PID>            # adjust priority
systemctl status nginx     # service status
systemctl start|stop|restart|enable ssh
service apache2 restart    # legacy SysV style
```
Common signals: `SIGTERM=15` polite stop, `SIGKILL=9` forced, `SIGHUP=1` hangup/reload config, `SIGINT=2` Ctrl+C.

### 9.2 Users, Groups & sudo
```bash
useradd -m -s /bin/bash alice    # create user + home + shell
passwd alice                     # set password
usermod -aG sudo alice           # add alice to sudo group
userdel -r alice                 # delete user + home
su - alice                       # switch user (root with `su -`)
sudo apt update                  # run as root
sudo -i                          # root shell
groups                           # groups of current user
id                               # uid/gid numbers
```
`/etc/passwd` example entry:
```
alice:x:1001:1001:Alice Smith:/home/alice:/bin/bash
user:passwd-uid-gid-fullname-home-shell
```
Passwords are hashed in `/etc/shadow`.

### 9.3 Networking
```bash
ip addr show                 # IP addresses (replaces ifconfig)
ip route show                # routing table
ping google.com              # connectivity
traceroute google.com        # path packets take
ss -tulnp                    # open ports/sockets
nslookup example.com         # DNS query
dig example.com              # detailed DNS
curl https://example.com     # fetch URL
curl -I url                  # headers only
wget https://x.com/f.zip     # download
ssh user@192.168.1.10        # remote login
scp file.txt user@host:/tmp/ # secure copy
ssh-keygen -t ed25519        # create key pair
ssh-copy-id user@host        # passwordless login
nc -vz host 22               # port scan test
ufw allow 22/tcp && ufw enable   # firewall (Ubuntu)
firewall-cmd --list-all      # firewalld (RHEL)
```

### 9.4 Disk & Storage
```bash
lsblk                        # tree of block devices (disks/parts)
df -h                        # free space per filesystem
du -sh /var/log              # size of a directory
mount /dev/sdb1 /mnt         # mount drive
umount /mnt                  # unmount
blkid                        # UUIDs of partitions
fdisk /dev/sdb               # partition (MBR)
gdisk /dev/sdb               # partition (GPT)
mkfs.ext4 /dev/sdb1          # format partition
fsck /dev/sdb1               # filesystem check (must be unmounted)
lsblk -f                     # filesystems with UUIDs / LABELs
```
Example mount into fstab so it persists:
```bash
UUID=xxxxxx  /data  ext4  defaults  0 2
```

### 9.5 Find, Locate & xargs
```bash
find /home -name "*.pdf"
find / -type f -size +100M           # files over 100 MB
find . -mtime -7                     # modified in last 7 days
find /var/log -name "*.log" -exec gzip {} \;
find . -name "*.tmp" -delete
locate index.html                    # fast DB search (updatedb)
xargs example:
find . -name "*.txt" | xargs grep TODO
which python3                        # path of command
whereis bash                         # binary/man/source locations
```

### 9.6 Archiving & Compression
```bash
tar -cvf archive.tar file1 dir2      # create archive
tar -czvf archive.tar.gz dir         # create gzipped
tar -xzvf archive.tar.gz             # extract
tar -tzf archive.tar.gz              # list contents
gzip file.txt  →    file.txt.gz        gunzip file.txt.gz
zip -r site.zip website/
unzip site.zip -d dest/
rsync -avz src/ dest/                # sync/directories (great for backup)
```

### 9.7 Text Processing Toolkit
```bash
# grep – search text
grep "error" app.log
grep -i "error" app.log            # ignore case
grep -rn "TODO" src/               # recursive + line numbers
grep -E "warn|error" log           # extended regex

# sed – stream editor (edit without opening file)
sed -n '5,10p' file.txt            # print only lines 5–10
sed 's/old/new/' file.txt          # first occurrence per line
sed 's/old/new/g' file.txt         # all occurrences
sed -i.bak 's/old/new/g' file.txt  # in-place edit, keeps backup
sed '/^#/d' file.txt               # delete comment lines

# awk – column/text processor
awk '{print $1}' file.txt          # 1st column
awk -F: '{print $1}' /etc/passwd    # use ':' delimiter
awk '{sum += $2} END {print sum}' nums.txt   # sum column 2
awk 'NR==1 || NR>5' file            # header + lines after 5
awk '$3 > 100 {print $1}' data.csv # conditional filter

# helpers
cut -d, -f1 data.csv               # first CSV column
sort names.txt ; uniq -c sorted.txt
tr 'a-z' 'A-Z' < file.txt          # transform character set
wc -l file.txt                     # line count
tee out.txt                        # write to file AND show on screen
paste a.txt b.txt                  # merge columns side by side
```

### 9.8 Package Management
**Debian/Ubuntu:**
```bash
sudo apt update                       # refresh lists
sudo apt install htop                 # install
sudo apt remove htop                  # uninstall
sudo apt autoremove                   # remove orphans
sudo apt search keyword
dpkg -i package.deb                   # install local deb
```
**RHEL/Fedora:**
```bash
dnf install htop ; dnf remove htop ; rpm -ivh pkg.rpm
```
**Arch:**
```bash
pacman -S htop ; pacman -R htop ; pacman -Syu
```

### 9.9 Logs, Hardware Info & Monitoring
```bash
free -h                    # RAM usage
vmstat 1                   # live CPU/memory/IO stats
lscpu ; lsblk ; lspci -tv ; lsusb
lshw -short                # full hardware summary
journalctl -xe             # systemd logs, most recent errors
journalctl -u nginx -f     # follow nginx service logs
dmesg | tail               # kernel ring buffer
cat /proc/cpuinfo          # CPU details
cat /etc/os-release        # distro/version
```

### 9.10 Environment Variables
```bash
echo $PATH                 # directories searched for commands
export EDITOR=vim          # set (this session)
echo $HOME ; echo $USER ; echo $SHELL
env                        # list all env vars
# permanent: add `export VAR=value` to ~/.bashrc, then:
source ~/.bashrc
```
`$PATH` example:
```
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
```
Example adding custom scripts:
```bash
mkdir -p ~/bin
echo 'export PATH="$HOME/bin:$PATH"' >> ~/.bashrc
```

### 9.11 Scheduling with cron
Crontab line: `minute hour day-of-month month day-of-week command`
```bash
crontab -e                # edit schedule
crontab -l                # list
crontab -r                # remove all
```
Examples:
```bash
# daily backup at 2:30 AM
30 2 * * * /home/alice/scripts/backup.sh
# every 10 minutes
*/10 * * * * /usr/bin/python3 /opt/handler.py
# every Monday 9:00 AM
0 9 * * 1 /usr/local/bin/weekreport
# after reboot
@reboot /opt/app/start.sh
```
One-off job: `at 18:00` → type command → `Ctrl+D`.

---

## 10. Shell Scripting (Bash)

A **shell script** is a plain-text file containing a sequence of commands executed by the shell (usually **Bash**) automatically.

### 10.1 Hello World Script
```bash
#!/bin/bash
# comment: this line below is executed
echo "Hello, $USER! Today is $(date)"
```
- `#!` (shebang) tells kernel which interpreter to use.
- Save as `hello.sh`, then:
```bash
chmod +x hello.sh        # make executable
./hello.sh               # run (needs ./ since '.' isn't in PATH)
bash hello.sh            # alternative: run via interpreter
source hello.sh          # run in current shell (variables persist!)
```

### 10.2 Variables — Rules & Usage
```bash
name="Alice"         # NO spaces around =
read name            # prompt user input
readonly PI=3.14     # constant
unset name           # delete variable
age=25
echo "Name: $name"       # double quotes: variables expand
echo 'Age: $age'         # single quotes: literal text
echo "Path: \$HOME"      # backslash escapes $
echo "File: $(basename $0)"
```
Rules: start with letter/underscore; `echo` prefers `$var` or `${var}`; never begin with a digit.

### 10.3 Built-in / Special Variables
| Variable | Meaning |
|---|---|
| `$0` | script name |
| `$1 … $9`, `${10}` | positional arguments |
| `$#` | number of arguments |
| `$*` / `$@` | all args (string vs array-ish) |
| `$?` | exit status of last command (0 = success) |
| `$$` | PID of current shell |
| `!$` | PID of last background process |
| `$_` | last argument of previous command |

Example `args.sh`:
```bash
#!/bin/bash
echo "Script: $0"
echo "Count: $#"
echo "First: $1 | Second: $2"
echo "All: $*"        # "a b c"
```
Run: `./args.sh apple banana cherry` → Count: 3

### 10.4 Command Substitution & Exit Status
```bash
today=$(date +%F)           # capture output
count=`ls | wc -l`          # old backtick style
if grep -q user /etc/passwd; then echo found; fi
ls /nonexistent ; echo $?   # prints error code (2)
```
`$? == 0` means success — used downstream in conditions.

### 10.5 Arithmetic (integers only)
```bash
num=7
(( num++ ))
result=$(( num * 3 + 1 ))
echo $result               # 22
expr 8 + 3                 # old style → 11
let x=5+4
bc <<< "scale=2; 10/3"      # floating point → 3.33
```
Operators: `+ - * / % **` ; comparison: `-eq -ne -lt -le -gt -ge`

### 10.6 Reading Interactive Input
```bash
read -p "Enter your name: " name
read -s -p "Password: " pass      # silent (no echo)
read -n 1 -p "Continue? [y/n] " ans   # read 1 char only
echo; echo "Hi $name"
```
Default variable for read without name: `$REPLY`.

### 10.7 Conditional Testing
| Numeric | String | File |
|---|---|---|
| `-eq` equal | `=` or `==` equal | `-e` exists |
| `-ne` not equal | `!=` different | `-f` regular file |
| `-lt/-le` | `-z` empty string | `-d` directory |
| `-gt/-ge` | `-n` non-empty | `-r/-w/-x` perms |
| `(( a > b ))` | `[[ "$s" =~ ^[0-9]+$ ]]` | `-s` size>0 |

Three syntaxes:
```bash
test -f /etc/passwd
[ -f /etc/passwd ]
[[ -f /etc/passwd ]]         # modern bash preferred
```

### 10.8 if / elif / else / case
```bash
if [ "$#" -eq 0 ]; then
    echo "Usage: $0 <filename>"
    exit 1
elif [ ! -f "$1" ]; then
    echo "File missing!"
else
    echo "Processing $1 ..."
fi
```
`case` multi-branch:
```bash
case "$1" in
    start)   echo "Starting..." ;;
    stop)    echo "Stopping..." ;;
    restart) echo "Restarting..." ;;
    *)       echo "Use: start|stop|restart" ;;
esac
```

### 10.9 Loops
```bash
# for — over items
for fruit in apple banana grape; do
    echo "I like $fruit"
done

# numeric range
for i in {1..5}; do echo $i; done
for ((i=0;i<3;i++)); do echo $i; done     # C-style

# loop over files
for f in /etc/*.conf; do echo "$f"; done

# while — condition based
count=0
while [ $count -lt 3 ]; do
    echo "count=$count"
    ((count++))
done

# read file line by line
while read -r line; do
    echo "Line: $line"
done < file.txt

# until
until ping -c1 google.com &>/dev/null; do sleep 1; done

# control
break       # exit loop
continue    # next iteration
select choice in tea coffee quit; do
    [ "$choice" = quit ] && break
    echo "You chose $choice"
done
```

### 10.10 Functions
```bash
greet() {
    local name="${1:-World}"     # local var, default arg
    echo "Hello, $name!"
    return 0
}
greet "Alice"

factorial() {
    if [ "$1" -le 1 ]; then echo 1
    else echo $(( $1 * $(factorial $(( $1 - 1 ))) ))
    fi
}
factorial 5   # 120
```
`return` gives exit status; to return text, **echo** and capture `output=$(myfunc)`.

### 10.11 Arrays
```bash
fruits=(apple banana cherry)
echo "${fruits[1]}"          # banana (0-indexed)
echo "${fruits[@]}"          # all elements
echo "${#fruits[@]}"         # length
fruits+=("mango")            # append

# associative (maps)
declare -A user
user[name]="Alice"; user[id]=1001
echo "${user[name]}"
```
Loop over array: `for f in "${fruits[@]}"; do ...; done`

### 10.12 Useful String Operations
```bash
str="welcome to Linux"
echo ${#str}                 # 15
echo ${str:8:3}              # "Lin"
echo ${str##*/}              # strip longest prefix */
echo ${str%/*}               # strip shortest suffix /*
path="a/b/c.txt"
echo ${path##*/}             # c.txt  (basename)
echo ${path%/*}              # a/b    (dirname)
echo ${str/o/0}              # replace first o → welc0me
echo ${str//o/0}             # replace all
echo ${str^^}                # uppercase   (bash4+)
echo ${str,,}                # lowercase
```

### 10.13 I/O, Here-Docs & Redirects in Scripts
```bash
exec >output.log 2>&1            # all further output to log
echo "Info message"
cat <<EOF > message.txt          # here-document
Generated at $(date)
Host: $(hostname)
EOF
read -r user <<< "alice"         # here-string
```

### 10.14 Robust Scripts — Best Practices
```bash
#!/bin/bash
set -euo pipefail
# -e: exit on error
# -u: treat unset variables as error
# -o pipefail: pipeline fails if any part fails
IFS=$'\n\t'

readonly BACKUP_DIR="/backup"
LOG="/var/log/myapp.log"

if [ "$(id -u)" -ne 0 ]; then
    echo "Run with sudo" >&2
    exit 1
fi
```
Debug: run `bash -x script.sh`; lint with **ShellCheck**.

### 10.15 Real-World Script Examples
**1. Daily backup:**
```bash
#!/bin/bash
set -euo pipefail
SRC="$HOME"
DEST="/backup"
STAMP=$(date +%Y%m%d-%H%M%S)
tar -czf "$DEST/home-$STAMP.tar.gz" "$SRC"
find "$DEST" -name "home-*.tar.gz" -mtime +7 -delete
echo "[$(date)] Backup complete: home-$STAMP.tar.gz" | tee -a /var/log/bk.log
```
Add to cron: `30 2 * * * /home/alice/scripts/backup.sh`

**2. Service health check:**
```bash
#!/bin/bash
if ! systemctl is-active --quiet nginx; then
    systemctl restart nginx
    echo "nginx was down, restarted at $(date)" && logger -t watchdog "nginx restarted"
fi
```

**3. Factorial input with validation:**
```bash
#!/bin/bash
fact=1; n=${1:?provide a number}
if ! [[ $n =~ ^[0-9]+$ ]]; then echo "not a number"; exit 1; fi
for ((i=2;i<=n;i++)); do fact=$((fact*i)); done
echo "$n! = $fact"
```

**4. File counter by extension:**
```bash
#!/bin/bash
target="${1:-.}"
find "$target" -type f | awk -F. '{print $NF}' | sort | uniq -c | sort -rn
```

---

## 11. Quick Reference Cheat Sheet

```text
NAVIGATION            VIEW FILES           PERMISSIONS
------------------    ----------------     -----------------
pwd   cd ..   ls -l   cat file             chmod 755 f.sh
cd /etc  cd ~  ls -ah  less /var/log/x     chmod u+x f   chown u:g f
mkdir -p x/y          head -5 f  tail -f f ls -l shows rwxr-xr--

EDIT & SEARCH         SYSTEM               NETWORK
------------------    ----------------     -----------------
vim file (i,Esc,:wq)  ps aux  top  kill    ip a  ss -tulnp
nano file ^O ^X       df -h  du -sh  free   ping  ssh user@host
grep -rn "x" .        apt install pkg      curl -O url  dig x.com
find . -name "*.sh"   systemctl restart s scp f u@h:/tmp
sed 's/a/b/g' f       journalctl -u s -f  ufw allow 22/tcp

TEXT PROCESSING       ARCHIVE               SCRIPT KEYS
------------------    ----------------     -----------------
awk -F: '{print $1}'  tar czvf a.tgz dir   $1 $# $? PID $$
cut -d, -f2 d.csv     unzip a.zip -d out   if [ ... ]; then fi
sort | uniq -c        gzip f  gunzip f.gz  for i in {1..5}; do
tr 'a-z' 'A-Z'        rsync -avz src dst   func(){ ... }; local
```

**cron format:** `* * * * *` = minute, hour, day-of-month, month, weekday.

---

## 12. Study Roadmap & Practice Plan

| Week | Focus | Tasks |
|---|---|---|
| 1 | Fundamentals + Hardware | Read §1–§2; identify parts inside a real/old PC; convert number systems daily |
| 2 | Software + OS basics | §3–§4; memorize OS functions, boot steps; compare distros |
| 3 | OS installation | §5; install Ubuntu in VirtualBox using manual partitions; create bootable USB |
| 4 | Basic Linux + editors | §6–§7; complete `vimtutor`; resize/edit config in vim; practice wildcards/redirection |
| 5 | Advanced commands | §9; manage services, set up SSH keys, permissions drills, write grep/awk pipelines |
| 6–8 | Shell scripting | §10; write 10+ scripts (backup, file analysis, menu); use cron; run ShellCheck |

**Mini-project to tie it together:**
Create `sysreport.sh` that collects `uptime`, `df -h`, `free -h`, running services, saves to a timestamped file, compresses yesterday's report, and is scheduled nightly with cron.

---

## 📚 Suggested References
- Computer system hardware/software structure, generations and applications [citation:2][citation:4]
- Operating system overview and functions [citation:10]
- Linux command collections with examples [citation:11][citation:12][citation:13]
- Linux command cheat sheet across categories (hardware, search, networking) [citation:14]
- Vim installation, configuration files and `vimtutor` [citation:16]
- Vim modes & core command workflow [citation:19]

> 💡 Tip: Practice every command in a VM or WSL beforehand. Muscle memory for Vim modes and permissions (`rwx` octals) pays off the most in real admin/programming work.