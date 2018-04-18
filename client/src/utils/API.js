import axios from "axios";

export default {
  userSignUp: function(userdata) {
    return axios.post("/signup", userdata);
  },
  userLogIn: function(userdata) {
    return axios.post('/login', userdata);
  },
  getIndustries: function(keyword) {
    return axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=AIzaSyBj2iAiGV1zywVVzlZSaIM1y3VPpCUqRF0')
  }
};
