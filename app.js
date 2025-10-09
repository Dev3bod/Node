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

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
    } else if (req.url === '/about') {
        // BLOCKING CODE
        for(let i = 0; i < 1000; i++) {
            for(let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`);
            }
        res.end('Here is our short history');
    }
 } else {
        res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `);
    }


});

server.listen(5000, () => {
  console.log('Server is listening on port: 5000....');
});
    

