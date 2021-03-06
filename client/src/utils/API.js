import axios from "axios";

export default {
  userSignUp: function(userdata) {
    return axios.post("/signup", userdata);
  },
  userLogIn: function(userdata) {
    return axios.post("/login", userdata);
  },
  sendTest: function(keyword) {
    return axios.post('/call', keyword);
  }
};
