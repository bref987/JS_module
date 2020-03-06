const fs = require('fs'); //add json if doesnt exist


const notePath = './app/data/items.json'; //path attention to ./ or ../

function getItems() {
  const content = Array.isArray(JSON.parse(fs.readFileSync(notePath, 'utf8'))) ?
  JSON.parse(fs.readFileSync(notePath, 'utf8')) : [];
  return content;
}

function addItem(title, body) { //add item with different title
  const addObj = {title: title, body: body},
  arrayJson    = getItems();

  arrayJson.some(obj => obj.title === title) ? //or if else !!!
  console.log(`Title "${title}" already exists`) :
  (
    arrayJson.push(addObj),
    fs.writeFileSync(notePath, JSON.stringify(arrayJson, null, '\t')),
    console.log(`Item "${title}" have been successfully added`)
  );
}

function removeItem(title) { //remove existing item by his title; addItem logic possible
  const initialArrayJsonLength = getItems().length,
  arrayJson = getItems().filter(obj => obj.title !== title);

  arrayJson.length === initialArrayJsonLength ?
  console.log(`Title "${title}" doesn't exist`) :
  (
    fs.writeFileSync(notePath, JSON.stringify(arrayJson, null, '\t')),
    console.log(`Item "${title}" have been successfully removed`)
  );
}

function readItem(title) { //read an item if it exists
  const arrayJson = getItems();

  arrayJson.some(obj => obj.title === title) ? //everywher if else
  arrayJson.filter(obj => obj.title === title).forEach(obj => console.log(obj)) :
  console.log(`Item "${title}" doesn't exist`);
}

function listItems() { //list of all items if it exists
  const arrayJson = getItems();

  arrayJson.length > 0 ? //if else also
  arrayJson.forEach(obj => console.log(obj)) : console.log("No any items registered");
}


module.exports = {
  addItem, removeItem, readItem, listItems
}
