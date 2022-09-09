var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://api.coincap.io/v2/assets/bitcoin',
  headers: { "Accept-Encoding": "gzip",
    "Authorization": "Bearer 5371b14a-b74d-435d-ae89-1c6e9c8c4f51"
}
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
}); // request