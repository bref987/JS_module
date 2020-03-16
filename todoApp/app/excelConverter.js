const { Parser } = require('json2csv'),
	csv=require('csvtojson'),
	fs = require('fs'),
	jsonItemsPath = './app/data/items.json',
	csvItemsPath = './app/data/items.csv';


function writeToCsv() {

	const fields = ['title', 'body', 'date'],
		jsonItems = JSON.parse(fs.readFileSync(jsonItemsPath)),
		json2csvParser = new Parser({ fields }),
		toCsv = json2csvParser.parse(jsonItems);

		fs.writeFileSync(csvItemsPath, toCsv);
}

function readFromCsv() {
	csv()
	.fromFile(csvItemsPath)
	.then((jsonObj)=>{

		fs.writeFileSync(jsonItemsPath, JSON.stringify(jsonObj, null, '\t'));
	})
}


module.exports = {
  writeToCsv, readFromCsv
}
