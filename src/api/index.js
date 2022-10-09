var axios = require('axios');


var config = {
  method: 'get',
  url: 'https://api.coincap.io/v2/assets',
  headers: {}
};

function getCoinList() {
  return axios(config)
}

export { getCoinList };