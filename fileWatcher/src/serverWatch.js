const chokidar = require('chokidar'),
            fs = require('fs'),
    DirWatcher = require('./services/dirwatcher');


const pathToData = './data',
      pathToJson = './log/log.json',
    pathToImport = './dataImport/toImport.json',
           delay = 1000;


const dirwatcher = new DirWatcher();

dirwatcher.verifyJson(pathToJson);
dirwatcher.verifyJson(pathToImport);

dirwatcher.watch(pathToData, delay);
