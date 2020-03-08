const fs = require('fs'),
Importer = require('./services/importer');



const pathToImport = './dataImport/toImport.json';

const importer = new Importer();



importer.import(pathToImport);
importer.importSync(pathToImport);


