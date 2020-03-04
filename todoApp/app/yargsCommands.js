const yargs = require('yargs');
const notes = require('./itemsOperations'); //path


yargs.command({
  command: 'add',
  describe: 'add new item',
  builder: {
    title: {
      type: 'string',
      demandOption: true,
      describe: 'item title'
    },
    body: {
      type: 'string',
      demandOption: true,
      describe: 'item body'
    }
  },
  handler({title, body}) {
    notes.addItem(title, body);
  }
})

yargs.command({
  command: 'remove',
  describe: 'remove item',
  builder: {
    title: {
      type: 'string',
      demandOption: true,
      describe: 'note title'
    }
  },
  handler({title}) {
    notes.removeItem(title);
  }
})

yargs.command({
  command: 'read',
  describe: 'read item',
  handler({title}) {
    notes.readItem(title);
  }
})

yargs.command({
  command: 'list',
  describe: 'list items',
  handler() {
    notes.listItems();
  }
})


yargs.parse();
