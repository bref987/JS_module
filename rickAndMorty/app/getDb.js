const fs = require('fs'),
  axios = require('axios'),
  pathToDb = './app/db/rAndM.json';


function getItems() {
  return JSON.parse(fs.readFileSync(pathToDb));
}

function createDb() {
  let arrayJson;

    axios({
        method: 'get',
        url: 'https://rickandmortyapi.com/api/character',
        responseType: 'json'
      })
      .then(response => {
        const pages = response.data.info.pages;

        for (let i = 1; i < pages + 1; i++) {
          axios({
            method: 'get',
            url: `https://rickandmortyapi.com/api/character/?page=${i}`,
            responseType: 'json'
          })
          .then(response => {
            const rdr = response.data.results;

            arrayJson = getItems()
            .concat(rdr)
            .sort((a, b) => a.id - b.id);

            fs.writeFileSync(pathToDb, JSON.stringify(arrayJson, null, '\t'));
          });
        }
      })
    }


module.exports = {createDb}
