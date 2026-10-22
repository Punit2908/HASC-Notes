
# Session 8: Safe Cybersecurity Lab Setup and Introduction to Reconnaissance

**Made by Punit Jangra**

**Duration:** 2 hours 15 minutes to 2 hours 30 minutes  
**Level:** Beginner to Intermediate  
**Focus:** Practical learning with moderate theory

---

## Today's Mission

Imagine that you are a security tester hired to assess a company's web application. Before testing anything, you need a safe environment, a clearly defined target, and information about the application.

Today, we will learn how to prepare a cybersecurity lab and begin gathering information about domains using DNS tools.

We will not waste time repeating basic Linux navigation. Instead, we will work with virtual machines, network isolation, snapshots, and reconnaissance.

### Learning Objectives

By the end of this session, students should be able to:

- Understand virtual machines and their role in cybersecurity.
- Distinguish NAT, bridged, host-only, and internal networking.
- Create a safe lab environment and a VM snapshot.
- Explain reconnaissance, OSINT, and assessment scope.
- Query DNS records using `dig` and `host`.
- Record findings and distinguish evidence from assumptions.
- Explain why public information does not automatically authorize security testing.

> **Safety rule:** Only test systems you own or have explicit permission to assess. Public DNS lookups are not permission to scan, exploit, or attack the systems associated with a domain.

---

# Part 1: Building a Safe Cybersecurity Lab

## 1. What Is a Virtual Machine?

![Virtual machine and host computer concept](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80)

A **Virtual Machine (VM)** is a software-based computer that runs inside another computer. It behaves like a separate machine and can run its own operating system.

For example, your laptop may run Linux as its main operating system while a virtual machine runs Kali Linux or Ubuntu inside it.

### Important Terms

| Term | Meaning |
|---|---|
| Host machine | Your physical computer |
| Guest machine | The operating system running inside the VM |
| Hypervisor | Software that creates and manages virtual machines |
| Virtual disk | A file or set of files storing the VM's data |
| Virtual network adapter | A simulated network interface used by the VM |
| Snapshot | A saved state that can help restore a VM to an earlier condition |

Popular virtualization platforms include:

- Oracle VirtualBox
- VMware Workstation
- Hyper-V
- KVM/QEMU on Linux

### Why Do Ethical Hackers Use VMs?

Security experiments can change configurations, install packages, or damage an operating system.

Using a VM helps you:

1. Separate training activities from your everyday environment.
2. Test different operating systems.
3. Create repeatable lab environments.
4. Restore a machine after a failed experiment.
5. Build networks containing multiple virtual machines.

However, a VM is not perfect protection. A badly configured VM can still communicate with your physical network, access shared files, or connect to the internet.

**Important:** Kali Linux is useful for security testing, but it is not mandatory for every practical. The tools and concepts matter more than the operating system's name.

---

## 2. Designing a Cybersecurity Lab

A basic cybersecurity lab can contain two virtual machines:

1. **Analyst VM:** The machine used to perform authorised testing.
2. **Target VM:** A deliberately vulnerable machine or training application designed for practice.

The target must be intentionally provided for training or owned by you. Never use an unrelated computer as a practice target.

### Example Lab Architecture

![Computer network equipment concept](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80)

A simple isolated lab might look like this:

```text
              PHYSICAL COMPUTER
                     |
          +----------+----------+
          |                     |
      ANALYST VM             TARGET VM
          |                     |
          +----------+----------+
                     |
             INTERNAL LAB NETWORK
```

The analyst and target machines can communicate through a virtual network without being placed directly on the normal home or college network.

The exact isolation depends on the hypervisor settings and whether additional network adapters or routing paths exist.

### Practical Task: Plan Your Lab

Before creating a VM, write down:

- Which operating system will run on the host?
- Which operating system will run inside the analyst VM?
- What is the target VM?
- Which network mode will connect them?
- Should the lab have internet access?
- How will you restore the VM if something breaks?

Students who already have a working VM should inspect its configuration instead of reinstalling everything.

---

## 3. Understanding Virtual Network Modes

This is one of the most important concepts in a safe cybersecurity lab.

A virtual machine's network mode determines how it communicates with other machines.

![Network cables and connected computer infrastructure](https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?auto=format&fit=crop&w=1200&q=80)

### 3.1 NAT Networking

**NAT** stands for Network Address Translation.

In a common VM setup, NAT allows a guest machine to initiate connections through the host's network connection.

Example:

- A clean analyst VM needs to download updates.
- NAT may allow it to access the internet.
- Other computers on the physical network generally cannot initiate arbitrary connections to the guest unless additional configuration, such as port forwarding, permits it.

**Use case:** Internet access for an ordinary analyst VM when permitted.

**Caution:** NAT does not mean the VM is fully isolated. The guest can still send traffic outward.

### 3.2 Bridged Networking

Bridged networking connects a VM to the physical network through one of the host's network interfaces.

The VM may appear as another device on the same LAN.

Example:

```text
Home Router
    |
    +---- Host Computer
    |
    +---- Virtual Machine
```

**Use case:** Specific authorised network-administration or simulation tasks.

**Caution:** Avoid using bridged networking as the default for vulnerable training targets. Other devices on the LAN may be able to reach the VM.

### 3.3 Host-Only Networking

Host-only networking creates a private virtual network connecting the host and attached VMs.

Example:

```text
Host Computer
      |
  Host-Only Network
      |
  +---+---+
  |       |
 VM 1    VM 2
```

The host can communicate with the VMs over this network. The host-only network itself does not normally provide internet access, although other adapters or routing can change that.

**Use case:** A lab where the host must access the target VM directly.

### 3.4 Internal Networking

Internal networking allows selected VMs attached to the same internal virtual network to communicate with one another.

The host and external network are not ordinarily connected through that internal network.

Example:

```text
Analyst VM <----> Internal Network <----> Target VM
                         |
                 No ordinary host
                 or internet access
```

**Use case:** A private lab where only the virtual machines should communicate.

### 3.5 Comparison Table

| Feature | NAT | Bridged | Host-only | Internal |
|---|---|---|---|---|
| VM can usually reach internet | Yes | Usually, if LAN permits | Not through host-only alone | No |
| Host can communicate with VM | Usually with limitations | Usually | Yes | Not through the internal network |
| Other physical LAN devices can reach VM | Generally restricted by default | Potentially yes | Not through host-only alone | Not through the internal network |
| Suitable for isolated target lab | Not the strongest default | Usually unsuitable | Yes, with configuration checks | Yes, especially for VM-to-VM labs |

These are general behaviours. Exact features vary by virtualization platform and configuration.

### Practical Exercise: Choose the Network Mode

**Scenario A:** You need internet access to update a clean analyst VM.

Recommended starting point: NAT.

**Scenario B:** Two vulnerable training VMs must communicate, but neither should reach the internet or the physical LAN.

Recommended starting point: Internal networking.

**Scenario C:** Your host needs to access a target VM's local web application.

Recommended starting point: Host-only networking, with all other adapters checked.

**Scenario D:** You want to put a vulnerable VM directly on your college Wi-Fi.

Recommended action: Do not do this as a beginner exercise. Use an isolated lab design instead.

### Security Checklist

Before running a vulnerable target VM, confirm:

- [ ] The image came from a trusted source.
- [ ] The network mode matches the exercise.
- [ ] No unnecessary NAT or bridged adapter is connected.
- [ ] Shared folders are disabled unless needed.
- [ ] Shared clipboard and drag-and-drop are disabled when separation matters.
- [ ] Important host files are not exposed through shared folders.
- [ ] The target is within the written exercise scope.
- [ ] A clean snapshot or separate backup exists.

A network mode label is not proof of isolation. Check every adapter.

---

## 4. What Is a VM Snapshot?

A **snapshot** records a virtual machine's state at a particular point in time.

Think of it as a restore point. If a later practical breaks the VM, you may be able to return it to the saved state.

Snapshots can preserve disk state and configuration, and some platforms can also capture memory state.

### Snapshot vs Backup

| Snapshot | Backup |
|---|---|
| Convenient for returning to an earlier VM state | A separate copy intended to protect important data |
| May depend on the original virtual disk | Can be stored independently |
| Can consume extra disk space | Also consumes storage, but can protect against some VM-disk failures |
| Reverting may discard later changes | A separate backup may preserve files independently |

A snapshot is useful, but it is not a replacement for backing up important assignments.

### Practical: Create a Clean Snapshot

The exact interface depends on the virtualization software.

1. Open the virtualization application.
2. Select your analyst VM.
3. Shut down the VM if recommended by the hypervisor.
4. Open the snapshot or checkpoint section.
5. Create a snapshot named:

   `CYWDA-Clean-Base`

6. Add a description:

   `Clean lab state before security practicals.`

7. Confirm that the snapshot appears in the list.

Do not manually delete virtual-disk or snapshot files to clean up space.

### Snapshot Challenge

Discuss these situations:

1. A student installs a package that breaks the VM. How could a snapshot help?
2. A student saves an assignment inside the VM after the snapshot, then reverts. What might happen to the assignment?
3. The host's physical disk fails. Will a snapshot stored on that disk necessarily save the student?

**Expected lesson:** Snapshots help restore VM state. Separate backups protect important work.

---

# Part 2: Introduction to Reconnaissance

## 5. What Is Reconnaissance?

**Reconnaissance**, often called **recon**, is the process of collecting information about a target before a security assessment.

For a web application, information might include:

- Domain names.
- DNS records.
- Publicly documented services.
- Hosting-related information.
- Published technical documentation.
- Public registration information.
- The exact assets included in the assessment scope.

Reconnaissance helps a tester understand what is being assessed before deciding what to test next.

### Example

Suppose you own a website called:

`mywebsite.example`

Before conducting an authorised assessment, you may need to determine:

- Whether the domain resolves to an IPv4 address.
- Whether an IPv6 address is published.
- Which mail servers are listed.
- Which name servers are authoritative.
- Which related hostnames are explicitly included in scope.

The answers help document the environment. They do not, by themselves, reveal whether the application is vulnerable.

---

## 6. What Is OSINT?

**OSINT** stands for Open-Source Intelligence.

It means collecting and analysing information from publicly available sources.

Examples include:

- Public DNS records.
- Official company websites.
- Public technical documentation.
- Public security advisories.
- Public registration information.
- Public repositories that you are authorised to review.

OSINT is not limited to cybersecurity. Journalists, researchers, analysts, and investigators also use it.

### Important Distinction

Publicly available information is not automatically permission to perform intrusive testing.

You must still respect privacy, applicable laws, service terms, and the agreed assessment scope.

Do not collect personal information merely because a website exposes it.

---

## 7. Passive vs Active Reconnaissance

| Passive reconnaissance | Active reconnaissance |
|---|---|
| Collects information from public sources with little or no direct interaction with target services | Sends probes or requests to target systems to learn how they respond |
| Example: reviewing public DNS records | Example: port scanning an authorised target |
| Usually lower impact | Can trigger alerts or affect services |
| Still requires appropriate scope and privacy handling | Requires explicit authorisation for the activity |

Today's practical focuses on ordinary DNS queries and public information.

We will not perform port scanning, vulnerability scanning, password attacks, directory brute forcing, or exploitation in this session.

Those activities belong in later lessons with a clearly defined and authorised lab target.

---

## 8. Why Scope Matters

The **scope** defines what the tester is allowed to assess.

It should identify the approved targets, permitted activities, exclusions, and conditions for stopping the test.

### Example Scope Document

**Assessment name:** Passive DNS Practice

**Approved target:** A domain owned by the student or assigned by the instructor.

**Permitted activities:**

- Query A, AAAA, CNAME, MX, NS, and TXT records.
- Review relevant public registration information when available.
- Record observations and limitations.

**Not permitted:**

- Port scanning.
- Directory brute forcing.
- Vulnerability scanning.
- Login attempts.
- Password attacks.
- Exploitation.
- Denial-of-service testing.
- Testing unrelated third-party systems.

**Evidence requirements:**

- Record the target.
- Record the command used.
- Record the date and time.
- Summarise the result.
- Explain what the result does and does not establish.

**Stop conditions:**

Stop if the target is outside scope, if the activity exceeds the approved permissions, or if the instructor asks the class to stop.

For the demonstration commands below, `example.com` is used as a public example domain. Use an assigned or personally owned domain for the exercise worksheet.

---

# Part 3: DNS Reconnaissance Practical

## 9. What Is DNS?

![Global network infrastructure concept](https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80)

**DNS** stands for Domain Name System.

DNS allows software to look up information associated with domain names.

For example, a browser needs to resolve a hostname to the appropriate network information before it can establish a connection to a website.

A domain is not the same thing as a physical server. One domain may use multiple services, and multiple unrelated domains may share the same hosting infrastructure.

Therefore, a DNS result does not prove that an IP address belongs exclusively to a particular organisation.

---

## 10. Common DNS Record Types

| Record | Meaning | Example purpose |
|---|---|---|
| A | Maps a name to an IPv4 address | Finding the IPv4 address returned for a hostname |
| AAAA | Maps a name to an IPv6 address | Checking whether an IPv6 address is published |
| CNAME | Makes one hostname an alias of another | Identifying a canonical hostname or service provider |
| MX | Lists mail exchangers | Understanding the domain's published mail routing |
| NS | Identifies authoritative name servers | Understanding which name servers are published for a DNS zone |
| TXT | Stores text data | Domain verification and email-security policies |
| SOA | Contains DNS zone administration information | Reviewing zone metadata |
| PTR | Supports reverse DNS lookup | Looking up a hostname associated with an IP address when configured |

### Important Note

Not every domain needs every record type.

For example, a domain may legitimately have no public AAAA record. The absence of a record does not automatically mean that the domain is insecure.

---

## 11. Using `dig` to Query DNS

`dig` is a command-line DNS lookup utility. It sends a DNS query and displays the response and related information.

Depending on your Linux distribution, it may be included in a package such as `dnsutils` or `bind-utils`.

### Step 1: Check Whether `dig` Is Available

```bash
dig -v
```

If the command is unavailable, ask the instructor whether installing the relevant package is permitted. Do not modify a managed machine without approval.

### Step 2: Query an A Record

```bash
dig example.com A
```

This requests the A record for `example.com`.

The output may contain:

- **QUESTION SECTION:** the name and record type requested.
- **ANSWER SECTION:** records returned in response to the query.
- **Query time:** the duration of the lookup.
- **SERVER:** the DNS resolver that answered.
- **Status:** the DNS response status.

The actual output can change over time.

### Understanding the Result

`NOERROR` means the response did not report a name-error status. It does not guarantee that the requested record exists in the answer section.

`NXDOMAIN` means the queried name does not exist according to the DNS response received.

An empty answer section may mean that the requested record type is not available, among other possibilities.

Do not treat every empty answer as a vulnerability.

---

## 12. Query Different DNS Records

Run each command separately.

### A Record: IPv4

```bash
dig example.com A
```

Question: What IPv4 address or addresses were returned?

### AAAA Record: IPv6

```bash
dig example.com AAAA
```

Question: Was an IPv6 address returned?

### MX Record: Mail Servers

```bash
dig example.com MX
```

Question: Which mail exchangers were listed, if any?

MX records provide information about mail routing. They do not prove that the email system is configured securely.

### NS Record: Name Servers

```bash
dig example.com NS
```

Question: Which name servers were returned?

### TXT Record: Text Information

```bash
dig example.com TXT
```

TXT records can contain domain-verification data or email-security policies, such as SPF-related information.

Some TXT records contain long values. Record only what is relevant to the exercise, and do not publish sensitive information unnecessarily.

### SOA Record: Zone Information

```bash
dig example.com SOA
```

This requests the Start of Authority record, which contains information about the DNS zone.

### Important Practical Rule

Record the actual result of your own query. Do not copy an IP address from another student's output and claim it came from your computer.

---

## 13. Use `dig +short` for Compact Results

Sometimes the full output contains more information than you need.

The `+short` option requests a more concise answer.

```bash
dig +short example.com A
```

Try:

```bash
dig +short example.com MX
```

```bash
dig +short example.com NS
```

Compact output is useful for a quick worksheet, but it hides much of the diagnostic information available in the full response.

If a result is confusing, use the full command again.

---

## 14. Alternative Tool: `host`

`host` is another command-line DNS lookup utility.

Check whether it is available:

```bash
host example.com
```

Request MX records:

```bash
host -t MX example.com
```

Request NS records:

```bash
host -t NS example.com
```

Here, `-t` specifies the DNS record type.

Students may use either `dig` or `host`. The goal is to understand the DNS result, not memorise every tool.

---

## 15. What Is TTL?

**TTL** stands for Time To Live.

In DNS, TTL indicates how long a resolver may cache a DNS response before it should normally query again.

A low TTL does not automatically mean a domain is insecure. A high TTL does not automatically mean it is secure.

TTL is a configuration value that should be interpreted in context.

In a full `dig` response, a resource record commonly displays its TTL beside the record data.

---

## 16. Public Domain Registration Information

The `whois` utility can query domain or IP registration information services when available.

Check whether it is installed:

```bash
whois --help
```

If available, try the public demonstration domain:

```bash
whois example.com
```

The output may contain:

- Registrar information.
- Registration dates.
- Expiration dates.
- Domain status codes.
- Published name servers.
- Contact information, where available.

### Limitations

Registration details may be hidden or redacted for privacy. Different registries also return different information.

A registration record does not prove that a named person personally operates a website.

Do not collect or publish personal contact information for unrelated purposes. If `whois` is unavailable, continue with the DNS exercises instead of spending the class installing tools.

---

## 17. Reverse DNS and PTR Records

Reverse DNS looks up a hostname associated with an IP address when a PTR record is configured.

For example:

```bash
dig -x 1.1.1.1
```

This demonstrates the syntax of a reverse DNS query.

A PTR record may provide a hostname, but it does not establish ownership of the IP address or prove that a service is vulnerable.

Reverse DNS information is maintained through the relevant address provider's DNS configuration and may not correspond directly to a brand name.

---

# Part 4: Practical Investigation

## 18. Build a Passive Reconnaissance Worksheet

Use an instructor-approved domain or one that you own.

If no domain has been assigned, use `example.com` for the limited DNS demonstrations.

Complete the following worksheet:

| Field | Student entry |
|---|---|
| Exercise name | Passive DNS Reconnaissance |
| Target domain | |
| Why is the target permitted? | |
| Date and time | |
| Tool used | |
| DNS record type | |
| Command executed | |
| Actual result | |
| Observation | |
| Possible interpretation | |
| Limitations | |
| Next permitted step | |

### Example: Separating Evidence from Assumptions

Suppose your query returns an A record.

**Observation:** The DNS response returned an IPv4 address for the queried hostname.

**Interpretation:** The hostname resolved to an IPv4 address during this lookup.

**Limitation:** The result does not establish that the address is exclusively controlled by the domain owner or that the website is vulnerable.

**Possible next step:** Confirm the exact application hostname and scope with the system owner before any active testing.

Notice the difference between recording a fact and making an unsupported claim.

---

## 19. Mini Investigation Challenge

Perform the following lookups against your approved domain:

```bash
dig example.com A
```

```bash
dig example.com AAAA
```

```bash
dig example.com MX
```

```bash
dig example.com NS
```

```bash
dig example.com TXT
```

Replace `example.com` with your approved domain where appropriate.

Then answer:

1. Which DNS record types returned answers?
2. Which record types did not return an answer?
3. What does each result actually establish?
4. What remains unknown?
5. Which additional activity would require explicit permission?

### Important

An empty answer does not automatically indicate a misconfiguration. A returned IP address does not prove a vulnerability. A published mail server does not prove that email security is weak.

A professional tester records evidence and its limitations.

---

# Part 5: Troubleshooting

## 20. Common Problems

### Problem 1: `dig: command not found`

The utility may not be installed.

Use `host` if it is available, or ask the instructor to approve installation on the lab machine.

### Problem 2: No DNS Answer Appears

Check the domain spelling and the record type requested. Some domains do not publish every type of record.

Compare with the approved demonstration domain and record the actual response.

Do not immediately change DNS settings or declare a vulnerability.

### Problem 3: `whois` Returns Limited Information

Registration privacy and registry policies may restrict the information displayed.

Record what is available and note the limitation. Do not attempt to bypass privacy controls.

### Problem 4: The VM Can Still Reach the Internet

Stop before testing a target. Review every network adapter and confirm the intended configuration.

An additional NAT or bridged adapter may provide connectivity even if another adapter is host-only or internal.

Ask the instructor to verify the network design.

### Problem 5: The Vulnerable Target Can Reach the Normal LAN

Shut down the target and review the lab configuration with the instructor.

Do not test isolation by running attack tools against devices on the physical network.

### Problem 6: Restoring a Snapshot Removes Recent Work

A snapshot restores an earlier state. Files created after the snapshot may be lost when reverting.

Keep important assignments in an approved backup location.

---

# Part 6: Assessment

## 21. Quick Theory Questions

Answer in your own words.

1. What is a virtual machine?
2. What is the difference between a host and a guest?
3. What does a hypervisor do?
4. Explain the difference between NAT and bridged networking.
5. What is the difference between host-only and internal networking?
6. Why can bridged networking be dangerous for vulnerable training machines?
7. What is a VM snapshot?
8. Why is a snapshot not always a complete backup?
9. Define reconnaissance and OSINT.
10. Explain passive and active reconnaissance.
11. What does an A record represent?
12. What is the purpose of an MX record?
13. What do NS and CNAME records represent?
14. What kinds of information may be stored in TXT records?
15. What does DNS TTL control?
16. Why does a DNS result not prove that a website is vulnerable?
17. What should be recorded during reconnaissance?
18. Why does public availability not equal permission to test?

## 22. Practical Evaluation

The student should demonstrate that they can:

- [ ] Identify the host and guest machines.
- [ ] Explain the selected network mode.
- [ ] Choose an appropriate network mode for a scenario.
- [ ] Identify a clean VM snapshot.
- [ ] Explain the authorised scope of the exercise.
- [ ] Query an A record.
- [ ] Query at least two additional DNS record types.
- [ ] Record the commands and actual results.
- [ ] Separate observations from assumptions.
- [ ] Avoid performing unauthorised active testing.

---

# Part 7: Homework

## Assignment A: Design a Safe Cybersecurity Lab

Draw a diagram containing:

- Host computer.
- Analyst VM.
- Intentionally vulnerable target VM.
- Virtual network connecting the VMs.
- Any internet connection, clearly marked as permitted or absent.

Explain:

1. Which machines can communicate.
2. Which network mode you selected.
3. Why it is suitable for the exercise.
4. How you would restore the analyst VM.
5. How you would avoid exposing the target to your normal LAN.

Do not connect a vulnerable target to the public internet or normal LAN to complete the assignment.

## Assignment B: Passive DNS Reconnaissance

Use a domain that you own or one assigned by the instructor.

Collect the permitted A, AAAA, CNAME (if applicable), MX, NS and TXT records using ordinary DNS lookups.

Submit a one-page report containing:

- Target domain and permission basis.
- Date and time.
- Commands used.
- Actual results.
- Key observations.
- Two limitations of the findings.
- One proposed next step that would require approval before active testing.

Do not perform port scanning, vulnerability scanning, directory brute forcing, password attacks, or exploitation for this homework.

---

# Session Summary

Today, we moved beyond basic Linux operations and general system monitoring into the preparation of a cybersecurity testing environment.

You learned:

- How virtual machines work.
- How NAT, bridged, host-only and internal networks differ.
- Why isolation matters for vulnerable targets.
- How snapshots help restore a VM.
- What reconnaissance and OSINT mean.
- How passive and active reconnaissance differ.
- How to query DNS using `dig` and `host`.
- How A, AAAA, CNAME, MX, NS, TXT, SOA and PTR records are used.
- How to document results without claiming more than the evidence proves.

## The Professional Workflow

**Prepare the lab → Confirm the scope → Collect evidence → Interpret carefully → Document limitations → Plan the next authorised step.**

That workflow matters more than memorising commands. Security testing is not about running the largest number of tools; it is about asking the right questions and proving your conclusions.

### Next Session

**Session 9: Deeper Reconnaissance and Web Asset Discovery**

We will continue with approved domain discovery, DNS relationships, and technology fingerprinting before moving into later scanning and enumeration topics.
