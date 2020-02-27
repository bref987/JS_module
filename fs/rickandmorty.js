const fs = require('fs')
const axios = require('axios')

axios({
  method: 'get',
  url: 'https://rickandmortyapi.com/api/character/69',
  responseType: 'json'
})
  .then(response => {
    console.log(response.data);
    fs.writeFileSync('./data/rickandmorty.txt',
`Name : ${JSON.stringify(response.data.name)},
Status : ${JSON.stringify(response.data.status)},
Species : ${JSON.stringify(response.data.species)},
Gender : ${JSON.stringify(response.data.gender)},
Origin name : ${JSON.stringify(response.data.origin.name)},
Location name : ${JSON.stringify(response.data.location.name)}`);
});
