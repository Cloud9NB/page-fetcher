const args1 = process.argv.slice(2, 3);
const request = require('request');
const fs = require('fs')

request(args[0], (error, response, body) => {
  fs.writeFile(args[1]. body, error => {
    if (error) {
      console.log(`Failed to write to localPaths: ${args[1]}`);
    } else {
      console.log(`Donwloaded and saved ${body.length} bytes to ${args[1]}`);
    }
  })
});