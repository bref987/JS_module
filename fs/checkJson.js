const fs = require('fs');

const conditionObj = {
  flag: fg => typeof fg === 'boolean',
  myPromises: mP => Array.isArray(mP),
  element: el => typeof el === 'object' && el !== null,
  screenshot: sn => Object.is(sn, null),
  elementText: eT => typeof eT === 'string',
  allElementsText: (aET, findLetters = "const") => aET.split(findLetters).length > 1,
  counter: ct =>  ct > 10,
  config: cf => Object.is(cf, "Common"),
  const: cn => cn.toLowerCase() === "FiRst".toLowerCase(),
  parameters: pm => pm.length === 8 && pm.every(a => typeof a === 'string'),
  description: dr => 5 < dr.length < 13
}

function findDivergence(conditionObject, jsonObject, divergenceObject = {}) {
  Object.keys(conditionObject)
        .filter(key => !conditionObject[key](jsonObject[key]))
        .map(key => divergenceObject[key] = jsonObject[key]);
  return divergenceObject;
}

function fileHandler() {
  if (fs.existsSync('./data/data.json')) {

    const jsonObj = JSON.parse(fs.readFileSync('./data/data.json', 'utf8')),
    divergenceObj = findDivergence(conditionObj, jsonObj);

    Object.keys(divergenceObj).length === 0 ?
    console.log("OK") : fs.writeFileSync('./data/jsonDivergenceData.txt', JSON.stringify(divergenceObj));

  } else {
    console.log("Error: JSON file doesn't exist");
  }
}

fileHandler();
