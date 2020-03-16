const fs = require('fs'),
 format = require('date-format');

const itemsPath = './app/data/items.json';

function writeArrayJson(array) {
  console.log('Successfully done');
  return fs.writeFileSync(itemsPath, JSON.stringify(array, null, '\t'));
}

function getItems() {
  try {
    if (!fs.existsSync(itemsPath) ||
        !Array.isArray(JSON.parse(fs.readFileSync(itemsPath)))) {
      fs.writeFileSync(itemsPath, JSON.stringify([]));
    }
  } catch (er) {
    fs.writeFileSync(itemsPath, JSON.stringify([]));
  }

  return JSON.parse(fs.readFileSync(itemsPath));
}

function addItem(title, body) {
  const addObj = {
    title: title,
    body: body,
    date: format('dd/MM/yyyy hh:mm:ss', new Date())
  },
    arrayJson = getItems();

  if (!arrayJson.some(obj => obj.title === title)) {

    arrayJson.push(addObj);
    writeArrayJson(arrayJson);

    console.log(`Item "${title}" have been successfully added`);
  } else {
    findAndUpdate(title, title, body) 
  }
}

function removeItem(title) {
  const initialArrayJsonLength = getItems().length,
    arrayJsonFiltered = getItems().filter(obj => obj.title !== title);

  if (arrayJsonFiltered.length !== initialArrayJsonLength) {

    writeArrayJson(arrayJsonFiltered);
    console.log(`Item "${title}" have been successfully removed`);

  } else {
    console.log(`Title "${title}" doesn't exist`);
  }
}

function readItem(title) {
  const arrayJson = getItems();
  if (arrayJson.some(obj => obj.title === title)) {
    arrayJson
      .filter(obj => obj.title === title)
      .forEach(obj => console.log(obj));
  } else {
    console.log(`Item "${title}" doesn't exist`);
  }
}

function listItems() {
  const arrayJson = getItems();
  if (arrayJson.length > 0 ) {
    arrayJson.forEach(obj => console.log(obj));
  } else {
    console.log('No any items registered');
  }
}

function sortItems(type, item, order) {

  const sortObj = {

    date() {
      const arrayJson = getItems();

      if (order === 'descending' || !order) {
        arrayJson.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
        writeArrayJson(arrayJson);

      } else if (order === 'ascending') {
        arrayJson.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
        writeArrayJson(arrayJson);

      } else {
        console.log('Incorrect argument');
      }
    },

    length() {
      const arrayJson = getItems();

      if (item === 'title' && (order === 'descending' || !order)) {
        arrayJson.sort((a, b) => b.title.length - a.title.length);
        writeArrayJson(arrayJson);

      } else if (item === 'title' && order === 'ascending') {
        arrayJson.sort((a, b) => a.title.length - b.title.length);
        writeArrayJson(arrayJson);

      } else if (item === 'body' && (order === 'descending' || !order)) {
        arrayJson.sort((a, b) => b.body.length - a.body.length);
        writeArrayJson(arrayJson);

      } else if (item === 'body' && order === 'ascending') {
        arrayJson.sort((a, b) => a.body.length - b.body.length);
        writeArrayJson(arrayJson);

      } else {
        console.log('Incorrect argument');
      }
    },

    alphabet() {
      const arrayJson = getItems();

      if ((item === 'title' || !item) && (order === 'descending' || !order)) {
        arrayJson.sort((a, b) => b.title > a.title ? 1 : -1);
        writeArrayJson(arrayJson);

      } else if ((item === 'title' || !item) && order === 'ascending') {
        arrayJson.sort((a, b) => b.title < a.title ? 1 : -1);
        writeArrayJson(arrayJson);

      } else {
        console.log('Incorrect argument');
      }
    }
  }

  try {
    sortObj[type]();
  } catch(er) {
    console.log('Incorrect sort type');
  }
}

function findAndUpdate(title, newTitle, newBody) {
  const arrayJson = getItems(),
    someTitle = getItems().some(obj => obj.title === title),
    filteredByTitle = arrayJson.filter(obj => obj.title === title),
    date = format('dd/MM/yyyy hh:mm:ss', new Date());

  if (someTitle && newTitle && newBody) {
    filteredByTitle.forEach(obj => (obj.title = newTitle, obj.body = newBody, obj.date = date));
    writeArrayJson(arrayJson);

  } else if (someTitle && newTitle) {
    filteredByTitle.forEach(obj => (obj.title = newTitle, obj.date = date));
    writeArrayJson(arrayJson);

  } else if (someTitle && newBody) {
    filteredByTitle.forEach(obj => (obj.body = newBody, obj.date = date));
    writeArrayJson(arrayJson);

  } else {
    console.log('Incorrect argument');
  }
}


module.exports = {
  addItem, removeItem, readItem, listItems, sortItems, findAndUpdate
}
