


## 1. Introduction: What Are We Learning Today?

In the previous sessions, we learned the basics of cybersecurity, including assets, threats, vulnerabilities, risks, and the Linux environment.

Now imagine that a company asks you to check whether its website is secure. You open your laptop, launch a few tools, and immediately start testing the website.

**Is that the correct approach?**

No. Before testing anything, an ethical hacker must understand what they are allowed to test, who has authorized the work, which techniques are permitted, and what to do if something goes wrong.
Ethical hacking is not simply about finding vulnerabilities. It is about finding them with permission, within agreed boundaries, while minimizing harm, and reporting the results responsibly.

Consider a simple example.

A company owns the website `example-company.test`. The company asks you to assess its website security. However, the website uses a third-party payment provider and is hosted on a cloud platform.
Does permission to test the company's website automatically give you permission to attack the payment provider or the cloud platform?

No. Permission applies only to the systems and activities explicitly covered by the authorization. Third-party infrastructure may have separate owners and rules.

This is why planning is just as important as technical knowledge.

## 2. What Is Ethical Hacking?

Ethical hacking is the authorized process of examining computer systems, networks, applications, or infrastructure to identify security weaknesses and help the owner fix them.

The person performing these activities is often called an ethical hacker or a penetration tester, depending on the work being performed.

Let's understand the definition in parts.

- Authorized: The owner or an authorized representative has given permission for the activity.
    
- Testing: Security is examined using planned methods and controlled experiments.
    
- Identifying weaknesses: The tester looks for vulnerabilities, insecure configurations, and weaknesses in security controls.
    
- Reporting: The findings are documented so the owner can understand and address them.
    
- Improving security: The ultimate purpose is to reduce risk, not to damage systems or obtain unauthorized access.
    

### Example

Suppose a college website allows a logged-in student to view another student's private marks by changing an ID in the URL.

An ethical hacker working under an approved testing agreement might verify this issue using designated test accounts, record the evidence, explain the privacy impact, and recommend a fix.

The goal is to help the college prevent unauthorized access to student records.

## 3. Ethical Hacking vs. Malicious Hacking

The same technical technique can be used for different purposes. What matters is the authorization, the permitted activity, and how the results are handled.

|Ethical hacking|Malicious hacking|
|---|---|
|Conducted with valid authorization|Conducted without appropriate authorization|
|Follows an agreed scope|Ignores the system owner's boundaries|
|Uses controlled testing methods|May damage systems or expose data|
|Records evidence responsibly|May steal, misuse, or publish information|
|Reports weaknesses to help fix them|May exploit weaknesses for personal gain|
|Stops or escalates when testing becomes unsafe|May continue despite causing harm|

Important: Good intentions do not replace permission. A person cannot legally justify unauthorized testing simply by saying, "I was trying to help."

## 4. What Is an Ethical Hacking Methodology?

A methodology is an organized sequence of steps used to complete a task consistently and safely.

For example, a teacher does not normally conduct an examination by randomly asking questions, changing the syllabus halfway through, and forgetting to check the answers. A structured process makes the result more reliable.

Ethical hacking uses the same principle.

A typical security assessment follows these stages:

1. Authorization and planning

Obtain permission and agree on the rules.

2. Reconnaissance

Gather relevant information about the approved target.

3. Scanning and enumeration

Identify reachable systems, ports, and services.

4. Vulnerability assessment

Identify and evaluate possible weaknesses.

5. Controlled validation

Safely confirm selected findings within scope.

6. Reporting and remediation

Explain the risks and recommend fixes.

7. Retesting and closure

Check the fixes and formally close the assessment.

These stages are a practical teaching model, not a rule that every assessment must follow in exactly the same order. Some activities overlap, and a tester may return to an earlier stage when new information appears.

### Stage 1: Authorization and planning

Before using security tools, establish:

- Who owns the target?
    
- Who has authority to approve testing?
    
- Which systems are included?
    
- What dates and times are permitted?
    
- Which testing techniques are allowed?
    
- Who should be contacted during an emergency?
    
- How should findings and evidence be handled?
    

Without these answers, testing should not begin.

### Stage 2: Reconnaissance

Reconnaissance means collecting information about the target to understand its structure and potential attack surface.

An attack surface is the collection of points through which a system could potentially be accessed or affected.

Examples include:

- Public website pages.
    
- Publicly documented APIs.
    
- DNS records.
    
- Login pages.
    
- Exposed services.
    
- Public technical documentation.
    

Reconnaissance may be passive, meaning information is gathered without directly interacting with the target's systems, or active, meaning the tester interacts with the target. Active reconnaissance requires appropriate authorization too.

We will study these techniques in more detail in later sessions.

### Stage 3: Scanning and enumeration

Scanning helps identify reachable hosts, open ports, and available services.

Enumeration means collecting more detailed information about discovered systems or services.

For example, a scan may suggest that a server has port 443 open. Further investigation may indicate that the port serves HTTPS traffic.

An open port is not automatically a vulnerability. It is a point that may need further investigation.

### Stage 4: Vulnerability assessment

A vulnerability is a weakness that could affect the confidentiality, integrity, or availability of a system.

Examples include:

- Software with a known security flaw.
    
- Incorrect file permissions.
    
- Missing access-control checks.
    
- Weak authentication controls.
    
- Insecure application configurations.
    

A vulnerability scanner may identify possible problems, but its results need interpretation and sometimes manual validation.

### Stage 5: Controlled validation

Validation means checking whether a suspected weakness is real and understanding its impact.

For example, if an application might allow one user to access another user's records, the tester should use approved test accounts and designated test data to verify the issue.

The tester should not download real customer records just to prove that the weakness exists.

The principle is simple: collect enough evidence to establish the finding, but avoid unnecessary access, exposure, or damage.

### Stage 6: Reporting and remediation

A useful finding should explain:

1. What the vulnerability is.
    
2. Where it was identified.
    
3. How it was safely verified.
    
4. What an attacker might be able to do.
    
5. How serious the issue is.
    
6. How the organization can fix it.
    

A report that says "Website is insecure" is not useful enough. The organization needs clear evidence and practical recommendations.

### Stage 7: Retesting and closure

After the organization applies a fix, the tester checks whether the vulnerability has been addressed.

For example, if a missing authorization check was responsible for exposing records, retesting should verify that a user can no longer access records they are not permitted to see.

The assessment is then closed according to the agreed process, including the delivery of the final report and appropriate handling of test data.

## 5. Authorization: Permission Before Testing

### 5.1 What is authorization?

Authorization is formal permission to perform specific actions on a system, application, network, or other asset.

In ethical hacking, authorization establishes that the tester is permitted to carry out the agreed security assessment.

Think of a school laboratory. A student may be allowed to use the computers in the lab, but that does not automatically give the student permission to access the principal's computer, change school records, or reset the network equipment.

Permission is limited by the authority that grants it and by the conditions attached to it.

The same principle applies to cybersecurity.

### 5.2 Who can authorize a security test?

Authorization should come from someone who has the legal authority to approve testing for the relevant systems.

Examples include:

- A business owner authorizing a test of the business's own website.
    
- An organization's authorized IT or security manager approving an internal assessment.
    
- A client approving a defined test through a formal engagement.
    
- A training platform explicitly permitting security exercises on its designated lab targets.
    

A random employee saying "it's fine, go ahead" may not have the authority to approve the activity.

### 5.3 Why should permission be documented?

Written authorization helps everyone understand what was agreed upon. It reduces misunderstandings and gives the tester a reference if a system owner, hosting provider, or administrator asks why testing is taking place.

A written authorization should generally identify:

- The organization or person authorizing the work.
    
- The tester or testing team.
    
- The approved systems and targets.
    
- The permitted dates or testing window.
    
- The allowed and prohibited activities.
    
- The contact person for incidents or emergencies.
    
- Requirements for evidence handling and reporting.
    

The exact documentation depends on the assessment, organization, applicable law, and contractual requirements.

### Example: Permission is not unlimited

Suppose a company authorizes you to test:

`https://portal.company.example`

The same organization also operates:

- `https://shop.company.example`
    
- `https://admin.company.example`
    
- A production database hosted by a third party.
    

You must not assume that all these assets are included. Even if the domains look related, they may belong to different applications, teams, providers, or authorization arrangements.

Rule: If a target or activity is not clearly covered by the authorization, stop and obtain clarification before testing it.

### 5.4 Does authorization permit every technique?

No. Authorization can be limited to particular methods.

For example, a company might allow:

- Reviewing HTTP response headers.
    
- Checking authentication and access controls using test accounts.
    
- Performing a limited scan of a staging server.
    

But it might prohibit:

- Denial-of-service testing.
    
- Social engineering of employees.
    
- Testing production payment transactions.
    
- Modifying or deleting real data.
    
- Accessing third-party systems.
    

Even if a technique could reveal a weakness, it must not be used when it falls outside the approved scope or rules.

## 6. Scope: What Are You Allowed to Test?

### 6.1 Definition of scope

The scope of a security assessment defines the systems, applications, addresses, accounts, environments, and activities included in the approved testing engagement.

Scope answers two important questions:

1. What may I test?
    
2. What must I leave alone?
    

Scope is one of the most important parts of ethical hacking because a security test can affect systems beyond the intended target.

### 6.2 In-scope and out-of-scope targets

- In-scope: Explicitly included in the approved assessment.
    
- Out-of-scope: Explicitly excluded, or not covered by the authorization.
    

Consider this example.

A company gives you the following scope:

|Asset|Status|Reason|
|---|---|---|
|Staging website|In scope|Explicitly approved|
|Test user accounts|In scope|Created for assessment|
|Production payment system|Out of scope|Excluded from testing|
|Third-party email service|Out of scope|Owned by another provider|
|Employee personal devices|Out of scope|Not included in authorization|

The status depends on the actual authorization, not on whether an asset is easy to access.

### 6.3 What should a scope document contain?

A scope document commonly includes:

1. Target identification: Domain names, IP addresses, application URLs, or specific environments.

2. Testing window: The dates and times when testing is permitted.

3. Allowed techniques: For example, passive reconnaissance, port scanning, authenticated web testing, or controlled vulnerability validation.

4. Exclusions: Activities or systems that must not be tested.

5. Test accounts: The accounts and roles that may be used.

6. Safety restrictions: Limits on traffic volume, data access, account changes, and testing that could interrupt a service.

7. Emergency contacts: People to contact if a system behaves unexpectedly.

8. Reporting requirements: How to submit findings and who may receive the report.

### 6.4 Scope creep

Scope creep occurs when the work expands beyond what was originally agreed upon.

For example, you are testing a company's staging website. During reconnaissance, you discover another subdomain that appears to host its administration panel.

It may be tempting to test that panel immediately. However, discovering an asset does not automatically authorize testing it.

The correct process is:

1. Record the discovery without performing unauthorized tests.
    
2. Check the existing scope document.
    
3. Ask the authorized contact to clarify whether the asset can be included.
    
4. Obtain the necessary approval before expanding the assessment.
    

### 6.5 What if you accidentally discover a serious vulnerability outside the scope?

Do not continue exploiting it.

Preserve only the minimum information necessary to explain the discovery, avoid accessing additional data, and notify the authorized contact through the agreed reporting process. If the discovery involves a third-party system, follow the relevant approved disclosure or escalation procedure.

A serious vulnerability does not cancel the boundaries of the engagement.

## 7. Rules of Engagement (RoE)

### 7.1 What are Rules of Engagement?

Rules of Engagement, commonly abbreviated as RoE, are the agreed instructions that explain how a security assessment must be conducted.

Scope tells you what is included. Rules of Engagement explain how the permitted testing should be carried out.

For example, a scope document might include a staging web application. Its Rules of Engagement might permit normal web testing but prohibit destructive actions, high-volume scanning, and tests that could interrupt service.

### 7.2 Important elements of Rules of Engagement

|Element|Explanation|
|---|---|
|Testing schedule|When testing may take place|
|Approved targets|Systems and environments that may be tested|
|Permitted techniques|Methods that the tester may use|
|Prohibited techniques|Actions that are not allowed|
|Traffic limits|Restrictions intended to avoid overloading systems|
|Test accounts|Approved accounts and access levels|
|Data handling|How evidence and sensitive information must be protected|
|Incident procedure|What to do if something goes wrong|
|Communication|Who receives updates and findings|
|Stop conditions|Situations requiring testing to pause or stop|

### 7.3 What is a stop condition?

A stop condition is a situation in which the tester must pause or terminate testing according to the engagement rules.

Examples include:

- The target becomes unavailable.
    
- Testing unexpectedly affects other users.
    
- Sensitive personal information is exposed.
    
- A test begins modifying real production data.
    
- The authorized contact instructs the tester to stop.
    
- The tester discovers that the target is not the approved system.
    

Suppose a test causes a staging application to stop responding. The correct response is not to keep trying increasingly aggressive commands. Pause testing, follow the incident procedure, and inform the designated contact.

### 7.4 Example Rules of Engagement

The following is an educational example for a fictional organization.

### Sample Security Testing Rules

Engagement: Training Portal Security Assessment

- Target: The specifically listed staging web application.
    
- Window: The dates and times approved by the organization.
    
- Permitted: Non-destructive web testing and limited scanning.
    
- Prohibited: Denial-of-service tests, destructive actions, and tests against third-party systems.
    
- Accounts: Only designated training accounts may be used.
    
- Evidence: Store screenshots and notes in the approved secure location.
    
- Stop condition: Pause testing if the service becomes unstable or sensitive data is exposed.
    
- Reporting: Send findings to the designated security contact.
    

This is a sample, not a substitute for an actual authorization. A real engagement needs clearly identified targets, responsible parties, dates, and applicable contractual terms.

## 8. Cyber Ethics and Professional Responsibility

Cyber ethics refers to the principles that guide responsible behavior when using computers, networks, applications, and information.

Technical ability does not automatically make someone an ethical professional. A person may know how to access a system but still have no right to do so.

### 8.1 Core principles

1. Respect authorization

Only test systems and perform activities covered by valid permission.

2. Protect privacy

Do not unnecessarily access, copy, store, or disclose personal or confidential information.

3. Minimize harm

Prefer controlled, non-destructive tests. Avoid actions that could interrupt services, corrupt data, or affect users.

4. Maintain confidentiality

Security findings may reveal serious weaknesses. Share them only with the people authorized to receive them.

5. Maintain integrity

Do not alter logs, falsify evidence, exaggerate findings, or misrepresent what the testing proved.

6. Be honest

If a test fails, a result is uncertain, or a mistake occurs, report it accurately.

7. Take responsibility

Follow the agreed incident procedure, document relevant events, and cooperate with the organization to reduce harm.

### 8.2 An important distinction: Access versus permission

Imagine that a website has a page that is hidden from normal navigation but can be opened by entering its URL directly.

You discover the URL.

Does the fact that you can access the page mean you are allowed to access it?

No. Technical possibility is not the same as authorization.

This distinction is fundamental to cybersecurity. A weak lock does not give a stranger permission to enter the building.

### 8.3 The principle of least privilege

The principle of least privilege means giving a user or process only the permissions necessary to perform its assigned task.

For example, a tester examining a normal user account should not automatically receive administrator access if the test can be performed with ordinary permissions.

Least privilege reduces the damage that could result from mistakes, compromised accounts, or misuse.

It also applies to evidence storage: people who do not need access to sensitive testing data should not be given access to it.

## 9. Responsible Vulnerability Disclosure

### 9.1 What is a vulnerability disclosure?

Vulnerability disclosure is the process of communicating information about a security weakness to the organization or party responsible for addressing it.

Responsible disclosure means handling the information carefully to reduce risk to affected users and systems.

For example, suppose a researcher identifies a vulnerability in a company's login system. Instead of publishing sensitive technical details immediately, the researcher uses the company's designated security contact or vulnerability disclosure process.

The organization can then investigate, prepare a fix, and coordinate communication as appropriate.

### 9.2 Coordinated Vulnerability Disclosure (CVD)

Coordinated Vulnerability Disclosure, or CVD, is a process in which the researcher and the affected organization coordinate the handling and communication of a vulnerability.

A typical process is:

1. Identify a potential vulnerability.
    
2. Stop testing once sufficient evidence has been obtained.
    
3. Find the organization's official security contact or disclosure policy.
    
4. Submit a clear report with the minimum necessary evidence.
    
5. Cooperate with reasonable requests for clarification.
    
6. Allow the organization an appropriate opportunity to investigate and address the issue.
    
7. Coordinate any public disclosure according to the applicable policy and circumstances.
    

There is no single deadline that applies to every vulnerability or organization. Follow the published policy and any agreed process.

### 9.3 What should a vulnerability report contain?

A good disclosure report includes:

- Title: A concise description of the issue.
    
- Affected asset: The specific system or application.
    
- Summary: What the weakness is.
    
- Impact: What an attacker might be able to achieve.
    
- Reproduction steps: Safe, minimal steps that demonstrate the issue.
    
- Evidence: Relevant screenshots, requests, responses, or logs with sensitive information removed where possible.
    
- Recommendation: A practical way to fix the weakness.
    
- Contact information: A way for the organization to request clarification.
    

### 9.4 What should you avoid?

- Do not access or download unnecessary personal data.
    
- Do not threaten the organization or demand money in exchange for silence.
    
- Do not publish credentials, private records, or sensitive exploit details carelessly.
    
- Do not continue testing beyond authorization.
    
- Do not assume that a vulnerability disclosure policy authorizes every technique or target.
    

Remember: Discovering a vulnerability does not give the researcher ownership of the affected system or its data.

## 10. Practical Activity 1: Create a Scope Document

In this activity, you will act as a junior penetration tester. A fictional organization has hired you to assess its training portal.

No real website needs to be accessed. The purpose is to learn how to plan a security test before using any tools.

### Scenario

A fictional company called BrightLearn Academy has the following assets:

- A staging website used for testing new features.
    
- A live website used by real students.
    
- A third-party payment service.
    
- An internal staff portal.
    
- Two training accounts created specifically for security testing.
    

The company has authorized testing of the staging website only.

### Task A: Classify the assets

Complete the following table.

|Asset|In scope?|Reason|
|---|---|---|
|Staging website|Yes|Explicitly authorized|
|Live student website|No|Not included in authorization|
|Third-party payment service|No|Third-party system, not authorized|
|Internal staff portal|No|Not included in authorization|
|Approved training accounts|Yes, within the agreed test|Provided for the assessment|

### Task B: Define the permitted activities

For this exercise, assume the company permits non-destructive testing of the staging website.

Write down at least five rules. A suitable set would include:

1. Test only the specified staging website.
    
2. Use only the approved training accounts.
    
3. Do not perform denial-of-service tests.
    
4. Do not access or modify real student records.
    
5. Stop testing if the application becomes unstable.
    
6. Record findings without collecting unnecessary sensitive information.
    
7. Report findings to the designated contact.
    

### Task C: Handle a scope change

During reconnaissance, you discover that the staging website links to a separate administration portal.

What should you do?

Correct approach: Record the discovery, check the approved scope, and request authorization before testing the administration portal. A link from an approved target does not automatically make its destination an approved target.

### Expected outcome

By the end of this exercise, you should be able to distinguish between discovering an asset and having permission to test it.

## 11. Practical Activity 2: Write Rules of Engagement

Now prepare a short Rules of Engagement document for the same fictional assessment.

Use the following template as your starting point.

## Security Assessment: Rules of Engagement

Training exercise template

1. Objective

Identify security weaknesses in the approved staging web application and recommend appropriate fixes.

2. Authorized target

Only the staging website explicitly listed in the written authorization.

3. Testing period

The date and time window agreed upon by the organization and tester.

4. Permitted activities

Non-destructive reconnaissance, limited scanning, and approved web application security tests.

5. Prohibited activities

Denial-of-service testing, destructive testing, unauthorized access to third-party systems, and unnecessary access to sensitive data.

6. Accounts and data

Use designated training accounts and test data. Do not use real student credentials or personal records.

7. Evidence handling

Store evidence securely, restrict access, and remove sensitive information that is not needed to explain the finding.

8. Emergency procedure

Stop testing if service stability, data confidentiality, or system integrity may be affected. Notify the designated contact.

9. Reporting

Submit a report describing the findings, their impact, supporting evidence, and recommended remediation.

10. Closure

Confirm that testing has ended, deliver the report, and handle retained evidence according to the agreed requirements.

### Discussion

Why is it important to write these rules before testing?

Because people can have different assumptions. One person might believe that scanning is harmless, while a system administrator may consider unexpected traffic a potential incident. Written rules reduce these misunderstandings and establish a clear process for responding to problems.

## 12. Practical Activity 3: Decide What an Ethical Hacker Should Do

Read each situation and decide on the correct response.

### Situation 1: You find an open port

You are authorized to scan a training server. The scan identifies an open port that was not mentioned in the original asset inventory.

Correct response: Record the finding and investigate only within the approved scope and permitted techniques. If the port belongs to an unexpected system or testing it would exceed the agreed limits, seek clarification.

An open port alone does not prove that a vulnerability exists.

### Situation 2: You find real customer information

While validating an access-control weakness in an approved test environment, you unexpectedly see personal information that appears to belong to real customers.

Correct response: Stop the test that exposed the information, avoid accessing more records, preserve only the minimum necessary evidence, and notify the designated contact through the agreed procedure.

Do not continue browsing the records to determine how much information is exposed.

### Situation 3: A manager asks you to test another company's server

Your manager asks you to test a vendor's server because the company works closely with that vendor.

Correct response: Obtain appropriate authorization covering the vendor's system before testing. A business relationship does not automatically grant permission to test another organization's infrastructure.

### Situation 4: The website becomes unavailable

During an authorized scan, the staging website stops responding.

Correct response: Pause or stop the test according to the Rules of Engagement, notify the designated contact, and help investigate the situation through the agreed procedure.

Do not automatically restart aggressive scanning to see whether the website comes back.

### Situation 5: You discover a vulnerability outside the scope

You find a likely security flaw in a separate system linked from the approved website.

Correct response: Do not exploit the issue. Record the discovery appropriately and seek authorization or follow the relevant disclosure process.

### Situation 6: Your test produces no vulnerability

You complete the agreed tests and find no confirmed vulnerabilities.

Correct response: Report the tests performed, the limitations, and the results accurately. Do not invent a finding simply to make the report look impressive.

A security assessment can be valuable even when no vulnerabilities are confirmed. However, a clean result does not prove that the system is completely secure.

## 13. Important Terms to Remember

|Term|Simple meaning|
|---|---|
|Ethical hacking|Authorized security testing intended to improve security|
|Methodology|An organized process for performing a task|
|Authorization|Permission to perform specified security activities|
|Scope|The systems and activities included in an assessment|
|In-scope|Included in the approved testing boundaries|
|Out-of-scope|Excluded or not covered by the authorization|
|Rules of Engagement (RoE)|Agreed instructions for how testing must be performed|
|Reconnaissance|Gathering information about a target|
|Attack surface|Points through which a system could potentially be accessed or affected|
|Vulnerability|A weakness that could be exploited or otherwise cause harm|
|Validation|Checking whether a suspected vulnerability is genuine|
|Remediation|Fixing a vulnerability or reducing its risk|
|Retesting|Checking whether a fix works|
|Responsible disclosure|Communicating vulnerabilities in a way that reduces harm|
|Coordinated Vulnerability Disclosure (CVD)|Coordinating vulnerability handling between relevant parties|
|Least privilege|Giving users and processes only the permissions they need|
|Scope creep|Work expanding beyond the originally agreed boundaries|
|Stop condition|A situation requiring testing to pause or stop|

## 14. Quick Assessment: Test Your Understanding

Answer these questions without looking at the notes first.

## Session 3 Quiz

0 of 8 answered

1. What must happen before an ethical hacker begins testing a company's systems?

Install a vulnerability scanner

Obtain appropriate authorization and agree on scope

Find an open port

Collect employee information

2. A company authorizes testing of its staging website. Can you automatically test its payment provider?

Yes, because it is linked to the website

Yes, if the provider uses HTTPS

No, not without appropriate authorization

Yes, if the test is quick

3. What is the main difference between scope and Rules of Engagement?

They mean exactly the same thing

Scope defines what is included; Rules of Engagement explain how testing is conducted

Scope applies only to Linux

Rules of Engagement are only for reporting

4. What should you do if testing makes an application unstable?

Increase scan speed

Continue until the cause becomes obvious

Pause or stop according to the agreed procedure and notify the contact

Delete the logs

5. What is responsible vulnerability disclosure intended to achieve?

Publish all details immediately

Help the responsible organization address a weakness while reducing harm

Obtain administrator access

Avoid documenting evidence

6. What does least privilege mean?

Give everyone administrator access

Give users and processes only the permissions they need

Disable every user account

Allow access without passwords

7. Does finding an open port automatically prove a vulnerability exists?

Yes, every open port is dangerous

No, the service and its configuration need further assessment

Yes, if the port number is familiar

No, because ports can never be vulnerable

8. What should a tester do when discovering a system outside the approved scope?

Test it because it belongs to the same company

Try one exploit and then decide

Seek clarification and appropriate authorization before testing

Ignore the scope document

Check answers

## 15. Homework Assignment

Complete these questions in your notebook.

1. Define ethical hacking and explain why authorization is necessary.
    
2. Explain the difference between scope and Rules of Engagement with an example.
    
3. Write five items that should appear in a scope document.
    
4. What is scope creep? Explain using a website security assessment.
    
5. Describe five principles of cyber ethics.
    
6. Explain responsible vulnerability disclosure and list the steps involved.
    
7. What should an ethical hacker do after accidentally discovering sensitive customer information?
    
8. Create a one-page scope document and a one-page Rules of Engagement document for a fictional college website.
    

### Practical submission

Submit the following:

- A table of in-scope and out-of-scope assets.
    
- A written list of permitted and prohibited testing activities.
    
- Three stop conditions.
    
- A short sample vulnerability report containing a title, description, impact, evidence requirements, and recommended fix.
    

Use fictional systems and data for this assignment. No external security testing is required.

## 16. Session Summary

By the end of Session 3, you should understand that ethical hacking is a controlled, authorized process rather than random experimentation with security tools.

The most important principles are:

1. Obtain authorization before testing.
    
2. Understand the scope and respect its boundaries.
    
3. Follow the Rules of Engagement.
    
4. Minimize harm and protect sensitive information.
    
5. Validate findings carefully and report them honestly.
    
6. Disclose vulnerabilities responsibly.
    
7. Retest fixes and document the results.
    

Keep this final rule in mind throughout the course:

> If you do not have permission to test it, do not test it. If you discover a weakness, prove only what is necessary, protect the evidence, and report it responsibly.

