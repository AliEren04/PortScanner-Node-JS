//Installed node-port-scanner find-port package and used and defining it here
const portScanner = require("node-port-scanner");
const portFinder = require("isopen");
//Defining Prompt Package
const prompt = require("prompt-sync")();

//PortScanner Welcomer
console.log(
  "[Welcome to an Another Simple PortScanner Written With Node and by AliEren04]"
);
console.log(
  "[This port scanner have capability of scanning local common and remote common ports and also all ports available in local]"
);

//All functions to scan local common to remote common and all local ports
const scanLocalCommon = () => {
  portScanner("127.0.0.1", [21, 22, 23, 25, 80, 110, 123, 443])
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.error(error);
    });
};

const scanRemoteCommon = () => {
  let hostUrl = prompt(
    "[Enter the host address you want to scan for example, www.github.com]" +
      " " +
      "=>" +
      " "
  );

  portScanner(hostUrl, [21, 22, 23, 25, 80, 110, 123, 443])
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.error(error);
    });
};

async function checkAllLocalPorts() {
  const allPorts = portScanner("127.0.0.1", []);
  console.log(await allPorts);
}

const rangeScanning = () => {
  let rangeHost = prompt(
    "Please Enter the Hostname or Ip Address" + " " + "=>" + " "
  );
  let rangeStartPort = prompt("Please Enter the Start port" + " " + "=>" + " ");
  let rangeEndPort = prompt("Please Enter the End port" + " " + "=>" + " ");

  portFinder(
    rangeHost,
    `${rangeStartPort}-${rangeEndPort}`,
    function (response) {
      console.log(response);
    }
  );
};

//making a question to ask user to select a scan type
//Conditions to scan which port depends on user input
console.log("[Enter 1 to Scan common local ports]");
console.log("[Enter 2 to Scan common remote ports]");
console.log("[Enter 3 to Scan All Local Ports Available]");
console.log(
  "[Enter 4 to Define a IP adress and scan range of ports you selected in that IP address]"
);
process.stdin.setEncoding("utf-8");
let scanQuestion;
process.stdin.on("readable", function () {
  scanQuestion = process.stdin.read();
  if (scanQuestion == 1) {
    scanLocalCommon();
  } else if (scanQuestion == 2) {
    scanRemoteCommon();
  } else if (scanQuestion == 3) {
    checkAllLocalPorts();
  } else if (scanQuestion == 4) {
    rangeScanning();
  } else if (scanQuestion == null) {
    process.exit(1);
  }
});
