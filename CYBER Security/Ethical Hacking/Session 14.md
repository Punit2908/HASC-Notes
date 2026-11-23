
# Session 14: System Hacking – Authentication, Password Security and Privilege Management

**Made by:** Punit Jangra  
**Duration:** 3–3.5 Hours  
**Level:** Beginner to Intermediate

---

# 1. Learning Objectives

By the end of this session, students should be able to:

1. Explain what system hacking means in ethical hacking.
2. Understand authentication and authorization.
3. Explain how Linux and Windows manage user accounts.
4. Understand password storage and password hashing.
5. Differentiate between password hashing and encryption.
6. Audit sample password hashes using John the Ripper.
7. Understand Hashcat and its password-auditing capabilities.
8. Understand how Metasploit Framework is organized.
9. Perform safe service inspection using Metasploit.
10. Understand Linux privileges and common privilege misconfigurations.
11. Identify security weaknesses in authentication and access control.
12. Recommend appropriate system-hardening measures.

---

# PART 1: Understanding System Hacking

## 2. What Is System Hacking?

System hacking is the process of investigating and testing the security of a computer system to understand how an attacker might gain unauthorized access, misuse privileges or compromise system resources.

In ethical hacking, these activities are performed only with explicit authorization.

A system may be exposed to weaknesses such as:

- Weak passwords.
- Poor authentication settings.
- Unnecessary user accounts.
- Incorrect file permissions.
- Excessive administrative privileges.
- Unpatched operating systems.
- Insecure remote access.
- Misconfigured services.

### Real-world example

Imagine a company has a Linux server used by employees.

The server contains:

- Employee accounts.
- Company documents.
- Application files.
- Database credentials.
- Administrative accounts.

Suppose an employee uses a weak password.

If an unauthorized person gains access to that account, the impact depends on what that account can access.

If the account has excessive privileges, the consequences could be much more serious.

This is why authentication and privilege management are important parts of system security.

## 3. What Are the Main Stages of System Hacking?

A simplified security assessment may involve:

```text
Information Gathering
        |
        v
Service Investigation
        |
        v
Vulnerability Analysis
        |
        v
Authentication Assessment
        |
        v
Access Control Assessment
        |
        v
Security Impact Evaluation
        |
        v
Remediation and Hardening
```

These stages help us investigate how a system could be compromised and how to protect it.

---

# PART 2: Authentication and Authorization

## 4. What Is Authentication?

Authentication is the process of verifying the identity of a user or system.

In simple terms:

**Authentication answers: Who are you?**

For example, when you log into a computer, the system checks whether your credentials belong to a valid account.

Common authentication methods include:

1. Password authentication.
2. PIN authentication.
3. Fingerprint authentication.
4. Face recognition.
5. Security keys.
6. Multi-factor authentication.

### Example

A user enters:

```text
Username: student01
Password: ********
```

The system verifies the credentials before allowing access.

## 5. What Is Authorization?

Authorization determines what an authenticated user is allowed to do.

**Authorization answers: What are you allowed to access?**

For example:

| User | Permission |
|---|---|
| Student | Read course material |
| Teacher | Manage course material |
| Administrator | Manage the entire system |

A user may successfully log in but still be unable to access administrative functions.

That is authorization working correctly.

## 6. Authentication vs Authorization

| Authentication | Authorization |
|---|---|
| Verifies identity | Determines permissions |
| Happens before access is granted | Determines allowed actions |
| Checks credentials | Checks roles and privileges |
| Example: Password verification | Example: Accessing an admin panel |

### Classroom example

Imagine a college LMS.

A student logs in successfully.

The student can view lessons but cannot delete other students' accounts.

- Login verification is authentication.
- Restriction on account deletion is authorization.

## 7. What Is Multi-Factor Authentication?

Multi-factor authentication, or MFA, requires users to prove their identity using multiple independent authentication factors.

The common factors are:

| Factor | Example |
|---|---|
| Something you know | Password or PIN |
| Something you have | Security key or authenticator device |
| Something you are | Fingerprint or face recognition |

### Example

A user logs in using:

1. Password.
2. Authenticator application code.

Even if someone obtains the password, they may still be unable to access the account without the second factor.

### Why is MFA important?

- Reduces the impact of stolen passwords.
- Makes account takeover more difficult.
- Adds another layer of security.
- Protects important administrative accounts.

**Important:** SMS-based codes are better than password-only authentication in many situations, but phishing-resistant authentication methods such as hardware security keys are generally stronger.

---

# PART 3: Password Security

## 8. Why Are Passwords Important?

Passwords are one of the most common authentication methods.

However, weak passwords create security risks.

Examples of weak passwords:

```text
123456
password
admin123
qwerty
welcome123
```

These passwords are predictable and may be discovered easily.

### Characteristics of a Strong Password

A strong password should:

- Be long.
- Be unique for every account.
- Avoid personal information.
- Avoid common patterns.
- Not be reused across websites.
- Be stored in a password manager where appropriate.

A long, randomly generated password is generally more resistant to guessing than a short, predictable password.

## 9. How Are Passwords Stored?

A common misconception is that websites store everyone's passwords as readable text.

Secure systems should not store passwords in plaintext.

Instead, they store password hashes produced using password-hashing algorithms.

### Example

Suppose a user creates this password:

```text
MyStrongPassword123!
```

The application processes it through a password-hashing function.

The stored value looks more like:

```text
$argon2id$v=19$m=65536,t=3,p=4$...
```

The exact format depends on the algorithm and configuration.

When the user logs in again:

1. The user enters a password.
2. The application processes it using the stored hashing parameters.
3. It compares the result with the stored password hash.
4. If verification succeeds, authentication is granted.

The application does not need to decrypt the stored password.

## 10. What Is Hashing?

Hashing converts input data into a fixed-format output using a hash function.

Example:

```text
Input:
Hello

SHA-256 Output:
185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969
```

Important properties:

- The same input produces the same output for a given hash function.
- Small input changes produce significantly different outputs.
- A secure cryptographic hash is designed to make reversing the original input computationally difficult.

### Hashing vs Encryption

| Hashing | Encryption |
|---|---|
| Designed to be one-way | Designed to be reversible with the key |
| No decryption operation | Can be decrypted with the appropriate key |
| Used for password verification | Used to protect information confidentiality |
| Example: SHA-256 | Example: AES |

### Important security distinction

SHA-256 is a cryptographic hash function, but it should not be used alone as a password-storage mechanism.

Password storage should use dedicated algorithms such as:

- Argon2id.
- bcrypt.
- scrypt.
- PBKDF2.

These algorithms are designed to make password guessing more expensive.

## 11. What Is a Salt?

A salt is a random value added to a password before hashing.

Consider two users choosing the same password.

Without unique salts, a system using the same hashing process could produce identical hashes.

With different salts, their stored password hashes will be different.

### Example

```text
User A:
Password + Salt A
       |
       v
Password Hash A

User B:
Password + Salt B
       |
       v
Password Hash B
```

### Why use salts?

- Prevent identical passwords from producing identical stored hashes.
- Make precomputed hash lookup tables less useful.
- Increase the work required for large-scale password guessing.

Modern password-hashing libraries normally handle salts automatically.

---

# PART 4: Password Auditing with John the Ripper

## 12. What Is John the Ripper?

John the Ripper is a password-auditing tool.

It helps security professionals evaluate the strength of passwords by testing whether known password hashes can be matched against candidate passwords.

It supports several password hash formats.

### Real-world use cases

- Auditing password policies.
- Testing sample password hashes.
- Identifying weak passwords in an authorized assessment.
- Evaluating the effectiveness of password security controls.

**Important:** We will only use hashes generated specifically for this classroom exercise.

## 13. Install John the Ripper

### Arch Linux

```bash
sudo pacman -S john
```

### Ubuntu / Debian

```bash
sudo apt update
sudo apt install john
```

Verify:

```bash
john --version
```

## 14. Understanding the Password-Auditing Process

A simplified password audit works like this:

```text
Sample Password Hash
         |
         v
Password Auditing Tool
         |
         v
Generate Candidate Passwords
         |
         v
Hash Candidate Passwords
         |
         v
Compare Results
         |
         v
Report Matching Candidates
```

If a candidate matches the sample hash, the tool has demonstrated that the password was guessable using the tested candidates.

It does not mean every password can be recovered.

## 15. Generate a Classroom Test Hash

We will generate a sample SHA-256 hash from a known practice password.

Create a file:

```bash
nano sample-password.txt
```

Enter:

```text
CyberLab123
```

Save the file.

Generate a hash:

```bash
sha256sum sample-password.txt
```

Example output:

```text
<sha256-hash>  sample-password.txt
```

The actual hash will be generated on your machine.

### Important

A plain SHA-256 hash is being used here only to demonstrate basic hash matching.

It is not an appropriate password-storage format for a real application.

## 16. Create a John the Ripper Test File

John expects a password-hash file in a supported format.

For this demonstration, use a SHA-256 test hash.

Create a file:

```bash
nano hashes.txt
```

Put the generated hash on one line:

```text
<your-generated-sha256-hash>
```

Save it.

## 17. Create a Small Wordlist

A wordlist is a collection of candidate passwords.

Create one:

```bash
nano wordlist.txt
```

Add:

```text
password
admin123
CyberLab123
welcome123
student123
```

Save the file.

## 18. Run John the Ripper

Use the raw SHA-256 format:

```bash
john --format=Raw-SHA256 --wordlist=wordlist.txt hashes.txt
```

Show recovered candidates:

```bash
john --show --format=Raw-SHA256 hashes.txt
```

Expected result:

```text
<matching-candidate> (?)
```

The output format can vary depending on the version.

### Understand the command

| Part | Purpose |
|---|---|
| `john` | Starts John the Ripper |
| `--format=Raw-SHA256` | Specifies the hash format |
| `--wordlist=wordlist.txt` | Supplies candidate passwords |
| `hashes.txt` | Contains the sample hash |

### What did we learn?

We generated a password hash and tested whether a small list of candidate passwords contained the original password.

This demonstrates why predictable passwords are dangerous.

## 19. Why Is Wordlist Auditing Not Always Successful?

The password may not appear in the provided wordlist.

For example:

- The password may be randomly generated.
- It may be very long.
- It may contain unpredictable combinations.
- The wordlist may be incomplete.
- The hash algorithm may be computationally expensive.

A failed match does not prove that a password is secure.

It only means the tested candidates did not produce a match.

---

# PART 5: Hashcat

## 20. What Is Hashcat?

Hashcat is an advanced password recovery and auditing tool.

It supports many hash algorithms and can use CPU or compatible GPU hardware.

Security professionals use it to evaluate the strength of password hashes in authorized assessments.

### John the Ripper vs Hashcat

| John the Ripper | Hashcat |
|---|---|
| Password auditing tool | Password recovery and auditing tool |
| Supports many formats | Supports many formats |
| CPU and supported accelerator options | Strong GPU acceleration support |
| Useful for teaching and audits | Useful for larger password-auditing workloads |

Both tools are useful. Students should understand the concepts before attempting large-scale audits.

## 21. Install Hashcat

### Arch Linux

```bash
sudo pacman -S hashcat
```

### Ubuntu / Debian

```bash
sudo apt update
sudo apt install hashcat
```

Verify:

```bash
hashcat --version
```

Check available devices:

```bash
hashcat -I
```

The available hardware depends on installed drivers and supported compute backends.

## 22. Understand Hashcat Modes

Hashcat uses numeric identifiers for supported hash formats.

For example:

| Hash type | Example mode |
|---|---:|
| MD5 | 0 |
| SHA-1 | 100 |
| SHA-256 | 1400 |

These identifiers are useful when identifying which format to test.

### View hashcat help

```bash
hashcat --help
```

Find hash-mode information in the documentation:

https://hashcat.net/wiki/doku.php?id=example_hashes

## 23. Classroom Hashcat Demonstration

Use the sample SHA-256 hash generated earlier.

Create a file:

```bash
nano hashcat-sample.txt
```

Paste the hash into it.

Use the provided classroom wordlist for the offline audit:

```bash
hashcat -m 1400 -a 0 hashcat-sample.txt wordlist.txt
```

Explanation:

- `-m 1400`: Selects the SHA-256 hash mode.
- `-a 0`: Uses a dictionary attack mode.
- `hashcat-sample.txt`: Contains the test hash.
- `wordlist.txt`: Contains the candidate passwords.

Show the result:

```bash
hashcat -m 1400 --show hashcat-sample.txt
```

### Important observation

The same weak password can be tested using both John the Ripper and Hashcat.

The purpose is to understand password auditing, not to compete over which tool recovers a password faster.

---

# PART 6: Understanding Privileges and Access Control

## 24. What Are User Privileges?

A privilege determines what actions a user can perform on a system.

For example:

- Read a file.
- Modify a file.
- Install software.
- Start or stop services.
- Create accounts.
- Modify system configurations.

A user with excessive privileges can cause much greater damage if their account is compromised.

## 25. Standard User vs Administrator

### Linux

Linux commonly uses:

- Standard user accounts.
- Root account.
- `sudo` for authorized administrative operations.

### Windows

Windows commonly uses:

- Standard user accounts.
- Administrator accounts.
- User Account Control (UAC).

### Comparison

| Linux | Windows |
|---|---|
| Root | Administrator |
| `sudo` | UAC elevation |
| File permissions | NTFS permissions |
| Groups | Groups |
| `sudoers` | Local security policies and group membership |

## 26. Linux Permission Review

Linux uses three basic permission categories:

| Permission | Meaning |
|---|---|
| Read (`r`) | View file contents |
| Write (`w`) | Modify file contents |
| Execute (`x`) | Execute a file or access a directory |

These permissions apply to:

- Owner.
- Group.
- Others.

Example:

```bash
ls -l example.txt
```

Output:

```text
-rw-r--r-- 1 student student 120 Nov 23 example.txt
```

Interpretation:

```text
- rw- r-- r--
  |   |   |
  |   |   +---- Others
  |   +-------- Group
  +------------ Owner
```

The owner can read and write.

The group and other users can only read.

## 27. Why Are Excessive Permissions Dangerous?

Suppose a sensitive file contains application credentials.

If every user can read that file, the credentials may be exposed.

Example of an overly permissive file:

```bash
chmod 777 secret.txt
```

This allows all users to read, write and execute the file.

For a normal text file, that is usually unnecessary and dangerous.

A more restrictive example:

```bash
chmod 600 secret.txt
```

Only the file owner can read and write it.

### Practical exercise

Create a test file:

```bash
touch confidential.txt
```

Inspect permissions:

```bash
ls -l confidential.txt
```

Change permissions:

```bash
chmod 600 confidential.txt
```

Inspect again:

```bash
ls -l confidential.txt
```

Discuss why sensitive files should have restricted access.

---

# PART 7: Privilege Management and Security Auditing

## 28. Understanding sudo

`sudo` allows authorized users to execute commands with elevated privileges.

Example:

```bash
sudo apt update
```

The user performs an administrative operation without needing to log in directly as root.

### Check sudo permissions

```bash
sudo -l
```

This displays the commands the current user is permitted to run through sudo.

### Why is this important?

If a user has unnecessary administrative privileges, compromising that account could give an attacker more control over the system.

## 29. Check User Information

Useful commands:

```bash
whoami
```

Displays the current username.

```bash
id
```

Displays user and group IDs.

```bash
groups
```

Displays group memberships.

```bash
getent passwd
```

Lists account information from the system's configured account databases.

```bash
getent group sudo
```

On Debian/Ubuntu, this displays members of the sudo group.

On Arch Linux, administrative access is commonly managed through the `wheel` group, depending on the sudoers configuration.

## 30. Review Important Account Files

### /etc/passwd

Contains account information.

```bash
cat /etc/passwd
```

It does not normally contain readable user passwords.

### /etc/shadow

Contains password hashes and related password-aging information.

Access is restricted:

```bash
sudo less /etc/shadow
```

Do not copy real password hashes into classroom exercises or upload them to external services.

### /etc/sudoers

Controls sudo permissions.

Always edit it using:

```bash
sudo visudo
```

This helps validate syntax before saving.

### Security best practices

- Give users only the permissions they need.
- Avoid unnecessary administrator accounts.
- Use strong authentication.
- Restrict root login where appropriate.
- Monitor privileged account activity.
- Review sudo permissions regularly.

---

# PART 8: Metasploit Framework

## 31. What Is Metasploit?

Metasploit Framework is an open-source penetration-testing framework.

It provides tools for security testing, vulnerability research and controlled validation.

It is widely used by penetration testers and security professionals.

Official website:

https://www.metasploit.com/

Source code:

https://github.com/rapid7/metasploit-framework

### What can Metasploit do?

- Identify and inspect modules.
- Perform selected service checks.
- Validate security weaknesses in authorized labs.
- Support controlled penetration-testing workflows.
- Organize assessment sessions and results.

### Important

Metasploit is not a vulnerability scanner replacement.

It is a broader framework that includes different types of modules.

Students must understand module behavior before running anything.

## 32. Metasploit Module Types

| Module | Purpose |
|---|---|
| Auxiliary | Performs supporting tasks such as service discovery and information gathering |
| Exploit | Attempts to take advantage of a vulnerability |
| Payload | Defines the action or code executed after successful exploitation |
| Post | Performs post-exploitation activities |
| Encoder | Transforms payload representation |
| NOP | Provides no-operation instructions for certain exploit-development contexts |

For this introductory session, focus on understanding module types and using a safe service-inspection module.

Do not run exploit or post-exploitation modules as part of this exercise.

## 33. Install Metasploit

On Kali Linux, Metasploit is commonly available through the distribution's packages.

Check installation:

```bash
msfconsole --version
```

On Arch Linux, check the available package:

```bash
pacman -Ss metasploit
```

If not available in configured repositories, follow the official Rapid7 installation documentation.

Avoid installing untrusted copies or scripts from random repositories.

## 34. Start Metasploit

```bash
msfconsole
```

You will see a prompt similar to:

```text
msf6 >
```

This is the Metasploit console.

### Useful commands

```text
help
```

Displays help.

```text
version
```

Displays the version.

```text
search <keyword>
```

Searches available modules.

```text
info <module>
```

Displays information about a module.

```text
show options
```

Displays module options.

```text
back
```

Returns to the main console.

```text
exit
```

Closes Metasploit.

## 35. Understand a Metasploit Module

Search for an SSH version-checking module:

```text
search ssh_version
```

The purpose of this search is to find modules related to SSH service identification.

A module's documentation can be inspected using:

```text
info auxiliary/scanner/ssh/ssh_version
```

The module is intended to identify SSH service information, not exploit the service.

### Important module concepts

Before using any module, students should inspect:

- Module name.
- Module type.
- Description.
- Required options.
- Target requirements.
- Expected output.
- Whether it performs intrusive actions.

Never assume a module is safe merely because it appears in a search result.

## 36. Safe Metasploit Practical: SSH Version Identification

Use only the isolated classroom target.

Start Metasploit:

```bash
msfconsole
```

Select the SSH version scanner:

```text
use auxiliary/scanner/ssh/ssh_version
```

Inspect its options:

```text
show options
```

Set the authorized target:

```text
set RHOSTS 192.168.56.105
```

Run the service identification check:

```text
run
```

The output may include:

- Target address.
- SSH service information.
- Detected software banner.

Actual output depends on the SSH server.

Return to the main console:

```text
back
```

### What did we learn?

Metasploit can help perform service-related checks within a larger assessment workflow.

We should still verify the detected software version and configuration using reliable evidence.

### Safety boundary

This practical is limited to service identification on the isolated classroom server.

Do not select exploit, payload or post-exploitation modules for this exercise.

---

# PART 9: Understanding System Security Weaknesses

## 37. Common System-Level Weaknesses

| Weakness | Example | Security improvement |
|---|---|---|
| Weak passwords | Predictable credentials | Use strong unique passwords |
| Excessive privileges | Standard users have admin access | Apply least privilege |
| Outdated software | Unsupported operating system | Apply security updates |
| Insecure remote access | Unrestricted SSH access | Restrict access and strengthen authentication |
| Poor file permissions | Sensitive files readable by everyone | Apply appropriate permissions |
| Unused accounts | Old employee accounts remain active | Disable unnecessary accounts |
| Missing MFA | Administrative account uses password only | Enable MFA where supported |
| Weak password storage | Fast unsalted hashes | Use Argon2id, bcrypt or scrypt |

## 38. What Is the Principle of Least Privilege?

The principle of least privilege means that users and applications should receive only the permissions necessary to perform their assigned tasks.

### Example

A student account should not have permission to:

- Install system-wide packages.
- Modify system security settings.
- Delete other users' files.
- Change administrator passwords.

A teacher account may have additional permissions, but should not automatically receive full system administration privileges.

### Why is least privilege important?

If an account is compromised, the damage is limited by the permissions available to that account.

---

# PART 10: Complete Practical Assessment

## 39. Practical Scenario: Audit a Linux System

### Scenario

You are a junior security analyst.

Your instructor provides an Ubuntu Server in an isolated classroom network.

Your task is to examine its authentication and privilege configuration.

You must not attempt unauthorized access or change system security settings without instructor approval.

### Task 1: Identify the current user

```bash
whoami
id
groups
```

Record:

- Username.
- User ID.
- Group memberships.

### Task 2: Review sudo privileges

```bash
sudo -l
```

Identify which administrative operations are permitted.

### Task 3: Inspect account information

```bash
getent passwd
```

Identify the accounts that are intended for human users and distinguish them from service accounts.

Do not assume every system account is unnecessary.

### Task 4: Review sensitive file permissions

```bash
ls -l /etc/passwd
ls -l /etc/shadow
```

Explain why their permissions should differ.

### Task 5: Inspect SSH configuration

```bash
sudo sshd -T | grep -E 'permitrootlogin|passwordauthentication|pubkeyauthentication'
```

Record the effective settings.

### Task 6: Generate a sample password hash

```bash
echo -n "CyberLab123" | sha256sum
```

Copy the resulting hash into a test file.

Use the instructor-provided wordlist with John the Ripper.

### Task 7: Compare John and Hashcat

Use the same sample hash and wordlist.

Record:

- Hash format.
- Tool used.
- Whether the candidate matched.
- What the result tells you.

### Task 8: Metasploit service inspection

Use the SSH version-identification module against the isolated lab server.

Record the service information.

### Task 9: Prepare a security report

Your report must include:

1. System information.
2. User and group observations.
3. Sudo permission observations.
4. SSH configuration.
5. Password-auditing results.
6. Exposed service information.
7. Potential security concerns.
8. Recommended remediation.

---

# PART 11: Assessment Questions

## Theory Questions

1. What is system hacking?
2. What is authentication?
3. What is authorization?
4. Explain multi-factor authentication.
5. What is password hashing?
6. What is a salt?
7. Why should passwords not be stored in plaintext?
8. Why is SHA-256 alone not recommended for password storage?
9. What is the difference between hashing and encryption?
10. What is John the Ripper?
11. What is Hashcat?
12. What is the difference between John and Hashcat?
13. What is privilege escalation?
14. What is the principle of least privilege?
15. What is the purpose of sudo?
16. What information is stored in `/etc/passwd`?
17. What information is stored in `/etc/shadow`?
18. What is Metasploit?
19. Name the main Metasploit module types.
20. What is the difference between a vulnerability scanner and Metasploit?

## Practical Questions

1. Generate a SHA-256 hash for a sample password.
2. Use John the Ripper to audit the sample hash.
3. Use Hashcat to audit the same hash.
4. Identify the current Linux user and groups.
5. Inspect sudo privileges.
6. Review SSH security settings.
7. Identify the purpose of an auxiliary Metasploit module.
8. Prepare a short system-security assessment report.

---

# PART 12: Homework

## Homework 1: Research

Explain these terms:

- Authentication.
- Authorization.
- MFA.
- Password hashing.
- Salt.
- Argon2id.
- bcrypt.
- John the Ripper.
- Hashcat.
- Metasploit.
- Privilege escalation.
- Least privilege.

## Homework 2: Security Comparison

Prepare a comparison table for:

| Topic | What to explain |
|---|---|
| Authentication | How a system verifies identity |
| Authorization | How permissions are determined |
| Password hashing | How password verification works |
| MFA | Why multiple factors improve security |
| Privilege management | How access is controlled |

## Homework 3: Security Report

Prepare a report containing five system-security observations from the classroom lab.

For every observation, include:

1. Evidence.
2. Possible impact.
3. Severity or priority.
4. Recommended remediation.

Do not report assumptions as confirmed vulnerabilities.

---

# PART 13: Instructor Notes

## Suggested Session Timing

| Activity | Duration |
|---|---:|
| Introduction to system hacking | 15 minutes |
| Authentication and authorization | 20 minutes |
| Password security and hashing | 30 minutes |
| John the Ripper practical | 25 minutes |
| Hashcat demonstration | 20 minutes |
| Privileges and Linux security | 30 minutes |
| Metasploit introduction and practical | 30 minutes |
| Complete assessment and recap | 30 minutes |

## Teaching Advice

Do not teach password auditing as simply a method for recovering passwords.

Explain the underlying security problem:

- Why do weak passwords exist?
- Why should password hashes be salted?
- Why are slow password-hashing algorithms important?
- Why should administrative privileges be restricted?
- Why does MFA reduce the impact of stolen credentials?

For Metasploit, explain module architecture and demonstrate the service-identification workflow before introducing more advanced concepts.

The goal is to teach students how systems are protected, how weaknesses are evaluated and how security can be improved.

---

# Next Session

## Session 15: Malware Threats and Analysis

Topics:

- What is malware?
- Virus, worm, Trojan, ransomware and spyware.
- Malware infection methods.
- Malware behavior and indicators of compromise.
- Static and dynamic malware analysis.
- File hashes and malware identification.
- Basic malware detection techniques.
- Malware prevention and incident response.

Tools planned:

- YARA.
- Ghidra.
- VirusTotal.
- Autopsy (for selected forensic exercises).

Practical environment:

Use harmless training samples, instructor-created files and approved malware-analysis datasets. Do not download or execute live malware on student computers.
