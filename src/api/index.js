var axios = require('axios');

const instance = axios.create({
  baseURL: 'https://api.coincap.io/v2',
});

export function getCoinList() {
  return instance.get('/assets')
}
