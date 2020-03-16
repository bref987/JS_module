const getDb = require('./getDb'),
	fs = require('fs'),
	pathToDb = './app/db/rAndM.json',
	pathToData = './data/characters.json';


function initDb() {
	if(fs.existsSync(pathToDb) || !fs.existsSync(pathToDb)) {
		fs.writeFileSync(pathToDb, JSON.stringify([]));
	}
	getDb.createDb();
}

function createObj(array) {
	let obj = {};

	if (array.every(a => typeof a === 'string')) {
		obj[array[0].trim()] = array[1].trim();

	} else if (array.every(a => Array.isArray(a))) {
		const keys = array[0].map(a  => a.trim());
		const values = array[1].map(a  => a.trim());

		keys.forEach(a => obj[a] = values[keys.indexOf(a)]);

	} else {
		obj = null;
	}

	return obj;
}

function searchBy(...args) {
	const arrayDb = JSON.parse(fs.readFileSync(pathToDb));
	fs.writeFileSync(pathToData, JSON.stringify(arrayDb, null, '\t'));

	let filteredData = JSON.parse(fs.readFileSync(pathToData));

	const objArg = createObj(args);

	try {
		Object.entries(objArg)
									.forEach(([key, value]) =>
										filteredData = filteredData
																			.filter(a => String(a[key]).toLowerCase()
																							=== String(value).toLowerCase()));

		fs.writeFileSync(pathToData, JSON.stringify(filteredData, null, '\t'));
	} catch(err) {
		console.log(`${err.name} : ${err.message}`);
	}
}


module.exports = {searchBy, initDb}
