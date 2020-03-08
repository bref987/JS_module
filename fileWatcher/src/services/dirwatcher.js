const chokidar = require('chokidar'),
            fs = require('fs'),
      Importer = require('./importer');

const log = './log/log.json',
 toImport = './dataImport/toImport.json';

const importer = new Importer();

class DirWatcher {

	verifyJson(json) {
		try {
				if (fs.existsSync(json) || !fs.existsSync(json)) {
					fs.writeFileSync(json, JSON.stringify([]));
			  }
		} catch {
			fs.writeFileSync(json, JSON.stringify([]));
		}
	}

	watch(pathToData, delay) {

		const watcher = chokidar.watch(pathToData, {persistent: true}), 
		     arrayLog = [],
		    setImport = new Set();

		function addToLog(status) {
			arrayLog.push(status);
			
			setTimeout(function(){
				fs.writeFileSync(log, JSON.stringify(arrayLog, null, '\t'));
			}, delay);
		}

		function addToImport(path) {
			setImport.add(path);

			fs.writeFileSync(toImport, JSON.stringify(Array.from(setImport), null, '\t'));
		}

		watcher
		  .on('add', pathToData => 
		  	addToLog(`[${new Date().toLocaleString()}] File ./${pathToData} has been added`))
		  .on('change', pathToData => 
		  	addToLog(`[${new Date().toLocaleString()}] File ./${pathToData} has been changed`))
		  .on('change', (pathToData, stats) => {
  				if (stats) {
  					addToImport(`./${pathToData}`);
  				}
  				//importer.import();
				})
		  .on('unlink', pathToData => 
		  	addToLog(`[${new Date().toLocaleString()}] File ./${pathToData} has been removed`));
	  	}
}


module.exports = DirWatcher;
