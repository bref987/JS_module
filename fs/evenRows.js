const fs = require('fs');

function fileHandlerRead() {
  let path = './data/data.txt';
  if (fs.existsSync(path)) {
    const outpoutDataArray = fs.readFileSync(path, 'utf8').split("\r\n"),
          outpoutDataString = outpoutDataArray
                  .filter(a => outpoutDataArray.indexOf(a) % 2 != 0)
                  .join(" ");

    console.log(outpoutDataString);
  }
}

fileHandlerRead();
