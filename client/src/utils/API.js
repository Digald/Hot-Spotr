import axios from "axios";

export default {
  userSignUp: function(userdata) {
    return axios.post("/signup", userdata);
  }
};
