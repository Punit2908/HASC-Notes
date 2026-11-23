
# Session 13: Vulnerability Analysis – Finding, Understanding and Prioritizing Security Weaknesses

**Made by:** Punit Jangra  
**Duration:** 3–3.5 Hours  
**Level:** Beginner to Intermediate

---

# 1. Learning Objectives

By the end of this session, students should be able to:

1. Explain what vulnerability analysis is.
2. Understand the difference between a threat, vulnerability, exploit and risk.
3. Understand CVE, CWE, CPE and CVSS.
4. Read and interpret vulnerability reports.
5. Understand how vulnerability scanners work.
6. Perform a basic vulnerability assessment using Greenbone/OpenVAS.
7. Search for known vulnerabilities using SearchSploit.
8. Understand false positives and false negatives.
9. Verify findings without unnecessarily exploiting systems.
10. Prioritize vulnerabilities and recommend suitable remediation.

---

# PART 1: Understanding Vulnerability Analysis

## 2. What Is a Vulnerability?

A vulnerability is a weakness in a system, application, network or configuration that could be used to compromise its security.

A vulnerability can exist because of:

- Outdated software.
- Weak passwords.
- Incorrect permissions.
- Unnecessary open services.
- Poor security configurations.
- Programming mistakes.
- Missing security updates.
- Improper access controls.

### Real-world examples

**Example 1: Outdated software**

A company uses an old version of a web server containing a publicly documented security weakness.

An attacker may be able to exploit that weakness under certain conditions.

**Example 2: Weak password**

An administrator uses a password that is easy to guess.

An unauthorized person may gain access to the account.

**Example 3: Misconfigured file sharing**

A server allows unauthenticated users to access confidential files.

This may lead to information disclosure.

**Example 4: Unnecessary services**

A server exposes services that are not required for its operation.

Every unnecessary service increases the system's attack surface.

## 3. Important Security Terminology

Students must understand these terms before using vulnerability scanners.

| Term | Meaning |
|---|---|
| Asset | Something valuable that needs protection |
| Threat | Something that could cause harm |
| Vulnerability | A weakness that could be exploited |
| Exploit | A method or code that takes advantage of a vulnerability |
| Attack | An attempt to compromise a system |
| Risk | The potential impact and likelihood of harm |
| Patch | An update that fixes a software problem |
| Mitigation | An action that reduces the likelihood or impact of a weakness |

### Understand the relationship

Consider a company server:

- Asset: Company database.
- Threat: Unauthorized attacker.
- Vulnerability: Database server has an unpatched security weakness.
- Exploit: A method that takes advantage of that weakness.
- Impact: Unauthorized access to company information.
- Mitigation: Apply the security update and restrict access.

### Important distinction

A vulnerability does not automatically mean that a system has been compromised.

A vulnerability represents a potential weakness. Whether it can be exploited depends on the system configuration, exposure, privileges and other conditions.

---

# PART 2: Vulnerability Analysis vs Vulnerability Scanning

## 4. What Is Vulnerability Scanning?

Vulnerability scanning is the process of using automated tools to identify known security weaknesses in systems and applications.

A scanner may examine:

- Software versions.
- Operating system updates.
- Known CVEs.
- Network services.
- Security configurations.
- SSL/TLS configurations.
- Exposed services.
- Common application weaknesses.

Examples of vulnerability scanners:

1. Greenbone/OpenVAS.
2. Nessus.
3. Qualys.

## 5. Scanning vs Analysis

These terms are related but not identical.

| Vulnerability Scanning | Vulnerability Analysis |
|---|---|
| Uses tools to identify possible weaknesses | Examines and evaluates identified weaknesses |
| Often automated | Combines automated and manual work |
| Produces findings | Determines their relevance and impact |
| May report false positives | Investigates whether findings are genuine |
| Provides initial severity information | Prioritizes remediation |

### Example

A scanner reports:

```text
Possible vulnerability:
Outdated web server version detected.

Severity:
High
```

A security analyst must investigate:

1. Is the detected version accurate?
2. Is the reported vulnerability applicable to this version?
3. Is the vulnerable feature enabled?
4. Is the service accessible to untrusted users?
5. Is a security patch available?
6. What would happen if the vulnerability were exploited?

This investigation is vulnerability analysis.

---

# PART 3: Understanding CVE, CWE, CPE and CVSS

## 6. What Is CVE?

CVE stands for **Common Vulnerabilities and Exposures**.

It is a system for assigning identifiers to publicly known cybersecurity vulnerabilities.

Each CVE has a unique identifier.

Example:

```text
CVE-2021-44228
```

This identifier refers to the widely known Log4Shell vulnerability.

### Understanding a CVE identifier

```text
CVE - 2021 - 44228
 |      |      |
 |      |      +---- Unique identifier
 |      +----------- Year
 +------------------ CVE prefix
```

A CVE identifier helps security professionals refer to the same vulnerability without confusion.

### Where can we find CVE information?

- National Vulnerability Database: https://nvd.nist.gov/
- CVE Program: https://www.cve.org/
- MITRE CVE: https://cve.mitre.org/

### Practical: Search for a CVE

1. Open https://nvd.nist.gov/
2. Search for `CVE-2021-44228`.
3. Read the vulnerability description.
4. Identify the affected product.
5. Find the severity score.
6. Read the references and remediation information.

### Questions

1. Which software was affected?
2. Why was this vulnerability dangerous?
3. What versions or configurations were affected?
4. What was the recommended remediation?

The purpose is to learn how to research a vulnerability using reliable sources.

---

## 7. What Is CWE?

CWE stands for **Common Weakness Enumeration**.

While CVE identifies a specific publicly known vulnerability, CWE describes a general category of software weakness.

Examples:

| CWE | Weakness |
|---|---|
| CWE-79 | Cross-Site Scripting |
| CWE-89 | SQL Injection |
| CWE-22 | Path Traversal |
| CWE-287 | Improper Authentication |
| CWE-798 | Use of Hard-coded Credentials |

### CVE vs CWE

Think of it this way:

- CWE describes a type of weakness.
- CVE identifies a particular vulnerability associated with a product or system.

For example, a specific SQL injection vulnerability may have a CVE identifier, while SQL injection itself is described by CWE-89.

Reference: https://cwe.mitre.org/

---

## 8. What Is CPE?

CPE stands for **Common Platform Enumeration**.

It provides a standardized way to identify software and hardware products.

Security databases use product information to connect vulnerabilities with affected products.

For example, a product record may describe:

- Vendor.
- Product name.
- Version.
- Update.
- Edition.

This is useful because vulnerability scanners need to determine whether the software detected on a system matches an affected product.

Reference: https://nvd.nist.gov/products/cpe

---

## 9. What Is CVSS?

CVSS stands for **Common Vulnerability Scoring System**.

It provides a standardized way to communicate the severity of a vulnerability.

A vulnerability receives a numerical score based on several characteristics.

For this session, we will use the CVSS v3.1 severity ranges.

| Score | Severity |
|---|---|
| 0.0 | None |
| 0.1–3.9 | Low |
| 4.0–6.9 | Medium |
| 7.0–8.9 | High |
| 9.0–10.0 | Critical |

### Example

Suppose a scanner reports:

```text
Vulnerability: Example Security Weakness
CVSS Score: 9.8
Severity: Critical
```

This indicates a very serious vulnerability according to the CVSS v3.1 scoring model.

However, severity alone does not determine the business risk.

A critical vulnerability on an isolated test machine may be less urgent than a high-severity weakness on an internet-facing production server containing sensitive data.

### Important CVSS factors

CVSS v3.1 considers several characteristics.

| Factor | Meaning |
|---|---|
| Attack Vector | How the vulnerability can be reached |
| Attack Complexity | How difficult exploitation is |
| Privileges Required | Whether access is needed before exploitation |
| User Interaction | Whether another user must perform an action |
| Scope | Whether impact extends beyond the vulnerable component |
| Confidentiality | Impact on information confidentiality |
| Integrity | Impact on information accuracy |
| Availability | Impact on system availability |

### CVSS Calculator

Use the official calculator:

https://www.first.org/cvss/calculator/3.1

### Practical activity

Open the CVSS calculator.

Change the following values and observe how the score changes:

1. Network attack vector vs local attack vector.
2. No privileges required vs high privileges required.
3. No user interaction vs required user interaction.
4. High confidentiality impact vs no confidentiality impact.

Ask students:

Why can two vulnerabilities with different technical characteristics receive different severity scores?

**Important:** Always mention which CVSS version a score uses. Do not compare scores from different versions as if their scoring systems were identical.

---

# PART 4: Understanding Vulnerability Scanner Architecture

## 10. How Does a Vulnerability Scanner Work?

A vulnerability scanner generally follows a process like this:

```text
Target System
     |
     v
Discover Available Services
     |
     v
Identify Software and Versions
     |
     v
Compare Against Vulnerability Data
     |
     v
Perform Security Checks
     |
     v
Generate Findings
     |
     v
Assign Severity
     |
     v
Create Vulnerability Report
```

### Example

Suppose a server is running an outdated application.

The scanner:

1. Identifies the service.
2. Collects version information.
3. Checks its vulnerability database.
4. Finds a potentially applicable vulnerability.
5. Reports the result with supporting evidence.

The analyst then validates the finding.

### Types of vulnerability scans

**1. Network-based scan**

Examines systems through network connections.

**2. Credentialed scan**

Uses authorized credentials to inspect the system from inside.

It can identify missing patches and configuration problems that may not be visible externally.

**3. Non-credentialed scan**

Checks the system without logging into it.

It provides an external perspective but may miss internal configuration issues.

**4. Web application scan**

Examines web applications for common security weaknesses.

### Credentialed vs Non-credentialed

| Credentialed | Non-credentialed |
|---|---|
| Uses authorized login credentials | Does not require system login |
| Can inspect internal configurations | Mostly sees externally exposed information |
| Can identify more missing patches | May miss internal weaknesses |
| Requires careful credential handling | Does not require privileged credentials |

---

# PART 5: Greenbone / OpenVAS

## 11. What Is Greenbone?

Greenbone Community Edition provides vulnerability management capabilities.

Its vulnerability scanner is commonly referred to as OpenVAS.

It helps security professionals:

- Scan systems.
- Identify known vulnerabilities.
- Detect outdated software.
- Find configuration weaknesses.
- Generate vulnerability reports.
- Track findings over time.

Website:

https://greenbone.net/

### Why use Greenbone?

Imagine an organization has 100 servers.

Manually checking every server for known vulnerabilities would take a considerable amount of time.

A vulnerability scanner automates many of these checks and provides a central report.

### Important components

| Component | Purpose |
|---|---|
| Scanner | Performs vulnerability checks |
| Vulnerability Tests | Checks for known security weaknesses |
| Feed | Supplies vulnerability test and related data |
| Target | Defines which systems may be scanned |
| Task | Defines and starts a scan |
| Report | Contains discovered findings |

---

## 12. Preparing Greenbone

Greenbone installation can be resource-intensive because it needs scanner components and vulnerability feeds.

For this classroom session, the recommended approach is:

- Use a preconfigured Greenbone Community Edition environment.
- Run it in a dedicated lab VM or approved lab deployment.
- Allow its feeds to synchronize before the practical.
- Use a small isolated target environment.

Do not spend the entire lesson troubleshooting scanner installation.

### Important lab requirements

Recommended starting resources for a dedicated Greenbone VM:

- 4 CPU cores.
- 8 GB RAM or more.
- Adequate disk space for feeds and scan data.
- Isolated lab networking.

Actual requirements depend on the deployment and scan workload.

Students can observe the instructor's configured instance if their computers cannot run Greenbone.

---

## 13. Greenbone Practical

### Scenario

You are a security analyst.

Your instructor provides an Ubuntu Server in an isolated lab.

Your task is to perform a vulnerability assessment and understand the findings.

### Step 1: Open Greenbone

Open the Greenbone web interface using the address provided by your instructor.

Log in using the classroom account.

### Step 2: Check Feed Status

Before scanning, confirm that the vulnerability feeds have synchronized successfully.

Why?

Because an outdated vulnerability database may produce incomplete or outdated results.

### Step 3: Create a Target

Navigate to the Targets section.

Create a target:

```text
Name: Ubuntu Lab Server
Host: 192.168.56.105
Port List: Appropriate lab port list
```

Replace the example IP with the actual target IP.

### Step 4: Create a Scan Task

Navigate to the Tasks section.

Create a new task:

```text
Name: Ubuntu Vulnerability Assessment
Target: Ubuntu Lab Server
Scan Configuration: Full and Fast
```

The exact available scan configurations depend on the Greenbone installation.

### Step 5: Start the Scan

Start the task.

Wait for the scan to finish.

Do not repeatedly launch scans while the first task is running.

### Step 6: Open the Report

After completion, examine:

- Vulnerability name.
- Severity.
- CVSS score.
- Affected host.
- Affected port.
- Detection result.
- Technical details.
- Recommended solution.

### Example report

The following is illustrative. Actual findings depend on the target.

```text
Host: 192.168.56.105

Finding:
Outdated Software Detected

Severity:
Medium

CVSS:
5.3

Affected Service:
Example Service

Recommendation:
Review the installed version and apply
the appropriate vendor security update.
```

### Step 7: Investigate One Finding

Choose one finding and answer:

1. What is the vulnerability?
2. Which service is affected?
3. What evidence does the scanner provide?
4. What is the severity?
5. Is the finding confirmed?
6. What is the recommended solution?

---

# PART 6: Nessus

## 14. What Is Nessus?

Nessus is a vulnerability assessment tool developed by Tenable.

It is commonly used to identify:

- Missing security updates.
- Known vulnerabilities.
- Weak configurations.
- Exposed services.
- Security policy issues.

Website:

https://www.tenable.com/products/nessus

### Nessus vs Greenbone

| Feature | Greenbone | Nessus |
|---|---|---|
| Type | Vulnerability management/scanning platform | Vulnerability scanner |
| Community option | Community Edition | Free and paid offerings vary by current licensing |
| Vulnerability checks | Feed-based | Plugin-based |
| Reports | Yes | Yes |
| Professional usage | Yes | Yes |

Licensing and free-tier availability can change, so check Tenable's current official product page before planning a classroom installation.

### Instructor demonstration

If Nessus is available, demonstrate:

1. Creating a scan.
2. Adding an authorized lab target.
3. Selecting a suitable scan template.
4. Starting the assessment.
5. Reading vulnerability results.
6. Exporting a report.

Students do not need to run both Greenbone and Nessus during this session. One complete practical is more useful than two rushed demonstrations.

---

# PART 7: SearchSploit and Exploit Research

## 15. What Is Exploit-DB?

Exploit Database is a public archive of exploit information and security research.

Website:

https://www.exploit-db.com/

It contains information related to publicly documented vulnerabilities and proof-of-concept research.

A security analyst may use it to research whether a known vulnerability has publicly documented exploit information.

### Important distinction

Finding an exploit does not mean it will work against every affected product.

Applicability depends on:

- Exact software version.
- Operating system.
- Configuration.
- Required privileges.
- Network accessibility.
- Other technical conditions.

Students must never assume that a matching product name guarantees exploitability.

---

## 16. What Is SearchSploit?

SearchSploit is a command-line tool for searching a local copy of Exploit-DB.

It helps security professionals research publicly documented exploits.

### Installation

On Kali Linux:

```bash
sudo apt update
sudo apt install exploitdb
```

On Arch Linux, check whether the package is available through your configured repositories or AUR:

```bash
pacman -Ss exploitdb
```

If unavailable, follow the official Exploit-DB repository instructions:

https://github.com/offensive-security/exploitdb

### Basic Search

Search for a product:

```bash
searchsploit apache
```

Search for a specific product and version:

```bash
searchsploit "Apache 2.4"
```

Search for a particular technology:

```bash
searchsploit openssh
```

### Understand the output

A result may contain:

```text
Title
Path
Type
Platform
```

The title describes the research entry.

The path identifies the corresponding local entry.

The platform indicates the environment associated with the entry.

### Search for a CVE

```bash
searchsploit CVE-2021-44228
```

The exact results depend on the local database version.

### Update the local database

```bash
searchsploit -u
```

### Read an entry safely

SearchSploit can display an entry without executing it.

```bash
searchsploit -p <EDB-ID>
```

The EDB-ID is the identifier shown in the search results.

To inspect a locally stored text entry:

```bash
searchsploit -x <EDB-ID>
```

Review the code as research material. Do not execute exploit code against real systems.

### Student activity

1. Search for a known product.
2. Identify one matching research entry.
3. Record its title and platform.
4. Find the associated CVE, if available.
5. Research the affected versions.
6. Explain why the result does not automatically prove that your target is vulnerable.

---

# PART 8: False Positives and False Negatives

## 17. What Is a False Positive?

A false positive occurs when a scanner reports a vulnerability that does not actually exist on the target.

### Example

A scanner detects an old software version from a service banner.

However, the vendor has backported security fixes without changing the version string in the way the scanner expects.

The scanner may incorrectly report that the system is vulnerable.

### Why do false positives happen?

- Incorrect version detection.
- Incomplete service information.
- Vendor-specific patches.
- Unusual system configurations.
- Incorrect vulnerability matching.
- Inaccurate scanner fingerprints.

## 18. What Is a False Negative?

A false negative occurs when a real vulnerability exists but the scanner fails to detect it.

### Example

A vulnerability scanner cannot identify a weakness because:

- A firewall blocks the required checks.
- The service hides version information.
- The scanner lacks credentials.
- The relevant test is unavailable.
- The vulnerability requires a specific application workflow.

### Comparison

| False Positive | False Negative |
|---|---|
| Reports a weakness that is not present | Misses a weakness that is present |
| Can waste investigation time | Can leave real risks undiscovered |
| Requires verification | Requires better assessment coverage |

### Professional lesson

A scanner report is evidence to investigate, not an unquestionable verdict.

---

# PART 9: Validating Vulnerability Findings

## 19. How Do We Verify a Vulnerability?

Suppose a scanner reports:

```text
Finding:
Potentially vulnerable software version

Severity:
High
```

Do not immediately attempt exploitation.

Follow a verification process.

### Step 1: Identify the product

Determine the exact product and software version.

### Step 2: Check the vendor documentation

Visit the official vendor security advisory.

Determine:

- Which versions are affected?
- Which configurations are affected?
- Is a security update available?
- Are there workarounds?

### Step 3: Check the CVE record

Search the CVE identifier in the NVD or CVE database.

Read its description and references.

### Step 4: Compare the target configuration

Check whether the affected component or feature is actually enabled.

### Step 5: Collect evidence

Record:

- Product name.
- Version.
- Scanner result.
- Supporting evidence.
- Relevant vendor advisory.
- Date of verification.

### Step 6: Determine the result

Classify the finding as:

- Confirmed.
- Likely.
- False positive.
- Inconclusive.
- Not applicable.

### Important

Not every finding can be fully validated through remote inspection.

When evidence is insufficient, report uncertainty honestly instead of claiming that a vulnerability has been confirmed.

---

# PART 10: Vulnerability Prioritization

## 20. Why Is Prioritization Important?

Imagine a company has 100 vulnerability findings.

Can the IT team fix all of them immediately?

Usually not.

Security teams must decide which weaknesses need attention first.

### Factors to consider

1. CVSS severity.
2. Whether the system is internet-facing.
3. Whether the vulnerability is actively exploited.
4. Whether exploit code is publicly available.
5. Sensitivity of the affected asset.
6. Availability of patches.
7. Existing security controls.
8. Business impact.

### Example

Consider these findings:

| Finding | CVSS | Asset | Priority |
|---|---:|---|---|
| A | 9.8 | Public-facing production server | Critical |
| B | 8.1 | Isolated test server | Lower than A |
| C | 6.5 | Internal database server | Depends on exposure and data |
| D | 4.3 | Unused lab machine | Low |

The numbers are illustrative.

Notice that the CVSS score alone does not determine the final business priority.

A vulnerability's actual risk depends on its environment.

### What is EPSS?

EPSS stands for Exploit Prediction Scoring System.

It estimates the probability that a published vulnerability will be exploited in the wild over a specified period.

Reference:

https://www.first.org/epss/

EPSS is useful as an additional prioritization signal, but it does not replace CVSS or organizational risk assessment.

### What is CISA KEV?

CISA KEV stands for Known Exploited Vulnerabilities Catalog.

It lists vulnerabilities known to have been exploited in real-world attacks.

Reference:

https://www.cisa.gov/known-exploited-vulnerabilities-catalog

A vulnerability appearing in KEV deserves serious attention, particularly when the affected asset is exposed.

---

# PART 11: Complete Practical Assessment

## 21. Practical: Perform a Vulnerability Assessment

### Scenario

You are a junior security analyst.

Your organization has provided an Ubuntu Server in an isolated classroom network.

Your responsibility is to perform a basic vulnerability assessment and prepare a report.

### Task 1: Identify the target

Record:

```text
Target Name:
Target IP:
Operating System:
Assessment Date:
```

Use the information provided by your instructor.

### Task 2: Review previous enumeration findings

Use the results collected during Session 12.

Record:

- Exposed services.
- Software information.
- Potentially unnecessary services.
- Interesting configurations.

Do not repeat the entire Nmap masterclass.

### Task 3: Run Greenbone

Use the instructor-provided Greenbone environment.

Create a target and run an appropriate scan against the authorized lab machine.

### Task 4: Review findings

Choose at least three findings, if available.

For each finding, record:

- Name.
- CVE identifier, if provided.
- CVSS score and version.
- Affected service.
- Scanner evidence.
- Recommended solution.

If fewer than three findings are discovered, analyze all available findings. Do not invent vulnerabilities just to complete the worksheet.

### Task 5: Research a finding

Select one CVE from the report.

Research it using:

- NVD.
- CVE Program.
- Official vendor security advisory.
- Exploit-DB, where relevant.

### Task 6: Search for exploit research

Use SearchSploit:

```bash
searchsploit <product-or-CVE>
```

Determine whether public exploit research exists.

Do not execute the exploit.

### Task 7: Validate the finding

Determine whether the reported version and configuration match the affected conditions.

Classify the finding:

```text
Confirmed
Likely
False Positive
Inconclusive
Not Applicable
```

### Task 8: Prioritize findings

Rank the findings based on:

- Severity.
- Asset importance.
- Exposure.
- Exploitation evidence.
- Business impact.

### Task 9: Recommend remediation

Examples:

- Apply security updates.
- Disable unnecessary services.
- Restrict access using firewall rules.
- Improve authentication.
- Correct insecure configurations.
- Remove unsupported software.

### Task 10: Prepare the report

Use the following structure:

```text
VULNERABILITY ASSESSMENT REPORT

1. Assessment Overview
2. Scope
3. Target Information
4. Tools Used
5. Methodology
6. Vulnerability Findings
7. Evidence
8. Severity and Risk
9. Validation Results
10. Remediation Recommendations
11. Conclusion
```

---

# PART 12: Assessment Questions

## Theory Questions

1. What is a vulnerability?
2. What is the difference between a threat and a vulnerability?
3. What is an exploit?
4. What is vulnerability analysis?
5. What is vulnerability scanning?
6. What is CVE?
7. What is CWE?
8. What is CPE?
9. What is CVSS?
10. What is the difference between CVE and CWE?
11. What is a credentialed scan?
12. What is a non-credentialed scan?
13. What is Greenbone?
14. What is SearchSploit?
15. What is a false positive?
16. What is a false negative?
17. What is the purpose of vulnerability validation?
18. Why should CVSS not be the only prioritization factor?
19. What is EPSS?
20. What is the CISA KEV catalog?

## Practical Questions

1. Search for a given CVE on the NVD.
2. Identify its affected product.
3. Find its CVSS score.
4. Explain its severity.
5. Search for related exploit research using SearchSploit.
6. Interpret a Greenbone finding.
7. Identify whether a finding is confirmed or inconclusive based on the evidence.
8. Recommend a suitable remediation.

---

# PART 13: Homework

## Homework 1: CVE Research

Research these vulnerabilities:

- CVE-2021-44228
- CVE-2017-0144
- CVE-2021-34527

For each, find:

1. Vulnerability name.
2. Affected product.
3. CVSS score and version.
4. Vulnerability description.
5. Potential impact.
6. Recommended remediation.

Use official CVE, NVD and vendor references.

## Homework 2: Security Terminology

Explain the difference between:

- CVE and CWE.
- CVSS and EPSS.
- Vulnerability scanning and vulnerability analysis.
- False positive and false negative.
- Exploit and vulnerability.

## Homework 3: Report Writing

Prepare a sample vulnerability assessment report using the classroom findings.

Your report must distinguish confirmed findings from potential findings.

---

# PART 14: Instructor Notes

## Suggested Session Timing

| Activity | Duration |
|---|---:|
| Introduction to vulnerability analysis | 20 minutes |
| CVE, CWE, CPE and CVSS | 30 minutes |
| Scanner architecture | 15 minutes |
| Greenbone practical | 40 minutes |
| SearchSploit practical | 20 minutes |
| False positives and validation | 25 minutes |
| Vulnerability prioritization | 15 minutes |
| Practical report and assessment | 25 minutes |
| Recap and questions | 10 minutes |

## Teaching Advice

Students often make one major mistake: they believe that a scanner reporting a vulnerability means the system is definitely vulnerable.

Make them question every finding.

For each result, ask:

1. What exactly did the scanner detect?
2. What evidence supports the finding?
3. Which product and version are affected?
4. Does the vulnerability apply to this configuration?
5. What would be the potential impact?
6. How should the organization fix it?

The objective is not to generate the largest number of vulnerability findings.

The objective is to identify genuine weaknesses, understand their impact and recommend appropriate remediation.

---

# Next Session

## Session 14: System Hacking

Topics:

- Understanding system access and authentication.
- Password security and password auditing.
- Privilege concepts and access control.
- Understanding common system security weaknesses.
- Controlled vulnerability validation.
- Security hardening and defensive measures.

Tools planned:

- Metasploit Framework.
- John the Ripper.
- Hashcat.

Practical environment:

An isolated, deliberately vulnerable virtual machine with instructor-approved exercises.
