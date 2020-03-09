const DirWatcher = require('./services/dirwatcher'),
  pathToData = './data',
  delay = 1000;


const dirwatcher = new DirWatcher();

dirwatcher.watch(pathToData, delay);
