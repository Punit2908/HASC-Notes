
# Session 12: Enumeration – Discovering Information About Network Services

**Made by:** Punit Jangra  
**Duration:** 3–3.5 Hours  
**Level:** Beginner to Intermediate

---

# 1. Learning Objectives

By the end of this session, students should understand:

1. What enumeration means in ethical hacking.
2. The difference between scanning and enumeration.
3. Why enumeration is important during penetration testing.
4. How to identify information exposed by network services.
5. How SMB works and how to inspect SMB shares.
6. How to use SMBClient and Enum4linux-ng.
7. How to understand basic SNMP enumeration.
8. How to investigate SSH and FTP services.
9. How to document enumeration findings.
10. How exposed information can create security risks.

# PART 1: Understanding Enumeration

## 2. What Is Enumeration?

Enumeration is the process of actively collecting detailed information from a target system or network service.

During scanning, we identify which ports are open and which services may be running.

During enumeration, we communicate with those services to discover additional information.

### Example

Suppose we perform an Nmap scan and discover:

```text
PORT     STATE SERVICE
22/tcp   open  ssh
21/tcp   open  ftp
139/tcp  open  netbios-ssn
445/tcp  open  microsoft-ds
```

What do we know?

- SSH is available.
- FTP is available.
- SMB-related ports are available.

But we don't yet know:

- Which SMB shares are available?
- Is anonymous access permitted?
- What information does the server reveal?
- Which users or groups can be identified?
- Is the FTP server allowing anonymous access?
- What SSH configuration does the server expose?

Enumeration investigates these questions.

## 3. Scanning vs Enumeration

| Scanning | Enumeration |
|---|---|
| Discovers hosts and ports | Investigates available services |
| Identifies open ports | Identifies exposed service information |
| Detects possible services | Collects detailed service information |
| Provides an initial overview | Provides deeper information |
| Example: Nmap | Example: SMBClient |

### Simple analogy

Imagine visiting an office building.

**Scanning:** You discover that the building has a reception desk, a finance department and an IT department.

**Enumeration:** You investigate what information each department makes publicly accessible, which resources are shared and what access controls exist.

That is the difference.

## 4. Types of Information Collected

Enumeration may reveal:

- Usernames and group names.
- Network shares.
- Hostnames and domain names.
- Operating system information.
- Service configurations.
- Shared folders and permissions.
- SNMP information.
- Available network resources.
- Authentication requirements.

Not every service exposes all this information. Results depend on configuration and access permissions.

## 5. Where Enumeration Fits in Penetration Testing

```text
Reconnaissance
      |
      v
Host Discovery
      |
      v
Port Scanning
      |
      v
Service Detection
      |
      v
ENUMERATION
      |
      v
Vulnerability Analysis
      |
      v
Security Assessment
```

Enumeration helps us understand what is actually exposed before evaluating its security implications.

---

# PART 2: Preparing the Enumeration Lab

## 6. Lab Environment

We will use:

| Machine | Purpose |
|---|---|
| Kali Linux / Arch Linux | Enumeration workstation |
| Ubuntu Server | Target machine |

Both machines must be connected to an isolated Host-only or Internal Network.

For these exercises, use only the classroom target.

### Step 1: Find the target IP

On Ubuntu:

```bash
ip addr
```

Example:

```text
inet 192.168.56.105/24
```

Our assumed target IP:

```text
192.168.56.105
```

Replace it with the actual IP in your lab.

### Step 2: Identify running services

On the authorized target:

```bash
sudo ss -tulnp
```

This shows listening network sockets.

We will focus on:

- SMB: TCP 139 and 445.
- SSH: TCP 22.
- FTP: TCP 21.
- SNMP: UDP 161.

We will configure these services gradually.

---

# PART 3: SMB Enumeration

## 7. What Is SMB?

SMB stands for Server Message Block.

It is a network protocol used to share:

- Files.
- Folders.
- Printers.
- Other network resources.

It is commonly used in Windows networks, although Linux systems can also provide SMB services using Samba.

### Real-world example

Imagine a company has a shared folder:

```text
Company Network
       |
       v
File Server
       |
       +------ HR
       |
       +------ Finance
       |
       +------ Projects
       |
       +------ Public
```

Employees may access these folders according to their permissions.

A security assessment should determine whether these resources are exposed to unauthorized users.

## 8. Important SMB Ports

| Port | Purpose |
|---|---|
| 139/TCP | NetBIOS session service, commonly used by older SMB configurations |
| 445/TCP | Direct-hosted SMB |

## 9. Install Samba on Ubuntu

On the target machine:

```bash
sudo apt update
sudo apt install samba smbclient
```

Check the service:

```bash
sudo systemctl status smbd
```

Start it:

```bash
sudo systemctl enable --now smbd
```

## 10. Create a Practice SMB Share

We will create a folder to understand how network shares work.

```bash
sudo mkdir -p /srv/samba/public
```

Create a sample file:

```bash
echo "Welcome to the cybersecurity lab" | sudo tee /srv/samba/public/readme.txt
```

For a temporary isolated lab demonstration, allow read access:

```bash
sudo chmod 755 /srv/samba/public
```

Edit the Samba configuration:

```bash
sudo nano /etc/samba/smb.conf
```

Add this section at the end:

```ini
[public]
   path = /srv/samba/public
   browseable = yes
   read only = yes
   guest ok = yes
```

Check the configuration:

```bash
testparm
```

Restart Samba:

```bash
sudo systemctl restart smbd
```

**Security note:** Guest access is intentionally enabled here for demonstration. Do not use this configuration for a real company file server.

## 11. Discover SMB Shares Using SMBClient

SMBClient is a command-line client used to communicate with SMB servers.

From the student machine:

```bash
smbclient -L //192.168.56.105 -N
```

Explanation:

- `smbclient`: Starts the SMB client.
- `-L`: Lists available shares.
- `//192.168.56.105`: Specifies the SMB server.
- `-N`: Attempts access without requesting a password.

Example output:

```text
Sharename       Type      Comment
---------       ----      -------
public          Disk
IPC$            IPC       IPC Service
```

The exact output depends on the server configuration.

### What does this tell us?

We have discovered that the target exposes a share named `public`.

We still need to determine what access is allowed.

## 12. Access the Shared Folder

Connect to the share:

```bash
smbclient //192.168.56.105/public -N
```

You may see:

```text
smb: \>
```

We are now inside the SMB client.

Useful commands:

```text
ls
```

Lists files.

```text
pwd
```

Displays the current remote directory.

```text
get readme.txt
```

Downloads the sample file.

```text
exit
```

Closes the connection.

### What did we learn?

We discovered:

1. A shared folder exists.
2. Guest access is allowed in this lab.
3. The shared folder contains a file.
4. The file is readable without authentication.

### Security implications

If a real organization exposes confidential files through guest-accessible SMB shares, sensitive business information could be disclosed.

The correct remediation is to restrict guest access and apply appropriate permissions.

---

# PART 4: Enum4linux-ng

## 13. What Is Enum4linux-ng?

Enum4linux-ng is a tool used to collect information from Windows and Samba systems through SMB-related protocols.

It can help identify:

- Workgroup and domain information.
- User accounts, when exposed.
- Group information.
- Shared folders.
- Password policy information.
- Operating system and server information.

It automates several enumeration checks that would otherwise require multiple commands.

## 14. Installation

On Kali Linux, check whether the package is available:

```bash
sudo apt update
sudo apt install enum4linux-ng
```

If the package is unavailable, use the project's official installation instructions:

https://github.com/cddmp/enum4linux-ng

## 15. Basic Enumeration

Against our authorized lab target:

```bash
enum4linux-ng -A 192.168.56.105
```

The `-A` option performs a broader set of enumeration checks.

Students may see information such as:

```text
Target Information
------------------
Target: 192.168.56.105

Workgroup: WORKGROUP

Shares
------
public

Users
-----
Information depends on server permissions.
```

This is illustrative output, not a guaranteed result.

### Important

A tool may attempt several queries, but the target can deny them.

A lack of discovered usernames does not prove that no user accounts exist.

### Save the results

```bash
enum4linux-ng -A -oJ smb-results 192.168.56.105
```

This saves JSON output for later analysis.

### Student activity

Run the tool and record:

1. Workgroup name.
2. Discovered shares.
3. Any exposed user information.
4. Whether anonymous enumeration was successful.
5. Which queries were denied.

---

# PART 5: SNMP Enumeration

## 16. What Is SNMP?

SNMP stands for Simple Network Management Protocol.

It is used by administrators to monitor and manage network devices.

Examples include:

- Routers.
- Switches.
- Servers.
- Printers.
- Network monitoring systems.

SNMP can expose information about the managed device.

### Simple analogy

Imagine a network administrator managing 50 computers.

Instead of physically checking each machine, the administrator can use monitoring software to collect information from devices through SNMP.

Depending on configuration, that information may include:

- Device name.
- Network interfaces.
- System description.
- Uptime.
- Network statistics.

## 17. SNMP Ports

| Port | Protocol | Purpose |
|---|---|---|
| 161 | UDP | SNMP requests |
| 162 | UDP | SNMP traps and notifications |

## 18. SNMP Versions

| Version | Security |
|---|---|
| SNMPv1 | Basic community-string authentication |
| SNMPv2c | Improved functionality, but still uses community strings |
| SNMPv3 | Supports authentication and privacy features |

SNMPv1 and SNMPv2c do not provide the security protections expected from modern authenticated and encrypted management protocols.

SNMPv3 is generally preferred when correctly configured.

## 19. Install SNMP Tools

On Ubuntu:

```bash
sudo apt install snmp snmpd
```

On Kali/Debian:

```bash
sudo apt install snmp
```

## 20. Configure a Local SNMP Lab

On the Ubuntu target:

```bash
sudo nano /etc/snmp/snmpd.conf
```

For an isolated classroom demonstration, configure the SNMP agent to listen on the target's lab interface and allow read-only access using a dedicated lab community string.

Example:

```ini
agentAddress udp:161
rocommunity classroomLab 192.168.56.0/24
sysLocation Cybersecurity Lab
sysContact Lab Administrator
```

Replace the example network with your isolated lab subnet.

Restart the service:

```bash
sudo systemctl restart snmpd
```

Check its status:

```bash
sudo systemctl status snmpd
```

**Security note:** The community string shown here is only for an isolated training environment. SNMPv1/v2c community strings are not encrypted. Never expose this configuration to untrusted networks.

## 21. Query SNMP Information

From the authorized student machine:

```bash
snmpwalk -v2c -c classroomLab 192.168.56.105 system
```

This queries the system information branch.

You may see information such as:

```text
SNMPv2-MIB::sysDescr.0 = STRING: Linux ...
SNMPv2-MIB::sysObjectID.0 = OID: ...
SNMPv2-MIB::sysUpTime.0 = Timeticks: ...
SNMPv2-MIB::sysContact.0 = STRING: Lab Administrator
SNMPv2-MIB::sysLocation.0 = STRING: Cybersecurity Lab
```

Exact output depends on the installed SNMP agent.

### What is snmpwalk?

`snmpwalk` queries a sequence of related SNMP objects under a specified OID.

In simple terms, it helps retrieve multiple pieces of information from an SNMP-managed device.

### Student activity

Identify:

1. System description.
2. System uptime.
3. System contact.
4. System location.

Explain why exposing unnecessary management information can create a security risk.

---

# PART 6: FTP Enumeration

## 22. What Is FTP?

FTP stands for File Transfer Protocol.

It is used to transfer files between computers over a network.

The standard control port is TCP 21.

FTP can be configured to allow:

- Authenticated users.
- Anonymous access.
- Read-only access.
- File uploads.
- File downloads.

An incorrectly configured FTP server may expose sensitive files.

## 23. Install an FTP Server for the Lab

On Ubuntu:

```bash
sudo apt install vsftpd
```

Start it:

```bash
sudo systemctl enable --now vsftpd
```

Check its status:

```bash
sudo systemctl status vsftpd
```

For the basic enumeration demonstration, keep anonymous access disabled.

## 24. Identify the FTP Service

From the student machine:

```bash
nmap -sV -p 21 192.168.56.105
```

Nmap may identify the FTP service and its version.

## 25. Connect to the FTP Service

Use the FTP client:

```bash
ftp 192.168.56.105
```

The server may request a username and password.

For a controlled lab, use an instructor-created test account.

After authentication, useful commands include:

```text
pwd
```

Displays the current directory.

```text
ls
```

Lists available files.

```text
help
```

Displays supported commands.

```text
quit
```

Closes the connection.

### What should students investigate?

- Is anonymous access disabled?
- Can unauthorized users access files?
- Are users restricted to their assigned directories?
- Is the service using encrypted transport?

### Security note

Traditional FTP does not encrypt credentials or file contents. Prefer SFTP or FTPS where appropriate.

---

# PART 7: SSH Enumeration

## 26. What Is SSH?

SSH stands for Secure Shell.

It is used for encrypted remote access to systems.

Default port:

```text
TCP 22
```

Administrators use SSH for:

- Remote server administration.
- Command execution.
- File transfers.
- Secure tunneling.

## 27. Inspect SSH Information

We can use Nmap's service detection:

```bash
nmap -sV -p 22 192.168.56.105
```

We can also inspect supported SSH algorithms:

```bash
nmap --script ssh2-enum-algos -p 22 192.168.56.105
```

This script helps identify cryptographic algorithms supported by the SSH server.

### Why does this matter?

Older or weak cryptographic algorithms may indicate outdated SSH configuration.

However, finding an algorithm does not automatically prove the server is vulnerable. Findings must be assessed in context.

### Check SSH configuration on Ubuntu

On the target:

```bash
sudo nano /etc/ssh/sshd_config
```

Important settings to understand:

```text
PermitRootLogin
PasswordAuthentication
PubkeyAuthentication
AllowUsers
```

After changing configuration, validate and restart SSH carefully:

```bash
sudo sshd -t
sudo systemctl restart ssh
```

Do not disable authentication methods during a remote session unless you have another working access method.

---

# PART 8: Understanding Enumeration Results

## 28. Enumeration Is Not the Same as Vulnerability Confirmation

Suppose we discover:

```text
SMB Share: public
Anonymous access: Allowed
```

This is an observation.

It becomes a security concern when we establish that unauthorized users can access information they should not be able to see.

Similarly:

```text
SSH supports an older algorithm
```

This is a configuration observation, not automatic proof of compromise.

Professional security assessments distinguish:

- Observation.
- Evidence.
- Security implication.
- Risk.
- Recommendation.

## 29. Example Enumeration Report

| Service | Finding | Possible Risk | Recommendation |
|---|---|---|---|
| SMB | Guest access enabled | Unauthorized file access | Disable guest access |
| SNMP | Community-based access | Information disclosure | Prefer SNMPv3 |
| FTP | Unencrypted protocol | Credential exposure | Use SFTP or FTPS |
| SSH | Older algorithm supported | Weak configuration | Review and modernize algorithms |

These are example findings. Students should only report what their own evidence confirms.

---

# PART 9: Complete Practical Assessment

## 30. Practical Scenario

You are a junior security analyst assigned to investigate a lab server.

Your previous Nmap assessment identified SMB, SSH and other services.

Your job is to investigate those services and identify what information is exposed.

### Task 1: SMB share discovery

```bash
smbclient -L //192.168.56.105 -N
```

Record the available shares.

### Task 2: Access the practice share

```bash
smbclient //192.168.56.105/public -N
```

Identify what files are accessible.

### Task 3: SMB enumeration

```bash
enum4linux-ng -A 192.168.56.105
```

Record available information and denied queries.

### Task 4: SNMP enumeration

```bash
snmpwalk -v2c -c classroomLab 192.168.56.105 system
```

Record the system information returned.

### Task 5: FTP inspection

```bash
ftp 192.168.56.105
```

Use the instructor-provided account and inspect the accessible directory.

### Task 6: SSH inspection

```bash
nmap --script ssh2-enum-algos -p 22 192.168.56.105
```

Record the supported algorithms.

### Task 7: Prepare a report

Your report should include:

1. Target IP.
2. Services investigated.
3. Tools and commands used.
4. Information discovered.
5. Evidence of exposed information.
6. Potential security implications.
7. Recommended remediation.

---

# PART 10: Assessment Questions

## Theory Questions

1. What is enumeration?
2. What is the difference between scanning and enumeration?
3. What is SMB?
4. Which ports are commonly associated with SMB?
5. What is the purpose of SMBClient?
6. What is Enum4linux-ng?
7. What are SMB shares?
8. What is SNMP?
9. What is the difference between SNMPv2c and SNMPv3?
10. What is an SNMP community string?
11. What is FTP?
12. Why is traditional FTP considered insecure?
13. What is SSH?
14. Why is SSH preferred over Telnet?
15. Does finding exposed information automatically prove a vulnerability?

## Practical Questions

1. List SMB shares on the lab server.
2. Access the public share using SMBClient.
3. Identify the server's workgroup information.
4. Query the SNMP system information.
5. Inspect the SSH server's supported algorithms.
6. Prepare a short report of your findings.

---

# PART 11: Homework

## Homework 1: Research

Explain the following in your own words:

- SMB.
- NetBIOS.
- SMBClient.
- Enum4linux-ng.
- SNMP.
- SNMP community strings.
- FTP.
- SSH.
- SNMPv3.

## Homework 2: Service Comparison

Prepare a table comparing SMB, FTP, SSH and SNMP.

Include:

- Purpose.
- Default ports.
- Common security risks.
- Recommended security practices.

## Homework 3: Practical Report

Prepare an enumeration report using the classroom target.

Include evidence and distinguish confirmed findings from assumptions.

---

# Instructor Notes

## Suggested Timing

| Activity | Duration |
|---|---:|
| Introduction to enumeration | 20 minutes |
| SMB concepts and configuration | 35 minutes |
| SMBClient practical | 25 minutes |
| Enum4linux-ng practical | 20 minutes |
| SNMP concepts and practical | 30 minutes |
| FTP and SSH investigation | 25 minutes |
| Complete practical assessment | 30 minutes |
| Recap and questions | 15 minutes |

## Teaching Advice

Do not rush through the commands.

For every service, follow this pattern:

1. Explain what the service does.
2. Explain why organizations use it.
3. Show its default port.
4. Demonstrate how to communicate with it.
5. Investigate what information it reveals.
6. Discuss the security implications.
7. Explain how administrators secure it.

Students should understand that enumeration is about collecting and interpreting information, not simply running tools.

## Next Session

**Session 13: Vulnerability Analysis**

Tools planned:

- Greenbone OpenVAS.
- Nessus Essentials, subject to current availability and licensing.
- SearchSploit.
- CVE and CVSS resources.

Students will learn how to move from discovering exposed services to identifying, validating and prioritizing security weaknesses.
