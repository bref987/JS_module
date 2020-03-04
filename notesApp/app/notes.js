const fs = require('fs');

const notePath = './data/notes.json';

function getNotes() {
  const content = JSON.parse(fs.readFileSync(notePath, 'utf8'));
  return content;
}

function addNote(title, body) {
  const addObj = {};
  addObj.title = title;
  addObj.body  = body;

  const arrayJson = getNotes();
  arrayJson.every(obj => obj.title !== title) ?
  arrayJson.push(addObj) : console.log(`Title "${title}" already exists`);

  fs.writeFileSync(notePath, JSON.stringify(arrayJson, null, '\t'));
}

function removeNote(title) {
  const arrayJson = getNotes().filter(obj => obj.title !== title);

  fs.writeFileSync(notePath, JSON.stringify(arrayJson, null, '\t'));
}

function readNote(title) {
  getNotes()
      .filter(obj => obj.title === title)
      .forEach(obj => console.log(obj.body));
}

function listNotes() {
  getNotes().forEach(obj => console.log(obj));
}

module.exports = {
  addNote, removeNote, readNote, listNotes
}
