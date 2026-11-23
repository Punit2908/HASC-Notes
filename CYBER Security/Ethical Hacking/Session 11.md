
# Session 11: Network Scanning – Part 1

**Topic:** Network Discovery, Ports, TCP Scanning and Nmap Fundamentals  
**Made by:** Punit Jangra

**Duration:** 2–2.5 Hours  
**Level:** Beginner to Intermediate  
**Subject:** Ethical Hacking – Cyber Security

---

# Today's Mission

Imagine that a company has hired you to perform a security assessment of its internal network.

You already know the company's domain, DNS records and publicly visible assets from reconnaissance.

Now the company wants answers to some practical questions:

- Which machines are reachable on the approved network?
- Which network ports are open?
- Which services are listening?
- Is an unexpected service exposed?
- Which machines need further security investigation?

This is where **network scanning** becomes useful.

In this session, we will learn how to discover systems and identify their exposed network services using Nmap.

We will use an isolated lab so that students can understand the process without scanning unrelated devices.

![Network infrastructure and connected servers](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80)

## Learning Objectives

By the end of this session, students should be able to:

1. Explain what network scanning is and why it is performed.
2. Understand IP addresses, ports and network services in the context of scanning.
3. Explain the difference between open, closed and filtered ports.
4. Understand the basic TCP connection process.
5. Install and use Nmap.
6. Discover live systems inside an authorised lab network.
7. Perform basic TCP port scanning.
8. Identify common services running on open ports.
9. Save scan results for documentation.
10. Interpret scan results without making unsupported security conclusions.

> **Important safety rule:** Only scan systems you own or have explicit written permission to assess. For this session, use your own virtual machines or an instructor-provided lab target. Never scan your college, workplace, public Wi-Fi or random internet addresses without authorisation.

---

# Part 1: Understanding Network Scanning

## 1. What Is Network Scanning?

Network scanning is the process of sending network requests to identify reachable devices, open ports and available services.

Think of a computer as a building.

The building has several doors. Each door represents a network port.

Different services use different doors to communicate with other computers.

For example:

- Port 22 is commonly used by SSH.
- Port 80 is commonly used by HTTP.
- Port 443 is commonly used by HTTPS.
- Port 3306 is commonly used by MySQL.

A network scan helps us understand which of these ports are accepting connections or responding to probes.

### Why Is Network Scanning Important?

Network scanning is useful for:

- Identifying devices on an internal network.
- Finding unnecessarily exposed services.
- Checking whether a firewall is blocking unwanted access.
- Verifying that a server exposes only the services it needs.
- Supporting vulnerability assessments.
- Maintaining an inventory of network devices.

Network scanning does not automatically identify vulnerabilities. It gives us information that can be investigated further.

## 2. Network Scanning vs Reconnaissance

We have already studied reconnaissance.

Let's understand how scanning fits into the process.

| Reconnaissance | Network Scanning |
|---|---|
| Collects information about the target | Checks reachable systems and network ports |
| May use public sources | Usually interacts with network devices |
| Example: finding DNS records | Example: checking whether port 22 is open |
| Helps build an initial asset picture | Helps verify network exposure |

### Example

During reconnaissance, we discover:

```text
Target: 192.168.56.101
```

During network scanning, we investigate:

```text
Is 192.168.56.101 reachable?

Is port 22 open?

Is port 80 open?

Which services are listening?
```

This is the transition from information gathering to technical investigation.

---

# Part 2: Understanding IP Addresses and Ports

## 3. What Is an IP Address?

An IP address identifies a network interface so that devices can communicate using the Internet Protocol.

Example:

```text
192.168.56.101
```

This is an IPv4 address.

For our practical, the target VM will have an IP address assigned to its virtual network interface.

An IP address identifies the destination. A port helps identify the application or service on that destination.

## 4. What Is a Port?

A port is a logical communication endpoint used by network applications.

Consider this example:

```text
192.168.56.101:80
```

Here:

- `192.168.56.101` is the destination IP address.
- `80` is the destination port.

A server can run multiple services at the same time, each listening on different ports.

### Common Ports You Should Know

| Port | Protocol / Service | Common Purpose |
|---:|---|---|
| 20, 21 | FTP | File transfer |
| 22 | SSH | Secure remote login |
| 23 | Telnet | Remote terminal access |
| 25 | SMTP | Email transfer |
| 53 | DNS | Domain name resolution |
| 80 | HTTP | Web communication |
| 110 | POP3 | Email retrieval |
| 143 | IMAP | Email access |
| 443 | HTTPS | Encrypted web communication |
| 445 | SMB | File and printer sharing |
| 3306 | MySQL | Database communication |
| 3389 | RDP | Remote desktop |
| 5432 | PostgreSQL | Database communication |
| 6379 | Redis | In-memory data store |
| 27017 | MongoDB | Database communication |

**Important:** These are common default ports, not guarantees. Services can be configured to use different ports.

### A Practical Example

Suppose a web server has:

```text
Port 22  - SSH
Port 80  - HTTP
Port 443 - HTTPS
```

This means the machine may provide remote administration and web services.

It does not mean all three services are insecure.

A security professional must investigate whether each service is required, correctly configured and properly protected.

## 5. TCP and UDP

Network services commonly communicate using TCP or UDP.

### TCP – Transmission Control Protocol

TCP establishes a connection before exchanging application data.

It provides:

- Connection establishment.
- Ordered data delivery.
- Error detection and retransmission.
- Flow control.

### UDP – User Datagram Protocol

UDP sends independent datagrams without establishing a TCP-style connection.

It has less protocol overhead and is used by services such as DNS, streaming and real-time applications.

### TCP Three-Way Handshake

Before normal TCP communication begins, the client and server establish a connection through a process called the three-way handshake.

![TCP three way handshake diagram](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80)

```text
CLIENT                         SERVER
  |                               |
  | -------- SYN ---------------> |
  |                               |
  | <------ SYN + ACK ------------|
  |                               |
  | -------- ACK ---------------> |
  |                               |
  |       CONNECTION ESTABLISHED  |
```

**Step 1: SYN**

The client asks to establish a TCP connection.

**Step 2: SYN-ACK**

The server acknowledges the request and responds.

**Step 3: ACK**

The client acknowledges the response.

The TCP connection is now established.

### Why Does This Matter in Network Scanning?

Some scanning methods use this connection process to determine whether a TCP port is accepting connections.

We will use the normal TCP connection method in today's practical because it is easy to understand and suitable for an introductory lab.

---

# Part 3: Understanding Port States

## 6. Open, Closed and Filtered Ports

Nmap commonly reports three important port states.

### Open

A port is open when an application is accepting connections or responding as an available service.

Example:

```text
80/tcp open http
```

This suggests that an HTTP service is listening on the target.

### Closed

A port is closed when the target is reachable but no application is accepting connections on that port.

Example:

```text
8080/tcp closed http-proxy
```

A closed port is not the same as an unreachable machine.

### Filtered

A port is filtered when Nmap cannot determine whether it is open or closed because network filtering is preventing a clear response.

For example, a firewall may silently drop packets.

Example:

```text
22/tcp filtered ssh
```

### Comparison

| State | Meaning |
|---|---|
| Open | A service is accepting connections |
| Closed | The target responded, but no service is listening |
| Filtered | Filtering prevents a clear determination |

### Class Question

A scan reports:

```text
22/tcp filtered ssh
80/tcp open http
443/tcp open https
```

What can we conclude?

**Expected answer:**

- Port 22 appears to be filtered.
- Ports 80 and 443 appear open.
- The target may be running web services.
- We cannot conclude that the web services are vulnerable.

---

# Part 4: Introduction to Nmap

## 7. What Is Nmap?

Nmap stands for **Network Mapper**.

It is an open-source network discovery and security auditing tool.

Security professionals use it to:

- Discover reachable hosts.
- Identify open ports.
- Detect services.
- Identify service versions.
- Perform basic operating-system detection.
- Save scan results for later analysis.

Nmap is widely used in penetration testing, network administration and security operations.

### Install Nmap on Arch Linux

For Arch Linux:

```bash
sudo pacman -S nmap
```

For Debian or Ubuntu:

```bash
sudo apt install nmap
```

For Fedora:

```bash
sudo dnf install nmap
```

Check the installation:

```bash
nmap --version
```

Expected output will display the installed Nmap version and build information.

### Understanding Nmap Syntax

The general structure is:

```bash
nmap [options] target
```

For example:

```bash
nmap 192.168.56.101
```

Here:

- `nmap` runs the scanner.
- `192.168.56.101` is the target.
- No additional scanning options are specified, so Nmap uses its default scan behaviour.

---

# Part 5: Preparing the Practical Lab

## 8. Lab Setup

We will use two virtual machines.

**Machine 1: Analyst**

Your Linux machine or a Kali Linux VM with Nmap installed.

**Machine 2: Target**

An Ubuntu VM or another Linux VM that you own and control.

Both machines should be connected to the same isolated host-only or internal virtual network.

Do not use bridged networking for a vulnerable target.

### Lab Architecture

```text
       ANALYST VM
      192.168.56.10
            |
            |
    ISOLATED VIRTUAL
        NETWORK
            |
            |
        TARGET VM
      192.168.56.101
```

The IP addresses above are examples. Your actual addresses may be different.

### Step 1: Identify the Target IP

On the target VM, inspect its network interface:

```bash
ip -br addr
```

Example output:

```text
lo       UNKNOWN    127.0.0.1/8
enp0s3   UP         192.168.56.101/24
```

Here:

- `lo` is the loopback interface.
- `enp0s3` is a network interface.
- `192.168.56.101/24` is the example lab address.

Write down the target's actual IP address.

### Step 2: Prepare a Few Services on the Target

To make the practical meaningful, we will deliberately run a few services on our own target VM.

On the target VM, install OpenSSH:

```bash
sudo apt update
sudo apt install openssh-server
```

Start the SSH service:

```bash
sudo systemctl enable --now ssh
```

Now start a temporary HTTP server using Python.

Create a directory:

```bash
mkdir -p ~/scan-lab
```

Enter it:

```bash
cd ~/scan-lab
```

Create a simple webpage:

```bash
echo '<h1>Welcome to the Network Scanning Lab</h1>' > index.html
```

Start the HTTP server:

```bash
python -m http.server 8000 --bind 0.0.0.0
```

Keep this terminal running.

The target now has:

- SSH on port 22, assuming the service started successfully.
- HTTP on port 8000.

The Python HTTP server is for classroom demonstration only. It is not intended for production hosting.

**Note:** On a Debian or Ubuntu target, the SSH service is commonly named `ssh`. Other distributions may use a different service name.

---

# Part 6: First Nmap Scan

## 9. Practical 1 – Basic Port Scan

Switch to the analyst machine.

Run:

```bash
nmap 192.168.56.101
```

Replace the example IP with your target's actual IP.

Nmap will perform its default scan of commonly used TCP ports.

### Example Output

```text
Starting Nmap

Nmap scan report for 192.168.56.101
Host is up.

PORT     STATE SERVICE
22/tcp   open  ssh
8000/tcp open  http-alt

Nmap done
```

The exact output depends on the services running on the target.

### Understanding the Result

```text
22/tcp open ssh
```

This tells us that:

- `22` is the port number.
- `tcp` is the transport protocol.
- `open` is the reported state.
- `ssh` is Nmap's service name associated with that port.

Similarly:

```text
8000/tcp open http-alt
```

This indicates that port 8000 appears to accept TCP connections and Nmap associates it with an alternative HTTP service.

### What Did We Discover?

We discovered two reachable services on our target.

This is useful because it gives us an initial picture of the target's network exposure.

However, we still need to investigate whether these services are required and correctly configured.

---

# Part 7: Discovering Live Hosts

## 10. Practical 2 – Host Discovery

In a real internal network, a tester may need to identify which IP addresses have reachable devices.

Nmap provides a host discovery mode.

The following command sends discovery probes without performing a port scan:

```bash
nmap -sn 192.168.56.0/24
```

**What does `/24` mean?**

It represents a network prefix that identifies a range of IPv4 addresses.

For this example:

```text
192.168.56.0/24
```

The network contains addresses from:

```text
192.168.56.0
```

to:

```text
192.168.56.255
```

The usable host addresses are normally:

```text
192.168.56.1 - 192.168.56.254
```

### Example Output

```text
Nmap scan report for 192.168.56.1
Host is up.

Nmap scan report for 192.168.56.10
Host is up.

Nmap scan report for 192.168.56.101
Host is up.

Nmap done
```

Your actual output will depend on the machines connected to the virtual network.

### What Does `-sn` Do?

The `-sn` option tells Nmap to perform host discovery without a port scan.

It helps identify hosts that respond to the discovery probes used by Nmap.

### Important Limitation

A machine may be online but fail to respond to the probes used for host discovery.

For example, a firewall may block the relevant traffic.

Therefore:

**No response does not always mean that a machine is powered off.**

### Practical Challenge

Run the discovery scan on your isolated lab subnet.

Record:

- Number of hosts discovered.
- IP address of your analyst VM.
- IP address of your target VM.
- Any other discovered devices.

Do not scan your physical college or home network.

---

# Part 8: Scanning Specific Ports

## 11. Practical 3 – Scan Selected Ports

Sometimes a security professional does not need to scan a large range of ports.

They may want to check a few important services.

For example:

```bash
nmap -p 22,80,443,8000 192.168.56.101
```

Here:

- `-p` specifies the ports to scan.
- `22,80,443,8000` is the selected list.
- The final argument is the target.

### Example Output

```text
PORT     STATE    SERVICE
22/tcp   open     ssh
80/tcp   closed   http
443/tcp  closed   https
8000/tcp open     http-alt
```

This result indicates:

- SSH is accepting connections.
- No service is listening on port 80.
- No service is listening on port 443.
- The temporary HTTP server is accepting connections on port 8000.

### Why Is This Useful?

In an actual assessment, the client may provide a list of approved ports or services to verify.

A targeted scan is useful for validating a specific security requirement without unnecessarily scanning unrelated ports.

---

# Part 9: Service and Version Detection

## 12. Practical 4 – Identify Service Versions

Finding an open port is only the beginning.

A security professional often needs to know which software is providing that service.

For example:

```text
22/tcp open ssh
```

This tells us that SSH appears to be running.

But which SSH implementation and version is it?

Nmap can attempt service and version detection.

Run:

```bash
nmap -sV -p 22,8000 192.168.56.101
```

### What Does `-sV` Do?

The `-sV` option enables service/version detection.

Nmap sends probes to open ports and analyses the responses to identify the service and, when possible, its version.

### Example Output

```text
PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH ...
8000/tcp open  http    SimpleHTTPServer ...
```

The exact service names and version strings depend on the operating system and installed software.

### Why Is Version Detection Important?

Suppose a company reports that all its servers should use a supported version of OpenSSH.

A security tester can identify the detected version and compare it with the approved software inventory.

This helps identify:

- Unsupported software.
- Outdated applications.
- Services that need patch verification.
- Unexpected software running on a server.

**Important:** A version string alone does not prove that a vulnerability exists. Backported security patches, vendor modifications and configuration differences can affect the actual security status.

---

# Part 10: Saving Scan Results

## 13. Practical 5 – Save Nmap Output

In professional security assessments, scan results should be saved rather than relying on terminal history.

Run:

```bash
nmap -sV -p 22,8000 -oN scan-report.txt 192.168.56.101
```

The `-oN` option saves the normal human-readable output to a file.

Now inspect the report:

```bash
cat scan-report.txt
```

### Save Results in XML Format

Nmap also supports XML output:

```bash
nmap -sV -p 22,8000 -oX scan-report.xml 192.168.56.101
```

XML is useful when scan results need to be processed by other tools or included in automated reporting workflows.

### Save Multiple Output Formats

```bash
nmap -sV -p 22,8000 -oA lab-scan 192.168.56.101
```

This creates files using the same base name:

```text
lab-scan.nmap
lab-scan.xml
lab-scan.gnmap
```

This is useful when keeping evidence for a security assessment.

### Professional Practice

A scan report should include:

- Target IP address.
- Date and time.
- Scan purpose.
- Command used.
- Open ports.
- Detected services.
- Any limitations.
- Analyst observations.

Do not treat a scan report as a complete vulnerability assessment.

---

# Part 11: Understanding the Results

## 14. Reading a Scan Like a Security Professional

Consider this fictional scan report:

```text
PORT     STATE    SERVICE
22/tcp   open     ssh
80/tcp   open     http
3306/tcp open     mysql
8080/tcp filtered http-proxy
```

Let's interpret it.

| Port | Observation | What should we investigate? |
|---:|---|---|
| 22 | SSH is open | Is remote administration required and restricted? |
| 80 | HTTP is open | Is the website intended to be available without HTTPS? |
| 3306 | MySQL is open | Should database access be restricted to application servers? |
| 8080 | Filtered | Is a firewall or network rule filtering traffic? |

Notice the difference between an observation and a conclusion.

**Observation:**

```text
TCP port 3306 is reported open.
```

**Reasonable investigation question:**

```text
Should this database service be reachable from the analyst's network?
```

**Unsupported conclusion:**

```text
The database has been hacked.
```

An open port does not prove a security incident.

### Why Is an Exposed Database Worth Investigating?

Database services often store important information.

A database port may need to be reachable by an application server but should not necessarily be reachable by every machine on the network.

A security assessment should compare the observed exposure with the intended network architecture.

---

# Part 12: Final Guided Practical

## 15. Mini Network Assessment

Students will now complete a small network scanning assessment using their own isolated lab.

### Scenario

You are a junior security analyst.

Your instructor has assigned you one target VM and authorised you to inspect its network exposure.

Your task is to identify reachable services and prepare a short report.

### Step 1: Identify the Target

Record the target's IP address.

### Step 2: Discover the Host

Run:

```bash
nmap -sn 192.168.56.101
```

Replace the IP with your assigned target.

### Step 3: Perform a Basic Scan

```bash
nmap 192.168.56.101
```

### Step 4: Scan Selected Ports

```bash
nmap -p 22,80,443,8000 192.168.56.101
```

### Step 5: Identify Service Versions

```bash
nmap -sV -p 22,8000 192.168.56.101
```

### Step 6: Save the Report

```bash
nmap -sV -p 22,8000 -oA final-lab-report 192.168.56.101
```

### Step 7: Write Your Findings

Students must answer:

1. Was the target reachable?
2. Which ports were open?
3. Which services were identified?
4. Were any ports filtered?
5. Which services need further investigation?
6. What information cannot be confirmed from this scan alone?

### Submission Table

| Field | Student Finding |
|---|---|
| Target IP | |
| Host status | |
| Open ports | |
| Closed ports | |
| Filtered ports | |
| Detected services | |
| Further investigation required | |
| Scan limitations | |

---

# Part 13: Common Mistakes

| Mistake | Correct Understanding |
|---|---|
| Assuming every open port is vulnerable | An open port only indicates a reachable service |
| Assuming no response means the machine is offline | A firewall may block discovery probes |
| Assuming a service name proves its software version | Service/version detection may be incomplete |
| Scanning a large network without permission | Always verify scope and authorisation first |
| Treating a scan as a full security audit | Scanning is one part of a larger assessment |
| Ignoring scan output and saving no evidence | Keep reports for analysis and documentation |

---

# Part 14: Theory Assessment

1. What is network scanning?
2. Why is network scanning performed during a security assessment?
3. What is the difference between an IP address and a port?
4. Explain TCP and UDP.
5. What happens during the TCP three-way handshake?
6. Differentiate open, closed and filtered ports.
7. What is Nmap?
8. What is the purpose of the `-sn` option?
9. What does the `-p` option do?
10. What is service/version detection?
11. Why should scan results be saved?
12. Does an open port prove that a system is vulnerable? Explain.

# Part 15: Practical Assessment

Complete the following tasks on your authorised lab target:

1. Check whether the target responds to host discovery.
2. Perform a basic TCP scan.
3. Scan ports 22, 80, 443 and 8000.
4. Identify service versions on the open ports.
5. Save the scan output in normal and XML formats.
6. Prepare a short report containing your observations.

# Homework

**Task: Prepare a Network Scanning Report**

Use your own lab target or an instructor-provided target.

Your report should include:

- Target information.
- Network discovery result.
- Open, closed and filtered ports.
- Detected services.
- Nmap commands used.
- Saved scan output.
- Three observations.
- Two questions that need further investigation.

Do not scan public IP addresses or third-party networks for this assignment.

---

# Session Summary

Today, we moved from reconnaissance to technical network investigation.

You learned how to:

- Understand network ports and services.
- Explain the TCP three-way handshake.
- Interpret open, closed and filtered port states.
- Install and use Nmap.
- Discover hosts in an isolated network.
- Scan selected ports.
- Identify service versions.
- Save scan results for professional documentation.

Remember:

> A network scan tells you what appears to be reachable. A security assessment determines whether that exposure is appropriate, necessary and secure.

## Next Session: Network Scanning – Part 2

In the next session, we will study:

- TCP connect scanning versus SYN scanning.
- UDP scanning and why it behaves differently.
- How to interpret scan limitations.
- Operating-system detection and its limitations.
- Combining scan results into a useful service inventory.
- Practical analysis of network exposure.

We will focus on understanding scan results rather than collecting commands without purpose.
