// Modules - Encapsulated code (only share minimum)
// CommonJS, every file is module (by default)

// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// const names = require('./4-names');
// const sayHi = require('./5-utils');
// const data = require('./6-alternative-flavor');
// const { uptime } = require('process');
// require('./7-mind-grenade');
// console.log(names);
// console.log(data);

// sayHi('Abdullah');
// sayHi('Omar');
// sayHi('Tameem');

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

