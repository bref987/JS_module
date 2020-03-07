const fs = require('fs'); //add json if doesnt exist


const itemsPath = './app/data/items.json'; //path attention to ./ or ../

(() => {
  try {
    if (!fs.existsSync(itemsPath) || 
        !Array.isArray(JSON.parse(fs.readFileSync(itemsPath)))) {
      fs.writeFileSync(itemsPath, JSON.stringify([]));
    } 
  } catch {
    fs.writeFileSync(itemsPath, JSON.stringify([]));
  }
})();

function getItems() {
  return JSON.parse(fs.readFileSync(itemsPath));
}

function addItem(title, body) { //add item with different title
  const addObj = {title: title, body: body},
  arrayJson    = getItems();

  if (!arrayJson.some(obj => obj.title === title)) {

    arrayJson.push(addObj);
    fs.writeFileSync(itemsPath, JSON.stringify(arrayJson, null, '\t'));
    console.log(`Item "${title}" have been successfully added`);

  } else {
    console.log(`Title "${title}" already exists`);
  }
}

function removeItem(title) { //remove existing item by his title; addItem logic possible
  const initialArrayJsonLength = getItems().length,
                     arrayJson = getItems().filter(obj => obj.title !== title);

  if (arrayJson.length !== initialArrayJsonLength) {

    fs.writeFileSync(itemsPath, JSON.stringify(arrayJson, null, '\t'));
    console.log(`Item "${title}" have been successfully removed`);

  } else {
    console.log(`Title "${title}" doesn't exist`);
  }
}

function readItem(title) { //read an item if it exists
  const arrayJson = getItems();

  if (arrayJson.some(obj => obj.title === title)) {

    arrayJson
      .filter(obj => obj.title === title)
      .forEach(obj => console.log(obj));

  } else {
    console.log(`Item "${title}" doesn't exist`);
  }
}

function listItems() { //list of all items if it exists
  const arrayJson = getItems();

  if (arrayJson.length > 0 ) {

    arrayJson.forEach(obj => console.log(obj));

  } else {
    console.log("No any items registered");
  }
}


module.exports = {
  addItem, removeItem, readItem, listItems
}
