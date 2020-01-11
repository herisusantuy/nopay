import axios from "axios";

const getCoin = () => {
  return axios({
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
  });
};

export default getCoin;
