Ethical Hacking — Session 1

Introduction to Cyber Security & Ethical Hacking

**CYWDA | HARTRON**

| Session Goal                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------- |
| Understand why cybersecurity exists, what we protect, common security concepts, different types of hackers, and what makes hacking ethical. |

| Item               | Details                                                                            |
| ------------------ | ---------------------------------------------------------------------------------- |
| Suggested Duration | 60–90 minutes                                                                      |
| Level              | Beginner                                                                           |
| Core Concepts      | Cybersecurity, CIA Triad, Threats, Vulnerabilities, Attacks, Risk, Ethical Hacking |
| Practical          | Basic Linux system/network information and security identification exercises       |

**CYWDA — Ethical Hacking | Session 1**

1. **Let's start the Class With a Question**

"Suppose you have a website where students can log in and check their marks. What could go wrong with this website?"

* Someone can steal the password.
* Someone can change marks.
* Someone can delete the website.
* Someone can steal student data.
* Someone can hack the admin account.
* The website can become unavailable.

Use their answers to introduce the topic: Cybersecurity is about protecting systems, data, networks, applications, and users from unauthorized access, misuse, modification, destruction, or disruption.

2. **What Is Cybersecurity?**

Cybersecurity is the practice of protecting computers, networks, servers, websites, applications, databases, accounts, and digital information from threats and unauthorized activities.

Real-Life Analogy: Your House

| House                                                                     |
| ------------------------------------------------------------------------- |
| ├── Door Lock  <br>├── Windows  <br>├── CCTV  <br>├── Alarm  <br>└── Safe |

| Computer System                                                                               |
| --------------------------------------------------------------------------------------------- |
| ├── Password  <br>├── Firewall  <br>├── Antivirus  <br>├── Authentication  <br>└── Encryption |

A house contains valuable things and therefore needs protection. A computer system contains valuable information and therefore needs digital protection.

3. **What Are We Protecting?**

* Data

Student records

Passwords

Photos

Bank details

Emails

Documents

* Systems

Web server

Database server

Laptop

Mobile device

Cloud server

* Networks

Wi-Fi

Office network

College network

Internet infrastructure

* Applications

Social media applications

Banking applications

College LMS

E-commerce websites

4. **CIA Triad**

CIA is one of the most important foundations of cybersecurity:

|                                                              |
| ------------------------------------------------------------ |
| C → Confidentiality  <br>I → Integrity  <br>A → Availability |
 **Confidentiality**

Confidentiality means that only authorized people should be able to access information.

Example

|   |
|---|
|Student Database  <br>  <br>Name: Rahul  <br>Roll No: 101  <br>Marks: 87  <br>Phone: XXXXXXXX|

Only authorized teachers or administrators should access this information. If another student downloads everyone's records, confidentiality has been broken.

Real-life example: Your ATM PIN should be known only to you. If someone else obtains it, confidentiality is compromised.

**Integrity**

Integrity means that data should remain accurate and unmodified unless an authorized person changes it.

|   |
|---|
|Original:  <br>Rahul  <br>Marks = 75  <br>  <br>Unauthorized modification:  <br>Rahul  <br>Marks = 95|

The data was modified without authorization, so integrity has been compromised.

Banking example: If an account balance changes from ₹10,000 to ₹1,00,000 without authorization, the main security problem is loss of integrity.

 **Availability**

Availability means that authorized users should be able to access a system or service when they need it.

| You open the college website |
| ---------------------------- |
| → Server Unavailable         |

If an attacker intentionally makes a service unavailable, availability has been affected.

Real-life analogy: A bank may still exist, but if someone blocks the entrance, customers cannot use it. The service exists but is unavailable to its intended users.

8. CIA Triad Practical Examples

| Scenario                                   | CIA Property    |
| ------------------------------------------ | --------------- |
| An attacker downloads student information. | Confidentiality |
| An attacker changes a student's marks.     | Integrity       |
| An attacker makes the LMS unavailable.     | Availability    |

9. **What Is a Threat?**

A threat is something that has the potential to cause harm to a system or its data.
Hacker, Malware ,Phishing ,Insider threat ,Natural disaster ,Hardware failure

| Website                                              |
| ---------------------------------------------------- |
| ↓  <br>Potential attacker  <br>↓  <br>Potential harm |

10. **What Is a Vulnerability?**

A vulnerability is a weakness in a system that could potentially be exploited.
House analogy: If a house has a strong door and lock but one window is always open, the open window is a vulnerability.

Weak password ,Outdated software ,Incorrect permissions ,Insecure configuration

11. **Threat vs Vulnerability**

| House example:                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------- |
| Burglar = Threat  <br>Open window = Vulnerability  <br>  <br>Threat + Vulnerability  <br>↓  <br>Potential Attack |

The burglar is the potential source of harm. The open window is the weakness that can be used.

12. **What Is an Attack?**

An attack is an attempt to exploit a weakness to cause an unauthorized effect.

| Weak password                                                  |
| -------------------------------------------------------------- |
| ↓  <br>Attacker attempts login  <br>↓  <br>Account compromised |

13. **What Is an Exploit?**

An exploit is a technique, code, or method used to take advantage of a vulnerability.

| Vulnerability                                           |
| ------------------------------------------------------- |
| ↓  <br>Exploit  <br>↓  <br>Unauthorized access / impact |

14. **What Is Risk?**

Risk is the possibility of loss or damage when a threat takes advantage of a vulnerability.
Risk ≈ Likelihood × Impact

| Situation              | Likelihood | Impact |
| ---------------------- | ---------- | ------ |
| Weak admin password    | High       | High   |
| Old unused account     | Medium     | Medium |
| No CCTV in server room | Low/Medium | High   |

The important idea is to consider both: How likely is the event to happen, and how bad would the result be?

15. **What Is an Attack Surface?**

The attack surface is the collection of possible points through which an attacker could interact with or attempt to compromise a system.

| Website   <br>                                            │                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <br>┌────────────┼────────────┐  <br>↓                                       ↓                                       ↓  <br>Login                            API                             Upload  <br>│                                      │                                       │  <br>↓                                      ↓                                       ↓  <br>Password             Endpoint                              File |

House analogy: a house may have a front door, back door, windows, garage, and balcony. These are possible entry points. Similarly, applications and networks have multiple possible interaction points.

16. **Who Is a Hacker?**

A hacker is a person who uses technical knowledge to understand, interact with, modify, or test systems. Hackers can have very different intentions and levels of authorization.

17. **Types of Hackers**

White Hat

A white-hat hacker is an authorized security professional who tests systems with permission to identify and fix weaknesses.

| Company                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- |
| ↓  <br>Authorizes security tester  <br>↓  <br>Tester finds vulnerability  <br>↓  <br>Company fixes vulnerability |

**Black Hat**

A black-hat hacker accesses or attacks systems without authorization, typically for malicious or illegal purposes.

Stealing information ,Financial fraud ,Extortion ,Sabotage ,Gray Hat

Gray-hat activity falls between the traditional white-hat and black-hat categories, often involving access without permission but without the same clearly malicious intent.

| Important                                                                    |
| ---------------------------------------------------------------------------- |
| No permission is still a problem. Intent alone does not grant authorization. |

**Script Kiddie**

A script kiddie is a person who uses existing hacking tools or scripts without deeply understanding how they work.

| Download tool                                                              |
| -------------------------------------------------------------------------- |
|  ↓  <br>Enter target  <br>↓  <br>Click Attack  <br>↓  <br>"I am a hacker!" |

The goal of this course is the opposite: understand the technology first, then understand and use the tools.

18. **What Is Ethical Hacking?**

Ethical hacking is the authorized process of identifying and testing security weaknesses in systems to help improve their security.

| HACKING                                                                                              |
| ---------------------------------------------------------------------------------------------------- |
| +  <br>PERMISSION  <br>+  <br>DEFINED SCOPE  <br>+  <br>SECURITY PURPOSE  <br>↓  <br>ETHICAL HACKING |

| Most Important Word |
| ------------------- |
| AUTHORIZED          |

19. **Real-World Example: Authorized Security Testing**

Imagine a company owns example.com and hires a security tester. The company gives written permission to test its website and API from September 21–25.

| Allowed:                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------- |
| example.com  <br>api.example.com  <br>  <br>**Not allowed:**  <br>payment provider  <br>employee laptops  <br>third-party services |

The ethical hacker must stay within the defined scope.

20. **What Is Scope?**

Scope means what you are allowed to test during a security assessment.

| Allowed:                                                                                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| example.com  <br>api.example.com  <br>192.168.1.0/24  <br>  <br>**Not allowed:**  <br>google.com  <br>facebook.com  <br>employee laptop  <br>third-party server |

Even if a tester discovers a vulnerability outside the authorized scope, they should not continue testing it.

21. **Why Permission Matters**

Scenario: You discover a possible weakness in your college's public website. Can you test it?

Answer: Only if you have authorization.

If a teacher provides a local vulnerable copy of the website specifically for a cybersecurity lab, students may test it within the defined lab scope.

| Remember                                                              |
| --------------------------------------------------------------------- |
| Publicly accessible does not automatically mean authorized to attack. |

22. **Ethical Hacking / Penetration Testing Methodology**

|   |
|---|
|1. Reconnaissance  <br>↓  <br>2. Scanning  <br>↓  <br>3. Enumeration  <br>↓  <br>4. Vulnerability Assessment  <br>↓  <br>5. Exploitation  <br>↓  <br>6. Post-Exploitation  <br>↓  <br>7. Reporting  <br>↓  <br>8. Remediation|

1. **Reconnaissance**

Collect information. Ask: What exists?

2. **Scanning**

Identify systems, ports, and services. Ask: What is exposed?

3. **Enumeration**

Gather detailed information about discovered services. Ask: What exactly is running?

4. **Vulnerability Assessment**

Look for weaknesses. Ask: What could be wrong?

5. **Exploitation**

In an authorized lab, demonstrate whether a vulnerability can actually be used.

6. **Post-Exploitation**

Understand what the obtained access means and what additional exposure may exist.

7. **Reporting**

Document findings, evidence, impact, and recommendations.

8. **Remediation**

Fix the problem and verify that the fix works.

CYWDA — Ethical Hacking | Session 1

23. **Practical 1: Discover Your Own System**

| Safety Rule                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- |
| Run these commands on your own computer or an authorized lab system. Do not scan or attack systems you do not have permission to test. |

**Step 1 — Find Current User**
whoami

This tells you which user account is currently operating the system.

**Step 2 — Find System Information**
uname -a

This displays kernel and system information such as the kernel version and architecture.

**Step 3 — Find IP Address**
ip addr

Look for an address such as 192.168.x.x on the relevant network interface. Do not worry about subnetting yet; that will be covered later.

**Step 4 — See Listening Services**
ss -tuln

This displays listening TCP/UDP sockets.

| Option | Meaning                                              |
| ------ | ---------------------------------------------------- |
| -t     | TCP                                                  |
| -u     | UDP                                                  |
| -l     | Listening                                            |
| -n     | Show numeric addresses/ports without name resolution |

24. Practical 2: Is an Open Port Automatically a Vulnerability?

Suppose a web server is running on port 80:
Port 80 → HTTP

Is an open port automatically a vulnerability? No.

| Key Lesson                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------- |
| An open port means that a service is accessible/listening. It does not automatically mean the service is vulnerable. |

Security testing requires identifying what service is running, its configuration and version, and whether a real weakness exists.

25. **Practical 3: CIA Identification Exercise**

| Question                                            | Answer          |
| --------------------------------------------------- | --------------- |
| Someone steals a company's customer database.       | Confidentiality |
| Someone modifies customer account balances.         | Integrity       |
| Someone takes down the company's website.           | Availability    |
| A database server has outdated vulnerable software. | Vulnerability   |
| A hacker attempts to exploit that vulnerability.    | Attack          |

26. Blackboard Summary

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CYBERSECURITY  <br>↓  <br>Protect Digital Assets  <br>↓  <br>CIA TRIAD  <br>┌────┼────┐  <br>↓             ↓              ↓  <br>C              I               A  <br>↓              ↓              ↓  <br>Conf. Integrity Availability  <br>  <br>  <br>THREAT  <br>↓  <br>Potential danger  <br>  <br>VULNERABILITY  <br>↓  <br>Weakness  <br>  <br>ATTACK  <br>↓  <br>Attempt to exploit weakness  <br>  <br>EXPLOIT  <br>↓  <br>Method used to exploit a vulnerability  <br>  <br>RISK  <br>↓  <br>Likelihood × Impact  <br>  <br>  <br>**ETHICAL HACKING**  <br>↓  <br>Authorization  <br>↓  <br>Scope  <br>↓  <br>Testing  <br>↓  <br>Evidence  <br>↓  <br>Report  <br>↓  <br>Fix |

27. **Quick Notes**

**Cybersecurity**

Protection of systems, networks, applications and data from unauthorized access, modification, destruction and disruption.

**CIA Triad**

| Concept         | Meaning                            | Example                           |
| --------------- | ---------------------------------- | --------------------------------- |
| Confidentiality | Only authorized people access data | Password protection               |
| Integrity       | Data remains accurate              | Prevent unauthorized mark changes |
| Availability    | Systems remain accessible          | Keeping LMS online                |

Important Terms

| Term           | Meaning                                                        |
| -------------- | -------------------------------------------------------------- |
| Asset          | Something valuable that needs protection                       |
| Threat         | Potential source of harm                                       |
| Vulnerability  | Weakness                                                       |
| Attack         | Attempt to exploit a weakness                                  |
| Exploit        | Method used to exploit a vulnerability                         |
| Risk           | Potential loss/damage from a threat exploiting a vulnerability |
| Attack Surface | Possible points of interaction or attack                       |
| Scope          | Systems and activities you are authorized to test              |

Hacker Types

|   |
|---|
|White Hat → Authorized security testing  <br>Black Hat → Unauthorized/malicious activity  <br>Gray Hat → Unauthorized activity that may not be clearly malicious|


On your own computer, identify the following:
* Current username
* Operating system
* IP address
* Network interface
* Listening ports/services

| whoami  <br>uname -a  <br>ip addr  <br>ss -tuln |
| ----------------------------------------------- |

| Information       | Your Result |
| ----------------- | ----------- |
| Username          |             |
| Operating System  |             |
| IP Address        |             |
| Network Interface |             |
| Listening Ports   |             |

**Security Questions**

1. Why should confidential information be protected?

2. Give one example of an integrity attack.

3. What is the difference between a threat and a vulnerability?

4. Why is permission important in ethical hacking?

5. Is an open port automatically a vulnerability? Explain.

6. Learning Outcomes


| Core Idea to Remember                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Ethical Hacking is not 'how to hack anything'. It is understanding how systems work, finding weaknesses through authorized testing, collecting evidence, and helping fix those weaknesses. |
