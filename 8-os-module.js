//OS Module

const os = require('os');
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem() / 1024 ** 3,
  freeMem: os.freemem() / 1024 ** 3,
  version: os.version(),
  platform: os.platform(),
  arch: os.arch(),
  uptime: os.uptime() / 3600,
}

console.log(currentOS);
const user = os.userInfo();
const constants = os.constants;

console.log(JSON.stringify(constants));

console.log(`Network Interfaces: ${JSON.stringify(os.networkInterfaces())}`);
console.log(`Hello ${user.username}!`);
console.log(user);
console.log(`cpu count: ${JSON.stringify(os.cpus())}`);