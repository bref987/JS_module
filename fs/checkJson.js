const fs = require('fs');

const conditionObj = {
  flag: fg => typeof fg === 'boolean',
  myPromises: mP => Array.isArray(mP),
  element: el => typeof el === 'object' && !Object.is(el, null),
  screenshot: sn => Object.is(sn, null),
  elementText: eT => typeof eT === 'string',
  allElementsText: (aET, findLetters = "const") => aET.includes(findLetters),
  counter: ct =>  ct > 10,
  config: cf => Object.is(cf, "Common"),
  const: cn => cn.toLowerCase() === "FiRst".toLowerCase(),
  parameters: pm => pm.length === 8 && pm.every(a => typeof a === 'string'),
  description: dr => 5 < dr.length < 13
}

function findDivergence(conditionObject, jsonObject) {
  const divergenceObject = {};
  Object.keys(conditionObject)
        .filter(key => !conditionObject[key](jsonObject[key]))
        .forEach(key => divergenceObject[key] = jsonObject[key]);
  return divergenceObject;
}

function fileHandler() {
  let pathJson = './data/data.json';
  if (fs.existsSync(pathJson)) {

    const jsonObj = JSON.parse(fs.readFileSync(pathJson, 'utf8')),
    divergenceObj = findDivergence(conditionObj, jsonObj);
    let pathTxt   = './data/jsonDivergenceData.txt';

    Object.keys(divergenceObj).length === 0 ?
    console.log("OK") : fs.writeFileSync(pathTxt, JSON.stringify(divergenceObj));
  }
}

fileHandler();
