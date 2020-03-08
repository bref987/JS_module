const fs  = require('fs');
const csv = require('csvtojson');


class Importer {

	import(pathToChange) {
		
		const pathes = JSON.parse(fs.readFileSync(pathToChange, 'utf8'));

		const jsonImports = pathes.map(path => { 
			new Promise((resolve, reject) => resolve(
				csv()
					.fromFile(path)
					.then((jsonObj) => {
						return JSON.stringify(jsonObj);
				})
			)) 
		})
 
		const promises = Promise.all(jsonImports)
														.then(responses => responses)
														.catch(error => console.error(error));

		return promises;
	}

	importSync(pathToChange) {
		const pathes = JSON.parse(fs.readFileSync(pathToChange, 'utf8'));

		const jsonImports = pathes.map(path => {
			csv()
				.fromFile(path)
				.then((jsonObj) => {
					return JSON.stringify(jsonObj);
			})
		})
	}
}


module.exports = Importer;
