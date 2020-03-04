const yargs = require('yargs');
const notes = require('./notes');

yargs.command({
  command: 'add',
  describe: 'add new note',
  builder: {
    title: {
      type: 'string',
      demandOption: true,
      describe: 'note title'
    },
    body: {
      type: 'string',
      demandOption: true,
      describe: 'note body'
    }
  },
  handler({title, body}) {
    notes.addNote(title, body);
  }
})

yargs.command({
  command: 'remove',
  describe: 'remove note',
  builder: {
    title: {
      type: 'string',
      demandOption: true,
      describe: 'note title'
    }
  },
  handler({title}) {
    notes.removeNote(title);
  }
})

yargs.command({
  command: 'read',
  describe: 'read note',
  handler({title}) {
    notes.readNote(title);
  }
})

yargs.command({
  command: 'list',
  describe: 'list note',
  handler() {
    notes.listNotes();
  }
})

yargs.parse();
