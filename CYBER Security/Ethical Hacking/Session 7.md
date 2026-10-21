
## 1. Today's Mission: Investigate a Linux Machine

Imagine that a Linux server is behaving strangely. It is running slowly, a web application is not responding, and the administrator suspects that a service has failed.

You are asked to investigate.

You should not immediately restart everything or kill random processes. First, you need evidence.
We will work through a series of practical missions using Linux commands.

Safety rule: These exercises inspect your own computer. Do not terminate unfamiliar system processes, disable services, or change network settings on a machine you depend on without understanding the consequences.

## 2. Mission 1: Investigate Running Processes

### 2.1 What is a process?

A process is a running instance of a program.

For example, when you open a browser, the browser creates one or more processes. A terminal command also runs as a process while it executes.

Every process normally has a PID, or Process ID, which identifies it while it exists.

Processes also have owners, resource usage, and relationships with other processes.

Why does this matter in cybersecurity?

An investigator may need to identify a program that is consuming excessive resources, running under an unexpected account, or behaving differently from what is expected.

A process that looks unfamiliar is not automatically malicious. You must investigate its name, owner, executable, parent process, and behavior before drawing conclusions.

### 2.2 Practical: List running processes

Run:

```
ps aux
```

`ps` displays process information.

The options in `ps aux` request a broad list of processes across users, with details about CPU and memory usage. This is a commonly used Linux form, though `ps` has several different option styles.

Look at these columns:

|Column|Meaning|
|---|---|
|`USER`|Account associated with the process|
|`PID`|Process ID|
|`%CPU`|CPU usage measure|
|`%MEM`|Memory usage measure|
|`STAT`|Process state|
|`COMMAND`|Command associated with the process|

Now narrow the output to processes associated with your own account:

```
ps -u "$USER"
```

This is useful when you want to inspect the programs running under your user account rather than the entire system.

### 2.3 Watch processes in real time

Run:

```
top
```

`top` provides a continuously updated view of processes and system resource usage.

Look for:

- Processes using unusually high CPU.
- Processes consuming significant memory.
- The total system load.
- Whether the system has available memory.


Press `q` to exit.

A high CPU percentage is not proof of malware. A software update, browser tab, video encoding task, or compilation can consume substantial resources legitimately.

### 2.4 A more focused investigation

Run:

```
ps -eo pid,ppid,user,%cpu,%mem,stat,comm --sort=-%cpu
```

Let's break it down:

- `-e` selects processes across the system.
- `-o` specifies the output columns.
- `pid` is the process ID.
- `ppid` is the parent process ID.
- `user` is the process owner.
- `%cpu` and `%mem` display CPU and memory usage measures.
- `stat` shows the process state.
- `comm` shows the command name.
- `--sort=-%cpu` sorts by CPU usage, highest first.


A parent process is a process that started another process. The PPID helps you investigate how processes relate to one another.

## 3. Mission 2: Understand and Investigate System Services

### 3.1 What is a service?

A service is a program or function that provides an ongoing capability to a system or other applications. Examples include network services, scheduled jobs, printing, and remote administration.

Many services run in the background without an open terminal window. A background process that provides a service is often called a daemon. On Linux, daemon names sometimes end in `d`, such as `sshd`, the OpenSSH server daemon.

A service and a process are related, but they are not the same thing:

- A process is a running instance of a program.
- A service is a managed capability or unit that can be started, stopped, monitored, or configured. It may involve one or more processes.

For example, the SSH service may be managed by the system even when it is not currently running.

### 3.2 What is `systemd`?

Many Linux distributions use `systemd` as their system and service manager. It starts and supervises system services and can also manage other system units.

The `systemctl` command is used to interact with `systemd`.

If your distribution uses a different service manager, some commands below may not work exactly as shown.

### 3.3 Practical: Check whether a service is running

Run:

```
systemctl --type=service --state=running
```

This lists services that `systemd` currently considers to be running.

You may see services for networking, audio, login management, or other system functions.

Now inspect a specific service:

```
systemctl status ssh
```

On some distributions, the service is called `sshd` instead of `ssh`. If the first command says the unit does not exist, try:

```
systemctl status sshd
```

If neither exists, that is not necessarily a problem. The SSH server may simply not be installed.

### 3.4 Understand service status

The output of `systemctl status` may include:

- Loaded: Whether the service definition was found and loaded.
    
- Active: The service's current state.
    
- Main PID: The primary process associated with the service, when applicable.
    
- Logs: Recent messages associated with the service.
    

Common states include:

- `active (running)`: The service is running.
    
- `inactive (dead)`: The service is not currently running.
    
- `failed`: The service failed or was marked as failed.
    
- `active (exited)`: The service's startup action completed, but it does not have a continuously running main process. This can be normal for some units.
    

Do not assume that `inactive` means something is broken. A service that is not required may correctly remain inactive.

### 3.5 Inspect a service without changing it

Try:

```
systemctl is-active NetworkManager
```

This asks whether the `NetworkManager` service is active. It is commonly used to manage network connections on desktop Linux systems, although not every distribution uses it.

Then try:

```
systemctl is-enabled NetworkManager
```

This checks whether the service is configured to start automatically under its applicable systemd configuration.

Notice the distinction:

- `is-active` checks its current state.
- `is-enabled` checks whether it is configured to start automatically.

A service can be enabled but currently stopped, or active without being enabled for automatic startup.

### 3.6 Security investigation: Should every service be running?

No. Every running service can provide functionality, but it may also introduce a potential attack surface.

For example, a remote administration service may be necessary on a managed server but unnecessary on a standalone desktop.

The correct approach is to determine:

1. What the service does.
2. Why it is installed.
3. Which network interfaces or resources it uses.
4. Who is allowed to access it.
5. Whether it needs to run on this machine.


Do not disable a service merely because its name is unfamiliar. Identify its purpose and understand the impact first.

## 4. Mission 3: Investigate System Logs

### 4.1 What is a log?

A log is a record of events produced by an operating system, application, or service.

Logs can help answer questions such as:

- When did a service fail?
- Did a login attempt succeed or fail?
- Did a program report an error?
- Did a network-related event occur?
- What happened shortly before a problem began?

Logs are valuable for troubleshooting and cybersecurity investigations. However, they may contain usernames, IP addresses, or other sensitive information, so they should be handled appropriately.

### 4.2 What is the system journal?

On systems using `systemd`, the `systemd-journald` service collects and stores system and service log records in the system journal.

The `journalctl` command is used to query those records.

Run:

```
journalctl -n 20 --no-pager
```

This displays the latest 20 journal entries without opening an interactive viewer.

Understand the options:

- `journalctl` queries the system journal.
    
- `-n 20` requests the latest 20 entries.
    
- `--no-pager` prints the output directly instead of opening a pager.
    

A pager is a program that lets you browse longer output a screen at a time. Some pagers use keys such as `q` to exit.

Depending on your permissions and system configuration, you may see only some log entries.

### 4.3 Inspect logs for one service

If the NetworkManager service exists, run:

```
journalctl -u NetworkManager -n 20 --no-pager
```

The `-u` option filters entries by a systemd unit.

This command asks for the most recent 20 journal entries associated with NetworkManager.

If you are investigating SSH, you can try:

```
journalctl -u ssh -n 20 --no-pager
```

If the service is named `sshd`, substitute that name.

### 4.4 Filter logs by time

To view entries from the current boot, use:

```
journalctl -b -n 30 --no-pager
```

The `-b` option limits the view to the current boot by default.

A boot is the process of starting the operating system and initializing its components.

To inspect entries from the past hour, try:

```
journalctl --since "1 hour ago" --no-pager
```

The journal supports time expressions such as this. The available records depend on the system's journal configuration and retention.

### 4.5 What if the command shows an access error?

Some journal records are restricted to administrators or users in authorized groups.

You can try:

```
sudo journalctl -n 20 --no-pager
```

Use `sudo` only if you are authorized to access the additional records. You do not need elevated privileges for every log query.

### 4.6 Practical investigation: Find a service failure

Choose a service that exists on your system. Check its status:

```
systemctl status NetworkManager
```

Then inspect its recent logs:

```
journalctl -u NetworkManager -n 30 --no-pager
```

Look for messages containing words such as `error`, `failed`, `timeout`, or `denied`.

These words are clues, not automatic proof of a security incident. Read the surrounding entries to understand the context.

### Student challenge

Find one log entry that contains useful information about a service or system event.

Record:

1. The time of the event.
2. The service or component involved.
3. What the message says.
4. Whether it indicates an error, normal operation, or something requiring further investigation.

If there are no errors, record a normal event. Students should learn to interpret evidence, not manufacture a failure to make the exercise interesting.

## 5. Mission 4: Diagnose Network Connectivity

Now we move from internal system activity to network communication.

Imagine that a website is not loading. The cause could be a disconnected network interface, a missing route, a DNS problem, a firewall, or an unavailable server.

Instead of guessing, we will investigate one layer at a time.

### 5.1 What is an IP address?

An IP address identifies a network interface for communication using the Internet Protocol.

There are two major versions:

- IPv4: Uses 32-bit addresses, commonly written as four decimal numbers, such as `192.168.1.10`.
    
- IPv6: Uses 128-bit addresses, commonly written as hexadecimal groups separated by colons.
    

An IP address may be private or public, depending on its range and use. Private addresses are commonly used within local networks and are not directly routed across the public internet.

### 5.2 Inspect your network interfaces

Run:

```
ip addr
```

This displays network interfaces and their assigned addresses.

Look for:

- The interface name.
    
- Whether the interface is up.
    
- Any assigned IPv4 or IPv6 addresses.
    

An interface is a connection point for networking, such as Wi-Fi, Ethernet, or a virtual network adapter.

An interface being up does not prove that internet access is working. It only tells you part of the story.

### 5.3 Inspect the routing table

Run:

```
ip route
```

A route tells the operating system where to send network traffic.

You may see a line beginning with:

```
default via 192.168.1.1
```

This is an illustrative example. It indicates that the computer uses `192.168.1.1` as its default next hop for traffic without a more specific route.

That next hop is commonly your router or gateway.

If the system has no appropriate route, it may be unable to reach the intended destination even if its network interface is up.

### 5.4 Test basic connectivity using `ping`

Run:

```
ping -c 4 1.1.1.1
```

This sends four ICMP echo requests to the IP address `1.1.1.1`.

What is ICMP? Internet Control Message Protocol is used for network control and diagnostic messages. The `ping` utility uses ICMP echo requests and replies to test reachability.

Options:

- `-c` sets the number of requests.
    
- `4` is the number of requests in this example.
    

Interpret the result carefully:

- Replies suggest that the destination is reachable through the path available to you.
    
- Packet loss may indicate connectivity problems, filtering, congestion, or a destination that does not respond.
    
- No reply does not conclusively prove the destination is down. ICMP may be filtered.
    

Only perform diagnostic tests against appropriate destinations and within applicable network policies.

### 5.5 What is DNS?

DNS (Domain Name System) translates domain names, such as `example.com`, into records that systems use to locate services.

Without working name resolution, a computer may have a functioning network connection but fail to locate a website by its domain name.

Try:

```
getent hosts example.com
```

This asks the system's configured name-service mechanisms to look up the hostname.

If an address is returned, name resolution succeeded through that mechanism. The exact result may vary due to DNS configuration, caching, or address selection.

If the command returns nothing, further investigation is needed. It does not automatically prove that DNS is the only problem.

### 5.6 Compare IP connectivity with name resolution

Run:

```
ping -c 4 1.1.1.1
```

Then:

```
getent hosts example.com
```

Think about these possible results:

|IP connectivity|Name resolution|Possible interpretation|
|---|---|---|
|Works|Works|Basic connectivity and hostname lookup both appear functional|
|Works|Fails|DNS or system name-resolution configuration may need investigation|
|Fails|Works|Name resolution works, but connectivity to the tested IP may be blocked or unavailable|
|Fails|Fails|The problem may involve the network, routing, DNS, or multiple issues|

These are diagnostic clues, not absolute conclusions.

### 5.7 Inspect the DNS configuration

On many Linux systems, this command shows the configured resolver information:

```
cat /etc/resolv.conf
```

A DNS resolver is the component that obtains answers to DNS queries, often by contacting configured DNS servers or using a local resolver service.

The file may contain one or more `nameserver` entries. On systems using a local stub resolver, it may show a loopback address rather than the upstream DNS server.

Do not edit this file casually. On many distributions, it is generated or managed by networking software.

### Student challenge: Diagnose the problem

Suppose a student can reach a known IP address, but `getent hosts example.com` returns no result.

Write down two possible causes and one additional check you could perform.

The objective is to reason from the evidence, not immediately change DNS settings or restart networking.

## 6. Mission 5: Check Whether a Website Is Responding

An IP address may be reachable while a web application is unavailable. We need to investigate the application layer as well.

### 6.1 What is HTTP?

HTTP (Hypertext Transfer Protocol) is a protocol used by clients and servers to exchange web requests and responses.

HTTPS is HTTP protected by TLS, which provides encryption and server authentication when correctly configured.

When you open a website, your browser sends a request and receives a response. That response includes a status code and may contain headers and a body.

### 6.2 What is `curl`?

`curl` is a command-line tool for making requests to URLs and transferring data using supported protocols, including HTTP and HTTPS.

Check whether it is available:

```
curl --version
```

Now make a request to a public test URL:

```
curl -I https://example.com
```

The `-I` option requests the response headers without downloading the normal response body, using an HTTP HEAD request.

You might see output similar to:

```
HTTP/2 200
content-type: text/html
```

This is illustrative. The actual status, protocol, and headers can vary.

### 6.3 Understand HTTP status codes

|Code|Meaning|
|---|---|
|`200`|The request succeeded|
|`301` or `302`|The server indicates a redirect|
|`400`|The request was invalid|
|`401`|Authentication is required or has failed|
|`403`|Access is forbidden|
|`404`|The requested resource was not found|
|`500`|The server encountered an internal error|
|`503`|The service is currently unavailable|

A status code is only one piece of evidence. For example, `403` does not automatically indicate a vulnerability, and `200` does not prove that an application is secure.

### 6.4 Investigate a response more closely

Run:

```
curl -sS -D - -o /dev/null https://example.com
```

Let's decode it:

- `-s` reduces progress output.
    
- `-S` still shows errors if they occur.
    
- `-D -` prints response headers to standard output.
    
- `-o /dev/null` discards the response body instead of saving it to a file.
    

The path `/dev/null` is a special device that discards data written to it. It is useful when you care about headers but do not need the body.

This command is a useful diagnostic when you want to examine server response headers without printing the entire webpage.

### 6.5 What if `curl` fails?

Possible causes include:

- No working network connection.
    
- DNS resolution failure.
    
- A server that is unavailable.
    
- A firewall or proxy blocking the request.
    
- A TLS certificate or protocol problem.
    

Read the error message before deciding what to do. Avoid disabling certificate verification simply to make a request succeed, especially when handling credentials or sensitive data.

### Student challenge

Run:

```
curl -I https://example.com
```

Record:

1. The HTTP status code.
    
2. The content type, if provided.
    
3. Whether the server redirected the request.
    
4. One reason the response does not prove the website is secure.
    

## 7. Mission 6: Investigate Listening Network Ports

Now we combine process and network investigation.

### 7.1 What is a socket?

A socket is an endpoint used for communication. Network sockets are associated with protocols and addressing information, such as IP addresses and port numbers.

A listening socket is an endpoint waiting for incoming communication, depending on the protocol and socket type.

A server application may create a listening socket so that other computers or local applications can connect to it.

### 7.2 Inspect listening sockets

Run:

```
ss -tuln
```

This command lists listening TCP and UDP sockets using numeric addresses and ports.

You learned the basics of this command in Session 4. This time, we will interpret the results alongside processes and services.

Example output:

```
Netid  State   Local Address:Port
tcp    LISTEN  127.0.0.1:631
tcp    LISTEN  0.0.0.0:8080
```

These are examples, not expected output from your computer.

Interpretation:

- `127.0.0.1:631` is bound to the IPv4 loopback address, so it normally accepts connections from the local machine.
    
- `0.0.0.0:8080` indicates a listener bound to all applicable IPv4 local addresses.
    

An open listening port is not automatically a vulnerability. You must identify the service, determine why it is listening, and understand whether its exposure is appropriate.

### 7.3 Show the processes associated with sockets

Try:

```
sudo ss -tulpn
```

The `-p` option requests process information associated with sockets. Administrator privileges may be needed to see details for processes owned by other users.

Additional letters:

- `-t`: TCP.
    
- `-u`: UDP.
    
- `-l`: listening.
    
- `-n`: numeric output.
    
- `-p`: process information.
    

This may help you connect a port to a process name or PID.

For example, if you discover an unexpected listening port, you can investigate which process is associated with it rather than guessing from the port number alone.

### 7.4 Connect the process to its service

Suppose the output identifies a process named `sshd`.

You can inspect the process:

```
ps -C sshd -o pid,ppid,user,stat,comm
```

The `-C` option selects processes by command name, while `-o` specifies the displayed columns.

Then inspect the service if it is managed by systemd:

```
systemctl status sshd
```

If your distribution names the unit `ssh`, use that name instead.

This creates a simple investigation chain:

1. Identify a listening port.
    
2. Identify the process associated with the socket.
    
3. Check the process owner.
    
4. Determine which service manages it.
    
5. Inspect its logs if needed.
    
6. Decide whether the service is expected and appropriately exposed.
    

Important: Do not terminate or disable a process just because you do not recognize it. Establish what it does and whether it is required first.

### Student challenge

Find one listening socket on your machine, if any exist.

Record:

- The local address and port.
    
- The protocol.
    
- The process name, if visible.
    
- The service name, if identifiable.
    
- One reason the service might legitimately need to listen.
    

If no sockets are visible, record that result and explain the limits of the command you used.

## 8. Mission 7: Build a Basic Linux Health and Security Report

We have now investigated processes, services, logs, connectivity, HTTP responses, and listening sockets. Let's combine the observations into a report.

This is not a full security audit. It is a small diagnostic snapshot that helps you document what you observed at a particular time.

### 8.1 What is a diagnostic snapshot?

A diagnostic snapshot is a record of system information collected at a particular point in time. It can be used to compare results later or help explain why a problem occurred.

For this exercise, collect:

- The current time.
    
- The current user.
    
- Running processes.
    
- Active services.
    
- Recent system logs.
    
- Network routes.
    
- Listening sockets.
    

Run the following block:

```
mkdir -p ~/cyber-lab/session-7-8/reports

{
  echo "=== LINUX DIAGNOSTIC REPORT ==="
  date -Is

  echo
  echo "=== CURRENT USER ==="
  whoami

  echo
  echo "=== TOP CPU PROCESSES ==="
  ps -eo pid,user,%cpu,%mem,comm --sort=-%cpu | head -n 10

  echo
  echo "=== RUNNING SERVICES ==="
  systemctl --type=service --state=running --no-pager

  echo
  echo "=== RECENT SYSTEM LOGS ==="
  journalctl -n 15 --no-pager

  echo
  echo "=== ROUTING TABLE ==="
  ip route

  echo
  echo "=== LISTENING SOCKETS ==="
  ss -tuln
} > ~/cyber-lab/session-7-8/reports/diagnostic-report.txt 2>&1
```

### 8.2 Understand what is new in this command

We have used several commands individually, but this block introduces an important shell feature: combining commands into a repeatable workflow.

The curly braces `{ ... }` group commands together so their output can be redirected as one block.

The final part is:

```
2>&1
```

This combines standard error with standard output for the redirection.

Linux commands can produce two common output streams:

- Standard output (stdout): Normal command output.
    
- Standard error (stderr): Error messages and diagnostic output.
    

The file descriptor `1` represents standard output, while `2` represents standard error. `2>&1` redirects standard error to the same destination currently used by standard output.

This means that if a command produces an error, the error may be recorded in the report rather than appearing only on the terminal.

One limitation: the report contains a snapshot of the machine's state, not a continuous monitoring feed. The information can change immediately after collection.

### 8.3 Inspect the report

Run:

```
less ~/cyber-lab/session-7-8/reports/diagnostic-report.txt
```

`less` is a pager that lets you browse a long text file without printing the entire file at once.

Useful keys:

- `Space`: move forward a page.
    
- `b`: move backward a page.
    
- `/error`: search for the word `error`.
    
- `n`: move to the next search match.
    
- `q`: quit.
    

If your report contains an error, investigate it rather than automatically treating it as evidence of an attack.

### 8.4 Student investigation

Review the report and identify:

1. One process worth understanding.
    
2. One running service and its purpose.
    
3. One useful log message.
    
4. Whether a default route is present.
    
5. One listening socket, if present.
    
6. One issue that would require further investigation before you could call it a vulnerability.
    

Write a short conclusion using evidence from the report.

## 9. Scenario Challenge: The Server Is Slow

Imagine that a training server is responding slowly. The administrator asks you to investigate without restarting services or making configuration changes.

You have permission to inspect the server, its processes, logs, and network state.

### Your task

Use the tools learned today to investigate the situation.

## Investigation checklist

Inspect CPU and memory usage with top or ps.

Identify any unusually resource-intensive process.

Inspect the status of the relevant service.

Review recent logs for errors or timeouts.

Check the network interface and routing table.

Inspect listening sockets and identify relevant services.

Write down the evidence and possible explanations.

Recommend the next diagnostic step without making an unapproved change.

0 of 8 investigation steps completed

### Discussion questions

- If CPU usage is high, what evidence would help you identify the cause?
    
- If a service is inactive, how would you determine whether that is expected?
    
- If the routing table has no default route, what connectivity problems might occur?
    
- If a service listens on `0.0.0.0`, what should you investigate next?
    
- Why is restarting the service not always the best first step?
    

Expected lesson: A good investigator gathers evidence before changing the system. High CPU, an inactive service, and an open port are observations. They require context before you can conclude that something is broken or malicious.

## 10. Quick Assessment

Answer these questions after completing the practical exercises.

1. What is the difference between a process and a service?
    
2. What is a daemon, and why do some daemons run in the background?
    
3. What information can `ps aux` provide?
    
4. What is the purpose of `systemctl status`?
    
5. What is the difference between `active` and `enabled` for a systemd service?
    
6. What is a system log, and how can `journalctl` help during an investigation?
    
7. What does the `ip route` command show?
    
8. Why does a successful ping not prove that a website is working?
    
9. What does a listening socket tell you?
    
10. Why should you investigate an unfamiliar process before terminating it?
    

### Practical command test

Explain the purpose of each command and identify one situation in which you would use it.

```
ps aux
```

```
systemctl --type=service --state=running
```

```
journalctl -n 20 --no-pager
```

```
ip route
```

```
curl -I https://example.com
```

```
sudo ss -tulpn
```

## 11. Homework

Prepare a one-page Linux System Health and Security Observation Report.

Your report must include:

- A timestamp for when you collected the information.
    
- Two observations about running processes.
    
- One service and an explanation of its purpose.
    
- One relevant log entry, or a note that no relevant errors were found.
    
- Your network interface and routing observations.
    
- One listening socket, if present.
    
- A short explanation of anything that needs further investigation.
    
- One recommendation that does not assume an unconfirmed vulnerability is real.
    

Do not install unnecessary software, disable services, or terminate unfamiliar processes just to complete the assignment. The objective is to investigate and interpret, not to change things for the sake of activity.

## 12. Session Summary

Today, we moved from basic Linux commands to system-level investigation.

You learned how to:

- Inspect processes and resource usage using `ps` and `top`.
- Understand services, daemons, `systemd`, and `systemctl`.
- Read system and service logs using `journalctl`.
- Inspect network interfaces and routing using `ip`.
- Diagnose basic connectivity using `ping` and `getent`.
- Inspect HTTP responses using `curl`.
- Identify listening sockets and associated processes using `ss`.
- Combine diagnostic commands into a report.

The central lesson is simple: observe, collect evidence, interpret, and then decide what action is justified. That habit will matter far more when we begin active security testing.

Next in the syllabus: Linux security environment and lab setup, followed by reconnaissance and information gathering. We will begin moving toward security-specific tools rather than spending more sessions repeating general terminal operations.