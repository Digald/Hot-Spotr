import axios from "axios";

export default {
  userSignUp: function(userdata) {
    return axios.post("/signup", userdata);
  },
  userLogIn: function(userdata) {
    return axios.post('/login', userdata);
  },
  getIndustries: function(keyword) {
    return axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=30.2672,-97.7431&radius=50000&keyword=' + keyword + '&key=AIzaSyBj2iAiGV1zywVVzlZSaIM1y3VPpCUqRF0');
  }
};
