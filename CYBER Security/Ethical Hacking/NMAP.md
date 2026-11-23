
# Session 12: Nmap Masterclass – Complete Practical Guide

**Topic:** Network Discovery, Port Scanning, Service Detection, OS Detection, NSE Scripts and Professional Reporting  
**Made by:** Punit Jangra

**Duration:** 3–3.5 Hours  
**Level:** Beginner to Advanced  
**Subject:** Ethical Hacking – Cyber Security

---

# Today's Mission

Imagine you have joined a cybersecurity company as a junior penetration tester.

Your manager gives you access to an isolated network containing several servers.

Your task is to investigate the network and answer questions such as:

- Which devices are online?
- Which ports are open?
- Which services are running?
- Which versions of software are installed?
- Is the target running Linux or Windows?
- Why does one scan show a port as open while another shows it as filtered?
- Can Nmap identify information about HTTP, SSH and other services?
- How can you save the results and prepare a professional report?

You have one primary tool for today's assignment: **Nmap**.

By the end of this session, you should be comfortable selecting the right Nmap scan for a particular situation instead of randomly trying commands.

![Cybersecurity network scanning](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80)

## Learning Objectives

By the end of this session, students should understand:

1. How Nmap works.
2. The difference between TCP Connect, SYN and UDP scans.
3. How host discovery works.
4. How to scan specific ports, ranges and all TCP ports.
5. How service and version detection works.
6. How OS detection works and why it can be inaccurate.
7. How to investigate HTTP, SSH and other services using NSE scripts.
8. How timing and performance options affect scans.
9. How firewalls affect scan results.
10. How to save, compare and analyse scan reports.
11. How to select the correct Nmap command for a real security assessment.

> **Lab safety:** Every practical in this session must use your own virtual machines, localhost or an explicitly authorised training target. Do not scan public IP addresses, college networks, workplace networks or unrelated devices. Nmap can generate significant network traffic, so even authorised scans should follow the agreed testing limits.

---

# Part 1: Understanding Nmap Properly

## 1. What Is Nmap?

Nmap stands for Network Mapper.

It is an open-source tool used for network discovery and security auditing.

Security professionals use Nmap to discover hosts, examine network ports, identify services and gather information about systems.

Nmap is useful in several career areas:

| Career Area | How Nmap Is Used |
|---|---|
| Penetration Testing | Discovering exposed services |
| Network Administration | Checking reachable devices and services |
| SOC Analyst | Investigating network exposure |
| Vulnerability Management | Identifying software that needs further review |
| System Administration | Verifying that unnecessary services are not exposed |
| Security Auditing | Documenting network configurations |

### What Can Nmap Actually Do?

Nmap supports several different types of investigation.

| Capability | Purpose |
|---|---|
| Host Discovery | Identify reachable systems |
| Port Scanning | Identify open, closed or filtered ports |
| Service Detection | Identify services running on ports |
| Version Detection | Attempt to identify software versions |
| OS Detection | Estimate the target operating system |
| Script Scanning | Run scripts to collect additional service information |
| Timing Control | Control scan speed and timing |
| Output Management | Save results for reporting and further analysis |

**Important:** Nmap is not a magic vulnerability detector. Discovering a service or software version is only the beginning of an investigation.

---

## 2. Install Nmap

### Arch Linux

```bash
sudo pacman -S nmap
```

### Ubuntu / Debian

```bash
sudo apt install nmap
```

### Fedora

```bash
sudo dnf install nmap
```

Verify installation:

```bash
nmap --version
```

Check the available options:

```bash
nmap --help
```

For detailed documentation:

```bash
man nmap
```

You can also read the official documentation:

https://nmap.org/book/man.html

### Practical: Explore Nmap Help

Run:

```bash
nmap --help
```

Ask students to locate these options:

- `-sS`
- `-sT`
- `-sU`
- `-sV`
- `-O`
- `-A`
- `-p`
- `-Pn`
- `-sn`
- `-oN`
- `-oX`

The objective is to understand where options are documented rather than memorising every available flag.

---

# Part 2: Understanding How Nmap Works

## 3. What Happens When You Run an Nmap Scan?

Suppose you execute:

```bash
nmap 192.168.56.101
```

Nmap does not simply open a browser or connect to every service.

It sends network probes and analyses how the target responds.

Depending on the scan type, it may:

1. Check whether the target appears reachable.
2. Send packets to selected ports.
3. Analyse responses.
4. Determine likely port states.
5. Attempt to identify services.
6. Display the results.

### Nmap Scanning Process

```text
          TARGET IP
              |
              v
       HOST DISCOVERY
              |
              v
        PORT SCANNING
              |
              v
      SERVICE DETECTION
              |
              v
        OS DETECTION
              |
              v
       SCRIPT SCANNING
              |
              v
       RESULT ANALYSIS
              |
              v
        FINAL REPORT
```

Not every scan performs every stage. Nmap allows you to choose what information you actually need.

## 4. Understanding the Target

Before scanning, you need to know the target address.

For today's lab, use two virtual machines.

```text
             ANALYST VM
            192.168.56.10
                  |
                  |
          ISOLATED LAB NETWORK
                  |
                  |
              TARGET VM
            192.168.56.101
```

The addresses are examples. Use your actual lab addresses.

The analyst VM runs Nmap. The target VM runs a few services.

### On the Target VM

For an Ubuntu or Debian target, install SSH:

```bash
sudo apt update
sudo apt install openssh-server
```

Start the service:

```bash
sudo systemctl enable --now ssh
```

Create a lab directory:

```bash
mkdir -p ~/nmap-lab
cd ~/nmap-lab
```

Create a sample webpage:

```bash
echo '<h1>Nmap Practical Lab</h1>' > index.html
```

Start a temporary HTTP server:

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```

Keep this terminal running.

The target should now provide:

- SSH on port 22, if the service started successfully.
- HTTP on port 8000.

For additional practicals, you can run another temporary HTTP service in a separate terminal:

```bash
python3 -m http.server 8080 --bind 0.0.0.0
```

Now we have multiple services to investigate.

**Note:** These temporary Python servers are for lab demonstrations only. Do not use them as production web servers.

---

# Part 3: Host Discovery

## 5. What Is Host Discovery?

Before scanning ports, we may need to identify which machines are reachable.

This process is called host discovery.

Consider a network:

```text
192.168.56.0/24
```

It may contain several machines.

Instead of scanning each address manually, Nmap can perform host discovery over the assigned lab subnet.

### Practical 1: Discover Hosts

```bash
nmap -sn 192.168.56.0/24
```

### What Does `-sn` Mean?

It tells Nmap to perform host discovery without a port scan.

### Example Output

```text
Nmap scan report for 192.168.56.10
Host is up.

Nmap scan report for 192.168.56.101
Host is up.

Nmap done
```

The actual number of discovered hosts will depend on your lab.

### Important Concept

A machine may be online but fail to respond to Nmap's discovery probes.

For example, a firewall may block ICMP or other discovery traffic.

Therefore, no response does not necessarily mean that the machine is offline.

## 6. What Is `-Pn`?

Sometimes you already know the target is online, but Nmap's discovery probes do not receive a response.

In that case, you can skip host discovery.

```bash
nmap -Pn 192.168.56.101
```

`-Pn` tells Nmap to treat the target as online and continue with the requested scanning process.

### When Is It Useful?

- When discovery probes are blocked.
- When a firewall prevents ordinary host discovery.
- When the target is already confirmed to be available.

**Important:** `-Pn` does not bypass a firewall. It only changes Nmap's assumption about whether the host is online.

### Practical Challenge

1. Run a normal scan against your lab target.
2. Run a scan with `-Pn`.
3. Compare the results.
4. Explain why the results may differ.

---

# Part 4: TCP Scanning

This is one of the most important parts of the Nmap masterclass.

## 7. Understanding TCP Connect Scan (`-sT`)

A TCP Connect scan attempts to establish a normal TCP connection with the target port.

It uses the operating system's normal connection mechanism.

### Practical 2: TCP Connect Scan

```bash
nmap -sT 192.168.56.101
```

### How Does It Work?

Suppose port 22 is open.

```text
ANALYST                         TARGET
   |                               |
   | -------- SYN ---------------> |
   |                               |
   | <------ SYN + ACK ------------|
   |                               |
   | -------- ACK ---------------> |
   |                               |
   |       CONNECTION ESTABLISHED  |
```

The connection is established, and Nmap determines that the port is open.

A TCP Connect scan is straightforward and does not require raw-packet privileges in the same way as a SYN scan.

### When Is It Useful?

- When you do not have elevated privileges.
- When you want a straightforward TCP scan.
- When working in restricted environments.

---

## 8. Understanding SYN Scan (`-sS`)

A SYN scan is commonly called a half-open scan.

Instead of completing the normal TCP connection, Nmap examines the response to its SYN probe.

### How Does It Work?

```text
ANALYST                         TARGET
   |                               |
   | -------- SYN ---------------> |
   |                               |
   | <------ SYN + ACK ------------|
   |                               |
   | -------- RST ---------------> |
   |                               |
   |       CONNECTION NOT COMPLETED
```

If the target responds with SYN-ACK, Nmap can classify the port as open.

Nmap sends a reset instead of completing the ordinary TCP handshake.

### Practical 3: SYN Scan

```bash
sudo nmap -sS 192.168.56.101
```

Why use `sudo`?

SYN scanning requires packet-level privileges on many operating systems.

### TCP Connect vs SYN Scan

| Feature | TCP Connect (`-sT`) | SYN (`-sS`) |
|---|---|---|
| Establishes full TCP connection | Yes | Normally no |
| Raw-packet privileges | Not usually required | Usually required |
| Speed | Depends on network and target | Often efficient |
| Common use | Restricted environments | Standard authorised port scanning |
| Connection behaviour | Completes connection | Does not complete normal handshake |

### Important

A SYN scan is not invisible. Firewalls, intrusion detection systems and server-side monitoring may still detect scanning activity.

Do not confuse a scan that avoids completing a connection with a scan that cannot be detected.

---

# Part 5: UDP Scanning

## 9. What Is UDP Scanning?

So far, we have mostly examined TCP.

But some important services use UDP.

Examples:

| Port | Common Service |
|---:|---|
| 53 | DNS |
| 67/68 | DHCP |
| 123 | NTP |
| 161 | SNMP |
| 500 | IKE / IPsec |

UDP does not use the TCP three-way handshake.

Therefore, UDP scanning behaves differently.

### Practical 4: UDP Scan

```bash
sudo nmap -sU -p 53,123,161 192.168.56.101
```

This checks selected UDP ports on the lab target.

### Understanding UDP Results

Nmap may report:

```text
PORT    STATE         SERVICE
53/udp  open|filtered domain
123/udp open|filtered ntp
161/udp closed        snmp
```

The exact results depend on the target and network configuration.

### What Does `open|filtered` Mean?

UDP services often do not respond to unexpected probes.

If Nmap receives no response, it may not be able to distinguish between:

- An open UDP port that did not respond.
- A filtered port where a firewall dropped the probe.

This is why UDP scanning can take longer and often produces less definitive results.

### TCP vs UDP

| TCP | UDP |
|---|---|
| Connection-oriented | Connectionless |
| Uses a handshake | No TCP-style handshake |
| Usually easier to classify port responses | Often requires careful interpretation |
| Used by SSH, HTTP and HTTPS | Used by DNS, NTP and many other services |

### Practical Challenge

Ask students:

1. Why does a UDP scan sometimes report `open|filtered`?
2. Why can UDP scans take longer?
3. Why is it incorrect to assume that every silent UDP port is open?

---

# Part 6: Port Selection

## 10. Scanning Specific Ports

Sometimes you only need to check particular services.

```bash
nmap -p 22,80,443,8000 192.168.56.101
```

This scans the specified TCP ports.

### Scan a Range of Ports

```bash
nmap -p 1-1000 192.168.56.101
```

This scans TCP ports 1 through 1000.

### Scan All TCP Ports

```bash
nmap -p- 192.168.56.101
```

This requests a scan of all 65,535 TCP ports.

Why is this useful?

A service does not have to use its default port.

For example, a web application may run on port 8080 instead of port 80.

A scan of only common ports may miss it.

### Scan the Most Common Ports

```bash
nmap --top-ports 100 192.168.56.101
```

This scans the 100 most common TCP ports according to Nmap's port-frequency data.

### Combine Port Selection with Version Detection

```bash
nmap -sV -p 22,8000,8080 192.168.56.101
```

This checks the selected ports and attempts to identify services and versions.

### Practical Challenge

Run these three scans against your lab target:

```bash
nmap 192.168.56.101
```

```bash
nmap --top-ports 100 192.168.56.101
```

```bash
nmap -p- 192.168.56.101
```

Compare:

- Number of ports examined.
- Time taken.
- Services discovered.

Explain why a full port scan can reveal something a default scan misses.

---

# Part 7: Service and Version Detection

## 11. What Is Service Detection?

An open port tells us that a service appears to be accepting connections.

But the port number alone does not always identify the software.

For example, port 8000 might run:

- A Python HTTP server.
- A development server.
- A custom web application.
- Another application entirely.

Nmap can send application-level probes to identify the service.

### Practical 5: Service Detection

```bash
nmap -sV 192.168.56.101
```

### What Does `-sV` Do?

It enables service and version detection.

Nmap analyses the responses received from open ports to identify the service and possibly its software version.

### Increase Version Detection Intensity

```bash
nmap -sV --version-intensity 5 192.168.56.101
```

Version intensity controls how aggressively Nmap tries service detection probes.

The range is 0 to 9.

- Lower values use fewer probes.
- Higher values use more probes.
- Higher intensity may take longer and produce additional traffic.

Use the default intensity for ordinary lab work unless you have a reason to change it.

### Example Output

```text
PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH ...
8000/tcp open  http    SimpleHTTPServer ...
```

The exact version strings depend on the target.

### Career Application

Suppose a company has a server running an old software version.

The security analyst can compare the detected version against:

- The approved software inventory.
- Vendor security advisories.
- Relevant CVEs.
- The actual installed package version and patch status.

A banner alone is not proof of vulnerability. Some vendors backport security patches without changing the visible version in the expected way.

---

# Part 8: Operating System Detection

## 12. What Is OS Detection?

Nmap can attempt to estimate the operating system of a remote machine.

It examines characteristics of network responses and compares them with known operating-system fingerprints.

### Practical 6: OS Detection

```bash
sudo nmap -O 192.168.56.101
```

`-O` enables OS detection.

### Example Output

Nmap may report something like:

```text
OS details: Linux ...
```

The exact result depends on the target, network and available fingerprint information.

### Why Can OS Detection Be Inaccurate?

OS detection is based on network behaviour, not direct access to the operating system.

Results may be affected by:

- Firewalls.
- Network address translation.
- Virtualization.
- Packet filtering.
- Similar network-stack behaviour between operating systems.

Sometimes Nmap cannot identify the OS confidently.

That is normal.

### Increase OS Detection Attempts

```bash
sudo nmap -O --osscan-guess 192.168.56.101
```

This asks Nmap to provide more aggressive guesses when the exact match is uncertain.

Use it only when the target is within the authorised assessment scope.

### Practical Question

Why is an OS detection result an estimate rather than guaranteed proof?

Expected answer: Nmap infers the operating system from network responses, and different systems or network devices can produce similar responses.

---

# Part 9: NSE – Nmap Scripting Engine

## 13. What Is NSE?

This is one of the most powerful features of Nmap.

NSE stands for **Nmap Scripting Engine**.

It allows Nmap to run scripts that gather additional information about network services and perform other supported checks.

NSE scripts can help with:

- HTTP information gathering.
- SSH configuration inspection.
- DNS information gathering.
- SSL/TLS inspection.
- Service-specific checks.
- Certain vulnerability checks.

NSE is useful because ordinary port scanning may not provide enough information about a service.

### Script Categories

Nmap scripts are grouped into categories.

| Category | Purpose |
|---|---|
| default | Scripts selected for the default script set |
| safe | Scripts generally designed not to harm the target |
| discovery | Gather additional information |
| version | Support service/version detection |
| auth | Authentication-related checks |
| vuln | Vulnerability-related checks |
| intrusive | May be intrusive or disruptive |
| exploit | Scripts that attempt exploitation |

These categories are not a substitute for reading a script's documentation. Even a script category should not be treated as a guarantee of safety.

### Practical 7: Default Scripts

```bash
nmap -sC 192.168.56.101
```

`-sC` runs Nmap's default script set.

This may provide additional information about discovered services.

For example, a default script may retrieve an HTTP title or identify certain service details.

### Combine Service Detection and Default Scripts

```bash
nmap -sC -sV 192.168.56.101
```

This is a useful combination for an authorised initial service assessment.

### Inspect HTTP Page Information

First, make sure the target HTTP server is running on port 8000.

Then run:

```bash
nmap -p 8000 --script http-title 192.168.56.101
```

The script attempts to retrieve the webpage title.

Expected observation:

```text
8000/tcp open http-alt
|_http-title: ...
```

The exact title depends on the page served by your target.

### Inspect HTTP Headers

```bash
nmap -p 8000 --script http-headers 192.168.56.101
```

This attempts to retrieve HTTP response headers.

Students should look for information such as:

- Server header, if provided.
- Content type.
- Cache-related headers.
- Other response metadata.

Not every server returns every header.

### Inspect SSH Algorithms

```bash
nmap -p 22 --script ssh2-enum-algos 192.168.56.101
```

This script enumerates SSH algorithms offered by the service.

It is useful when investigating SSH configuration and compatibility.

### Important NSE Safety Rule

Do not run every script simply because Nmap provides it.

For classroom practice:

- Prefer scripts whose purpose you understand.
- Read the official script documentation.
- Use an isolated target.
- Avoid exploit, brute-force or disruptive scripts.
- Do not run vulnerability scripts against public systems without explicit authorisation.

Official script documentation:

https://nmap.org/nsedoc/

---

# Part 10: The `-A` Option

## 14. What Does Aggressive Detection Mean?

Nmap provides a combined option:

```bash
nmap -A 192.168.56.101
```

The `-A` option enables several advanced detection features, including:

- OS detection.
- Version detection.
- Default script scanning.
- Traceroute.

It is convenient for an authorised lab investigation.

However, it is more intensive than a basic scan.

### When Should You Use It?

Use it when:

- You are authorised to perform detailed investigation.
- You need multiple types of information in one scan.
- You understand that it sends additional probes.
- The target can tolerate the extra traffic.

### When Should You Avoid It?

Avoid using it automatically against every target.

A simple question such as "Is port 443 open?" does not require aggressive detection.

Choose the scan based on the information you actually need.

---

# Part 11: Timing and Performance

## 15. Why Does Scan Timing Matter?

A scan can be quick or slow depending on:

- Number of ports.
- Number of targets.
- Network latency.
- Packet loss.
- Firewall behaviour.
- Retry settings.
- Scan timing.

Nmap provides timing templates.

| Option | Meaning |
|---|---|
| `-T0` | Very slow |
| `-T1` | Slow |
| `-T2` | Reduced speed |
| `-T3` | Normal/default |
| `-T4` | Faster |
| `-T5` | Very aggressive timing |

### Practical 8: Compare Timing

On your isolated lab target, run:

```bash
nmap -T3 -p 1-1000 192.168.56.101
```

Then:

```bash
nmap -T4 -p 1-1000 192.168.56.101
```

Compare the time taken and the scan results.

### What Should Students Understand?

Faster does not always mean better.

Aggressive timing can:

- Increase network traffic.
- Cause more retries or timeouts.
- Miss results on slow or unstable networks.
- Put additional load on the target.

Use normal timing as the starting point. Increase speed only when the network and assessment rules allow it.

---

# Part 12: Firewalls and Scan Results

## 16. How Does a Firewall Affect Nmap?

A firewall controls which network traffic is permitted.

Consider a target with three ports:

```text
22/tcp
80/tcp
443/tcp
```

A firewall might allow port 80 and block ports 22 and 443.

Nmap may report:

```text
PORT    STATE
22/tcp  filtered
80/tcp  open
443/tcp filtered
```

This is not necessarily a problem.

It may be exactly how the firewall is intended to work.

### Understanding the Three States Again

| State | What Nmap knows |
|---|---|
| Open | A service appears to accept connections |
| Closed | The port is reachable but no service is listening |
| Filtered | Filtering prevents Nmap from determining the port state |

### Practical 9: Observe a Firewall in Your Lab

On an Ubuntu or Debian target, check whether UFW is installed:

```bash
sudo ufw status
```

If UFW is available and your lab rules permit it, you can temporarily enable it and allow SSH:

```bash
sudo ufw allow 22/tcp
sudo ufw enable
```

Then inspect the rules:

```bash
sudo ufw status verbose
```

Scan the target again from the analyst VM:

```bash
nmap -p 22,8000 192.168.56.101
```

The result depends on the firewall's current configuration and the lab network.

**Important:** Do not enable or change firewall rules on a machine you access remotely unless you understand the consequences. You can accidentally lock yourself out. Keep VM console access available.

To return the lab firewall to its previous state, restore the original rules or revert the VM snapshot. Do not assume that disabling UFW restores every previous firewall configuration.

---

# Part 13: Saving and Comparing Scan Results

## 17. Why Is Scan Output Important?

In a professional assessment, the scan result is evidence.

You should be able to show:

- Which target was scanned.
- When the scan was performed.
- Which command was used.
- What was discovered.
- What limitations existed.

### Normal Output

```bash
nmap -sV -oN scan.txt 192.168.56.101
```

This saves normal human-readable output.

### XML Output

```bash
nmap -sV -oX scan.xml 192.168.56.101
```

XML output is useful for other applications and automated processing.

### Grepable Output

```bash
nmap -sV -oG scan.gnmap 192.168.56.101
```

Grepable output is a legacy format designed to make certain results easier to process with text tools.

For most modern reporting workflows, XML is generally more useful than grepable output.

### Save All Main Formats

```bash
nmap -sV -oA assessment 192.168.56.101
```

This generates:

```text
assessment.nmap
assessment.xml
assessment.gnmap
```

### Compare Two Scan Results

Save the first scan:

```bash
nmap -sV -oN before.txt 192.168.56.101
```

After changing the lab services, scan again:

```bash
nmap -sV -oN after.txt 192.168.56.101
```

Compare the reports:

```bash
diff -u before.txt after.txt
```

This helps identify changes in network exposure.

### Career Application

A security administrator may perform regular scans and compare the results.

If a new service appears unexpectedly, the team can investigate:

- Who installed it?
- Why is it running?
- Is it required?
- Should it be accessible from this network?

This is one practical use of Nmap in ongoing security operations.

---

# Part 14: Understanding Useful Nmap Combinations

## 18. Commands You Should Actually Remember

There is no need to memorise hundreds of commands.

Learn to select the right options for the job.

| Requirement | Useful command |
|---|---|
| Basic scan | `nmap TARGET` |
| Discover hosts only | `nmap -sn NETWORK` |
| Skip host discovery | `nmap -Pn TARGET` |
| TCP Connect scan | `nmap -sT TARGET` |
| SYN scan | `sudo nmap -sS TARGET` |
| UDP scan | `sudo nmap -sU TARGET` |
| Scan selected ports | `nmap -p 22,80,443 TARGET` |
| Scan all TCP ports | `nmap -p- TARGET` |
| Scan common ports | `nmap --top-ports 100 TARGET` |
| Detect services | `nmap -sV TARGET` |
| Detect operating system | `sudo nmap -O TARGET` |
| Run default scripts | `nmap -sC TARGET` |
| Combine version and scripts | `nmap -sC -sV TARGET` |
| Aggressive detection | `nmap -A TARGET` |
| Save normal output | `nmap -oN report.txt TARGET` |
| Save XML output | `nmap -oX report.xml TARGET` |
| Save all formats | `nmap -oA report TARGET` |

Replace `TARGET` or `NETWORK` with the assigned lab address.

### Useful Real-World Combinations

**1. Quick check of important services**

```bash
nmap -p 22,80,443,3306 TARGET
```

**2. Detailed service investigation**

```bash
nmap -sV -p 22,80,443 TARGET
```

**3. Detailed authorised lab assessment**

```bash
sudo nmap -sS -sV -sC -O TARGET
```

**4. Full TCP port investigation**

```bash
nmap -p- -sV TARGET
```

**5. Save a detailed report**

```bash
sudo nmap -sS -sV -sC -O -oA final-assessment TARGET
```

These are starting points, not universal commands. Select the options according to scope, target stability and the assessment objective.

---

# Part 15: Final Master Practical

## 19. Complete Network Investigation

This is the main practical of the session.

### Scenario

You are a junior penetration tester working for a company.

Your instructor provides one isolated target VM.

You are authorised to:

- Discover the assigned target.
- Scan TCP ports.
- Scan selected UDP ports.
- Identify service versions.
- Estimate the operating system.
- Run selected information-gathering scripts.
- Save and analyse scan results.

Your task is to produce a useful technical report.

### Step 1: Discover the Host

```bash
nmap -sn TARGET
```

Record whether the target responds to discovery.

### Step 2: Perform a Basic Scan

```bash
nmap TARGET
```

Record the open ports.

### Step 3: Scan All TCP Ports

```bash
nmap -p- TARGET
```

Compare the result with the basic scan.

### Step 4: Perform Service Detection

```bash
nmap -sV TARGET
```

Record the detected services and version information.

### Step 5: Perform OS Detection

```bash
sudo nmap -O TARGET
```

Record the estimated operating system and any uncertainty.

### Step 6: Run Selected NSE Scripts

For the lab's HTTP service:

```bash
nmap -p 8000 --script http-title,http-headers TARGET
```

For SSH:

```bash
nmap -p 22 --script ssh2-enum-algos TARGET
```

### Step 7: Perform a Selected UDP Scan

```bash
sudo nmap -sU -p 53,123,161 TARGET
```

Record the results and note any `open|filtered` states.

### Step 8: Save a Detailed Scan

```bash
sudo nmap -sS -sV -sC -O -oA master-assessment TARGET
```

### Step 9: Analyse the Findings

Students must identify:

- Open TCP ports.
- Closed TCP ports.
- Filtered ports, if any.
- Open or open|filtered UDP ports, if any.
- Detected services.
- Version information.
- OS detection result.
- Additional information from NSE scripts.
- Limitations of the scan.

### Step 10: Prepare a Report

| Field | Finding |
|---|---|
| Target IP | |
| Host discovery result | |
| Open TCP ports | |
| Open UDP ports | |
| Closed ports | |
| Filtered ports | |
| Detected services | |
| Version information | |
| OS estimate | |
| NSE observations | |
| Further investigation required | |

---

# Part 16: Nmap Troubleshooting

## 20. Common Problems and Their Solutions

### Problem 1: Nmap says the host seems down

Possible reasons:

- The VM is powered off.
- The target IP is incorrect.
- The virtual network is misconfigured.
- Discovery probes are blocked.

First verify the target IP and lab network configuration.

If the target is known to be online, you can try:

```bash
nmap -Pn TARGET
```

### Problem 2: SYN scan requires privileges

You may see an error related to raw packet permissions.

Run:

```bash
sudo nmap -sS TARGET
```

Alternatively, use:

```bash
nmap -sT TARGET
```

### Problem 3: A port appears closed

A closed port does not necessarily indicate a network failure.

It may mean that the target is reachable but no service is listening on that port.

Verify the service on the target machine.

### Problem 4: A port appears filtered

Check:

- Firewall configuration.
- Virtual network configuration.
- Routing.
- Whether the target is reachable through the selected interface.

Do not assume that a filtered port is open or closed.

### Problem 5: Version detection returns an unknown service

Possible reasons:

- The application uses a custom protocol.
- The service does not provide enough identifying information.
- Nmap does not have a matching fingerprint.
- The service uses a non-standard configuration.

An unknown service is a reason for further investigation, not proof of malicious software.

---

# Part 17: Test Your Understanding

## Theory Questions

1. What is Nmap and why is it used?
2. Explain host discovery.
3. What is the difference between `-sn` and `-Pn`?
4. Differentiate TCP Connect and SYN scans.
5. Why does a SYN scan normally require elevated privileges?
6. Why is UDP scanning more difficult to interpret?
7. What does `-p-` do?
8. What is the purpose of `-sV`?
9. How does Nmap estimate the target operating system?
10. What is the Nmap Scripting Engine?
11. What does `-sC` do?
12. What does the `-A` option enable?
13. Explain the purpose of timing templates.
14. What does `open|filtered` mean?
15. Why should Nmap results be saved?
16. Does service detection prove that a vulnerability exists?
17. Why might an online host fail to respond to host discovery?
18. Why is a faster scan not always a better scan?

## Practical Questions

1. Discover hosts in the assigned lab subnet.
2. Perform a TCP Connect scan.
3. Perform a SYN scan.
4. Scan all TCP ports.
5. Scan selected UDP ports.
6. Detect services and versions.
7. Attempt OS detection.
8. Retrieve an HTTP page title using an NSE script.
9. Inspect SSH algorithms using an NSE script.
10. Save scan results in normal and XML formats.
11. Compare two scan reports.
12. Prepare a final network investigation report.

---

# Part 18: Homework

## Assignment: Nmap Practical Workbook

Complete the following tasks on your own lab target.

**Task 1:** Perform host discovery and document the result.

**Task 2:** Perform a basic TCP scan and record open ports.

**Task 3:** Scan all TCP ports and compare the results.

**Task 4:** Perform service and version detection.

**Task 5:** Attempt OS detection and explain the confidence or limitations of the result.

**Task 6:** Use two NSE scripts that provide service information.

**Task 7:** Perform a selected UDP scan.

**Task 8:** Save all relevant scan results.

**Task 9:** Compare two scan reports and explain what changed.

**Task 10:** Write a short professional report.

Your report must contain:

- Target details.
- Commands used.
- Results.
- Observations.
- Limitations.
- Recommendations for further investigation.

---

# Session Summary

Today, we explored Nmap beyond basic port scanning.

You learned how to:

- Discover reachable hosts.
- Understand TCP Connect and SYN scans.
- Perform UDP scans.
- Select individual ports and port ranges.
- Scan all TCP ports.
- Identify services and software versions.
- Estimate operating systems.
- Use Nmap scripts for additional information.
- Understand timing and firewall behaviour.
- Save and compare scan reports.
- Prepare a practical network investigation report.

The most important lesson:

> A good security professional does not run every scan available. They understand the objective, choose the appropriate scan, interpret the results and document the evidence.

## What Comes Next?

**Next: Network Scanning – Part 2**

We will move beyond the fundamentals and focus on:

- Advanced scan behaviour.
- Interpreting difficult scan results.
- TCP and UDP scanning limitations.
- Network topology and traceroute.
- Service enumeration workflows.
- Building a structured network map.
- Preparing findings for vulnerability analysis.

The goal is to move from knowing Nmap commands to thinking like a network security analyst.
