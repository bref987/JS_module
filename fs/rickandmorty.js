const fs = require('fs')
const axios = require('axios')

function getJson(url) {
  return axios({
    method: 'get',
    url: url,
    responseType: 'json'
  })
}

function getJpeg(url) {
  return axios({
    method: 'get',
    url: url,
    responseType: 'arraybuffer'
  })
}

function getResponseObject(res) {
  const responseObject = {
    Name: res.data.name,
    Status: res.data.status,
    Species: res.data.species,
    Species: res.data.species,
    Type: res.data.type,
    "Origin name": res.data.origin.name,
    "Location name": res.data.location.name
  }
  return responseObject;
}

axios.all([
  getJson('https://rickandmortyapi.com/api/character/151'),
  getJpeg('https://rickandmortyapi.com/api/character/avatar/151.jpeg')
])
  .then(axios.spread((respJson, respJpeg) => {

    fs.writeFileSync('./data/rickandmorty.txt', JSON.stringify(getResponseObject(respJson)));
    console.log(respJson.data);
    fs.writeFileSync('./data/rickandmorty.jpeg', Buffer.from(respJpeg.data));
}));
