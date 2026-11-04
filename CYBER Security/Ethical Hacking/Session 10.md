# Session 10: Footprinting & Reconnaissance I

Topic: Passive Reconnaissance, OSINT, Domain Intelligence and DNS Investigation\
Made by: Punit Jangra



Beginner-friendly practical session

Approx. 2–2.5 hours



[Cybersecurity reconnaissance](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200)

## 1. Session overview

In Session 8, we introduced reconnaissance and learned basic DNS concepts and commands such as `dig`, `host` and `whois`.

Today, we'll take that foundation further. Students will learn how security professionals collect information about a domain without directly interacting with its servers in an intrusive way.

Imagine a security team has been asked to assess a company's website. Before testing anything, the team needs to understand:

- Who operates the domain?
- When was the domain registered?
- Which DNS infrastructure does it use?
- What public information is available?
- Are there publicly documented subdomains?
- What can be learned from certificate records and public sources?

This information-gathering process is called footprinting.

### Learning objectives

By the end of this session, students should be able to:

1. Explain footprinting and passive reconnaissance.
2. Distinguish passive reconnaissance from active reconnaissance.
3. Collect domain registration information.
4. Investigate DNS records beyond the introductory level.
5. Use certificate transparency logs to discover publicly listed hostnames.
6. Organize findings into an asset inventory.
7. Separate verified facts from assumptions.

### Important lab rule

Use only domains you own, domains explicitly approved for classroom investigation, or designated training domains. Public information being visible does not grant permission to test the systems behind it.

## 2. What is footprinting?

Footprinting is the process of collecting information about a target organization, domain, application or network before performing a security assessment.

Think of it like preparing to visit a new city. Before travelling, you might check:

- Its location.
- Available roads.
- Public transport.
- Important buildings.
- Weather and local information.

You are gathering information before taking action.

In cybersecurity, the equivalent might include:

- Domain registration information.
- DNS records.
- Publicly visible hostnames.
- Technology information.
- Public documentation.
- Certificate details.

Why does footprinting matter?

It helps a security professional understand the target's publicly visible attack surface and decide what needs further verification.

## 3. Passive vs active reconnaissance

There are two major approaches.

[How to Analyze Text and Get Better Insights from Any Document | Honeybear.ai Blog | Honeybear.ai](https://images.openai.com/static-rsc-4/HIsIHCesKnsoLjlHIaFbkE9phwm6oPHj9zSNSXlynZ4U5WLHptUhG6Bx3thQFvSAJd9J6decsYg7Lg0IC4YnofLYd9yJt9Olg-HmZP7ZWFDHsy2q1V-PcjnerrbkCkARZUAqsoYzCklZqOe9mAquN3ltSf_WThZ2RYuPJs8dGJ8?purpose=inline)

Passive reconnaissance

Collecting information from existing public sources without directly probing the target's systems.

Examples: public DNS databases, domain registration records, search engines and certificate transparency logs.

[Medium](https://images.openai.com/static-rsc-4/kUsExJ01mCZLyeZjvsyuh6t2Ws5BPlz8cNvjKOtlhZN9GBjbT8t-4wOMun-uaznF_oYLe1A-9EZwHag5bEML_oSVEJ33YUAY-dkwdSL46YnkU1LSP8POKxsUWTuiWH3hmeAOH3zWkXC7oRvMVlDPccMR9zUBPIu-4NxyFl8mMlE?purpose=inline)

Active reconnaissance

Directly interacting with target infrastructure to discover information.

Examples: connecting to services, probing ports and sending requests to a web server.

| Passive reconnaissance                   | Active reconnaissance           |
| ---------------------------------------- | ------------------------------- |
| Uses existing public information         | Interacts directly with systems |
| Usually lower impact                     | May generate target-side logs   |
| Often harder for the target to notice    | More likely to be detected      |
| Example: certificate transparency lookup | Example: authorized port scan   |

Class question: If you search a company's domain registration details on a public lookup website, is that passive or active reconnaissance?

Answer: Passive reconnaissance.

## 4. Understanding the information sources

Before opening tools, students should understand what each source can tell them.

| Source                   | Information collected                          |
| ------------------------ | ---------------------------------------------- |
| WHOIS / RDAP             | Registration, registrar and domain dates       |
| DNS records              | Domain-to-service mappings                     |
| Search engines           | Publicly indexed pages                         |
| Certificate Transparency | Publicly logged TLS certificates and hostnames |
| Public documentation     | Technology, contact and infrastructure details |
| Official websites        | Organization and service information           |

### WHOIS and RDAP

WHOIS is a protocol and service used to retrieve domain registration information. RDAP (Registration Data Access Protocol) is its more modern, structured alternative.

Information may include:

- Registrar name.
- Registration date.
- Expiration date.
- Domain status.
- Nameservers.
- Registrant details, when publicly available.

Privacy protection may hide personal registration details. That is normal, not evidence of suspicious activity.

### Practical 1: Domain registration investigation

Choose a domain approved for the exercise. For a simple classroom demonstration, use `example.com`.

Open:

- [ICANN Lookup](https://lookup.icann.org/?utm_source=chatgpt.com)
- [RDAP.org](https://rdap.org/?utm_source=chatgpt.com)

Search for `example.com`.

Ask students to record:

1. Registrar.
2. Registration date, if available.
3. Expiration date, if available.
4. Domain status.
5. Nameservers.

Expected observation: Students should see structured registration information. Some personal details may be redacted.

Teaching point: Domain registration information tells us about the domain's registration, not necessarily the physical location of its web server.

## 5. DNS investigation beyond the basics

In Session 8, students learned the common DNS record types. Today, we will investigate what those records reveal about an organization's public infrastructure.

### Quick revision

| Record | Purpose                                                                 |
| ------ | ----------------------------------------------------------------------- |
| A      | Maps a hostname to an IPv4 address                                      |
| AAAA   | Maps a hostname to an IPv6 address                                      |
| CNAME  | Creates an alias for another hostname                                   |
| MX     | Identifies mail servers                                                 |
| NS     | Identifies authoritative nameservers                                    |
| TXT    | Stores text information, often used for verification and email security |
| SOA    | Contains administrative information about a DNS zone                    |
| PTR    | Used for reverse DNS lookup                                             |

### Why are DNS records useful in reconnaissance?

Suppose an organization has these public hostnames:

```
example.com
mail.example.com
shop.example.com
api.example.com
```

Each hostname may represent a different service or application.

A security professional can use this information to create an initial inventory of public-facing assets.

However, a DNS record alone does not prove that a service is vulnerable or even currently operational.

### Practical 2: Investigating DNS records

Run these commands in the terminal:

```
dig example.com A
```

This requests the IPv4 address record.

```
dig example.com MX
```

This requests the mail server records.

```
dig example.com NS
```

This requests the authoritative nameservers.

```
dig example.com TXT
```

This requests text records.

```
dig example.com SOA
```

This requests the Start of Authority record.

### Understanding the output

Consider a simplified DNS response:

```
;; QUESTION SECTION:
;example.com.       IN      A

;; ANSWER SECTION:
example.com.  300   IN      A       93.184.216.34
```

Break it down:

- `example.com.` is the queried domain.
- `300` is the TTL, measured in seconds.
- `IN` represents the Internet DNS class.
- `A` is the record type.
- `93.184.216.34` is the returned IPv4 address.

What is TTL?

TTL stands for Time To Live. It tells DNS resolvers how long they may cache a record before they should refresh it.

For example, a TTL of 300 means the record can be cached for 300 seconds.

### Student activity

Ask students to investigate an approved domain and fill this table:

| Record | What should they identify?            |
| ------ | ------------------------------------- |
| A      | IPv4 address                          |
| AAAA   | IPv6 address, if present              |
| MX     | Mail server                           |
| NS     | Nameservers                           |
| TXT    | Public text records                   |
| SOA    | Primary DNS and administrative values |

Discussion: Why might an organization use different providers for its website, email and DNS hosting?

Expected answer: Different services may be managed by different providers for reliability, performance, security or operational reasons.

## 6. Certificate Transparency (CT) logs

[【全攻略】7大 CloudFront 資安防護實戰技巧：打造穩定、高速又安全的企業級網站](https://images.openai.com/static-rsc-4/75ZM0Fbmnadlbw5_S9Vm0o7t5f2XOVcenfZ8zNEe1qldgwuTko3-hKEuJrfgyyJ991PHJ_sclecMVLwq-_n2OZrjbuAKM1ELAzWc8LfCY-3O_8zG02ABtM7Tqa9VL2kziXKcx_vGzU7fe0ypSdmGEnu_4ykBOL-9rbq3S4goMXM?purpose=inline)

[wewincloud.com](https://www.wewincloud.com/post/cloudfront-security-setup-best-practices?utm_source=chatgpt.com)

This is one of today's most interesting reconnaissance topics.

When a website obtains a publicly trusted TLS certificate, information about that certificate is submitted to Certificate Transparency logs.

These logs are publicly accessible and can reveal certificate details, including hostnames listed in certificates.

For example, a certificate might include:

```
example.com
www.example.com
api.example.com
```

This can help researchers discover hostnames that are not immediately visible from the website's homepage.

### What is a TLS certificate?

A TLS certificate helps a browser verify the identity of a website and establish an encrypted connection.

It commonly contains:

- Subject or domain identity.
- Issuer.
- Validity period.
- Public key information.
- Subject Alternative Names (SANs).

SAN (Subject Alternative Name) is especially important here. It allows a certificate to cover multiple domain names.

### Practical 3: Discovering public certificate records

Open:

[crt.sh - Certificate Search](https://crt.sh/?utm_source=chatgpt.com)

Search for:

```
example.com
```

Look through the results and observe:

- Certificate ID.
- Logged date.
- Common Name.
- Name values.
- Issuer.

The `Name Value` column may contain multiple hostnames.

For a command-line demonstration, use:

```
curl -s "https://crt.sh/?q=%25.example.com&output=json"
```

This retrieves certificate search results in JSON format for names matching the domain pattern.

To display the returned data more clearly, use Python:

```
curl -s "https://crt.sh/?q=%25.example.com&output=json" | python -m json.tool
```

This command queries a public certificate transparency service, not the target web server. Use it only for an approved classroom domain.

### Important limitation

A hostname appearing in a certificate log does not mean:

- The hostname is currently active.
- The service is publicly accessible.
- The hostname belongs to a current production system.
- The hostname is vulnerable.

It is a lead that needs verification through authorized methods.

### Student activity

Find certificate records for the approved training domain.

Record three hostnames, if available, and classify each:

- Main website.
- Possible API.
- Possible mail or other service.
- Unknown purpose.

Students must write "unverified" where they cannot establish the hostname's purpose.

## 7. Search engine reconnaissance

Search engines index publicly available pages. Their results can reveal information that an organization may not have intended to make easy to find.

For example, a security researcher may look for:

- Public documentation.
- Product support pages.
- Publicly accessible PDFs.
- Developer documentation.
- Public contact information.

### Search operators

Search operators help narrow search results.

| Operator        | Purpose                           |
| --------------- | --------------------------------- |
| `site:`         | Restricts results to a website    |
| `filetype:`     | Searches for a specific file type |
| `intitle:`      | Searches for words in page titles |
| `inurl:`        | Searches for words in URLs        |
| Quotation marks | Searches for an exact phrase      |

### Practical 4: Safe search engine research

Use the approved domain:

```
site:example.com
```

Search for publicly indexed PDF documents:

```
site:example.com filetype:pdf
```

Search for pages with a particular title:

```
site:example.com intitle:about
```

Search for public documentation:

```
site:example.com documentation
```

### What should students record?

- Search query.
- Page title.
- Public URL.
- What information the page reveals.
- Whether the information is relevant to the assessment.

Important: Do not attempt to access restricted files, bypass login pages, download exposed private data or exploit anything discovered. The goal is to understand publicly visible information, not to turn a search exercise into an unauthorized incident.

## 8. Building an asset inventory

Now combine the findings from the practical exercises.

An asset inventory is a structured list of systems, services and resources associated with an organization.

A basic reconnaissance inventory might look like this:

| Asset              | Source        | Observation                    | Confidence |
| ------------------ | ------------- | ------------------------------ | ---------- |
| `example.com`      | RDAP          | Domain registration found      | High       |
| `example.com`      | DNS           | A record returned              | High       |
| `mail.example.com` | DNS           | Mail-related hostname found    | High       |
| `api.example.com`  | CT logs       | Hostname listed in certificate | Medium     |
| Public PDF         | Search engine | Documentation indexed          | High       |

Confidence describes how strongly the available evidence supports the observation. It does not describe the security of the asset.

### Observation vs interpretation

This distinction is extremely important in professional security reporting.

Observation:

```
A certificate transparency search returned
api.example.com as a certificate name.
```

Interpretation:

```
The organization may have an API-related hostname.
```

Unsupported conclusion:

```
The API is vulnerable.
```

The third statement is not justified by the evidence. Students must learn not to turn guesses into findings.

## 9. Guided practical: Mini passive reconnaissance assessment

Main classroom practical

Students will create a small reconnaissance report using an approved domain.

### Step 1: Registration information

Use ICANN Lookup or RDAP to record the registrar, registration dates and nameservers where available.

### Step 2: DNS investigation

Run:

```
dig example.com A
dig example.com AAAA
dig example.com MX
dig example.com NS
dig example.com TXT
```

### Step 3: Certificate investigation

Search the approved domain on crt.sh.

Record up to five relevant hostnames, if returned.

### Step 4: Search engine investigation

Use search operators to find public pages and documents associated with the domain.

### Step 5: Prepare the report

Students should produce a report containing:

1. Target domain and authorization reference.
2. Registration observations.
3. DNS observations.
4. Certificate transparency observations.
5. Search engine observations.
6. Asset inventory.
7. Limitations and unverified assumptions.
8. Short conclusion.

## 10. Common mistakes during reconnaissance

| Mistake                                            | Correct approach                                                  |
| -------------------------------------------------- | ----------------------------------------------------------------- |
| Assuming every discovered hostname is active       | Mark it as unverified until checked through authorized methods    |
| Treating an IP address as proof of server location | IP geolocation is approximate and may identify a hosting provider |
| Assuming a TXT record is always harmless           | Review its contents and understand its purpose                    |
| Assuming certificate logs show current systems     | Check certificate dates and verify status separately              |
| Calling every discovered hostname a vulnerability  | A hostname is an asset, not automatically a security finding      |
| Mixing observations with assumptions               | Keep evidence and interpretation separate                         |

## 11. Classroom assessment

### Theory questions

1. Define footprinting in cybersecurity.
2. Differentiate passive and active reconnaissance.
3. What is the purpose of WHOIS and RDAP?
4. What information can an MX record provide?
5. Explain the purpose of a DNS TTL.
6. What is Certificate Transparency?
7. What is a Subject Alternative Name?
8. Why might a hostname found in a certificate log be inactive?
9. Explain the difference between an observation and an interpretation.
10. Why is an asset inventory useful during a penetration test?

### Practical questions

1. Retrieve the A record of an approved domain.
2. Find its MX and NS records.
3. Identify its registrar using RDAP.
4. Search its certificate records using crt.sh.
5. Find one publicly indexed PDF using a search operator.
6. Prepare an asset inventory with at least five observations, where available.
7. Mark each observation with a confidence level and explain why.

## 12. Homework

Task: Prepare a passive reconnaissance report

Choose a domain that you own or have explicit permission to investigate.

Your report must include:

- Domain registration details.
- DNS record investigation.
- Certificate transparency findings.
- Search engine findings.
- Asset inventory.
- Observations and interpretations.
- Limitations of the investigation.

Submission format: PDF or Markdown.

Students should not perform port scans, directory brute-forcing, login attempts or vulnerability testing as part of this assignment.

## 13. Session recap

By the end of this session, students should understand that reconnaissance is not simply running commands and collecting IP addresses. It is a structured process of gathering, organizing and evaluating information.

The most important lesson:

> Good security professionals do not make conclusions from guesses. They collect evidence, verify it and document what they actually know.
