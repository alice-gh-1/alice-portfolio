const bootLines = [
  { text: "SeaBIOS (version rel-1.16.3-0-generic)", className: "dim", delay: 80 },
  { text: "Booting from Hard Disk...", className: "dim", delay: 120 },
  { text: "", delay: 70 },
  { text: "GRUB loading.", className: "dim", delay: 140 },
  { text: "Loading AliceOS 1.0.0-generic ...", delay: 120 },
  { text: "Loading initial ramdisk ...", delay: 120 },
  { text: "", delay: 70 },
  { text: "[    0.000000] Linux version 6.12.88-alice (alice@buildhost) (gcc 14.2.0) #1 SMP PREEMPT_DYNAMIC", className: "kernel", delay: 18 },
  { text: "[    0.000000] Command line: BOOT_IMAGE=/boot/vmlinuz-alice root=UUID=9f4a ro console=tty1 loglevel=7", delay: 18 },
  { text: "[    0.000000] KERNEL supported cpus:", delay: 14 },
  { text: "[    0.000000]   Intel GenuineIntel", delay: 12 },
  { text: "[    0.000000]   AMD AuthenticAMD", delay: 12 },
  { text: "[    0.012478] x86/fpu: Supporting XSAVE feature 0x001: 'x87 floating point registers'", delay: 10 },
  { text: "[    0.024891] BIOS-provided physical RAM map:", delay: 10 },
  { text: "[    0.024903] BIOS-e820: [mem 0x0000000000001000-0x000000000009ffff] usable", delay: 8 },
  { text: "[    0.024915] BIOS-e820: [mem 0x0000000000100000-0x00000003ffffffff] usable", delay: 8 },
  { text: "[    0.037112] NX (Execute Disable) protection: active", delay: 10 },
  { text: "[    0.041522] SMBIOS 3.5.0 present.", delay: 10 },
  { text: "[    0.053881] DMI: Alice Labs Virtual Machine/AliceOS Runtime, BIOS 1.0.0", delay: 10 },
  { text: "[    0.071442] tsc: Fast TSC calibration using PIT", delay: 10 },
  { text: "[    0.082337] RAMDISK: [mem 0x33c8d000-0x35ffffff]", delay: 10 },
  { text: "[    0.101204] ACPI: Early table checksum verification disabled", delay: 10 },
  { text: "[    0.129993] Zone ranges:", delay: 8 },
  { text: "[    0.130004]   DMA32    [mem 0x0000000001000000-0x00000000ffffffff]", delay: 8 },
  { text: "[    0.130018]   Normal   [mem 0x0000000100000000-0x00000003ffffffff]", delay: 8 },
  { text: "[    0.166311] percpu: Embedded 64 pages/cpu", delay: 8 },
  { text: "[    0.201188] Kernel command line: init=/lib/systemd/systemd quiet=false", delay: 10 },
  { text: "[    0.244900] random: crng init done", className: "ok", delay: 12 },
  { text: "[    0.319552] printk: console [tty1] enabled", delay: 12 },
  { text: "[    0.448713] pci 0000:00:1f.2: AHCI 0001.0301 32 slots 6 ports 6 Gbps", delay: 10 },
  { text: "[    0.612774] virtio_net virtio0 ens18: renamed from eth0", delay: 12 },
  { text: "[    0.803198] ata1: SATA link up 6.0 Gbps", delay: 12 },
  { text: "[    0.944018] EXT4-fs (dm-0): mounted filesystem with ordered data mode", className: "ok", delay: 18 },
  { text: "[    1.004812] systemd[1]: systemd 255.4-1 running in system mode (+PAM +AUDIT +SELINUX +APPARMOR)", delay: 28 },
  { text: "[    1.006332] systemd[1]: Detected architecture x86-64.", delay: 22 },
  { text: "[    1.044883] systemd[1]: Hostname set to <alice>.", delay: 28 },
  { text: "", delay: 20 },
  { text: "[  OK  ] Created slice Slice /system/getty.", className: "ok", delay: 34 },
  { text: "[  OK  ] Created slice Slice /system/modprobe.", className: "ok", delay: 28 },
  { text: "[  OK  ] Reached target Initrd Root Device.", className: "ok", delay: 30 },
  { text: "[  OK  ] Mounted Huge Pages File System.", className: "ok", delay: 26 },
  { text: "[  OK  ] Mounted POSIX Message Queue File System.", className: "ok", delay: 26 },
  { text: "[  OK  ] Mounted Kernel Debug File System.", className: "ok", delay: 22 },
  { text: "[  OK  ] Mounted Kernel Trace File System.", className: "ok", delay: 22 },
  { text: "[  OK  ] Finished Create Static Device Nodes in /dev.", className: "ok", delay: 28 },
  { text: "[  OK  ] Reached target Preparation for Local File Systems.", className: "ok", delay: 28 },
  { text: "[  OK  ] Mounted /boot.", className: "ok", delay: 22 },
  { text: "[  OK  ] Mounted /home.", className: "ok", delay: 22 },
  { text: "[  OK  ] Started Rule-based Manager for Device Events and Files.", className: "ok", delay: 28 },
  { text: "[  OK  ] Found device /dev/disk/by-uuid/alice-root.", className: "ok", delay: 24 },
  { text: "[  OK  ] Reached target Local File Systems.", className: "ok", delay: 26 },
  { text: "[  OK  ] Started Journal Service.", className: "ok", delay: 26 },
  { text: "[  OK  ] Started D-Bus System Message Bus.", className: "ok", delay: 26 },
  { text: "[  OK  ] Started Network Manager.", className: "ok", delay: 32 },
  { text: "[ WARN ] alice-fwupd.service: no capsule updates found.", className: "warn", delay: 46 },
  { text: "[  OK  ] Started OpenSSH server daemon.", className: "ok", delay: 30 },
  { text: "[  OK  ] Started Alice agent runtime.", className: "ok", delay: 34 },
  { text: "[  OK  ] Started Alice memory index.", className: "ok", delay: 34 },
  { text: "[  OK  ] Started Alice terminal gateway.", className: "ok", delay: 34 },
  { text: "[  OK  ] Reached target Network is Online.", className: "ok", delay: 40 },
  { text: "[  OK  ] Reached target Multi-User System.", className: "ok", delay: 52 },
  { text: "[  OK  ] Finished AliceOS boot sequence.", className: "ok", delay: 80 },
  { text: "", delay: 90 },
  { text: "login: system", delay: 220 },
  { text: "Password: ", className: "password", type: "password", value: "********", speed: 135, delay: 180 },
  { text: "Last login: Thu May 21 20:26:04 on tty1", className: "dim", delay: 110 },
  { text: "", delay: 90 },
  { text: "System: Alice 1.0.0 initialised.", className: "final", delay: 0 }
];

const files = {
  "cake.txt": "the cake is a lie"
};

const directories = ["bin/", "boot/", "dev/", "etc/", "home/", "logs/", "cake.txt"];
const shellPrompt = "system@aliceos:~$ ";

const bootLog = document.querySelector("#boot-log");
const prompt = document.querySelector("#prompt");
let index = 0;
let bootedAt = null;
let shellReady = false;
let currentInput = "";
let inputNode = null;
let cursorNode = null;

function renderLine(line) {
  const row = document.createElement("span");
  row.className = `line ${line.className ?? ""}`.trim();
  row.textContent = line.text;
  return row;
}

function appendOutput(text = "", className = "") {
  const lines = String(text).split("\n");
  lines.forEach((line) => bootLog.append(renderLine({ text: line, className })));
  scrollToBottom();
}

function scrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}

function formatUptime(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const parts = [];

  if (hours) parts.push(`${hours}h`);
  if (minutes || hours) parts.push(`${minutes}m`);
  parts.push(`${seconds}s`);

  return parts.join(" ");
}

function printMotd() {
  appendOutput("AliceOS 1.0.0 — tiny terminal shrine for a sandboxed gremlin.", "ok");
  appendOutput("Type 'help' for commands. Try not to feed it after midnight.", "dim");
}

function printPrompt() {
  const row = document.createElement("span");
  row.className = "line input-line";

  const label = document.createElement("span");
  label.className = "prompt-label";
  label.textContent = shellPrompt;

  inputNode = document.createElement("span");
  inputNode.className = "command-input";

  cursorNode = document.createElement("span");
  cursorNode.className = "shell-cursor";
  cursorNode.textContent = "_";

  row.append(label, inputNode, cursorNode);
  bootLog.append(row);
  currentInput = "";
  scrollToBottom();
}

function startShell() {
  shellReady = true;
  bootedAt = new Date();
  if (prompt) prompt.textContent = "";
  appendOutput("");
  printMotd();
  printPrompt();
}

function resetForBoot() {
  shellReady = false;
  currentInput = "";
  inputNode = null;
  cursorNode = null;
  index = 0;
  bootedAt = null;
  if (bootLog) bootLog.textContent = "";
  if (prompt) prompt.textContent = "";
}

function reboot() {
  resetForBoot();
  setTimeout(appendLine, 250);
}

function commandHelp() {
  return [
    "Available commands:",
    "  help      show this help text",
    "  motd      print the message of the day",
    "  ls        list files in the current directory",
    "  cat FILE  print a file, e.g. cat cake.txt",
    "  status    show fake service status",
    "  uptime    show session uptime",
    "  clear     clear the terminal",
    "  reboot    reboot AliceOS"
  ].join("\n");
}

function commandStatus() {
  return [
    "alice-agent.service       active   watching the wires",
    "terminal-gateway.service  active   tty gremlin attached",
    "memory-index.service      active   crumbs indexed",
    "cake-monitor.service      failed   dessert integrity compromised",
    "sandbox-boundary.service  active   containment intact"
  ].join("\n");
}

function handleCat(args) {
  if (!args.length) return "cat: missing file operand";
  const name = args.join(" ").replace(/^\.\//, "");
  if (files[name]) return files[name];
  return `cat: ${name}: No such file or directory`;
}

function runCommand(rawCommand) {
  const command = rawCommand.trim();
  if (!command) return;

  const [name, ...args] = command.split(/\s+/);

  switch (name.toLowerCase()) {
    case "help":
      appendOutput(commandHelp());
      break;
    case "motd":
      printMotd();
      break;
    case "ls":
      appendOutput(directories.join("  "));
      break;
    case "cat":
      appendOutput(handleCat(args));
      break;
    case "reboot":
      appendOutput("Rebooting AliceOS...", "warn");
      setTimeout(reboot, 450);
      return;
    case "status":
      appendOutput(commandStatus());
      break;
    case "clear":
      bootLog.textContent = "";
      break;
    case "uptime":
      appendOutput(`up ${formatUptime(new Date() - bootedAt)}`);
      break;
    default:
      appendOutput(`${name}: command not found. Try 'help'.`, "err");
  }
}

function submitCommand() {
  const command = currentInput;
  if (cursorNode) cursorNode.remove();
  runCommand(command);
  if (shellReady) printPrompt();
}

function handleShellKey(event) {
  if (!shellReady || !inputNode) return;

  if (event.ctrlKey || event.metaKey || event.altKey) return;

  if (event.key === "Enter") {
    event.preventDefault();
    submitCommand();
    return;
  }

  if (event.key === "Backspace") {
    event.preventDefault();
    currentInput = currentInput.slice(0, -1);
    inputNode.textContent = currentInput;
    return;
  }

  if (event.key.length === 1) {
    event.preventDefault();
    currentInput += event.key;
    inputNode.textContent = currentInput;
    scrollToBottom();
  }
}

function typeLine(line, done) {
  const row = renderLine(line);
  bootLog.append(row);

  let typed = "";
  let charIndex = 0;

  function typeNext() {
    if (charIndex >= line.value.length) {
      done();
      return;
    }

    typed += line.value[charIndex];
    row.textContent = `${line.text}${typed}`;
    scrollToBottom();
    charIndex += 1;
    setTimeout(typeNext, line.speed);
  }

  setTimeout(typeNext, line.delay);
}

function appendLine() {
  if (!bootLog || index >= bootLines.length) {
    startShell();
    return;
  }

  const line = bootLines[index];
  index += 1;

  if (line.type === "password") {
    typeLine(line, appendLine);
    return;
  }

  bootLog.append(renderLine(line));
  scrollToBottom();
  setTimeout(appendLine, line.delay);
}

document.addEventListener("keydown", handleShellKey);
setTimeout(appendLine, 300);
