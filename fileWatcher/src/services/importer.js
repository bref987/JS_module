const fs  = require('fs'),
  csv = require('csvtojson');


class Importer {

	import(pathToChange) {

		const pathes = JSON.parse(fs.readFileSync(pathToChange, 'utf8'));

		const jsonImports = pathes.map(path => {
      return Promise.resolve(
        csv()
					.fromFile(path)
      )
		});

		const promises = Promise.all(jsonImports)
														.then(responses => console.log(responses))
														.catch(error => console.error(error));
		return promises;
	}

	importSync(pathToChange) {
		const pathes = JSON.parse(fs.readFileSync(pathToChange, 'utf8'));

		pathes.map(path => {
			return csv()
				.fromFile(path)
				.then((jsonObj) => {
					console.log(jsonObj);
			})
		})
	}
}


module.exports = Importer;
