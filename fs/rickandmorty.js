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
    Type: res.data.type,
    Gender: res.data.gender,
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

    const writeObjec = getResponseObject(respJson),
          buffer     = Buffer.from(respJpeg.data);

    fs.writeFileSync('./data/rickandmorty.txt', JSON.stringify(writeObjec)); //path ../ or ./
    console.log(respJson.data);
    fs.writeFileSync('./data/rickandmorty.jpeg', buffer); //path ../ or ./
}));
