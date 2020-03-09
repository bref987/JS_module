const chokidar = require('chokidar'),
  fs = require('fs');

const log = './log/log.json',
 toImport = './dataImport/toImport.json';


class DirWatcher {

	verifyJson(json) {
		try {
				if (fs.existsSync(json) || !fs.existsSync(json)) {
					fs.writeFileSync(json, JSON.stringify([]));
        }
		} catch(er) {
			fs.writeFileSync(json, JSON.stringify([]));
		}
	}

	watch(pathToData, delay) {
    this.verifyJson(log);
    this.verifyJson(toImport);

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
        if (stats) addToImport(`./${pathToData}`);
        // possible to add importer.import(path) to continues import
			})
      .on('unlink', pathToData =>
        addToLog(`[${new Date().toLocaleString()}] File ./${pathToData} has been removed`));
    }
}


module.exports = DirWatcher;
