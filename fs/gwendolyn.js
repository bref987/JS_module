const fs = require('fs')
const axios = require('axios')

function getJson(url) {
  return axios({
    method: 'get',
    url: url,
    responseType: 'json'
  })
}

function getJpegFrom(res) {
  return axios({
    method: 'get',
    url: res.data.image,
    responseType: 'arraybuffer'
  })
}

getJson('https://rickandmortyapi.com/api/character/151')
  .then(respJson => {

  	fs.writeFileSync('./data/rickandmorty.txt', JSON.stringify(respJson.data)); //path ../ or ./
		console.log(respJson.data);

  	getJpegFrom(respJson)
  		.then(respJpeg => {

  			const buffer = Buffer.from(respJpeg.data);
  			fs.writeFileSync('./data/rickandmorty.jpeg', buffer); //path ../ or ./
  	})
  })
  .catch(error => {
    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log('Error', error.message);
    }
  })
