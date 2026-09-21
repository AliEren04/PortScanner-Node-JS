# PortScanner-Node-JS

A CLI port scanner built with Node.js. Scans local and remote hosts for open ports across multiple modes.

## Features

- **Local common port scan** — checks 127.0.0.1 against common ports (21, 22, 23, 25, 80, 110, 123, 443)
- **Remote common port scan** — same port list against any host/IP
- **Full local port scan** — enumerates all open ports on localhost
- **Custom range scan** — user-defined host + port range

## Installation

```bash
git clone <repo-url>
cd PortScanner-Node-JS
npm install   
```

## Usage

```bash
node index.js   
```


## Example
```
[Welcome to an Another Simple PortScanner Written With Node]
[This port scanner have capability of scanning local common and remote common ports and also all ports available in local]
[Enter 1 to Scan common local ports]
[Enter 2 to Scan common remote ports]
[Enter 3 to Scan All Local Ports Available]
[Enter 4 to Define a IP adress and scan range of ports you selected in that IP address]
```

## Dependencies

| Package | Purpose |
|---------|---------|
| [`node-port-scanner`](https://www.npmjs.com/package/node-port-scanner) | TCP port scanning |
| [`isopen`](https://www.npmjs.com/package/isopen) | Port range checking |
| [`prompt-sync`](https://www.npmjs.com/package/prompt-sync) | CLI user input |

