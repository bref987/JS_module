const Observer = require('./services/observer');

const observer = new Observer();

const folder = './data';

observer.watchFile(folder);
