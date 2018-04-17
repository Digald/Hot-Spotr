import axios from "axios";


export default  {
  getCensus: function() {
    return axios.get("https://api.census.gov/data/2016/acs/acs1?get=NAME,C27010_017E&for=county:209,453,491&in=state:48&key=a8b3b659fe228e5f51462803ee92e1868886a493");
  }
};
