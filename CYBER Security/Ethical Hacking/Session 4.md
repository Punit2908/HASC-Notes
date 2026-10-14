

Session objective: Learn how a real penetration test is planned, performed, documented, and completed. Students will use Linux commands throughout the lesson to inspect their own system, collect evidence, organize findings, and prepare a basic security report.

## 1. Introduction: How Does a Penetration Test Actually Work?

Imagine that a company hires you to check the security of its website. Your job is not simply to open a terminal, run a few commands, and declare the website secure or insecure.

You must follow a process that answers several questions:

- What exactly are you allowed to test?
    
- What information can you gather about the target?
    
- Which services and potential weaknesses have you identified?
    
- How can you verify a suspected vulnerability safely?
    
- What evidence supports your conclusion?
    
- How serious is the problem?
    
- What should the company do to fix it?
    
- How will you confirm that the fix works?
    

This complete process is called the penetration testing lifecycle.

A penetration test, often called a pentest, is an authorized security assessment in which a tester examines a system for exploitable weaknesses using agreed methods and boundaries.

A vulnerability assessment primarily identifies and evaluates possible weaknesses. A penetration test generally goes further by attempting controlled validation of selected weaknesses to understand their practical impact. The two activities overlap, and the exact distinction depends on the engagement.

### Our practical scenario

Throughout today's lesson, we will imagine that we are security testers working on a training computer.

We will:

1. Prepare a workspace for our assessment.
    
2. Record basic system information.
    
3. Inspect network configuration and listening ports.
    
4. Save command output as evidence.
    
5. Create a sample vulnerability finding.
    
6. Assign a risk rating.
    
7. Prepare a basic report.
    
8. Explain how remediation and retesting complete the lifecycle.
    

Safety rule: All commands in this session inspect your own Linux system or create files in your home directory. Network testing later in the course must be restricted to systems you own or have explicit permission to assess.

## 2. Stage One: Planning and Defining the Scope

### 2.1 What is planning?

Planning means deciding what the assessment is intended to accomplish, which assets are included, what methods are permitted, and how the results will be recorded.

Without planning, a tester might inspect the wrong server, interrupt a service, collect unnecessary private information, or waste time testing something irrelevant.

Suppose a college asks you to assess its student portal. Before starting, you must know whether the assessment includes the staging website, the live website, the database, or a third-party payment service.

A website link does not automatically authorize you to test everything behind it.

### 2.2 Create a workspace for the assessment

We will create a directory to store our notes, evidence, and reports.

A directory is another name for a folder. It organizes files so they can be located and managed easily.

Open your Linux terminal and run:

```
mkdir -p ~/cyber-lab/session-4/{notes,evidence,reports}
```

Let's understand the command before moving forward.

- `mkdir` means make directory. It creates folders.
    
- `-p` tells Linux to create any missing parent directories and not complain if the directories already exist.
    
- `~` represents your home directory.
    
- `/` separates directory names in a path.
    
- `{notes,evidence,reports}` is shell brace expansion, which generates the three directory names.
    

The command creates a structure similar to this:

```
cyber-lab/
└── session-4/
    ├── notes/
    ├── evidence/
    └── reports/
```

Now inspect the structure:

```
ls -R ~/cyber-lab/session-4
```

What does `ls -R` do?

- `ls` lists files and directories.
    
- `-R` means recursive, so it also lists the contents of subdirectories.
    

You should see the three directories you created.

### Why do we need separate folders?

- `notes/` stores observations and working notes.
    
- `evidence/` stores relevant command output, screenshots, and other supporting information.
    
- `reports/` stores the final findings and assessment report.
    

Keeping these separate makes the work easier to review. In a real engagement, evidence may also contain sensitive information, so access must be restricted and retention must follow the agreed policy.

### Student activity

Create a file containing the purpose of your assessment:

```
echo "Session 4: Penetration Testing Lifecycle" \
  > ~/cyber-lab/session-4/notes/objective.txt
```

Read it:

```
cat ~/cyber-lab/session-4/notes/objective.txt
```

New terms:

- `echo` prints text to the terminal.
    
- `>` redirects that text into a file, replacing the file's existing contents if the file already exists.
    
- `cat` displays a file's contents.
    

To append text without replacing the existing content, use `>>`:

```
echo "Target: My own Linux training machine" \
  >> ~/cyber-lab/session-4/notes/objective.txt
```

The distinction between `>` and `>>` matters. Accidentally replacing a report with one command is a wonderfully efficient way to create extra work.

## 3. Stage Two: Reconnaissance and Information Gathering

### 3.1 What is reconnaissance?

Reconnaissance is the process of gathering information about a target before deeper testing begins.

In security testing, the information might include:

- Domain names and IP addresses.
    
- Operating systems and software versions.
    
- Network services.
    
- Application technologies.
    
- Publicly available documentation.
    
- Login pages and exposed endpoints.
    

The purpose is to understand the target and identify areas that may need further examination.

Reconnaissance is commonly divided into two categories.

Passive reconnaissance: Collecting information without directly probing the target's systems. Examples include reviewing public documentation or publicly available domain information.

Active reconnaissance: Interacting directly with the target, for example by sending requests or scanning approved hosts. This requires appropriate authorization.

### 3.2 Start by identifying your own machine

Before assessing another system, learn how to inspect the computer you are using.

Run:

```
whoami
```

This displays the username of the current user.

Next:

```
hostname
```

This displays the computer's hostname, which is its configured system name.

Now:

```
uname -a
```

This displays kernel and system information.

What is a kernel?

The kernel is the core part of an operating system. It manages resources such as memory, processors, devices, and communication between applications and hardware.

The `uname -a` command can reveal details such as the kernel name, hostname, kernel release, and processor architecture, depending on the system.

Now collect basic information in one place:

```
{
  echo "=== USER ==="
  whoami

  echo "=== HOSTNAME ==="
  hostname

  echo "=== KERNEL ==="
  uname -a
} > ~/cyber-lab/session-4/evidence/system-info.txt
```

Read the saved output:

```
cat ~/cyber-lab/session-4/evidence/system-info.txt
```

### What happened here?

The curly braces group multiple commands into one block. The `>` operator redirects the block's combined output into a file.

The lines beginning with `===` are simply labels. They make the evidence easier for another person to understand.

This is our first example of evidence collection through command-line output.

### 3.3 Record the operating system

On many Linux distributions, you can inspect the operating system's identification file:

```
cat /etc/os-release
```

This usually displays the distribution name, version, and related identification information.

Why is this useful?

Different distributions may use different package managers, default configurations, and security tools. Knowing the operating system helps the tester interpret the results correctly.

Important: `/etc/os-release` is a configuration and identification file. The command only reads it; it does not change the operating system.

### Student activity

Answer these questions after running the commands:

1. What is your current username?
    
2. What is your machine's hostname?
    
3. Which Linux distribution are you using?
    
4. What kernel release is displayed?
    
5. Why might this information matter when investigating a security problem?
    

Write your answers in:

```
~/cyber-lab/session-4/notes/
```

## 4. Stage Three: Scanning and Enumeration

### 4.1 What is scanning?

Scanning is the process of checking systems or network services to discover what is reachable and what may need further investigation.

For example, a server may provide a website, a remote administration service, or a DNS service. Scanning can help identify the network ports through which these services communicate.

### 4.2 What is a port?

A port is a numbered communication endpoint used by network applications. TCP and UDP each have their own port-number space, ranging from 0 to 65535.

Think of an IP address as the address of an apartment building and a port as the number of a particular apartment or service within it. The analogy is not perfect, but it helps explain why one computer can provide multiple network services.

Some familiar examples are:

|Port|Common use|
|---|---|
|22|SSH remote administration|
|53|DNS name resolution|
|80|HTTP web traffic|
|443|HTTPS web traffic|
|3306|MySQL database service|

These are common defaults, not guarantees. A service can be configured to use a different port, and an open port does not automatically indicate a vulnerability.

### 4.3 Inspect your network configuration

Run:

```
ip addr
```

This command displays network interfaces and their configured IP addresses.

A network interface is the component through which a computer connects to a network. Examples include a Wi-Fi adapter, Ethernet adapter, or virtual network interface.

You may see interface names such as `lo`, `eth0`, or `wlan0`, although modern systems use many other naming conventions.

The `lo` interface is the loopback interface. It allows a computer to communicate with itself, commonly through the address `127.0.0.1` for IPv4.

Now inspect the routing table:

```
ip route
```

A routing table contains information the computer uses to decide where to send network traffic.

You may see a line beginning with `default via`. This normally indicates the default gateway, which is the router or next-hop device used when no more specific route applies.

### 4.4 Inspect listening ports

A service can be running on a computer without accepting network connections. To understand which services are listening, use:

```
ss -tuln
```

Let's break down this command:

- `ss` displays information about network sockets.
    
- A socket is an endpoint used for communication, often associated with an IP address and port.
    
- `-t` includes TCP sockets.
    
- `-u` includes UDP sockets.
    
- `-l` shows listening sockets.
    
- `-n` displays numerical addresses and port numbers rather than attempting to resolve names.
    

A listening socket is an endpoint waiting for incoming connections or datagrams, depending on the protocol.

You might see output similar to this:

```
Netid  State   Local Address:Port
tcp    LISTEN  127.0.0.1:631
tcp    LISTEN  0.0.0.0:8080
```

This is illustrative output. Your computer may show different results.

Let's interpret it.

- `127.0.0.1:631` indicates a TCP listening socket on the local loopback address, port 631.
    
- `0.0.0.0:8080` generally indicates a TCP listener bound to all IPv4 local addresses on port 8080.
    

A service bound to `127.0.0.1` is normally accessible only through the local machine. A service bound to `0.0.0.0` can accept connections through any applicable IPv4 interface, subject to firewall rules and other network restrictions.

Security lesson: The address on which a service listens matters, not just the port number.

### 4.5 Save the network evidence

Let's store our findings:

```
ip addr > ~/cyber-lab/session-4/evidence/network-addresses.txt
```

Then:

```
ip route > ~/cyber-lab/session-4/evidence/routes.txt
```

Finally:

```
ss -tuln > ~/cyber-lab/session-4/evidence/listening-ports.txt
```

Inspect the saved results:

```
cat ~/cyber-lab/session-4/evidence/listening-ports.txt
```

We have now collected information that can help us understand the machine's network configuration.

### 4.6 What is enumeration?

Scanning often gives us an initial list of reachable hosts, ports, and services. Enumeration means gathering more detailed information about those discovered assets.

For example:

- Scanning identifies a web service.
    
- Enumeration investigates which service is present, what information it exposes, and how it is configured.
    
- Vulnerability assessment examines whether that service has known weaknesses or insecure settings.
    

Enumeration should stay within the approved scope and avoid unnecessary access to sensitive information.

### Student activity

Run `ip addr`, `ip route`, and `ss -tuln`.

In your notes, identify:

1. One network interface.
    
2. An IP address assigned to your machine, if available.
    
3. The default route, if present.
    
4. One listening port, if any appears.
    
5. One reason a listening service might need further security review.
    

If no listening ports appear, that is still a valid observation. Do not create an unnecessary service just to make the exercise look more exciting.

## 5. Stage Four: Vulnerability Assessment

### 5.1 What is a vulnerability?

A vulnerability is a weakness in software, hardware, configuration, or a security process that could be used to compromise a system or otherwise cause harm.

Examples include:

- An application that fails to verify a user's permissions.
    
- A server running software affected by a known security flaw.
    
- Sensitive files with overly permissive access.
    
- A login mechanism that allows unlimited password attempts.
    
- A web application that constructs database queries unsafely.
    

A vulnerability is not the same thing as a threat.

A threat is something that could cause harm, such as an attacker attempting unauthorized access.

A vulnerability is a weakness that could make the harm possible or more likely.

Risk combines the possibility of an adverse event with its potential consequences, taking relevant circumstances into account.

### 5.2 Vulnerability assessment versus scanning

These terms are related but not identical.

- Scanning discovers hosts, ports, services, or potential weaknesses.
    
- Vulnerability assessment evaluates suspected weaknesses, their evidence, and their potential impact.
    
- Penetration testing may include controlled validation of selected weaknesses to demonstrate whether and how they can be exploited.
    

A scanner might report that a server uses an outdated software version. A tester must determine whether the version is actually affected, whether the relevant feature is enabled, whether compensating controls exist, and whether the finding is applicable to the target.

A scanner's warning is a lead to investigate, not a magical declaration of truth.

### 5.3 What is a false positive?

A false positive occurs when a security tool reports a potential problem that does not actually exist in the way described.

For example, a scanner might flag an application because it detects a version string associated with a vulnerable release. Further investigation might show that the vendor backported the security fix without changing that version string.

The finding needs validation before it is reported as a confirmed vulnerability.

A false negative occurs when a real issue exists but the tool fails to detect it.

This is why security professionals combine tools with technical understanding, manual verification, and careful evidence review.

### 5.4 What is a CVE?

CVE stands for Common Vulnerabilities and Exposures. It is a system for assigning identifiers to publicly disclosed cybersecurity vulnerabilities.

A CVE identifier may look like:

```
CVE-2024-12345
```

This is an illustrative identifier format, not a claim about a particular vulnerability.

A CVE helps people refer to the same publicly documented issue. It does not automatically tell you whether a specific computer is vulnerable.

To assess applicability, examine the affected product and versions, configuration requirements, prerequisites, available patches, and other relevant details.

### 5.5 What is CVSS?

CVSS stands for Common Vulnerability Scoring System. It provides a standardized way to describe the technical severity of a vulnerability.

CVSS considers factors such as:

- How the vulnerability can be exploited.
    
- Whether the attacker needs access or special privileges.
    
- Whether user interaction is required.
    
- Potential effects on confidentiality, integrity, and availability.
    

CVSS severity is commonly expressed using these qualitative ranges for CVSS v3.1 and v4.0 base scores:

|Score|Severity|
|---|---|
|0.0|None|
|0.1–3.9|Low|
|4.0–6.9|Medium|
|7.0–8.9|High|
|9.0–10.0|Critical|

These ranges describe CVSS base-score severity, not a complete business-risk decision. Organizations may also consider exposure, data sensitivity, exploit availability, business importance, and existing controls.

### Student activity: Create a sample finding

Create a file for a fictional vulnerability finding:

```
cat > ~/cyber-lab/session-4/notes/sample-finding.txt <<'EOF'
Finding ID: VULN-001
Title: Missing Authorization Check
Asset: Fictional student training portal
Evidence: A designated test account can view a record
belonging to another test account.
Impact: Private student information may be exposed.
Severity: High (provisional)
Recommendation: Enforce server-side authorization
for every record access.
Status: Needs review and retesting after remediation.
EOF
```

Read it:

```
cat ~/cyber-lab/session-4/notes/sample-finding.txt
```

The `cat > filename` pattern writes the supplied text into a file. The `EOF` markers tell the shell where the multi-line input begins and ends. This technique is called a here-document.

The example is fictional. No actual student records or external systems are involved.

Notice that the finding contains an asset, evidence, impact, severity, recommendation, and status. This is much more useful than a note that simply says "authorization bug."

## 6. Stage Five: Evidence Collection and Preservation

### 6.1 What is evidence in ethical hacking?

Evidence is the information that supports a security finding.

It helps another person understand what was observed, where it was observed, and why the conclusion is justified.

Examples include:

- Terminal output.
    
- Relevant application requests and responses.
    
- Screenshots.
    
- Application or system logs.
    
- Configuration details.
    
- Reproduction steps using approved test accounts.
    
- File hashes that help check whether a file has changed.
    

Evidence should be relevant, accurate, and collected within the approved scope.

### 6.2 Why is evidence important?

Imagine that your report states:

> The server exposes a sensitive service.

The administrator asks, "Which service? On which system? What did you observe?"

If you have no supporting information, the organization cannot easily verify or fix the issue.

A better finding records the target, the observation, the time, the relevant output, and the security implications.

Evidence makes findings reproducible and reduces arguments based on guesses.

### 6.3 Record the current date and time

Linux provides the `date` command for displaying the system's current date and time.

Run:

```
date
```

You can also use a standardized timestamp format:

```
date -Is
```

The `-I` option requests an ISO-style date representation, and `s` requests date and time to seconds. The exact output depends on the system clock and timezone configuration.

Record a timestamp in your notes:

```
date -Is >> ~/cyber-lab/session-4/evidence/timeline.txt
```

A timeline is an ordered record of events. In an assessment, it can help establish when observations were made and when important actions occurred.

A timestamp is only useful if the machine's clock is reasonably accurate, so real investigations may also need to account for clock synchronization and timezone differences.

### 6.4 Record the commands you ran

The following command runs `whoami` and appends its output to a file:

```
whoami >> ~/cyber-lab/session-4/evidence/observations.txt
```

If you want to save the output of a command while still displaying it on the terminal, you can use `tee`.

For example:

```
ss -tuln | tee ~/cyber-lab/session-4/evidence/ports.txt
```

Let's explain the new terms:

- `|` is called a pipe. It sends the output of one command to the input of another command.
    
- `tee` reads that input, displays it on the terminal, and writes it to a file.
    
- Unlike `>` by itself, `tee` normally displays the output as well as saving it.
    

The command above saves the output of `ss -tuln` to `ports.txt` and displays it on the screen.

By default, `tee` overwrites an existing file. To append instead, use `tee -a`.

### 6.5 Verify file integrity using a hash

A cryptographic hash is a fixed-length value calculated from data. It can help detect whether the data has changed.

Linux commonly provides the `sha256sum` command to calculate a SHA-256 hash.

Run:

```
sha256sum ~/cyber-lab/session-4/evidence/ports.txt
```

You should see a long hexadecimal value followed by the filename.

If the file changes, its hash will generally change as well. However, hashes alone do not prove who created a file, when it was created, or whether it was trustworthy before hashing. They are one part of evidence integrity, not a complete chain of custody.

### 6.6 What is chain of custody?

Chain of custody is the documented record of how evidence was collected, handled, transferred, stored, and accessed.

It is especially important in formal investigations and legal contexts because the people reviewing the evidence may need to understand whether it was altered or mishandled.

A chain-of-custody record may include:

- Evidence identifier.
    
- Description of the item.
    
- Collection date and time.
    
- Person who collected it.
    
- Method of collection.
    
- Hash value where appropriate.
    
- Storage location.
    
- Transfers and access records.
    

For ordinary classroom practice, a clear filename, timestamp, and description are a useful starting point. Formal investigations require procedures appropriate to the evidence and applicable requirements.

### Practical task: Build an evidence log

Create a file describing one piece of evidence:

```
cat > ~/cyber-lab/session-4/evidence/evidence-log.txt <<'EOF'
Evidence ID: E-001
Description: Local listening-port output
Collection method: ss -tuln
Target: Own Linux training machine
Purpose: Record locally listening network sockets
Storage: session-4/evidence/ports.txt
Notes: Output reflects the system at collection time.
EOF
```

Review it:

```
cat ~/cyber-lab/session-4/evidence/evidence-log.txt
```

Then calculate the hash of the saved port output:

```
sha256sum ~/cyber-lab/session-4/evidence/ports.txt
```

Write the hash into your notes or evidence log.

Important: These commands create and document evidence. They do not prove that your computer has a vulnerability.

## 7. Stage Six: Risk Rating and Prioritization

### 7.1 What is risk?

Risk describes the possibility of harm and the seriousness of its consequences.

In cybersecurity, risk assessment considers factors such as the likelihood of an adverse event, the impact if it occurs, and the circumstances that affect both.

For example, a minor information disclosure on an isolated training machine may have a different risk from an authorization failure that exposes thousands of customers' financial records.

The technical weakness may look similar, but the business impact can be very different.

### 7.2 Vulnerability severity versus business risk

These concepts are related, but they should not be confused.

- Vulnerability severity describes how serious the technical weakness is.
    
- Business risk considers the likely consequences for the organization, including the data involved, operational impact, exposure, and business context.
    

A high CVSS score may be a useful warning, but it does not replace an organization's risk assessment.

Likewise, a vulnerability with a moderate technical score may deserve urgent attention if it affects a critical business process.

### 7.3 A simple risk matrix

For this classroom exercise, we will use a simplified risk matrix based on likelihood and impact.

Likelihood describes how plausible it is that the event will occur under the circumstances being assessed. Impact describes the seriousness of the resulting harm.

Assign each a score from 1 to 3.

|Score|Likelihood|Impact|
|---|---|---|
|1|Low|Minor|
|2|Medium|Significant|
|3|High|Severe|

For the exercise, calculate:

\[ \text{Risk score}=\text{Likelihood}\times\text{Impact} \]

Then interpret the result using this teaching-only scale:

|Score|Classroom priority|
|---|---|
|1–2|Low|
|3–4|Medium|
|6|High|
|9|Critical|

This is a simplified teaching model, not an official CVSS calculation or a universal industry risk scale. Real organizations use their own approved assessment criteria.

### Example 1: A minor information disclosure

Suppose a training application reveals non-sensitive technical information.

- Likelihood: 1
    
- Impact: 1
    
- Risk score: \(1 \times 1 = 1\)
    
- Classroom priority: Low
    

This finding should still be documented if it is relevant to the assessment, but it may not require the same urgency as a serious access-control failure.

### Example 2: Missing authorization checks

Suppose a student portal allows a logged-in user to access private records belonging to other users.

For this fictional scenario, the tester assigns:

- Likelihood: 3
    
- Impact: 3
    
- Risk score: \(3 \times 3 = 9\)
    
- Classroom priority: Critical
    

This is a provisional classroom assessment. A real rating would require reviewing the actual exposure, affected data, access requirements, available controls, and organizational criteria.

### Example 3: An outdated application component

Suppose a component is outdated, but the assessment has not yet established whether the deployed version is vulnerable or reachable in a relevant way.

The correct response is to investigate the version, applicable advisories, configuration, and potential impact before assigning a confident rating.

Do not declare a vulnerability critical merely because a tool has highlighted it in red.

### 7.4 Prioritization exercise

Consider these fictional findings:

|Finding|Likelihood|Impact|
|---|---|---|
|Non-sensitive version information exposed|1|1|
|Important security header missing|2|2|
|Unauthorized access to private records|3|3|

Calculate each score using the simplified matrix.

The purpose is not to memorize numbers. It is to understand why findings need to be ranked so that the organization can address the most important risks first.

### 7.5 How should a tester prioritize findings?

Consider these factors together:

1. Exploitability: How practical is it to take advantage of the weakness?
    
2. Exposure: Is the affected system publicly accessible or isolated?
    
3. Impact: Could the issue expose data, modify records, or interrupt a service?
    
4. Asset importance: Does the weakness affect a critical business system?
    
5. Existing controls: Do other protections reduce the risk?
    
6. Evidence confidence: Has the weakness been confirmed or is it still a hypothesis?
    
7. Remediation urgency: Is a patch or safe configuration change available?
    

A good report explains the reasoning behind a rating rather than relying on a label alone.

## 8. Stage Seven: Reporting the Findings

### 8.1 What is a penetration testing report?

A penetration testing report is a structured document describing the assessment, what was tested, what was found, the evidence supporting each finding, and what should be done to improve security.

The report is often one of the most important deliverables of a penetration test. The technical work identifies the problems; the report helps the organization understand and fix them.

A professional report should be clear enough for a manager to understand the risk and detailed enough for a developer or system administrator to investigate it.

### 8.2 Main sections of a report

1. Executive summary

A short, non-technical overview of the assessment, the most important risks, and the recommended priorities.

2. Scope and methodology

Lists the approved targets, assessment period, testing approach, and important limitations.

3. Findings summary

Provides an overview of identified findings, often grouped by severity.

4. Detailed findings

Explains each issue, including the affected asset, evidence, impact, severity, and recommendation.

5. Remediation recommendations

Describes the changes that could eliminate or reduce the identified weaknesses.

6. Retesting results

Documents whether the fixes were verified and whether any issues remain.

7. Limitations

Explains what was not tested, what could not be confirmed, and any constraints that affect the conclusions.

### 8.3 Write a useful finding

Let's improve our earlier fictional example.

## VULN-001: Missing Authorization Check

High priority

Example finding for a fictional student portal

Description

The application may allow an authenticated user to access records belonging to another user because the server does not properly verify record ownership.

Affected asset

The fictional student portal's record-viewing endpoint.

Evidence

Using two designated test accounts and synthetic records, the tester observed that an account could retrieve a record assigned to the other test account. The finding must be supported by the relevant request and response, with session tokens and sensitive values removed from the report.

Potential impact

If confirmed in a real application, the weakness could expose private student information and violate confidentiality requirements.

Recommendation

Enforce server-side authorization on every request for a record. Derive the permitted user identity from the authenticated session, check access to the requested resource, and deny access when the user is not authorized. Do not rely on hiding record IDs in the user interface.

Retest criteria

After the fix, repeat the test with both authorized and unauthorized test accounts. Confirm that each account can access permitted records and cannot access records belonging to the other account.

Status

Example finding. Requires implementation review and retesting after remediation.

Notice the difference between evidence and impact.

- Evidence explains what the tester observed.
    
- Impact explains what that observation could mean for the organization.
    

The report also gives the developer a practical remediation direction and a way to verify the fix.

### 8.4 Create the report in Linux

We can create a basic report using a text file. Later, you can convert the same content into a formal document.

First, create the report:

```
cat > ~/cyber-lab/session-4/reports/report.txt <<'EOF'
PENETRATION TESTING REPORT
==========================

1. OBJECTIVE
Assess the security of the approved training environment.

2. SCOPE
Own Linux training machine and locally created training files.
No external systems were tested.

3. METHODOLOGY
Planning, local system inspection, network configuration review,
evidence collection, sample finding preparation, and reporting.

4. OBSERVATIONS
System and network information was collected for learning purposes.

5. SAMPLE FINDING
ID: VULN-001
Title: Missing Authorization Check
Asset: Fictional student training portal
Severity: High (provisional)
Status: Example only; not discovered on the local machine.

6. RECOMMENDATION
Implement server-side authorization checks for every protected
record and verify the fix using approved test accounts.

7. LIMITATIONS
This was a classroom exercise. No real web application
penetration test was performed.

8. CONCLUSION
The exercise demonstrated a basic assessment workflow,
evidence organization, risk assessment, and reporting.
EOF
```

Now read it:

```
cat ~/cyber-lab/session-4/reports/report.txt
```

This report is deliberately honest about what happened. We inspected our own computer and created a fictional finding. We did not perform a penetration test against a real website, so the report must not claim that we did.

### 8.5 Inspect the report's size and metadata

Use:

```
wc -l ~/cyber-lab/session-4/reports/report.txt
```

The `wc` command counts lines, words, and bytes, depending on the options used. The `-l` option counts lines.

Next:

```
ls -lh ~/cyber-lab/session-4/reports/report.txt
```

Here:

- `ls` lists the file.
    
- `-l` displays a detailed listing.
    
- `-h` displays file sizes in a human-readable format, such as KB or MB.
    

This is a simple example of verifying that a report exists and checking its basic properties.

### Student activity

Open the report and add the following sections:

- A brief executive summary.
    
- Two observations from your own system.
    
- One limitation of the assessment.
    
- Two recommendations for improving the security of the training environment.
    

Keep actual observations separate from hypothetical examples.

## 9. Stage Eight: Remediation and Retesting

### 9.1 What is remediation?

Remediation is the process of fixing a vulnerability or reducing its associated risk.

The appropriate fix depends on the underlying cause.

For example:

|Weakness|Possible remediation|
|---|---|
|Missing authorization check|Enforce server-side access checks|
|Outdated vulnerable software|Apply a suitable security update|
|Overly broad file permissions|Restrict permissions to authorized users|
|Weak password storage|Use an appropriate password-hashing scheme|
|Unnecessary exposed service|Disable it or restrict access if it is not needed|
|Excessive login attempts|Apply rate limits and suitable monitoring|

A recommendation should address the cause of the problem rather than merely hide its symptoms.

### 9.2 Why must we retest?

Suppose a developer says, "I fixed the vulnerability."

Should the tester immediately mark the issue as resolved?

Not yet. The change must be verified.

Retesting checks whether the fix actually addresses the original weakness. It should also check whether the fix introduces a new problem or breaks legitimate functionality.

For example, after correcting a missing authorization check:

1. Log in using the first approved test account.
    
2. Verify that it can access its own records.
    
3. Attempt the same approved test against the second account's synthetic record.
    
4. Confirm that access is denied.
    
5. Confirm that the application continues to work for legitimate users.
    
6. Record the result and update the finding's status.
    

The goal is to verify both security and expected functionality.

### 9.3 Possible retest outcomes

- Fixed: The vulnerability was addressed and the retest passed.
    
- Partially fixed: Some conditions remain vulnerable.
    
- Not fixed: The original issue still exists.
    
- Unable to verify: Testing conditions or access prevented a reliable conclusion.
    
- New issue found: The remediation introduced another problem requiring investigation.
    

These outcomes should be documented accurately. A retest is an evidence-based check, not a ceremonial rubber stamp.

### 9.4 Remediation verification in our classroom lab

Our local Linux exercises did not create a real web vulnerability, so we cannot genuinely retest the fictional authorization finding on this machine.

Instead, demonstrate the reporting workflow by adding a retest section:

```
cat >> ~/cyber-lab/session-4/reports/report.txt <<'EOF'

9. RETESTING
No real application vulnerability was tested or remediated.
The authorization example was fictional. A real retest would
require an approved test application and designated test accounts.

10. FINAL STATUS
Classroom workflow completed. No claim of real-world
penetration testing or vulnerability remediation is made.
EOF
```

The `>>` operator appends the new section without replacing the existing report.

Verify the update:

```
tail -n 12 ~/cyber-lab/session-4/reports/report.txt
```

The `tail` command displays the end of a file. The `-n 12` option requests the last 12 lines.

We now have a report that includes the testing limitations and retesting status.

## 10. Evidence Protection: Who Can Read Your Files?

Security evidence can contain sensitive details, so a tester should consider who can access it.

Linux uses file permissions to control what users can do with files and directories.

### 10.1 Understand file permissions

Run:

```
ls -l ~/cyber-lab/session-4/reports/report.txt
```

You may see output resembling:

```
-rw-r--r-- 1 user user 900 Oct 12 16:00 report.txt
```

The exact username, size, date, and permissions will vary.

Let's understand the permission string:

```
-rw-r--r--
```

- The first character indicates the file type. `-` generally represents a regular file, while `d` represents a directory.
    
- The next three characters represent the owner's permissions.
    
- The following three represent the group's permissions.
    
- The last three represent permissions for other users.
    

The letters mean:

- `r` = read the file.
    
- `w` = write to the file.
    
- `x` = execute the file, or access a directory in the relevant sense.
    

### 10.2 Restrict access to the report

Suppose the report contains confidential assessment information. You want the file's owner to be able to read and edit it, while other users on the machine cannot access it through ordinary file permissions.

Use:

```
chmod 600 ~/cyber-lab/session-4/reports/report.txt
```

What is `chmod`?

`chmod` means change mode. It modifies file permissions.

The number `600` is an octal permission mode:

- `6` means read + write for the owner.
    
- `0` means no permissions for the group.
    
- `0` means no permissions for other users.
    

The calculation is based on permission values:

|Permission|Value|
|---|---|
|Read (`r`)|4|
|Write (`w`)|2|
|Execute (`x`)|1|

Therefore, `6 = 4 + 2`, meaning read and write.

Verify the result:

```
ls -l ~/cyber-lab/session-4/reports/report.txt
```

The permission portion should now normally show:

```
-rw-------
```

The file's owner can read and edit it, but group and other users have no file permissions through this mode. This does not override administrator privileges, backups, or other access mechanisms.

Important: Do not use `chmod 600` on every file indiscriminately. A script that needs to be executable, for example, requires different permissions.

### 10.3 Quick permission practice

Create a private notes file:

```
touch ~/cyber-lab/session-4/notes/private-notes.txt
```

The `touch` command creates an empty file if it does not already exist. If the file exists, it can update its timestamps.

Restrict its permissions:

```
chmod 600 ~/cyber-lab/session-4/notes/private-notes.txt
```

Check the result:

```
ls -l ~/cyber-lab/session-4/notes/private-notes.txt
```

This completes a small but important security exercise: collect information, store it properly, and restrict access where appropriate.

## 11. Complete Practical: Perform a Mini Security Assessment

Now combine everything you learned into one guided exercise.

You will assess your own Linux machine's basic configuration, collect evidence, create a finding, calculate a sample risk score, and write a report.

No external target or vulnerability exploitation is required.

### Step 1: Confirm your workspace

```
ls -R ~/cyber-lab/session-4
```

Make sure the `notes`, `evidence`, and `reports` directories exist.

### Step 2: Collect system information

```
{
  echo "=== COLLECTION TIME ==="
  date -Is

  echo "=== USER ==="
  whoami

  echo "=== HOSTNAME ==="
  hostname

  echo "=== OPERATING SYSTEM ==="
  cat /etc/os-release

  echo "=== KERNEL ==="
  uname -a
} > ~/cyber-lab/session-4/evidence/system-baseline.txt
```

This gathers basic system information and saves it in one file.

A baseline is a record of a system's state at a particular point in time. Baselines can be compared with later observations to identify changes.

### Step 3: Collect network information

```
{
  echo "=== NETWORK ADDRESSES ==="
  ip addr

  echo "=== ROUTING TABLE ==="
  ip route

  echo "=== LISTENING PORTS ==="
  ss -tuln
} > ~/cyber-lab/session-4/evidence/network-baseline.txt
```

Review the results:

```
cat ~/cyber-lab/session-4/evidence/network-baseline.txt
```

Look for information you understand, such as your network interfaces, IP addresses, default route, and listening ports.

Do not assume that every unfamiliar result represents a security issue.

### Step 4: Review the evidence directory

```
ls -lh ~/cyber-lab/session-4/evidence
```

This helps you confirm that your evidence files exist and see their approximate sizes.

### Step 5: Calculate an evidence hash

```
sha256sum ~/cyber-lab/session-4/evidence/system-baseline.txt
```

Record the resulting hash in your notes.

If you calculate the hash again without changing the file, you should normally obtain the same value. If the file changes, its hash will generally change.

### Step 6: Document one observation

Create a finding:

```
cat > ~/cyber-lab/session-4/notes/finding-001.txt <<'EOF'
Finding ID: OBS-001
Title: Local Network Configuration Recorded
Asset: Own Linux training machine
Observation: Network addresses, routing information,
and listening sockets were collected.
Security impact: No vulnerability is established by
this observation alone.
Recommendation: Review exposed services and confirm
that each service is necessary and appropriately restricted.
Status: Observation recorded; no vulnerability confirmed.
EOF
```

This is deliberately written as an observation rather than a confirmed vulnerability. We have not yet established that anything is insecure.

### Step 7: Review the finding

```
cat ~/cyber-lab/session-4/notes/finding-001.txt
```

Check whether the description distinguishes between what was observed and what remains unknown.

### Step 8: Update the report

Add the local assessment activity to your report:

```
cat >> ~/cyber-lab/session-4/reports/report.txt <<'EOF'

11. LOCAL BASELINE REVIEW
Recorded the local operating system, kernel, network
addresses, routes, and listening sockets.

12. FINDING STATUS
OBS-001 is an observation, not a confirmed vulnerability.
Further assessment would be required before assigning
a vulnerability severity.

13. EVIDENCE
system-baseline.txt
network-baseline.txt
EOF
```

Verify the report:

```
cat ~/cyber-lab/session-4/reports/report.txt
```

### Step 9: Prepare your conclusion

Write three to five sentences answering these questions:

- What did you inspect?
    
- What evidence did you collect?
    
- Did you confirm a vulnerability?
    
- What further checks would be needed?
    
- What limitations applied to your assessment?
    

Your conclusion must match the evidence. If you only inspected local configuration, do not claim that you performed a complete penetration test.

## 12. Common Mistakes to Avoid

|Mistake|Correct approach|
|---|---|
|Testing before authorization|Confirm permission and scope first|
|Treating every open port as a vulnerability|Identify the service and assess its configuration|
|Trusting every scanner result|Validate the finding and check applicability|
|Collecting unnecessary sensitive data|Minimize access and protect evidence|
|Reporting a guess as a confirmed issue|Separate observations, hypotheses, and verified findings|
|Assigning severity based only on a tool's color|Consider technical severity and business context|
|Claiming a vulnerability is fixed without retesting|Verify the remediation and record the result|
|Overwriting report files accidentally|Understand `>` versus `>>`|
|Leaving confidential evidence accessible to everyone|Apply appropriate permissions and storage controls|
|Claiming a full pentest after a basic local inspection|Clearly state what was and was not tested|

## 13. Quick Assessment

Answer these questions after completing the practical.

1. What is the difference between reconnaissance, scanning, enumeration, and vulnerability assessment?
    
2. What is the difference between an open port and a confirmed vulnerability?
    
3. Why should security testers preserve evidence?
    
4. What is the purpose of a cryptographic hash?
    
5. What is the difference between vulnerability severity and business risk?
    
6. What is a false positive?
    
7. Why is a penetration testing report necessary?
    
8. What does remediation mean?
    
9. Why is retesting required after a fix?
    
10. Why should a report state the limitations of an assessment?
    

### Short practical questions

Run the following commands and explain what each one does:

```
whoami
```

```
ip route
```

```
ss -tuln
```

```
sha256sum ~/cyber-lab/session-4/evidence/system-baseline.txt
```

```
ls -lh ~/cyber-lab/session-4/reports/report.txt
```

For every command, write down its purpose, the information it produces, and how that information could be useful during an assessment.

## 14. Homework Assignment

Create a small security assessment report for your own Linux training machine.

Your submission must contain:

- A clearly defined assessment objective.
    
- A statement of the scope and limitations.
    
- System information collected using Linux commands.
    
- Network information collected using Linux commands.
    
- At least two documented observations.
    
- A SHA-256 hash of one evidence file.
    
- One hypothetical vulnerability finding with a recommended fix.
    
- A risk-rating explanation using the simplified classroom matrix.
    
- A remediation and retesting plan.
    
- A final conclusion that accurately describes what was tested.
    

Keep the real observations from your Linux machine separate from hypothetical vulnerabilities.

## 15. Final Summary

By the end of Session 4, you should understand the basic penetration testing lifecycle:

1. Plan: Define the objective, authorization, and scope.
    
2. Reconnaissance: Gather relevant information.
    
3. Scan and enumerate: Identify reachable systems, ports, and services.
    
4. Assess vulnerabilities: Investigate possible weaknesses.
    
5. Validate carefully: Confirm findings using permitted methods.
    
6. Collect evidence: Record accurate, relevant information.
    
7. Assess risk: Explain severity and potential consequences.
    
8. Report: Present findings and practical recommendations.
    
9. Remediate: Fix the underlying weaknesses.
    
10. Retest: Verify the fixes and document the results.
    

The key lesson is that a penetration test is not complete just because a tool discovers something interesting. A professional assessment needs appropriate authorization, reliable evidence, a clear explanation of risk, actionable remediation, and verification.

Next session: Linux Distributions, Terminal, Shell, Filesystem Navigation, and File Operations. We will build on today's command-line practice and learn how Linux environments are organized before moving into more advanced security tools.