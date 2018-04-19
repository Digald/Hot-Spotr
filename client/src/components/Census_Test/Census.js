import axios from "axios";


export default  {
  getCensus: function() {
    return axios.get("https://api.census.gov/data/2016/acs/acs1?get=NAME,C27010_017E,B01001_027E&for=county:209,453,491&in=state:48&key=a8b3b659fe228e5f51462803ee92e1868886a493");
  },

  getCensusEarnings1214: function() {
    return axios.get("https://api.census.gov/data/2016/acs/acs1?get=NAME,B20005A_011E,B20005_081E&for=county:209,453,491&in=state:48&key=a8b3b659fe228e5f51462803ee92e1868886a493");
  },

  getCensusEarnings2224: function() {
    return axios.get("https://api.census.gov/data/2016/acs/acs1?get=NAME,B20005A_015E,B20005_085E&for=county:209,453,491&in=state:48&key=a8b3b659fe228e5f51462803ee92e1868886a493");
  },

};
