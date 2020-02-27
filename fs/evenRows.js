const fs = require('fs');

function fileHandlerRead() {

  if (fs.existsSync('./data/data.txt')) {
    const outpoutDataArray = fs.readFileSync('./data/data.txt', 'utf8').split("\r\n"),
          outpoutDataString = outpoutDataArray
                  .filter(a => outpoutDataArray.indexOf(a) % 2 != 0)
                  .join(" ");

    console.log(outpoutDataString);
  } else {
    console.log("File doesn't exist");
  }
}

fileHandlerRead();
