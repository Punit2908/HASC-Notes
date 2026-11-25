

---

# 📚 Complete Computer Networking Notes (Part 2)

**Table of Contents**
1. [Chapter 7 – Basics of the Internet](#chapter-7--basics-of-the-internet)
2. [Chapter 8 – Network Types: PAN, LAN, MAN, WAN, WLAN](#chapter-8--network-types-pan-lan-man-wan-wlan)
3. [Chapter 9 – IP Addressing: Classes, CIDR, IPv6](#chapter-9--ip-addressing-classes-cidr-ipv6)
4. [Chapter 10 – TCP/IP Troubleshooting Utilities](#chapter-10--tcpip-troubleshooting-utilities)
5. [Appendix – Cheat Sheet + Practice Questions](#appendix--cheat-sheet--practice-questions)

---

# Chapter 7 – Basics of the Internet

## 7.1 What is the Internet?

The **Internet** is a global network of interconnected computer networks that communicate using a common set of rules (**TCP/IP protocol suite**). It connects billions of devices — computers, phones, servers, IoT devices — into **"a network of networks."**

```
Your PC → Router → ISP → Internet Backbone → Destination Server
```

> 🧠 **Internet vs internet:** *internet* (small i) = any interconnected network (inter-network). *Internet* (capital I) = the global public network.

## 7.2 Brief History

| Year | Milestone |
|---|---|
| 1969 | **ARPANET** — first packet-switching network (US DoD) |
| 1974 | **TCP/IP** proposed by Vint Cerf & Bob Kahn |
| 1983 | ARPANET adopts TCP/IP (Jan 1, 1983 — "flag day") |
| 1989–91 | **World Wide Web** invented by **Tim Berners-Lee** at CERN (HTML, HTTP, URL) |
| 1993 | First graphical browser (**Mosaic**) → Internet goes public |
| Today | 5G, cloud computing, IoT — billions of connected devices |

## 7.3 How the Internet Works (Basic Flow)

```
┌────────┐     ┌────────┐     ┌─────┐     ┌───────────────┐
│ Client │────▶│ Router │────▶│ ISP │────▶│ Internet core │──▶ Server
│(browser)│    │(home)  │     │     │     │ (backbone)    │
└────────┘     └────────┘     └─────┘     └───────────────┘
```

1. You type `www.google.com` in a **browser** (client).
2. **DNS** translates the name into an IP address (like a phone book).
3. Your request travels through your **router → ISP → backbone** as **packets**.
4. The **web server** receives it, sends back the webpage in packets.
5. Your browser reassembles packets and renders the page.

**Key idea:** Data is broken into **packets**; each packet may take a different route and is reassembled at the destination. This is called **packet switching**.

## 7.4 Important Terminology

| Term | Meaning |
|---|---|
| **ISP** | Internet Service Provider — company giving you connectivity (Jio, Airtel, Comcast) |
| **IP Address** | Unique logical address of a device on a network |
| **MAC Address** | Permanent physical address of a NIC (burned into hardware) |
| **DNS** | Domain Name System — converts names (`google.com`) to IPs |
| **Protocol** | Set of rules for communication (HTTP, FTP, TCP, IP) |
| **Bandwidth** | Maximum data-carrying capacity (Mbps/Gbps) |
| **Latency** | Delay in ms for data to reach destination (ping time) |
| **URL** | Uniform Resource Locator — full web address |
| **Domain** | Registered name (e.g., `google.com`) |
| **Web Server / Hosting** | Computer that stores websites & serves them |
| **Browser** | Client software to view web pages (Chrome, Firefox) |
| **Firewall** | Filters traffic to protect a network |
| **Modem** | MOdulator-DEModulator — converts signals (fiber/coax ⇄ Ethernet) |

**Anatomy of a URL:**
```
https://www.google.com:443/search?q=linux
│      │            │     │       │
scheme  domain       port  path   query
```

## 7.5 Requirements to Connect to the Internet

- **Hardware:** computer/smartphone, **NIC**, **modem**, **router** (Wi-Fi), transmission medium (cable/fiber/radio)
- **Software:** OS with TCP/IP stack, browser/apps
- **ISP account / connection plan**
- **Valid IP address** (static or via DHCP)

## 7.6 Types of Internet Connections

| Type | Medium | Speed | Notes |
|---|---|---|---|
| **Dial-up** | Telephone line | 56 Kbps | Obsolete; occupies phone line |
| **DSL/Broadband** | Telephone line | 1–100 Mbps | ADSL; always-on |
| **Cable** | TV coaxial | 10–500 Mbps | Shared with neighbors |
| **Fiber (FTTH)** | Optical fiber | 100 Mbps–1 Gbps+ | Fastest home option |
| **Satellite** | Radio waves | 25–150 Mbps | Remote areas; high latency |
| **Mobile (3G/4G/5G)** | Cellular | Mbps–Gbps | SIM-based, hotspots |
| **WiMAX / Fixed wireless** | Radio | Mbps | Last-mile alternative |
| **Leased line** | Dedicated | 1:1 symmetric | Businesses; costly, guaranteed |

## 7.7 Services Available on the Internet

| Service | Protocol/Port | Example |
|---|---|---|
| **WWW (web pages)** | HTTP/HTTPS (80/443) | Browsing websites |
| **Email** | SMTP (25/587), POP3 (110), IMAP (143/993) | Gmail, Outlook |
| **File Transfer** | FTP (21), SFTP (22) | Uploading site files |
| **Remote Login** | Telnet (23), SSH (22) | Managing servers |
| **Instant Messaging/Voice/Video** | SIP, WebRTC | WhatsApp, Zoom, Teams |
| **Streaming** | HTTPS/RTP | YouTube, Netflix |
| **Cloud Computing** | HTTPS/APIs | AWS, Google Drive |
| **E-commerce, Banking** | HTTPS | Amazon, UPI |
| **Domain Name Lookup** | DNS (53) | Resolving google.com |

## 7.8 Usages & Applications of the Internet

- **Communication** — email, chat, video calls, social media.
- **Education** — online classes, e-books, MOOCs (Coursera, NPTEL), research.
- **Business & E-commerce** — online shopping, digital payments, marketing, ERP.
- **Banking & Finance** — net banking, UPI, stock trading.
- **Healthcare** — telemedicine, online reports, health records.
- **Entertainment** — streaming, gaming, music.
- **Government (e-Governance)** — e-filing of taxes, Aadhaar services, online forms.
- **Job hunting / freelancing / remote work**.
- **Navigation & maps** — GPS, real-time traffic.
- **IoT & Smart homes** — smart TVs, security cameras.

## 7.9 Advantages & Disadvantages

| Advantages ✅ | Disadvantages ⚠️ |
|---|---|
| Instant global communication | Privacy & data theft risks |
| Unlimited information access | Misinformation/fake news |
| E-commerce & remote work | Cyberbullying, online fraud |
| E-learning anywhere | Addiction, reduced focus |
| Cost-effective services | Viruses, malware, phishing |
| Entertainment & socializing | Health issues (sedentary), security threats |

**Safety tips:** strong passwords, 2FA, avoid public Wi-Fi for banking, keep OS/antivirus updated, verify links (phishing), use HTTPS sites.

## 7.10 Internet vs WWW vs Intranet vs Extranet

| Feature | Internet | WWW | Intranet | Extranet |
|---|---|---|---|---|
| Meaning | Global network of networks | Service on the internet (hyperlinked web pages via HTTP) | Private network inside an organization | Intranet partially opened to trusted outsiders (vendors, partners) |
| Access | Public | Public | Employees only | Employees + partners |
| Ownership | Nobody owns it | — | Organization | Organization |
| Example | — | youtube.com | Company portal | Supplier portal of a company |

> 🧠 **The Web is a service that runs on the Internet** — like a TV show running on cable. Email is another service; the internet is the road, the web is one type of vehicle on it.

---

# Chapter 8 – Network Types: PAN, LAN, MAN, WAN, WLAN

## 8.1 What is a Computer Network?

A **computer network** is a collection of interconnected devices that share resources (files, printers, internet) and communicate using standard protocols.

Networks are classified **by geographical size**: PAN → LAN → WLAN → MAN → WAN.

```
PAN (personal) ⊂ LAN (building) ⊂ MAN (city) ⊂ WAN (country/world)
```

## 8.2 PAN – Personal Area Network

- Range: **~1–10 meters**, around one person.
- Used for: connecting phone ↔ earbuds, smartwatch, file transfer, tethering.
- Technologies: **Bluetooth, Infrared, NFC, USB, Zigbee**.
- **Wireless PAN (WPAN)** based on IEEE **802.15** standard.
- Example: pairing AirPods with a phone via Bluetooth.

## 8.3 LAN – Local Area Network

- Range: single room / building / campus (**up to ~1 km**).
- **Owned by one organization**; high speed (100 Mbps–10 Gbps); low cost per node; low error rate.
- Technologies: **Ethernet (IEEE 802.3)**, switches, RJ-45 cabling (Cat5e/Cat6).
- Example: computer lab in a college, office floor with shared printer.

```
        ┌─────────┐
 PC ────┤         ├──── Printer
 PC ────┤ SWITCH  ├──── Server     ← typical LAN
 PC ────┤         ├───┐
        └────┬────┘   PC
             │
          Router → Internet
```

## 8.4 WLAN – Wireless Local Area Network

- A **LAN without cables** — devices connect via **Wi-Fi** (IEEE **802.11** family) through an **Access Point (AP)** / hotspot.
- Range: ~30–100 m indoors per AP.
- Media: radio waves (2.4 GHz and 5 GHz bands).

### Wi-Fi Standards

| Standard | Name | Max Speed | Band |
|---|---|---|---|
| 802.11b | Wi-Fi 1 | 11 Mbps | 2.4 GHz |
| 802.11a | Wi-Fi 2 | 54 Mbps | 5 GHz |
| 802.11g | Wi-Fi 3 | 54 Mbps | 2.4 GHz |
| 802.11n | Wi-Fi 4 | 600 Mbps | 2.4/5 GHz |
| 802.11ac | Wi-Fi 5 | ~1–3.5 Gbps | 5 GHz |
| 802.11ax | Wi-Fi 6/6E | ~9.6 Gbps | 2.4/5/6 GHz |

### WLAN Security
- **WEP** — broken, obsolete ❌
- **WPA** — improved but weak ❌
- **WPA2** — AES encryption, standard today ✔
- **WPA3** — latest, strongest ✔
- Also: hide SSID (weak), MAC filtering (weak), strong passphrase + WPA2/WPA3 = best practice.

## 8.5 MAN – Metropolitan Area Network

- Range: a **city** (~5–50 km).
- Connects multiple **LANs within a city** — e.g., all branches of a bank in a city, cable TV networks, city-wide Wi-Fi.
- Usually **owned by a single large organization or a service provider**.
- Technologies: metro Ethernet, fiber rings, WiMAX, cable/DVB.
- Speed: moderate–high; costlier than LAN.

## 8.6 WAN – Wide Area Network

- Range: **country, continent, or the entire world**.
- Connects LANs/MANs that are far apart; **usually not owned by one organization** — uses leased telecom lines, satellites, undersea cables.
- Slower than LAN, higher latency, more expensive, more error-prone.
- Technologies: MPLS, leased lines, VPN over internet, SD-WAN, satellite.
- **The Internet is the largest WAN.**
- Example: an Indian company's Mumbai office connected to its New York data center.

## 8.7 Comparison Table (Exam Favorite ⭐)

| Feature | PAN | LAN | WLAN | MAN | WAN |
|---|---|---|---|---|---|
| Full form | Personal Area Network | Local Area Network | Wireless LAN | Metropolitan Area Network | Wide Area Network |
| Range | ~10 m | Building (~1 km) | Building (~100 m/AP) | City (~50 km) | Country/World |
| Speed | 1–3 Mbps (BT) | 100 Mbps–10 Gbps | Up to ~9.6 Gbps | Moderate–High | Low–High |
| Ownership | Individual | Single org | Single org | Org/Provider | Multiple providers |
| Cost | Very low | Low | Low | High | Very high |
| Medium | Bluetooth/NFC/IR | Ethernet cable | Radio (Wi-Fi) | Fiber/WiMAX | Leased line/satellite/VPN |
| IEEE Std | 802.15 | 802.3 | 802.11 | — | — |
| Example | Phone ↔ earbuds | College computer lab | Home Wi-Fi | City cable network | The Internet |

## 8.8 Network Topologies (Quick Reference)

Topology = physical/logical layout of nodes.

| Topology | Layout | Pros | Cons |
|---|---|---|---|
| **Bus** | All on one backbone cable | Cheap, simple | Backbone break kills all; collisions |
| **Star** | All nodes connect to central switch | Easy to manage; one cable failure is isolated | Switch is single point of failure |
| **Ring** | Circular; data passes node to node | No collisions (token) | One break can stop network |
| **Mesh** | Every node linked to every other | Most reliable/redundant | Very expensive: n(n−1)/2 links |
| **Hybrid** | Mix (e.g., star-ring) | Flexible, scalable | Complex |
| **Tree/Hierarchical** | Star networks of stars | Scalable | Root failure affects branch |

> ⭐ Modern wired LANs almost always use **star topology** with a switch at the center.

## 8.9 Network Devices

| Device | OSI Layer | Function |
|---|---|---|
| **Repeater** | 1 | Regenerates weak signals → extends range |
| **Hub** | 1 | Dumb multi-port repeater; sends to ALL ports (wasteful, obsolete) |
| **Bridge** | 2 | Connects two LAN segments using MAC addresses |
| **Switch** | 2 | Smart hub; forwards frames only to the destination MAC port; today's LAN standard |
| **Router** | 3 | Routes packets between different networks using IP addresses; connects LAN to WAN |
| **Access Point (AP)** | 2 | Bridge between wireless and wired LAN |
| **Modem** | 1 | Signal conversion (fiber/coax/DSL ⇄ Ethernet) |
| **Gateway** | up to 7 | Protocol translator between different systems ("doorway" out of a network) |
| **Firewall** | 3–7 | Filters traffic by rules; protects network |
| **NIC** | 1–2 | Card/interface connecting a device to the network; has MAC address |

---

# Chapter 9 – IP Addressing: Classes, CIDR, IPv6

## 9.1 What is an IP Address?

An **IP address** is a unique **logical** address assigned to each device on a network so packets can be routed to it. Assigned manually (static) or automatically by **DHCP**.

- **IPv4** → **32-bit** address, written as **4 decimal octets** separated by dots (dotted-decimal). e.g., `192.168.1.10`
- Each octet = 8 bits → range 0–255 → total **2³² ≈ 4.29 billion** addresses.

## 9.2 Binary ↔ Decimal Conversion

Each octet has bit values: `128 64 32 16 8 4 2 1`

```
Convert 192 → binary:
192 = 128 + 64            → 11000000

Convert 168 → binary:
168 = 128 + 32 + 8        → 10101000

So 192.168.1.10 →
11000000.10101000.00000001.00001010
```

Reverse: `11000000` = 128+64 = **192**.

## 9.3 Network Part vs Host Part & Subnet Mask

Every IPv4 address has two parts:
- **Network ID** — which network the host is on (like a street name).
- **Host ID** — the specific device (house number).

The **subnet mask** (also 32 bits) tells where the split happens — `1` bits = network, `0` bits = host.

```
IP:    192.168.1.10
Mask:  255.255.255.0
       ┌─────────┬──┐
       │ network │host│
       └─────────┴──┘
Network ID = 192.168.1.0     (IP AND Mask)
Host ID    = 0.0.0.10
Broadcast  = 192.168.1.255   (all host bits = 1)
```

**ANDing example** (how a device finds the network ID):
```
  192 = 11000000
  255 = 11111111
AND =  11000000 = 192 ✔
```

Two devices can talk directly only if their **network IDs match**; otherwise traffic must go through a **router (default gateway)**.

## 9.4 Classful Addressing (Classes A–E)

Historically, IPv4 space was divided into fixed classes based on the **first octet**:

| Class | 1st Octet Range | Default Mask (Prefix) | Hosts/Network | Use |
|---|---|---|---|---|
| **A** | 1 – 126 | 255.0.0.0 (/8) | 16,777,214 | Huge networks |
| **B** | 128 – 191 | 255.255.0.0 (/16) | 65,534 | Medium (large orgs) |
| **C** | 192 – 223 | 255.255.255.0 (/24) | 254 | Small networks |
| **D** | 224 – 239 | — (multicast) | — | Multicasting |
| **E** | 240 – 255 | — (reserved) | — | Research/experimental |

> ⭐ 0.x.x.x is reserved; **127.x.x.x = loopback** (`127.0.0.1` = localhost — "this computer").

**Memory trick:** A = **1**xx, B = **12**8–**19**1, C = **192**–223. (Notice the first bits: 0, 10, 110, 1110, 1111.)

### Private IP Ranges (RFC 1918) — not routable on the Internet

| Class | Private Range | Default Mask |
|---|---|---|
| A | **10.0.0.0 – 10.255.255.255** | /8 |
| B | **172.16.0.0 – 172.31.255.255** | /12 |
| C | **192.168.0.0 – 192.168.255.255** | /16 |

Every home router hands out `192.168.x.x` addresses; a router performing **NAT** (Network Address Translation) converts private → public IPs for internet access.

### Special Addresses

| Address | Meaning |
|---|---|
| `127.0.0.1` | Loopback (test own TCP/IP stack) |
| `169.254.x.x` | **APIPA** — self-assigned when DHCP fails (sign of a problem!) |
| `x.x.x.0` | Network address (cannot assign to host) |
| `x.x.x.255` | Broadcast address (cannot assign to host) |
| `255.255.255.255` | Limited broadcast |
| `0.0.0.0` | "Any/all networks" (routing default) |

### Problems with Classful Addressing
- Class A/B waste enormous address space (a company with 500 hosts would need a whole /16 = 65k addresses).
- Class C gives only 254 hosts.
- **Solution → Subnetting, VLSM, and CIDR (Classless Inter-Domain Routing, 1993).**

## 9.5 Classless Addressing, CIDR & Prefix Notation

**CIDR** ignores classes. The **prefix** (`/n`) simply states how many leading bits are the network part:

```
192.168.1.0/26
             └─ 26 network bits → 32−26 = 6 host bits
```

### Prefix ↔ Subnet Mask ↔ Hosts (learn this table ⭐)

| Prefix (CIDR) | Subnet Mask | Host Bits | Total IPs | **Usable Hosts** |
|---|---|---|---|---|
| /8 | 255.0.0.0 | 24 | 16,777,216 | 16,777,214 |
| /16 | 255.255.0.0 | 16 | 65,536 | 65,534 |
| /24 | 255.255.255.0 | 8 | 256 | 254 |
| /25 | 255.255.255.128 | 7 | 128 | 126 |
| /26 | 255.255.255.192 | 6 | 64 | 62 |
| /27 | 255.255.255.224 | 5 | 32 | 30 |
| /28 | 255.255.255.240 | 4 | 16 | 14 |
| /29 | 255.255.255.248 | 3 | 8 | 6 |
| /30 | 255.255.255.252 | 2 | 4 | 2 |

**Formulas:**
- Total addresses = **2^(host bits)**
- Usable hosts = **2^(host bits) − 2** (minus network & broadcast)
- Number of subnets when borrowing n bits = **2^n**

## 9.6 Subnetting — Worked Example ⭐⭐

**Q: Split 192.168.1.0/24 into 4 equal subnets.**

4 subnets → borrow **2 bits** (2² = 4) → new prefix **/26**, mask `255.255.255.192`.
Host bits left = 6 → 64 addresses → **62 usable hosts** per subnet.

Block size = 256 − 192 = **64** → subnets step by 64 in the 4th octet:

| Subnet | Network ID | First Host | Last Host | Broadcast |
|---|---|---|---|---|
| 1 | 192.168.1.0/26 | .1 | .62 | .63 |
| 2 | 192.168.1.64/26 | .65 | .126 | .127 |
| 3 | 192.168.1.128/26 | .129 | .190 | .191 |
| 4 | 192.168.1.192/26 | .193 | .254 | .255 |

**Q2: Which subnet does 192.168.1.100/26 belong to?**
100 falls between 64 and 127 → **subnet 192.168.1.64/26**, broadcast 192.168.1.127, valid hosts .65–.126.

**Q3: Mask of /27?**
27 network bits → last octet = 128+64+32 = **224** → `255.255.255.224`, block size 32.

**VLSM (Variable Length Subnet Mask):** give different sizes to different subnets — big subnet for LAN (e.g., /25), small /30 for point-to-point router links — to save addresses. (Same technique, repeated per subnet.)

## 9.7 DHCP, Static IP & APIPA

| Method | Description |
|---|---|
| **Static IP** | Manually configured; used for servers, printers, routers |
| **Dynamic (DHCP)** | Server leases an IP automatically (DORA: Discover, Offer, Request, Acknowledge) |
| **APIPA** | If DHCP fails, Windows self-assigns 169.254.x.x → means "DHCP problem — check cabling/DHCP server" |

## 9.8 IPv6 Addressing

**Why IPv6?** IPv4's 4.3 billion addresses are exhausted. **IPv6 uses 128 bits → 2¹²⁸ ≈ 3.4 × 10³⁸ addresses** ("enough for every grain of sand on Earth").

### Format
- 128 bits → **8 groups of 4 hex digits**, separated by colons.
- Example (full): `2001:0db8:0000:0000:0000:ff00:0042:8329`

### Abbreviation Rules ⭐
1. **Leading zeros in a group can be dropped:** `0db8 → db8`, `0042 → 42`.
2. **One or more consecutive all-zero groups can be replaced by `::` — but only ONCE.**

```
2001:0db8:0000:0000:0000:ff00:0042:8329
→ 2001:db8:0:0:0:ff00:42:8329
→ 2001:db8::ff00:42:8329          ✔ compressed form

2001:0db8:0000:0000:0001:0000:0000:0001
→ 2001:db8:0:0:1::1               ✔ (:: used once)
```

### IPv6 Address Types

| Type | Prefix | Purpose |
|---|---|---|
| **Global Unicast** | `2000::/3` (2xxx, 3xxx) | Public, internet-routable (like IPv4 public) |
| **Link-Local** | `fe80::/10` | Auto-configured per interface, same-link only (like APIPA but normal & useful) |
| **Unique Local** | `fc00::/7` (fd00::/8) | Private/internal (like RFC 1918) |
| **Multicast** | `ff00::/8` | One-to-many (e.g., `ff02::1` = all nodes on link) |
| **Loopback** | `::1` | This host |
| **Unspecified** | `::` | "No address" (e.g., DHCPv6 discovery) |
| **Anycast** | (assigned from unicast space) | Packet goes to the *nearest* of many identical servers |

> ⭐ IPv6 has **no broadcast** — its job is done by multicast/anycast. IPv6 also enables **SLAAC** ( Stateless Address Auto-Configuration — devices self-configure without DHCP).

### IPv4 vs IPv6

| Feature | IPv4 | IPv6 |
|---|---|---|
| Size | 32-bit | 128-bit |
| Notation | Decimal dotted (192.168.1.1) | Hex colon (2001:db8::1) |
| Total addresses | ~4.3 billion | ~340 undecillion |
| Header | 20–60 bytes, complex | 40 bytes, simplified & efficient |
| Configuration | Manual/DHCP | Auto (SLAAC)/DHCPv6 |
| Broadcast | Yes | No (uses multicast) |
| IPsec | Optional | Built-in support |
| NAT | Required (address shortage) | Not needed (end-to-end) |
| Checksum | Present in header | Removed (faster) |

### Transition Techniques (IPv4 → IPv6)
- **Dual stack** — run both protocols side by side.
- **Tunneling** — wrap IPv6 packets inside IPv4 (6to4, Teredo).
- **Translation (NAT64/DNS64)** — convert between the two.

## 9.9 MAC Address vs IP Address

| MAC | IP |
|---|---|
| 48-bit physical address (e.g., `A4:5E:60:1B:2C:D3`) | 32-bit (IPv4) / 128-bit (IPv6) logical address |
| Burned into NIC by manufacturer | Assigned by network/DHCP |
| Works at Layer 2 (local delivery) | Works at Layer 3 (routing across networks) |
| Doesn't change with network | Changes with network |

---

# Chapter 10 – TCP/IP Troubleshooting Utilities

These built-in tools diagnose **where** a network problem is. (Windows syntax shown; Linux equivalents noted.)

## 10.1 ping — "Is it reachable?"

Tests reachability + round-trip time (RTT) using **ICMP Echo Request/Reply**.

```
ping <host>
```

```bash
C:\> ping google.com

Pinging google.com [142.250.77.14] with 32 bytes of data:
Reply from 142.250.77.14: bytes=32 time=12ms TTL=118
Reply from 142.250.77.14: bytes=32 time=11ms TTL=118
Reply from 142.250.77.14: bytes=32 time=11ms TTL=118
Reply from 142.250.77.14: bytes=32 time=12ms TTL=118

Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)
```

**Reading the output:**
- **time=12ms** → round-trip latency (lower = better; >150ms feels slow).
- **TTL=118** → hops remaining. Windows starts at 128, Linux at 64 → `128−118 = 10 routers crossed`.
- **Lost = 0%** → healthy link.

**Useful options (Windows / Linux):**

| Option | Windows | Linux |
|---|---|---|
| Count | `ping -n 10 host` | `ping -c 10 host` |
| Continuous | `ping -t host` (Ctrl+C stop) | `ping host` (default) |
| Packet size | `ping -l 1000 host` | `ping -s 1000 host` |
| TTL | `ping -i 5 host` | `ping -t 5 host` |
| Interval | `ping -w 2000 host` | `ping -i 2 host` |

**Common error messages:**

| Message | Likely Cause |
|---|---|
| `Request timed out` | Host down/firewall drops ICMP; no reply path back |
| `Destination host unreachable` | No route to destination (router/gateway issue) |
| `General failure` | Local NIC/cabling/driver problem |
| `Unknown host` / could not resolve | **DNS failure** |
| `100% loss` | Total connectivity failure to that target |

## 10.2 ipconfig / ifconfig / ip — "What is my configuration?"

**Windows — ipconfig:**
```bat
ipconfig                :: basic IP, mask, gateway
ipconfig /all           :: + MAC, DHCP server, DNS, lease times
ipconfig /release       :: give up DHCP lease
ipconfig /renew         :: ask DHCP for new IP  (first fix for 169.254.x.x!)
ipconfig /flushdns      :: clear DNS cache (after DNS changes)
ipconfig /displaydns    :: view DNS cache
```

**Linux:**
```bash
ip a                    # addresses (modern; replaces ifconfig)
ip route                # routing table / default gateway
ifconfig                # older tool (net-tools)
dhclient -r / dhclient  # release / renew DHCP (or nmcli/networkctl)
```

**Check list:** correct IP? correct mask? correct default gateway? DNS server present? If IP = `169.254.x.x` → DHCP failed.

## 10.3 arp — "Who is on my LAN?"

Shows the **IP ↔ MAC mapping table** (Address Resolution Protocol cache).

```bash
arp -a                  # Windows & Linux
```
```
Internet Address    Physical Address     Type
192.168.1.1         a4-5e-60-1b-2c-d3    dynamic   ← gateway
192.168.1.23        3c-7a-8d-11-22-33    dynamic
```
- Useful to spot **duplicate IPs / ARP spoofing** (two IPs with one MAC, gateway MAC changing).
- `arp -d *` clears cache (Windows); `sudo ip neigh flush all` (Linux).

## 10.4 tracert / traceroute — "Which path do packets take?"

Lists every **router (hop)** between you and the destination by sending packets with increasing **TTL** values (TTL=1 dies at hop 1 → ICMP "time exceeded" reveals hop 1; TTL=2 reveals hop 2…).

```bash
tracert google.com        # Windows
traceroute google.com     # Linux (or: tracepath)
```
```
  1     1 ms   192.168.1.1        ← your router
  2    12 ms   10.10.0.1          ← ISP
  3    15 ms   72.14.x.x          ← ISP core
  ...
 10    14 ms   142.250.77.14      ← destination
```

**Diagnosis:**
- Stops early + `* * *` → route broken at that hop.
- High latency spike at one hop → congestion there.
- Trailing `* * *` that still reaches destination → some routers just don't answer ICMP (not a fault).

`pathping` (Windows) = tracert + ping statistics per hop (takes ~5 min).

## 10.5 nslookup / dig — "Is DNS working?"

```bash
nslookup google.com          # Windows & Linux
```
```
Server:  dns.google
Address: 8.8.8.8

Non-authoritative answer:
Name:    google.com
Address: 142.250.77.14
```

```bash
dig google.com               # Linux, richer output
dig google.com MX            # mail records
nslookup google.com 8.8.8.8  # query a specific DNS server
ipconfig /flushdns           # clear cache before retesting
```

- If **IP ping works but name fails** → DNS problem.
- Try another DNS (8.8.8.8) → if that works, your ISP's DNS is down.

## 10.6 netstat / ss — "Who am I connected to? What ports are open?"

Shows active connections, listening ports, routing table, and statistics.

```bash
netstat -a           # all connections & listening ports
netstat -n           # numeric (skip DNS — faster)
netstat -ano         # + process PID (Windows)
netstat -r           # routing table (same as route print)
netstat -s           # protocol statistics

ss -tuln             # Linux modern: listening TCP/UDP
ss -tunp             # with process names
```
```
Proto  Local Address        Foreign Address     State
TCP    192.168.1.10:52144   142.250.77.14:443   ESTABLISHED   ← browser → Google
TCP    0.0.0.0:22           0.0.0.0:0           LISTENING     ← SSH server on
```

**States:** `LISTENING` = waiting for clients; `ESTABLISHED` = active session; `TIME_WAIT` = closing; `SYN_SENT` = trying to connect (stuck here → firewall).

Security use: unknown LISTENING ports = possible malware; suspicious ESTABLISHED connections = investigate.

## 10.7 route — "Where do packets go next?"

```bash
route print                # Windows routing table
ip route                   # Linux
```
```
Network Destination   Netmask         Gateway        Interface
0.0.0.0               0.0.0.0         192.168.1.1    192.168.1.10   ← default gateway ⭐
192.168.1.0           255.255.255.0   On-link        192.168.1.10
```
- **No 0.0.0.0 default route** → you can ping the LAN but not the internet.
- `ping <gateway>` first to verify this line.

## 10.8 Port Connectivity Tests — "Is the *service* up?"

Ping can be blocked by firewalls; instead test the actual **port**:

```bash
telnet google.com 80        # Windows/Linux (or: Test-NetConnection host -Port 443 in PowerShell)
nc -zv google.com 443       # Linux netcat
curl -I https://google.com  # full HTTP test
```
- **Connection succeeds** → service alive.
- **Refused** → host up but service/防火墙 closed.
- **Timeout** → filtered by firewall.

## 10.9 Other Handy Utilities

| Command | Purpose |
|---|---|
| `hostname` | Show machine name |
| `getmac` (Win) / `ip link` (Linux) | Show MAC address(es) |
| `nbtstat -n` (Win) | NetBIOS names table (old Windows networks) |
| `whois domain.com` | Domain registration info |
| `mtr google.com` (Linux) | Live combined ping+traceroute |
| `hostname -I` (Linux) / `ipconfig` | Get own IP quickly |

## 10.10 The Systematic Troubleshooting Method ⭐⭐

**Bottom-up ping sequence — each step localizes the fault:**

```
1. ping 127.0.0.1        → TCP/IP stack installed correctly?
2. ping <own IP>         → NIC & driver working?
3. ping <default gateway>→ LAN/cable/switch OK?
4. ping 8.8.8.8          → internet/WAN + routing OK?
5. ping google.com       → DNS working?
```

| Step that FAILS | Root cause | Fix |
|---|---|---|
| 1 | TCP/IP misinstalled | Reset stack: `netsh int ip reset` |
| 2 | NIC/driver/cable | Check cable, LED, reinstall driver |
| 3 | Switch/gateway/cable | Check switch, gateway powered on |
| 4 | ISP/routing issue | Reboot modem, call ISP |
| 5 | DNS failure | `flushdns`, set DNS 8.8.8.8 |

**Tool → layer mapping (one-glance):**

| Question | Tool |
|---|---|
| What is my IP/mask/gateway/DNS? | `ipconfig /all`, `ip a` |
| Is host reachable? | `ping` |
| What path is taken? | `tracert` / `traceroute` |
| Is the name resolving? | `nslookup` / `dig` |
| Which ports/connections are open? | `netstat` / `ss` |
| Which MACs are on my LAN? | `arp -a` |
| Is my routing table right? | `route print` / `ip route` |
| Is a specific service port open? | `telnet` / `nc` / `curl` |

---

# Appendix – Cheat Sheet + Practice Questions

## ⚡ One-Line Cheat Sheet

| Item | Answer |
|---|---|
| Largest network type | WAN (Internet) |
| Bluetooth PAN standard | IEEE 802.15 |
| Wi-Fi standard family | IEEE 802.11 (Wi-Fi 6 = 802.11ax) |
| Ethernet standard | IEEE 802.3 |
| Best Wi-Fi security today | WPA3 |
| IPv4 size / IPv6 size | 32-bit / 128-bit |
| Loopback | `127.0.0.1` / `::1` |
| APIPA range | `169.254.0.0/16` |
| Private ranges | `10/8`, `172.16/12`, `192.168/16` |
| Class B range & mask | 128–191, `255.255.0.0` |
| /26 mask & hosts | `255.255.255.192`, 62 hosts |
| DNS port / HTTPS port | 53 / 443 |
| DNS test tool | `nslookup`, `dig` |
| Path to destination | `tracert` / `traceroute` |
| Open ports/connections | `netstat -ano`, `ss -tuln` |

## 📝 Practice Questions

1. **MCQ:** Which class does IP `150.10.20.30` belong to? *(Ans: B — 128–191, mask 255.255.0.0)*
2. **MCQ:** `169.254.10.5` means… *(Ans: APIPA — DHCP failed)*
3. Convert `172.16.4.1` to binary. *(Ans: `10101100.00010000.00000100.00000001`)*
4. You are given `192.168.10.0/24` and need **8 subnets**. Prefix? Hosts each? *(Ans: borrow 3 bits → /27, 30 hosts each; subnets at .0, .32, .64, .96, .128, .160, .192, .224)*
5. For host `10.1.1.77/28`, find network & broadcast. *(Ans: block size 16 → network 10.1.1.64, broadcast 10.1.1.79, hosts .65–.78)*
6. Compress `fe80:0000:0000:0000:0202:00b3:0001:0001`. *(Ans: `fe80::202:b3:1:1`)*
7. A PC can `ping 8.8.8.8` but not `google.com`. Which layer/tool? *(Ans: DNS — use `nslookup`/`flushdns`/set DNS)*
8. Ping to gateway fails but 127.0.0.1 works. Where's the fault? *(Ans: local LAN — NIC/cable/switch/gateway)*
9. Write the ping sequence you'd use to isolate any network fault. *(Ans: loopback → own IP → gateway → 8.8.8.8 → domain)*
10. Difference between switch and hub? *(Ans: switch forwards by MAC to specific port — Layer 2; hub repeats to all ports — Layer 1)*

---


