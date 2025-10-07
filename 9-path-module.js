//PATH Module

const path = require('path');
console.log(path.sep);


const fillePath = path.join('/content', 'subfolder', 'test.txt');
console.log(fillePath);

const base = path.basename(fillePath);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);