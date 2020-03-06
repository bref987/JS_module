const chokidar = require('chokidar');
//const fs = require('fs');


class Observer {
  watchFile(targetFolder) {
    const watcher = chokidar.watch(targetFolder, { persistent: true });
    //const pathToLog = './log/info.json'
    return watcher
      .on('add', targetFolder => console.log(`File ${targetFolder} has been added`))
      .on('change', targetFolder => console.log(`File ${targetFolder} has been changed`))
      .on('unlink', targetFolder => console.log(`File ${targetFolder} has been removed`));


  }
}

module.exports = Observer;
