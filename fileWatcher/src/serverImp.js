const Importer = require('./services/importer'),
  toImport = './dataImport/toImport.json';

const importer = new Importer();


importer.import(toImport);
//importer.importSync(toImport);
