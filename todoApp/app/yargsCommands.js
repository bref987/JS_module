const yargs = require('yargs'),
 items = require('./itemsOperations'), //path
 excel = require('./excelConverter');

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

yargs.command({
  command: 'sort',
  describe: 'sort items',
  builder: {
    type: {
      type: 'string',
      alias: 't',
      demandOption: true,
      describe: 'sort'
    },
    item: {
      type: 'string',
      alias: 'i',
      demandOption: false,
      describe: 'sort'
    },
    order: {
      type: 'string',
      alias: 'o',
      demandOption: false,
      describe: 'sort'
    }
  },
  handler({type, item, order}) {
    items.sortItems(type, item, order);
  }
})

yargs.command({
  command: 'update',
  describe: 'update item',
  builder: {
    title: {
      type: 'string',
      alias: 't',
      demandOption: true,
      describe: 'item title'
    },
    newTitle: {
      type: 'string',
      alias: 'nt',
      demandOption: false,
      describe: 'item newTitle'
    },
    newBody: {
      type: 'string',
      alias: 'nb',
      demandOption: false,
      describe: 'item newBody'
    }
  },
  handler({title, newTitle, newBody}) {
    items.findAndUpdate(title, newTitle, newBody);
  }
})

yargs.command({
  command: 'toCsv',
  describe: 'json to csv',
  handler() {
    excel.writeToCsv();
  }
})

yargs.command({
  command: 'toJson',
  describe: 'csv to json',
  handler() {
    excel.readFromCsv();
  }
})


yargs.parse();
