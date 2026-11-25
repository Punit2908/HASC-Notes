# 📗 Complete Notes Part 2: Internet, Networks, IP Addressing & Troubleshooting

---

## 📑 Table of Contents

1. [Basics of the Internet](#1-basics-of-the-internet)
2. [Network Types: LAN / MAN / PAN / WAN / WLAN](#2-network-types-lan--man--pan--wan--wlan)
3. [IP Addressing: IPv4 Classes](#3-ip-addressing-ipv4-classes)
4. [Classless Addressing, CIDR & Prefix Notation](#4-classless-addressing-cidr--prefix-notation)
5. [IPv6 Addressing](#5-ipv6-addressing)
6. [TCP/IP Troubleshooting Utilities](#6-tcpip-troubleshooting-utilities)
7. [Quick Reference Cheat Sheet](#7-quick-reference-cheat-sheet)

---

## 1. Basics of the Internet

### 1.1 What is the Internet?
- The **Internet** is a global network of interconnected computer networks that uses the **TCP/IP protocol suite** for communication [citation:12].
- It evolved from **ARPANET (1969)**; the "network of networks" concept connected many autonomous systems across the globe.
- In simple terms: **Internet = Internetwork of many LANs, MANs and WANs**.

### 1.2 Key Terminology
| Term | Meaning |
|---|---|
| **Internet** | Global public network using TCP/IP |
| **Intranet** | Private network inside an organization (uses TCP/IP) |
| **Extranet** | Intranet extended to outside partners/customers |
| **ISP (Internet Service Provider)** | Company providing internet access (e.g., Airtel, Jio, Comcast) |
| **URL** | Uniform Resource Locator (address of a web page) e.g. `https://www.example.com` |
| **Domain Name** | Human-readable name of a website e.g. `google.com` |
| **HTML** | HyperText Markup Language - language used to build web pages |
| **HTTP/HTTPS** | Protocols to transfer web pages (HTTPS adds encryption via TLS/SSL) |

### 1.3 How the Internet Works
1. Your device gets an **IP address** from the ISP (via DHCP or manual).
2. You type a **domain name** (e.g., `www.google.com`).
3. A **DNS server** translates the domain into an IP address (e.g., `8.8.8.8`).
4. Request travels through **routers** across multiple networks.
5. Destination server sends back data in **packets**; TCP reassembles them.

```
[Your PC] --(LAN)--> [Router] --(ISP)--> [Internet Backbone] --> [Destination Server]
                                           ^
                                    DNS, Routing tables
```

### 1.4 Internet Access / Connection Methods
| Technology | Description | Speed (typical) |
|---|---|---|
| **Dial-up** | Old telephone-line modems | ≤ 56 Kbps |
| **DSL / ADSL** | Phone line broadband | 5–25 Mbps |
| **Cable Broadband** | Coaxial TV cable | 25–300 Mbps |
| **FTTH (Fiber)** | Fiber-to-the-home | 100 Mbps – 1 Gbps+ |
| **Wi-Fi** | Wireless local access to router | Depends on router standard |
| **Mobile Broadband (3G/4G/5G)** | Cellular networks | 10 Mbps – 1 Gbps |
| **Satellite Internet** | Via satellite dish (Starlink etc.) | 50–200 Mbps |
| **Leased Line** | Dedicated point-to-point line for enterprises | 2 Mbps – 10 Gbps |

### 1.5 Usages & Applications of the Internet
The internet provides global information sharing, based largely on a **client-server model** [citation:12]. Main applications:

| Category | Application | Protocol / Tool |
|---|---|---|
| **World Wide Web (WWW)** | Browsing websites | HTTP/HTTPS, browsers (Chrome, Firefox) |
| **Email** | Sending/receiving mail | SMTP, POP3, IMAP |
| **File Transfer** | Upload/download files | FTP, SFTP, SCP, HTTP |
| **Search Engines** | Google, Bing, DuckDuckGo | HTTP + crawling/indexing |
| **Social Media** | Facebook, X, Instagram, LinkedIn | Web / native apps |
| **Streaming** | YouTube, Netflix, Spotify | HTTP Live Streaming, RTP |
| **VoIP** | Voice/video calls | SIP, RTP (Skype, Zoom, WhatsApp) |
| **Video Conferencing** | Zoom, Teams, Meet | RTP/WebRTC |
| **E-commerce / Banking** | Amazon, online banking | HTTPS, payment gateways |
| **Cloud Computing** | AWS, Azure, Google Cloud | HTTPS, REST APIs |
| **Remote Access** | SSH, RDP, VPN | SSH, Telnet, RDP, IPSec/WireGuard |
| **Online Education** | MOOCs, LMS platforms | Web, video streaming |
| **IoT** | Smart homes, sensors | MQTT, CoAP, HTTP over IP |

**Advantages of Internet:** instant global communication, vast information access, remote work/learning, entertainment, e-governance.
**Disadvantages:** security threats (malware, phishing), misinformation, privacy risks, digital divide, addiction.

### 1.6 Basic Networking Devices
| Device | Layer (OSI) | Function |
|---|---|---|
| **Repeater** | Physical | Regenerates weak signals |
| **Hub** | Physical | Broadcasts data to all ports (obsolete) |
| **Bridge** | Data Link | Connects two LAN segments, filters by MAC |
| **Switch** | Data Link | Forwards frames to correct port using MAC table |
| **Router** | Network | Routes packets between different networks using IP |
| **Gateway** | Transport/Session | Connects dissimilar networks/protocols |
| **Modem** | Physical | Modulates/demodulates analog↔digital signals |
| **Access Point (AP)** | Data Link | Provides Wi-Fi connectivity |
| **NIC** | Data Link/Physical | Network Interface Card - gives MAC address |
| **Firewall** | Network/Transport+ | Filters traffic by rules |

---

## 2. Network Types: LAN / MAN / PAN / WAN / WLAN

Networks are classified mainly by **geographic coverage scale**: PAN < LAN < MAN < WAN [citation:25].

### 2.1 LAN — Local Area Network
Workstation/network typically covers a small site like one building or campus [citation:22][citation:23].

| Attribute | Details |
|---|---|
| **Definition** | Connects computers within a limited area: home, office, school, lab |
| **Coverage** | Up to ~1–2 km (single building/floor) |
| **Speed** | 1 Gbps – 10 Gbps typical |
| **Ownership** | Privately owned |
| **Media** | Twisted pair (Cat6), fiber, Wi-Fi |
| **Devices** | Switches, hubs (old), routers, APs |
| **Topology** | Star (most common), bus, ring |
| **Example** | Office LAN with 50 PCs on 192.168.1.0/24 |

**Advantages:** high speed, low cost, easy management, resource sharing.
**Limitations:** limited distance; expanding beyond a building needs MAN/WAN.

### 2.2 MAN — Metropolitan Area Network
Covers a city or large campus; bridges LAN and WAN; range roughly 5–50 km [citation:22].

| Attribute | Details |
|---|---|
| **Definition** | Spans a city / large university campus |
| **Ownership** | ISP or consortium (not single person) |
| **Media** | Fiber optic backbone |
| **Technologies** | FDDI, DQDB, MPLS, Metro Ethernet |
| **Examples** | City-wide cable TV network, city Wi-Fi, utility networks |

**Advantages:** better than WAN speeds, interconnects many LANs.
**Limitations:** higher cost, complex to manage.

### 2.3 PAN — Personal Area Network
Workstation/network connects personal devices within an individual's workspace, usually up to ~1–10 m [citation:22].

| Attribute | Details |
|---|---|
| **Definition** | Network for devices of a single person |
| **Range** | ~1–10 meters |
| **Technologies** | Bluetooth, Zigbee, NFC, USB, IR |
| **Types** | **WPAN** = wireless (Bluetooth, Zigbee), **CPAN** wired (USB) |
| **Examples** | Phone + Bluetooth headset, smartwatch ↔ phone, wireless keyboard |

### 2.4 WAN — Wide Area Network
Workstation/network spans cities/countries/continents, often connecting multiple LANs; the largest example is the Internet [citation:23][citation:22].

| Attribute | Details |
|---|---|
| **Definition** | Long-distance interconnection of many LANs |
| **Coverage** | Tens to thousands of kilometers |
| **Ownership** | Multiple carriers/ISPs |
| **Speed** | Lower relative to LAN (Kbps–Gbps depending on link) |
| **Media** | Leased lines, fiber, satellite, microwave, MPLS |
| **Technologies** | PPP, Frame Relay, ATM, HDLC, BGP/MPLS |
| **Examples** | Internet, bank branch-to-HQ connection, corporate WAN |

**Note:** A LAN connects to a WAN through a gateway — at home this is your **router**; in enterprises it can be a Layer-3 switch, router or firewall [citation:23].

### 2.5 WLAN — Wireless Local Area Network
A WLAN is a LAN that uses wireless communication (Wi-Fi) instead of cables [citation:22].

| Attribute | Details |
|---|---|
| **Standard** | IEEE 802.11 family: 802.11a/b/g/n/ac/ax (Wi-Fi 4/5/6/6E/7) |
| **Frequency** | 2.4 GHz (longer range, crowded) & 5 GHz (faster, less interference) |
| **Security** | WPA3 > WPA2 > WEP (weak) |
| **Components** | Wireless Access Point (AP), wireless NIC on clients |
| **Mode** | Infrastructure (with AP) vs Ad-hoc (device-to-device) |
| **Example** | Home/office Wi-Fi SSID broadcasting to phones/laptops |

### 2.6 Summary Comparison Table

| Network | Coverage | Typical Tech | Owner | Speed | Example |
|---|---|---|---|---|---|
| **PAN** | ~1–10 m | Bluetooth, NFC | Individual | ~1–3 Mbps | Phone + headset |
| **LAN** | ~1 km | Ethernet, Wi-Fi | Single org. | 1–10 Gbps | Office network |
| **MAN** | ~5–50 km | Fiber, Metro-E | ISP | 100 Mbps–1 Gbps | City cable network |
| **WAN** | Country/Global | MPLS, leased line | Multiple ISPs | 1 Mbps–1 Gbps | Internet, bank WAN |
| **WLAN** | ~100 m indoor | Wi-Fi (802.11) | Individual/Org | 300 Mbps–9.6 Gbps (Wi-Fi 6/7) | Home Wi-Fi |

### 2.7 Other Common Network Types (Bonus)
| Type | Full Form | Brief |
|---|---|---|
| **CAN** | Campus Area Network | Multiple LANs within a university/corporate campus |
| **GAN** | Global Area Network | Worldwide mobile network across satellites |
| **SAN** | Storage Area Network | High-speed network for block storage (iSCSI, Fibre Channel) |
| **VPN** | Virtual Private Network | Secure tunnel over public Internet |
| **VLAN** | Virtual LAN | Logical subdivision of a LAN by software |

---

## 3. IP Addressing: IPv4 Classes

### 3.1 What is an IP Address?
An IP (Internet Protocol) address is a **logical 32-bit identifier** assigned to each device on a network, enabling routing between source and destination [citation:33].

**Format:** dotted-decimal notation, 4 octets, each 0–255:
```
192 . 168 . 1 . 104
```
Each octet = 8 bits, so total 32 bits.

**Two parts:**
```
|<---- Network / Prefix ---->|<------- Host ------->|
    (identifies the network)     (identifies the device)
```

### 3.2 Classful Addressing (Traditional IPv4)
IPv4 was originally divided into fixed classes based on the first few bits [citation:11][citation:33].

| Class | First Octet Range | Leading Bits | Default Mask | Networks | Hosts per Net | Use |
|---|---|---|---|---|---|---|
| **A** | 1 – 126 | `0xxxxxxx` | 255.0.0.0 (/8) | 126 | 16,777,214 | Huge orgs |
| **B** | 128 – 191 | `10xxxxxx` | 255.255.0.0 (/16) | 16,384 | 65,534 | Mid-size orgs |
| **C** | 192 – 223 | `110xxxxx` | 255.255.255.0 (/24) | 2,097,152 | 254 | Small LANs |
| **D** | 224 – 239 | `1110xxxx` | No mask | — | — | Multicast |
| **E** | 240 – 255 | `11110xxx` | Reserved | — | — | Experiments |

*Note: 127.x.x.x is reserved for loopback (127.0.0.1).*

### 3.3 Public vs Private IP Addresses
Private ranges are defined in **RFC 1918** and cannot route over the public Internet; they require NAT to reach the Internet [citation:10][citation:9].

| Class | Private Range | CIDR | Use |
|---|---|---|---|
| A | 10.0.0.0 – 10.255.255.255 | 10.0.0.0/8 | Large private nets |
| B | 172.16.0.0 – 172.31.255.255 | 172.16.0.0/12 | Medium private nets |
| C | 192.168.0.0 – 192.168.255.255 | 192.168.0.0/16 | Home/SOHO routers |

### 3.4 Special / Reserved Addresses
| Address / Block | Purpose |
|---|---|
| `127.0.0.0/8` | Loopback (127.0.0.1 = "this machine") |
| `169.254.0.0/16` | APIPA – auto-assigned when DHCP fails |
| `0.0.0.0/8` | "This network" / unspecified |
| `224.0.0.0/4` | Multicast (D class) |
| `255.255.255.255` | Limited broadcast |
| `192.0.2.0/24`, `198.51.100.0/24`, `203.0.113.0/24` | TEST-NET docs only |
| `100.64.0.0/10` | Carrier-grade NAT (CGN) |

### 3.5 Subnetting & VLSM
**Subnetting** borrows bits from the host portion to create more networks:
```
Given 192.168.1.0/24, borrow 3 bits → 8 subnets (2³ = 8)
New mask: /27 = 255.255.255.224
Hosts per subnet = 2⁵ - 2 = 30
Subnets: 192.168.1.0/27, .32/27, .64/27 ... .224/27
```
**VLSM (Variable Length Subnet Masking):** allows different masks inside one network to avoid waste — key to CIDR.
```
总部   : 10.0.0.0/24 (254 hosts)
分部 A : 10.0.1.0/26 (62 hosts)
Mobility: 10.0.1.64/27 (30 hosts)
```

### 3.6 Important IPv4 Facts
- Total ≈ 4.3 billion addresses; **exhausted** since 2011 for new allocation.
- NAT (Network Address Translation) and CIDR help conserve space until IPv6 rollout.
- Broadcast addresses are being replaced by multicast in modern protocols.

---

## 4. Classless Addressing, CIDR & Prefix Notation

### 4.1 What is Classless Addressing (CIDR)?
**CIDR = Classless Inter-Domain Routing** — a flexible method introduced in 1993 that eliminates fixed classes and lets any number of bits serve as the network prefix [citation:34][citation:35].

Instead of "A/B/C class", we write:
```
192.168.10.0/24      # first 24 bits = network prefix
10.0.0.0/8           # first 8 bits  = network
172.16.0.0/12        # first 12 bits = network
```
`/24` is called **prefix length notation** (also called slash notation).

### 4.2 CIDR vs Classful — Why CIDR Wins
| Concern | Classful | CIDR (Classless) |
|---|---|---|
| Mask | Fixed by class | Arbitrary length |
| Size options | 8 / 16 / 24 bits | Any 0–32 bits |
| Waste | Huge (e.g., B class for 300 hosts wastes ~65k IPs) | Minimal |
| Route aggregation | Not possible | Yes (supernetting) |

**Example of waste:** An org needing 300 devices would get a full /16 (65,534 hosts) in classful; with CIDR it gets a single `/23` (510 hosts) [citation:35][citation:10].

### 4.3 Calculating with CIDR
For a CIDR `X.X.X.X/N`:

| Formula | Result |
|---|---|
| Mask decimal | N ones followed by zeros |
| Total addresses | 2^(32−N) |
| Usable hosts | 2^(32−N) − 2 |
| Block size (last octet) | 256 − 2^(share) ... easier: 2^host_bits |

**Examples:**

| CIDR | Mask | Total | Usable | Default Class/Equivalent |
|---|---|---|---|---|
| /8 | 255.0.0.0 | 16,777,216 | 16,777,214 | Class A |
| /16 | 255.255.0.0 | 65,536 | 65,534 | Class B |
| /22 | 255.255.252.0 | 1,024 | 1,022 | 4 × Class C |
| /24 | 255.255.255.0 | 256 | 254 | Class C |
| /30 | 255.255.255.252 | 4 | 2 | Point-to-point link |

### 4.4 Worked CIDR Examples
**Example 1:** `192.168.1.0/26`
```
Block size = 256 - 192 = 64
Subnet 1: 192.168.1.0/26   (hosts .1 – .62,  broadcast .63)
Subnet 2: 192.168.1.64/26  (hosts .65 – .126, broadcast .127)
Subnet 3: 192.168.1.128/26 ...
Subnet 4: 192.168.1.192/26 ...
```

**Example 2 — Supernetting:** Merge four C-class networks:
```
192.168.0.0/24
192.168.1.0/24   ──┐
192.168.2.0/24   ───┤──► 192.168.0.0/22  (covers all four)
192.168.3.0/24   ──┘
```
One routing entry replaces four → smaller routing tables [citation:35][citation:11].

**Example 3 — /31 & /32 special cases [citation:9]:**
- **/31**: RFC 3021 defines two addresses, both assignable → ideal for router-to-router links.
- **/32**: a single host route, used in policy routing.

### 4.5 Wildcard Mask (inverse mask)
Used in ACLs and OSPF network statements.
```
Mask          255.255.255.0
Wildcard      0.0.0.255       (bitwise NOT of mask)
```

### 4.6 CIDR Distribution Chain
```
IANA ──► Regional IR (RIR: ARIN, APNIC, RIPE...)
           │
           ▼
      Local IR / ISP
           │
           ▼
      Organization / End user
```

### 4.7 Common Ranges Quick List

| CIDR | Address range | Usage |
|---|---|---|
| 10.0.0.0/8 | 10.0.0.0 – 10.255.255.255 | Large enterprise |
| 172.16.0.0/12 | 172.16.0.0 – 172.31.255.255 | Enterprise |
| 192.168.0.0/16 | 192.168.0.0 – 192.168.255.255 | Home / SOHO |
| 127.0.0.0/8 | Loopback | Local testing |
| 169.254.0.0/16 | APIPA | Auto-config fallback |
| 224.0.0.0/4 | Multicast | Multicast groups |
| 100.64.0.0/10 | CGN (shared ISP space) | Carrier NAT |

---

## 5. IPv6 Addressing

### 5.1 Why IPv6?
| Issue | IPv4 | IPv6 |
|---|---|---|
| Address width | 32 bits (~4.3 billion) | **128 bits** (3.4 × 10³⁸) |
| Header | variable, checksum | Fixed 40-byte base header [citation:5] |
| Security | Optional (IPSec add-on) | **IPsec built-in** [citation:5] |
| Address config | Manual/DHCP | **Auto-config + DHCPv6** [citation:5] |
| Broadcast | Yes | **No broadcast** — uses multicast instead [citation:5][citation:6] |
| NAT needed | Yes (usually) | No — every device can have unique global address |

### 5.2 IPv6 Address Format
- **128 bits**, written as 8 groups of 16 bits, separated by colons `:`.
- Each group = 4 hex digits.

```
2001:0db8:0000:0000:0000:0000:0000:0001    Full form
2001:db8::1                              Compressed form
```

**Simplification rules [citation:5]:**
1. Remove leading zeros in each group:
   ```
   2001:0db8:0000:0001:0000:0000:0000:0001 → 2001:db8:0:1:0:0:0:1
   ```
2. Replace **one run of consecutive zero groups** with `::` (only once per address):
   ```
   2001:0db8:0000:130f:0000:0000:09c0:876a:130b
   → 2001:db8:0:130f::9c0:876a:130b
   ```

### 5.3 IPv6 Structure
```
|<-------------- Network Prefix --------------->|-- Interface ID -->|
       (typically 64 bits)                             (64 bits)
```
Currently IANA allocates global unicast addresses from **`2000::/3`** [citation:6]. Most operators use a **/64 subnet**.

### 5.4 IPv6 Address Types

#### 5.4.1 Unicast (point-to-point)
Identifies exactly one interface. Major subtypes:

| Type | Prefix | Scope | Example |
|---|---|---|---|
| **Global Unicast** (GUA) | `2000::/3` | worldwide | `2001:db8:1::1` |
| **Link-Local** | `FE80::/10` | one link only | `fe80::1` |
| **Unique Local** | `FC00::/7` | private intranet | `fd00:1:2::1` |
| **Loopback** | `::1/128` | local | `::1` |
| **Unspecified** | `::/128` | placeholder | `::` |

**Link-local** is automatically formed for NDP and SLAAC; packets are never routed off the local link [citation:5].
**Unique local** works like IPv4 private addresses [citation:6].

#### 5.4.2 Multicast (one-to-many)
Prefix `FF00::/8`; replaces IPv4 broadcast [citation:5][citation:7].

```
FF02::1        All-nodes multicast (like 224.0.0.1)
FF02::2        All-routers multicast
FF02::1:FFxx:xxxx  Solicited-node multicast (IPv6 ARP replacement)
```

#### 5.4.3 Anycast (one-to-nearest)
Uses a normal unicast-looking address assigned to multiple devices; packets go to the **closest** (by routing metric) [citation:5][citation:6]. Used heavily by DNS and CDNs.

### 5.5 IPv6 → Text / Application Mapping
- **Zone index:** `fe80::1%eth0` (link-local scoped to an interface).
- **IPv6 URLs:** wrap in square brackets → `http://[2001:db8::1]:8080/`.
- **IPv4-compatible:** rare; e.g. `::ffff:192.168.1.1`.

### 5.6 Interface ID Derivation
- **SLAAC:** uses EUI-64 from MAC: insert `ff:fe` in middle and flip U/L bit.
  ```
  MAC: 00:1a:2b:3c:4d:5e
  EUI-64: 02:1a:2b:ff:fe:3c:4d:5e
  ```
- **Privacy extensions (RFC 8981):** random temporary addresses for outbound connections to avoid tracking.

### 5.7 IPv6 Autoconfiguration (SLAAC) Workflow
```
Host boots
   │
   ├─► Generates link-local fe80::x
   │
   ├─► Sends Router Solicitation (RS) on ff02::2
   │
   ├─► Router replies with Router Advertisement (RA)
   │      └─ includes prefix (e.g., 2001:db8:1::/64)
   │
   └─► Host builds GUA: 2001:db8:1::<interface-ID>
```
Requires no DHCP server → dramatically simplifies small networks [citation:5].

### 5.8 IPv4 vs IPv6 Side-by-Side

| Feature | IPv4 | IPv6 |
|---|---|---|
| Length | 32 bits | 128 bits |
| Notation | Dot-decimal (`192.168.1.1`) | Hex colon (`2001:db8::1`) |
| Header size | 20–60 bytes | 40 bytes fixed |
| Fragmentation | Router & sender | Sender only |
| Checksum | Header checksum | No header checksum (rely on upper layers) |
| QoS | ToS field | Flow Label field |
|邻居发现 | ARP | **NDP (ICMPv6)** |

---

## 6. TCP/IP Troubleshooting Utilities

This section covers practical network fault-finding tools on **Windows**, **Linux** and generic concepts.

### 6.1 Classic 4-Step Fault Isolation Model

Use a layered approach: physical → localhost → gateway → internet → DNS → app [citation:1][citation:2].

```
Step 1: ping 127.0.0.1            → tests local TCP/IP stack
Step 2: ping own IP               → tests NIC
Step 3: ping default gateway      → tests local network/link
Step 4: ping remote IP            → tests WAN/internet path
Step 5: ping remote hostname      → tests DNS resolution
```
Interpretation [citation:2]:
- Step 1 fails → reinstall/reset TCP/IP stack.
- Step 1 passes, step 2 fails → NIC driver/hardware issue.
- Steps 1–2 pass, step 3 fails → local cabling/switch/router problem.
- Steps 1–3 pass, step 4 fails → upstream/ISP or router forwarding.
- Steps 1–4 pass but hostname fails → DNS misconfiguration.

### 6.2 ipconfig / ifconfig (View Network Config)

#### Windows: `ipconfig`
```cmd
ipconfig               # brief: IPv4, mask, default gateway
ipconfig /all          # full: MAC, DHCP server, DNS, lease times
ipconfig /release      # drop DHCP lease
ipconfig /renew        # request new lease
ipconfig /flushdns     # clear DNS cache
ipconfig /displaydns   # show cached DNS entries
```
Key outputs: **IPv4 Address, Subnet Mask, Default Gateway, DHCP Server, DNS Servers, Physical Address (MAC)** [citation:2][citation:4].

#### Linux / macOS: `ip` (preferred) or legacy `ifconfig`
```bash
ip addr              # show interfaces + IPs
ip link              # show link state
ip route             # show routing table (gateway line)
ifconfig -a          # legacy equivalent
hostname -I          # quick list of your IPs
cat /etc/resolv.conf # DNS servers in use
```

**Red flags:** IP begins with `169.254.x.x` → client failed to obtain DHCP address [citation:1][citation:2].

### 6.3 ping (Connectivity Test)
Sends ICMP Echo Request, waits for Echo Reply.

```cmd
ping 127.0.0.1                 # localstack
ping 8.8.8.8                   # Google DNS (public)
ping 192.168.1.1               # gateway
ping google.com                # DNS + internet
ping -t 8.8.8.8                # continuous (Ctrl+C stops)
ping -n 10 8.8.8.8             # 10 pings
ping -l 1000 8.8.8.8           # payload size 1000 bytes
ping -6 ipv6.google.com        # force IPv6
```

```bash
ping -c 4 8.8.8.8              # Linux/macOS: 4 packets
ping6 -c 4 2001:4860:4860::8888
```

**Reading output:**
```
Reply from 8.8.8.8: bytes=32 time=12ms TTL=118
                                      └─ latency  └─ hop distance indicator
Request timed out                  → blocked ICMP or unreachable
Destination host unreachable       → routing error
Ping statistics: Packets: Sent=4, Received=4, Lost=0 (0%)   → link OK
```

### 6.4 traceroute / tracert (Path Trace)
Uses increasing TTL values; each router along the path expires TTL and returns ICMP Time Exceeded, revealing its IP [citation:2][citation:3].

```cmd
tracert google.com
tracert -d 8.8.8.8             # don't resolve names
tracert -h 15 8.8.8.8          # max 15 hops
```
```bash
traceroute -n google.com       # Linux
mtr -rwc 20 google.com         # combined ping+trace (highly recommended)
```

**Interpretation:** a long pause at a certain hop usually indicates that node or the following link is congested/down.

### 6.5 arp (Address Resolution Protocol)
Maps IP → MAC address within a LAN.

```cmd
arp -a                         # show ARP cache table
arp -d *                       # flush cache
```
```bash
ip neigh                       # modern Linux replacement
arp -an                        # legacy
```

### 6.6 nslookup / dig (DNS Queries)
Resolve domain ↔ IP; also inspect MX, NS, SOA records.

```cmd
nslookup google.com
nslookup -type=MX google.com
nslookup 8.8.8.8              # reverse lookup
nslookup google.com 1.1.1.1  # query specific DNS server
```
```bash
dig google.com                # verbose, full answer
dig +short google.com         # just the IPs
dig -x 8.8.8.8                # reverse PTR lookup
dig google.com ANY
host google.com               # simplified alternative
```

**Common DNS problem patterns:**
- IP reachable but domain not → DNS server broken.
- Reverse lookup mismatch → may break some services (mail).
- Slow responses → switch to public DNS (223.5.5.5, 8.8.8.8, 1.1.1.1, 9.9.9.9).

### 6.7 netstat / ss (Ports and Connections)

#### Windows
```cmd
netstat -a                     # all connections
netstat -n                     # numeric only (no DNS lookup)
netstat -o                     # include PID
netstat -ano | findstr :80     # who is listening on port 80
netstat -r                     # routing table
```
States: `LISTENING`, `ESTABLISHED`, `TIME_WAIT`, `CLOSE_WAIT`.

#### Linux (modern: `ss`)
```bash
ss -tlnp                      # TCP listening sockets + PID
ss -antp                      # all TCP connections with process
ss -ulnp                      # UDP listeners
netstat -antp                 # legacy equivalent
lsof -i :22                   # which process owns port 22
```

Connection states:
| State | Meaning |
|---|---|
| **LISTEN** | waiting for incoming connection |
| **ESTABLISHED** | active session |
| **TIME_WAIT** | closed; waiting to be sure the other side got FIN |
| **SYN_SENT** | our side sent SYN |
| **CLOSE_WAIT** | peer closed, our app hasn't yet |

### 6.8 route (Routing Table)
```cmd
route print                   # Windows: show routes
route add 10.0.0.0 mask 255.0.0.0 192.168.1.1
route delete 10.0.0.0
```
```bash
ip route                      # Linux route table
ip route add 10.0.0.0/8 via 192.168.1.1
ip route del 10.0.0.0/8
netstat -rn                   # legacy
```
Key fields: **Destination, Genmask, Gateway, Flags (U=up, G=gateway), Interface**.

### 6.9 telnet / nc (Test Port Reachability)
```cmd
telnet google.com 80          # connect HTTP (blank screen = success)
telnet server 25              # test SMTP
```
```bash
nc -zv 192.168.1.1 22         # scan single port (z=scan, v=verbose)
nc -zv 192.168.1.1 1-100      # scan port range
tcping 8.8.8.8 53             # ping on specific port
curl -v telnet://ip:port      # alternative
```

### 6.10 tcpdump / Wireshark (Packet Capture)
```bash
tcpdump -i eth0                # capture on eth0
tcpdump -i any port 80         # filter HTTP
tcpdump -i eth0 host 8.8.8.8 and icmp
tcpdump -w file.pcap; wireshark file.pcap
```

### 6.11 ssh, curl, wget (Application-level Tests)
```bash
ssh user@192.168.1.10                       # remote login test
curl -I https://example.com                 # fetch headers only
curl -v http://site                          # full handshake debug
wget -O file.zip http://server/file.zip     # download file
```

### 6.12 Firewall & Misc Checks
```cmd
netsh advfirewall set allprofiles state off   # (brief) disable FW for debugging
netsh winsock reset                           # reset socket stack
netsh int ip reset                            # reset TCP/IP
```
```bash
sudo ufw status                               # Ubuntu firewall
sudo iptables -L -n                           # list firewall rules
systemctl status NetworkManager
journalctl -u NetworkManager -f               # live network logs
```

### 6.13 Tools Summary Table

| Utility | OS | Layer | Main Purpose |
|---|---|---|---|
| `ipconfig` / `ip a` | Win / Linux | L2–L3 | View IP, mask, gateway, DNS |
| `ping` | Both | L3 (ICMP) | Basic reachability & RTT |
| `tracert` / `traceroute` | Both | L3 | Path & hop latency |
| `arp -a` / `ip neigh` | Both | L2–L3 | IP → MAC mapping |
| `nslookup` / `dig` | Both | L7 (DNS) | Domain name resolution |
| `netstat -ano` / `ss -antp` | Both | L4 | Ports, sockets, processes |
| `route print` / `ip route` | Both | L3 | Routing table |
| `nc`, `telnet` | Both | L4 | Test if a TCP port is open |
| `tcpdump` | Linux | L2–L7 | Deep packet inspection |
| `curl` | Both | L7 | HTTP/TLS handshake tests |
| `mtr` | Linux/mac/Win | L3 | Combined ping + trace with loss % |

### 6.14 Troubleshooting Scenario Walkthrough

**Problem:** "Can't open www.google.com but internal file shares work."

| Step | Command | Expected Result | Outcome |
|---|---|---|---|
| 1 | `ping 127.0.0.1` | OK | stack fine |
| 2 | `ping <my-IP>` | OK | NIC fine |
| 3 | `ping <gateway>` | OK | local LAN fine (file share works) |
| 4 | `ping 8.8.8.8` | OK | internet reachable |
| 5 | `ping google.com` | **fail** | DNS failure |
| 6 | `ipconfig /flushdns` then retry | OK | cleared stale record |
| 7 | If still failing | `nslookup google.com 1.1.1.1` | query alternate resolver |

**Fix:** change DNS server in adapter settings → issue resolved.

---

## 7. Quick Reference Cheat Sheet

### IPv4 CIDR → Mask Table
```
/8  255.0.0.0       /21 255.255.248.0
/9  255.128.0.0     /22 255.255.252.0
/10 255.192.0.0     /23 255.255.254.0
/11 255.224.0.0     /24 255.255.255.0  (class C)
/12 255.240.0.0     /25 255.255.255.128
/13 255.248.0.0     /26 255.255.255.192
/14 255.252.0.0     /27 255.255.255.224
/15 255.254.0.0     /28 255.255.255.240
/16 255.255.0.0     /29 255.255.255.248
/17 255.255.128.0   /30 255.255.255.252
/18 255.255.192.0   /31 255.255.255.254  (RFC 3021)
/19 255.255.224.0   /32 255.255.255.255  (single host)
/20 255.255.240.0
```

### Host Count Formula
```bash
total_hosts = 2 ** (32 - prefix_length)
usable     = total_hosts - 2          # exclude network and broadcast
block_size = 256 - last_octet_of_mask # for same-octet masking
```

### Linux Command One-Liners
```bash
# Show public IP
curl ifconfig.me
curl ipinfo.io/ip

# DNS check
dig +short google.com
cat /etc/resolv.conf

# Check if port open remotely
nc -zv example.com 443

# Continuous gateway health
watch -n1 'ping -c1 -W1 192.168.1.1 >/dev/null && echo UP || echo DOWN'

# Print current hostname and IPs
hostname; hostname -I

# Traceroute with packet sizes
Traceroute -s 1500 8.8.8.8
```

---

## 🎯 Practice Exercises

1. Convert `(1101011)₂` to decimal, octal and hexadecimal.
2. Classify: `172.31.4.9`, `224.0.0.9`, `2001:db8::1`, `10.0.0.1`.
3. For `192.168.100.0/22`: how many /24s? How many usable hosts per /24?
4. Split `10.10.0.0/16` into 32 subnets — give the mask and the first three subnet addresses.
5. Compress `2001:0db8:0000:0000:0000:abcd:0000:0001`.
6. On Linux run: `ip a`, `ip route`, `ping -c3 8.8.8.8`, `ss -tlnp`, `dig +short github.com`.
7. On Windows run: `ipconfig /all`, `tracert 8.8.8.8`, `netstat -ano | findstr 443`.

---

> 🔗 **Recommended Reading:** Cisco *CCNA Introduction to Networks* — modules on IP addressing and basic network utilities; AWS documentation on IP addressing (cited above); H3C IPv6 configuration guide (cited above).

