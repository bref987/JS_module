const yargs = require('yargs'),
 search = require('./search');


yargs.command({
  command: 'search',
  describe: 'search characters',
  builder: {
    type: {
      type: 'string',
      alias: 't',
      demandOption: true,
      describe: 'search by id'
    },
    searcher: {
      type: 'string',
      alias: 's',
      demandOption: true,
      describe: 'search by name'
    }
  },
  handler({type, searcher}) {
    search.searchBy(type, searcher);
  }
})

yargs.command({
  command: 'initdb',
  describe: 'update data base',

  handler() {
    search.initDb();
  }
})


yargs.parse();
