// Here is a quick test on 'node-webvtt'

const webvtt = require('node-webvtt');
const fs = require('fs');
const path = require('path');

const testFolder = './vtt files/';

fs.readdirSync(testFolder).forEach(file => {
  var full = path.join(testFolder, file);
  var content = fs.readFileSync(full, 'utf8');
  try {
    const parsed = webvtt.parse(content);
  } catch (error) {
    var resolve = path.resolve(full);
    console.log(`Didn\'t pass test on file: ${resolve}`);
    console.log(error);
    console.log();
  }
});