const yargs = require('yargs');
const items = require('./itemsOperations'); //path


yargs.command({
  command: 'add',
  describe: 'add new item',
  builder: {
    title: {
      type: 'string',
      alias: 't',
      demandOption: true,
      describe: 'item title'
    },
    body: {
      type: 'string',
      alias: 'b',
      demandOption: true,
      describe: 'item body'
    }
  },
  handler({title, body}) {
    items.addItem(title, body);
  }
})

yargs.command({
  command: 'remove',
  describe: 'remove item',
  builder: {
    title: {
      type: 'string',
      alias: 't',
      demandOption: true,
      describe: 'note title'
    }
  },
  handler({title}) {
    items.removeItem(title);
  }
})

yargs.command({
  command: 'read',
  describe: 'read item',
  builder: {
    title: {
      type: 'string',
      alias: 't',
      demandOption: true,
      describe: 'note title'
    }
  },
  handler({title}) {
    items.readItem(title);
  }
})

yargs.command({
  command: 'list',
  describe: 'list items',
  handler() {
    items.listItems();
  }
})


yargs.parse();
