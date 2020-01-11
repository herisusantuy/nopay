const axios = require("axios");

let url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
  headers = {
    "X-CMC_PRO_API_KEY": "488562cb-789a-41fb-8b9e-d850ab0bd259"
  };
axios.get(url, { headers: headers }).then(res => {
  //   console.log(res.data);
  return res.data;
});

// axios({
//   method: "GET",
//   url: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
//   qs: {
//     start: "1",
//     limit: "1",
//     convert: "USD,BTC"
//   },
//   headers: {
//     "X-CMC_PRO_API_KEY": "488562cb-789a-41fb-8b9e-d850ab0bd259"
//   }
// }).then(res => {
//   console.log(res);
// });
