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

function getResponseObject(res, ...args) {
  const responseObject = {};
  args.forEach(key => responseObject[key] = res.data[key]);
  
  return responseObject;
}

axios.all([
  getJson('https://rickandmortyapi.com/api/character/151'),
  getJpeg('https://rickandmortyapi.com/api/character/avatar/151.jpeg')
])
  .then(axios.spread((respJson, respJpeg) => {

    const writeObject = getResponseObject(respJson, "name", "status", "species", "type", "gender"),
          buffer      = Buffer.from(respJpeg.data);

    fs.writeFileSync('./data/rickandmorty.txt', JSON.stringify(writeObject)); //path ../ or ./
    console.log(respJson.data);
    fs.writeFileSync('./data/rickandmorty.jpeg', buffer); //path ../ or ./
  }))
  .catch(error => {
    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log('Error', error.message);
    }
  })
