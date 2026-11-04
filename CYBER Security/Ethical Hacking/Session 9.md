
# Session 9: Cryptography – Encryption, Hashing and Digital Signatures

**Made by:** Punit Jangra

**Duration:** 2 Hours – 2 Hours 30 Minutes  
**Level:** Beginner to Intermediate  
**Subject:** Ethical Hacking – Cyber Security

---

# Today's Mission

Imagine that a company stores confidential student records on a server.

The company wants to ensure:

1. Nobody can read the records without permission.
2. Nobody can secretly modify the records.
3. The company can verify that a received file is genuine.
4. Passwords are not stored in plain text.
5. Important messages can be verified as coming from the correct sender.

How can cryptography help?

Today, we will learn the techniques used to protect information and practise them using Linux and OpenSSL.

![Cybersecurity encryption and digital data protection](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80)

## Learning Objectives

By the end of this session, students should be able to:

- Explain what cryptography is and why it is used.
- Differentiate encoding, encryption and hashing.
- Understand symmetric and asymmetric encryption.
- Generate and verify SHA-256 hashes.
- Encrypt and decrypt files using OpenSSL.
- Understand public keys and private keys.
- Generate a digital signature and verify it.
- Explain how passwords should be stored securely.
- Understand the role of cryptography in HTTPS.

---

# Part 1: Understanding Cryptography

## 1. What Is Cryptography?

Cryptography is the practice of protecting information using mathematical techniques.

It helps protect data from unauthorized access and modification and provides methods to verify identity and authenticity.

Consider this example:

A teacher wants to send confidential examination results to another teacher.

If the message is sent as ordinary text, someone who intercepts it may be able to read it.

Cryptography provides techniques to protect that information.

### Simple Example

Original message:

```text
The examination result is 85.
```

After encryption, it may look like:

```text
U2FsdGVkX1... (encrypted data)
```

The encrypted output is not meant to be understandable without the correct decryption key.

The person who has the correct key can decrypt it and recover the original message.

### Important Terms

| Term | Meaning |
|---|---|
| Plaintext | Original readable information |
| Ciphertext | Encrypted information |
| Encryption | Converting plaintext into ciphertext |
| Decryption | Recovering plaintext from ciphertext |
| Cipher | Mathematical algorithm used for encryption |
| Key | Information used by an encryption algorithm |
| Cryptanalysis | Studying methods to analyse or break cryptographic protection |

### Understand the Process

```text
       ORIGINAL MESSAGE
              |
              |
         ENCRYPTION
              |
         SECRET KEY
              |
              v
       ENCRYPTED MESSAGE
              |
              |
         DECRYPTION
              |
         CORRECT KEY
              |
              v
       ORIGINAL MESSAGE
```

**Important:** Encryption does not mean that information is permanently hidden. A person with the correct key and algorithm can recover the original information.

---

## 2. Why Do We Need Cryptography?

Cryptography is used in many everyday technologies.

| Application | How cryptography helps |
|---|---|
| Online banking | Protects sensitive communication |
| WhatsApp and messaging applications | Protects messages through encryption |
| HTTPS websites | Protects communication between browsers and servers |
| Password storage | Protects stored authentication information through password hashing |
| Digital signatures | Helps verify authenticity and integrity |
| File protection | Prevents unauthorized reading of encrypted files |
| Online payments | Helps protect sensitive transaction information |

### Real-Life Example: Online Banking

Suppose you log in to your bank.

You enter:

```text
Username: student123
Password: MyPassword123
```

Without proper transport security, sensitive information could be exposed while travelling through a network.

HTTPS uses TLS to protect communication between the browser and the website.

We will study this connection later when we cover web application security.

---

# Part 2: The Three Important Concepts

Before using any cryptographic tool, students must understand one important distinction.

**Encoding, encryption and hashing are NOT the same thing.**

## 3. Encoding

Encoding changes the representation of data into another format.

It is generally used to make data easier to transmit, store or process.

Encoding does not provide secrecy.

### Example: Base64

Original message:

```text
Hello Students
```

Base64 representation:

```text
SGVsbG8gU3R1ZGVudHM=
```

Can we recover the original message?

Yes. Anyone can decode it. No secret key is required.

### Practical 1: Base64 Encoding and Decoding

Linux provides a command called `base64`.

First, encode a message:

```bash
echo -n "Hello Students" | base64
```

Expected output:

```text
SGVsbG8gU3R1ZGVudHM=
```

Now decode it:

```bash
echo "SGVsbG8gU3R1ZGVudHM=" | base64 --decode
```

Expected output:

```text
Hello Students
```

### Understand the Command

| Part | Meaning |
|---|---|
| `echo` | Prints text |
| `-n` | Prevents adding an extra newline |
| `\|` | Sends output from one command to another |
| `base64` | Encodes data into Base64 |
| `--decode` | Converts Base64 back into original data |

### Student Challenge

Encode the following messages:

```text
Cyber Security
```

```text
My First Linux Practical
```

Then decode the output.

### Important Lesson

Base64 is not encryption.

Never use Base64 to protect passwords, confidential files or secret messages.

---

## 4. Encryption

Encryption converts readable information into ciphertext using a cryptographic algorithm and a key.

Unlike encoding, encryption is designed to protect confidentiality.

For example:

```text
Plaintext:
My examination result is 85.

Encryption:
[Unreadable encrypted data]
```

The correct decryption key is required to recover the original message.

### Two Main Types of Encryption

1. Symmetric encryption
2. Asymmetric encryption

---

# Part 3: Symmetric Encryption

## 5. What Is Symmetric Encryption?

Symmetric encryption uses the same secret key for encryption and decryption.

Think of a locked box.

You lock the box using a key, send it to another person, and that person uses the same key to unlock it.

Both people must have access to the same secret key.

### Diagram

```text
             ORIGINAL MESSAGE
                    |
                    v
              ENCRYPTION
                    |
              SECRET KEY
                    |
                    v
             ENCRYPTED DATA
                    |
                    v
              DECRYPTION
                    |
              SAME SECRET KEY
                    |
                    v
             ORIGINAL MESSAGE
```

### Common Symmetric Algorithms

| Algorithm | Purpose |
|---|---|
| AES | Modern symmetric encryption |
| ChaCha20 | Modern stream cipher |
| DES | Old encryption algorithm, considered insecure |
| 3DES | Legacy algorithm, no longer recommended for new systems |

### What Is AES?

AES stands for Advanced Encryption Standard.

It is a widely used symmetric encryption algorithm.

AES supports three key sizes:

- AES-128
- AES-192
- AES-256

The numbers represent the key length in bits.

AES-256 uses a 256-bit key.

A larger key does not automatically make every system more secure. Secure implementation and key management also matter.

---

## 6. Practical 2: Encrypt and Decrypt a File Using OpenSSL

Now we will perform actual encryption.

### What Is OpenSSL?

OpenSSL is a widely used cryptographic software library and command-line tool.

It provides functionality for:

- Encryption and decryption.
- Hash generation.
- Digital signatures.
- Public and private key operations.
- Certificate inspection.
- TLS-related operations.

### Step 1: Check OpenSSL

```bash
openssl version
```

You should see output similar to:

```text
OpenSSL 3.x.x ...
```

The exact version will depend on your system.

### Step 2: Create a Sample File

```bash
mkdir -p ~/cyber-lab/session-9
cd ~/cyber-lab/session-9
```

Create a confidential file:

```bash
echo "Student Name: Rahul" > result.txt
echo "Roll Number: 101" >> result.txt
echo "Marks: 85" >> result.txt
```

Read the file:

```bash
cat result.txt
```

Expected output:

```text
Student Name: Rahul
Roll Number: 101
Marks: 85
```

Explain to students that this file represents confidential information.

### Step 3: Encrypt the File

Run:

```bash
openssl enc -aes-256-cbc -salt -pbkdf2 -iter 200000 -in result.txt -out result.enc
```

OpenSSL will ask for an encryption password.

Enter a temporary lab password.

The password will not appear on the screen while typing.

### Understand the Command

| Option | Meaning |
|---|---|
| `enc` | OpenSSL encryption command |
| `-aes-256-cbc` | Selects AES-256 in CBC mode |
| `-salt` | Uses a random salt |
| `-pbkdf2` | Uses PBKDF2 to derive a key from the password |
| `-iter 200000` | Sets the key derivation iteration count |
| `-in result.txt` | Input file |
| `-out result.enc` | Encrypted output file |

### Step 4: Inspect the Encrypted File

```bash
file result.enc
```

You can also inspect its first bytes:

```bash
xxd -l 32 result.enc
```

The output is binary data, not a readable copy of the original student information.

Do not expect encrypted files to look like meaningful sentences.

### Step 5: Try Reading the Encrypted File

```bash
cat result.enc
```

The terminal may display unreadable characters.

Explain that this is because the encrypted file contains binary ciphertext.

It is not intended to be opened as an ordinary text file.

### Step 6: Decrypt the File

```bash
openssl enc -d -aes-256-cbc -pbkdf2 -iter 200000 -in result.enc -out recovered.txt
```

Enter the same password used during encryption.

Now inspect the recovered file:

```bash
cat recovered.txt
```

Expected output:

```text
Student Name: Rahul
Roll Number: 101
Marks: 85
```

### What Did We Learn?

- Original file: `result.txt`
- Encrypted file: `result.enc`
- Recovered file: `recovered.txt`
- Encryption and decryption used the same password.

### Practical Challenge

1. Create another file containing your own sample information.
2. Encrypt it using AES-256.
3. Try decrypting it with an incorrect password.
4. Observe what happens.
5. Decrypt it using the correct password.

**Important technical limitation:** OpenSSL's `enc` command does not provide authenticated encryption. AES-CBC encryption alone does not guarantee that ciphertext has not been modified. This demonstration is for learning. For real applications, use an authenticated encryption design such as AES-GCM through a suitable library, or use a well-reviewed file encryption tool.

Never reuse important personal passwords in classroom demonstrations.

---

# Part 4: Hashing

## 7. What Is Hashing?

Hashing converts input data into a fixed-length output called a hash or digest.

Unlike encryption, hashing is designed to be a one-way operation.

You do not normally decrypt a hash to obtain the original message.

### Example

Original message:

```text
Hello
```

SHA-256 hash:

```text
185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969
```

If you hash the same message again using SHA-256, you should get the same digest.

If you change even one character, the hash will be completely different.

### Diagram

```text
        ORIGINAL DATA
              |
              v
          HASHING
              |
              v
        FIXED-LENGTH HASH
```

### Properties of a Good Cryptographic Hash Function

1. Deterministic: The same input produces the same hash.
2. One-way: It should be computationally infeasible to recover the original input from the digest.
3. Collision resistance: It should be difficult to find two different inputs with the same hash.
4. Avalanche effect: A small input change should cause a large change in the output.

### Common Hashing Algorithms

| Algorithm | Status |
|---|---|
| MD5 | Broken for collision resistance |
| SHA-1 | Broken for collision resistance |
| SHA-256 | Widely used and currently suitable for many integrity applications |
| SHA-512 | Widely used cryptographic hash |
| SHA-3 | Modern cryptographic hash family |

**Important:** SHA-256 is a general-purpose cryptographic hash, not a password-storage algorithm.

---

## 8. Practical 3: Generate a SHA-256 Hash

We will use the same result file.

### Step 1: Generate a Hash

```bash
sha256sum result.txt
```

Expected output format:

```text
<64 hexadecimal characters>  result.txt
```

The exact hash depends on the file contents.

### Step 2: Generate the Hash Again

```bash
sha256sum result.txt
```

The hash should be identical if the file has not changed.

### Step 3: Change the File

```bash
echo "Additional information" >> result.txt
```

Generate the hash again:

```bash
sha256sum result.txt
```

The hash should now be different.

### What Happened?

Even though we added only one line, the hash changed significantly.

This is an example of the avalanche effect.

### Step 4: Compare Two Files

Create two files:

```bash
echo -n "Cyber Security" > first.txt
echo -n "Cyber Security" > second.txt
```

Generate their hashes:

```bash
sha256sum first.txt second.txt
```

Both hashes should be identical.

Now change the second file:

```bash
echo -n "Cybersecurity" > second.txt
```

Generate the hashes again:

```bash
sha256sum first.txt second.txt
```

They should now be different.

### Step 5: Verify a File Automatically

Create a checksum file:

```bash
sha256sum first.txt > first.sha256
```

Verify it:

```bash
sha256sum -c first.sha256
```

Expected output:

```text
first.txt: OK
```

Modify the file:

```bash
echo "Changed data" >> first.txt
```

Verify again:

```bash
sha256sum -c first.sha256
```

Expected output:

```text
first.txt: FAILED
sha256sum: WARNING: 1 computed checksum did NOT match
```

The exact warning format may vary.

### Practical Application

Imagine a company downloads a software update.

The company receives an expected SHA-256 checksum from a trusted source.

After downloading the file, it calculates its own checksum.

If the checksums match, this provides evidence that the downloaded file matches the expected content.

However, a checksum by itself does not prove who supplied the checksum. An attacker who can replace both the file and the checksum may defeat this comparison.

Digital signatures can help establish authenticity.

---

# Part 5: Password Security

## 9. Why Should Passwords Not Be Stored as Plain Text?

Imagine a website stores this database record:

```text
Username: rahul
Password: rahul123
```

If an attacker gains access to the database, the password is immediately exposed.

This is why secure applications should not store passwords in plain text.

Instead, applications store password hashes produced using a dedicated password-hashing algorithm.

### Password Hashing

```text
           USER PASSWORD
                  |
                  v
        PASSWORD HASHING
                  |
                  v
         STORED PASSWORD HASH
```

When the user logs in:

1. The user enters a password.
2. The application retrieves the stored password hash.
3. The password-hashing algorithm verifies the entered password.
4. The application allows or rejects login.

### What Is a Salt?

A salt is a random value added to the password-hashing process.

It helps ensure that identical passwords do not produce identical stored password hashes when independently generated.

Example:

```text
Password: rahul123
Salt:     random-value-A
```

Another account may have:

```text
Password: rahul123
Salt:     random-value-B
```

The resulting password hashes should be different.

### What Is a Password-Hashing Algorithm?

A password-hashing algorithm is deliberately designed to make password guessing expensive.

Common choices include:

- Argon2id
- bcrypt
- scrypt
- PBKDF2

For modern applications, Argon2id is an excellent default when supported.

### Important Difference

| General Hashing | Password Hashing |
|---|---|
| Designed for general integrity and cryptographic applications | Designed specifically for password storage |
| SHA-256 is a common example | Argon2id and bcrypt are examples |
| Usually very fast | Intentionally more expensive |
| Not suitable by itself for password storage | Includes salt and configurable work factors |

**Never store passwords using ordinary SHA-256 alone.**

---

## 10. Practical 4: Understand Password Hashing with Python

We will use Python to demonstrate password hashing.

First, check whether Python is installed:

```bash
python3 --version
```

Create a file:

```bash
nano password_demo.py
```

Add this code:

```python
import hashlib
import os

password = b"rahul123"

salt = os.urandom(16)

hash_value = hashlib.pbkdf2_hmac(
    "sha256",
    password,
    salt,
    600000
)

print("Salt:", salt.hex())
print("Password Hash:", hash_value.hex())
```

Save the file and run:

```bash
python3 password_demo.py
```

You should see a random salt and a hexadecimal hash.

Run the program again.

The output should be different because a new random salt is generated each time.

### Explain the Code

| Code | Meaning |
|---|---|
| `hashlib` | Python cryptographic hashing module |
| `os.urandom(16)` | Generates 16 random bytes |
| `pbkdf2_hmac()` | Performs password-based key derivation |
| `sha256` | Selects the underlying hash function |
| `600000` | Number of PBKDF2 iterations |
| `.hex()` | Displays bytes as hexadecimal text |

This is an educational demonstration of salted password hashing.

For a real application, use a maintained password-hashing library with an appropriate configuration and built-in verification support. Argon2id is preferred when available. Passwords should never be hardcoded in production source code.

---

# Part 6: Asymmetric Encryption

## 11. What Is Asymmetric Encryption?

Symmetric encryption uses one shared secret key.

Asymmetric cryptography uses a pair of related keys:

1. Public key
2. Private key

The public key can be shared.

The private key must remain secret.

### Real-Life Analogy

Imagine a special mailbox.

Anyone can put a letter inside because the opening is available to everyone.

However, only the person who has the mailbox key can open it.

In this analogy:

- Public key = Mailbox opening
- Private key = Key used to open the mailbox

### Diagram

```text
             SENDER
                |
                |
        ORIGINAL MESSAGE
                |
                v
        RECIPIENT'S PUBLIC KEY
                |
                v
          ENCRYPTION
                |
                v
         ENCRYPTED MESSAGE
                |
                v
             RECIPIENT
                |
                v
        RECIPIENT'S PRIVATE KEY
                |
                v
          DECRYPTION
                |
                v
         ORIGINAL MESSAGE
```

### Common Asymmetric Algorithms

| Algorithm | Purpose |
|---|---|
| RSA | Public-key encryption and digital signatures |
| ECC | Elliptic-curve cryptography |
| ECDSA | Digital signatures using elliptic curves |
| Ed25519 | Digital signatures |

### Public Key vs Private Key

| Public Key | Private Key |
|---|---|
| Can be shared | Must remain secret |
| Used to encrypt data for the key owner in suitable encryption schemes | Used to decrypt corresponding ciphertext |
| Used to verify digital signatures | Used to create digital signatures |

The exact operation depends on the cryptographic algorithm.

---

## 12. Practical 5: Generate a Public and Private Key

We will generate an RSA key pair using OpenSSL.

### Step 1: Create a Private Key

```bash
openssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:3072 -out private.pem
```

This generates an RSA private key.

### Step 2: Protect the Private Key

The private key is sensitive.

Restrict its permissions:

```bash
chmod 600 private.pem
```

Only its owner should be able to read and write it.

### Step 3: Generate the Public Key

```bash
openssl pkey -in private.pem -pubout -out public.pem
```

Now inspect the files:

```bash
ls -l private.pem public.pem
```

Explain:

- `private.pem` contains the private key.
- `public.pem` contains the public key.
- The public key can be distributed.
- The private key must be protected.

### Step 4: Inspect the Public Key

```bash
openssl pkey -pubin -in public.pem -text -noout
```

This displays information about the public key.

Do not share the private key with other students.

---

# Part 7: Digital Signatures

## 13. What Is a Digital Signature?

A digital signature helps establish:

1. Authenticity: Who signed the information?
2. Integrity: Has the information changed?
3. Non-repudiation: Provides evidence supporting the claim that the holder of a private key signed the data, subject to key ownership and other real-world conditions.

A digital signature is not the same as encryption.

It does not automatically hide the contents of a message.

### Example

A teacher creates an important result document.

The teacher signs the document using a private key.

The receiver verifies the signature using the corresponding public key.

If the document is modified after signing, signature verification should fail.

### Diagram

```text
             ORIGINAL FILE
                   |
                   v
             PRIVATE KEY
                   |
                   v
            DIGITAL SIGNATURE

             RECEIVER
                   |
                   v
          ORIGINAL FILE + SIGNATURE
                   |
                   v
              PUBLIC KEY
                   |
                   v
             VERIFICATION
                   |
             +-----+-----+
             |           |
           VALID       INVALID
```

---

## 14. Practical 6: Create and Verify a Digital Signature

We will sign a file using the RSA private key generated earlier.

### Step 1: Create a Message

```bash
echo "Final result approved by the examination department." > message.txt
```

### Step 2: Generate a Digital Signature

```bash
openssl dgst -sha256 -sign private.pem -out message.sig message.txt
```

This creates a signature file.

### Step 3: Verify the Signature

```bash
openssl dgst -sha256 -verify public.pem -signature message.sig message.txt
```

Expected output:

```text
Verified OK
```

This means the signature successfully verifies against the supplied file and public key.

### Step 4: Modify the Message

```bash
echo "Modified result information." >> message.txt
```

Run the verification command again:

```bash
openssl dgst -sha256 -verify public.pem -signature message.sig message.txt
```

Expected output:

```text
Verification failure
```

The file has changed, so the previous signature no longer verifies.

### What Did We Prove?

A digital signature helps detect whether the signed data has changed.

It also verifies that the signature corresponds to the supplied public key.

However, the public key must be trusted and correctly associated with the person or organisation claiming to own it.

---

# Part 8: How HTTPS Uses Cryptography

## 15. What Happens When You Open an HTTPS Website?

When you visit:

```text
https://example.com
```

Your browser and the website establish a secure connection using TLS.

TLS stands for Transport Layer Security.

It provides protection for data travelling between the browser and server.

### Simplified HTTPS Process

```text
          USER'S BROWSER
                 |
                 |
          HTTPS CONNECTION
                 |
                 v
           TLS HANDSHAKE
                 |
                 v
       SERVER CERTIFICATE CHECK
                 |
                 v
        KEY AGREEMENT PROCESS
                 |
                 v
        SHARED SESSION KEYS
                 |
                 v
        ENCRYPTED COMMUNICATION
```

The actual TLS handshake is more detailed and depends on the TLS version and cipher suite.

### Important Components

| Component | Purpose |
|---|---|
| TLS | Protects communication |
| Certificate | Binds a public key to a server identity |
| Certificate Authority | Helps establish certificate trust |
| Public key cryptography | Supports authentication and key establishment |
| Symmetric encryption | Efficiently protects session traffic |
| Hash and MAC mechanisms | Support integrity protection |

### Why Does HTTPS Use Both Types of Cryptography?

Asymmetric cryptography is useful for authentication and establishing shared secrets.

Symmetric encryption is efficient for protecting large amounts of communication data.

Therefore, secure communication protocols combine cryptographic techniques rather than relying on only one algorithm.

### Practical 7: Inspect a Website's TLS Certificate

Run:

```bash
openssl s_client -connect example.com:443 -servername example.com
```

This opens a TLS connection and displays certificate and handshake information.

The command may remain connected. Press:

```text
Ctrl + C
```

to exit.

For a shorter certificate inspection:

```bash
echo | openssl s_client -connect example.com:443 -servername example.com 2>/dev/null | openssl x509 -noout -subject -issuer -dates
```

You may see information about:

- Subject: The identity named in the certificate.
- Issuer: The certificate authority.
- Not Before: When the certificate becomes valid.
- Not After: When the certificate expires.

### Discussion

Ask students:

1. Why do websites use HTTPS?
2. Does HTTPS mean a website is completely safe?
3. What happens when a certificate expires?
4. Why does the browser check the certificate?

**Important:** HTTPS protects communication. It does not guarantee that the website itself is trustworthy or free from vulnerabilities.

---

# Part 9: Common Cryptographic Mistakes

## 16. Mistakes We Must Avoid

| Mistake | Why it is dangerous |
|---|---|
| Using Base64 as encryption | Anyone can decode it |
| Storing passwords as plain text | A database leak exposes passwords immediately |
| Using MD5 for security | It is no longer collision-resistant |
| Using SHA-256 alone for passwords | It is too fast for password storage |
| Sharing private keys | Other people may impersonate the key owner |
| Reusing weak passwords | Makes password guessing easier |
| Losing encryption keys | Encrypted information may become unrecoverable |
| Using outdated cryptographic algorithms | May expose information to known weaknesses |
| Ignoring certificate validation | Makes impersonation and interception easier |
| Assuming encryption guarantees integrity | Some encryption modes do not authenticate data |

---

# Part 10: Complete Student Practical

## 17. Practical Assessment: Secure a Confidential Result File

### Scenario

You are working as a junior cybersecurity analyst.

Your organisation gives you a confidential result file.

Your task is to protect the file, verify its integrity and sign it digitally.

### Requirements

Students must complete all the following:

**Task 1: Create the workspace**

Create a directory:

```bash
mkdir -p ~/cyber-lab/session-9/final-practical
cd ~/cyber-lab/session-9/final-practical
```

**Task 2: Create a confidential file**

```bash
cat > result.txt <<'EOF'
Student Name: Rahul
Roll Number: 101
Subject: Cyber Security
Marks: 85
EOF
```

**Task 3: Generate its SHA-256 hash**

```bash
sha256sum result.txt
```

Record the hash.

**Task 4: Encrypt the file**

```bash
openssl enc -aes-256-cbc -salt -pbkdf2 -iter 200000 -in result.txt -out result.enc
```

**Task 5: Decrypt the file**

```bash
openssl enc -d -aes-256-cbc -pbkdf2 -iter 200000 -in result.enc -out recovered.txt
```

**Task 6: Verify the recovered file**

```bash
sha256sum result.txt recovered.txt
```

The two hashes should match if the recovered content is identical.

**Task 7: Generate a key pair**

```bash
openssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:3072 -out private.pem
```

```bash
chmod 600 private.pem
```

```bash
openssl pkey -in private.pem -pubout -out public.pem
```

**Task 8: Sign the original result file**

```bash
openssl dgst -sha256 -sign private.pem -out result.sig result.txt
```

**Task 9: Verify the signature**

```bash
openssl dgst -sha256 -verify public.pem -signature result.sig result.txt
```

The output should be:

```text
Verified OK
```

**Task 10: Modify the original file**

```bash
echo "Additional result entry" >> result.txt
```

Try verifying the signature again.

The verification should fail.

### Submission Requirements

Students must submit:

1. Screenshot of the original file.
2. SHA-256 hash output.
3. Encrypted file details.
4. Decrypted file contents.
5. Public and private key file listing.
6. Successful digital signature verification.
7. Failed verification after modifying the file.
8. A short explanation of what each step proved.

---

# Part 11: Quick Revision

## 18. Important Differences

| Feature | Encoding | Encryption | Hashing |
|---|---|---|---|
| Main purpose | Change data representation | Protect confidentiality | Produce a digest |
| Reversible | Yes | Yes, with the correct key | Not normally |
| Requires a secret key | No | Yes | No |
| Example | Base64 | AES | SHA-256 |
| Common use | Data representation | Confidential communication | Integrity checking |

## 19. Symmetric vs Asymmetric Encryption

| Feature | Symmetric | Asymmetric |
|---|---|---|
| Keys | One shared secret key | Public and private key pair |
| Speed | Generally faster | Generally slower |
| Key sharing | Secret key must be shared securely | Public key can be distributed |
| Example | AES | RSA |
| Common use | File and data encryption | Key establishment and certain encryption schemes |

---

# Part 12: Student Assessment

## 20. Theory Questions

1. Define cryptography.
2. What is the difference between plaintext and ciphertext?
3. What is a cryptographic key?
4. Explain encoding with an example.
5. Why is Base64 not encryption?
6. What is symmetric encryption?
7. Explain AES.
8. What is asymmetric cryptography?
9. Differentiate public and private keys.
10. What is hashing?
11. Explain the avalanche effect.
12. What is SHA-256?
13. Why should passwords not be stored in plain text?
14. What is a salt?
15. Why is Argon2id suitable for password storage?
16. What is a digital signature?
17. How does a digital signature help detect file modification?
18. What is TLS?
19. Why does HTTPS use both asymmetric and symmetric cryptography?
20. Does HTTPS guarantee that a website is completely secure? Explain.

## 21. Practical Questions

1. Encode the text `Hello World` using Base64.
2. Decode the Base64 output.
3. Generate a SHA-256 hash for a text file.
4. Modify the file and compare its new hash.
5. Encrypt a file using AES-256 through OpenSSL.
6. Decrypt the encrypted file.
7. Generate an RSA public/private key pair.
8. Sign a text file.
9. Verify the digital signature.
10. Modify the signed file and repeat verification.

---

# Part 13: Homework

## Homework 1: Research

Write short explanations of:

- AES
- RSA
- SHA-256
- Argon2id
- Digital signatures
- TLS certificates

## Homework 2: Practical

Create a text file containing fictional company information.

1. Generate its SHA-256 hash.
2. Encrypt the file.
3. Decrypt the file.
4. Verify that the original and recovered files have identical hashes.
5. Create a public/private key pair.
6. Sign the file.
7. Verify the signature.
8. Modify the file and test verification again.

## Homework 3: Think Like a Security Analyst

Answer the following scenarios:

**Scenario A:** A website stores passwords using Base64 encoding. Is this secure? Why?

**Scenario B:** Two files have identical SHA-256 hashes. What does that tell us?

**Scenario C:** A company encrypts its database but loses the encryption key. What problem will it face?

**Scenario D:** A website uses HTTPS but has an insecure login implementation. Is the website secure?

**Scenario E:** An employee shares the company's private signing key with another person. What risks does this create?

---

# Final Summary

Today we learned that cryptography is not simply about hiding messages.

It is an important part of protecting information, verifying data and securing digital communication.

Remember these key concepts:

- Encoding changes representation.
- Encryption protects confidentiality.
- Hashing produces a one-way digest.
- Symmetric encryption uses a shared secret key.
- Asymmetric cryptography uses a public/private key pair.
- Passwords require dedicated password-hashing algorithms.
- Digital signatures help verify authenticity and integrity.
- HTTPS uses TLS to protect communication.

## Next Session: Footprinting and Reconnaissance – Part 1

In the next session, students will learn how security professionals collect information about an authorised target.

We will work with:

- Domain information.
- DNS reconnaissance.
- WHOIS.
- Certificate transparency.
- Public information sources.
- Reconnaissance worksheets.
- Asset identification and documentation.

**The objective is to move from understanding cryptography to investigating real-world digital infrastructure responsibly.**
