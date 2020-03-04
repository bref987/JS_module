const fs = require('fs');


const notePath = './app/data/items.json'; //path

function getItems() {
  const content = Array.isArray(JSON.parse(fs.readFileSync(notePath, 'utf8'))) ?
  JSON.parse(fs.readFileSync(notePath, 'utf8')) : [];
  return content;
}

function addItem(title, body) {
  const addObj = {};
  addObj.title = title;
  addObj.body  = body;

  const arrayJson = getItems();
  arrayJson.every(obj => obj.title !== title) ?
  arrayJson.push(addObj) : console.log(`Title "${title}" already exists`);

  fs.writeFileSync(notePath, JSON.stringify(arrayJson, null, '\t'));
}

function removeItem(title) {
  const arrayJson = getItems().filter(obj => obj.title !== title);

  fs.writeFileSync(notePath, JSON.stringify(arrayJson, null, '\t'));
}

function readItem(title) {
  getItems()
      .filter(obj => obj.title === title)
      .forEach(obj => console.log(obj.body));
}

function listItems() {
  getItems().forEach(obj => console.log(obj));
}


module.exports = {
  addItem, removeItem, readItem, listItems
}
