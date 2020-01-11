const axios = require("axios");

// axios
//   .get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", {
//     "X-CMC_PRO_API_KEY": "488562cb-789a-41fb-8b9e-d850ab0bd259"
//   })
//   .then(res => {
//     console.log("ini res data" + res.data);
//     // return res.data;
//   });

// axios({
//   methode: "GET",
//   url: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
//   headers: {
//     "X-CMC_PRO_API_KEY": "488562cb-789a-41fb-8b9e-d850ab0bd259"
//   }
// }).then(res => {
//   console.log(res.data.data.length);
// });

axios({
  methode: "GET",
  url: "https://api.yelp.com/v3/businesses/search",
  headers: {
    Authorization:
      "Bearer Nkhvxodto3M5U-tqmKSfizceDdM16mJMcqkg-5LhzuhGIhCk2ujf7NETDjueZODOYmD_5_Cl31DlzDTEjQJEdwlqOsejKeov0yV0wNSD60X3rwQFiaYS_EndYG3LXXYx"
  },
  params: {
    limit: 50,
    location: "san jose"
  }
}).then(res => {
  console.log(res.data.businesses);
});
