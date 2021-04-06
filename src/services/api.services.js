import axios from "axios";
const baseUrl = `https://goconnect.herokuapp.com/api`;
axios.defaults.baseURL = baseUrl;

const ApiService = {
  getBaseUrl() {
    return baseUrl;
  },
  setHeader(token) {
    axios.defaults.headers.common["Authorization"] = `${token}`;
  },
  removeHeader() {
    axios.defaults.headers.common = {};
  },
  get(resource) {
    return axios.get(resource);
  },
  post(resource, data) {
    return axios.post(resource, data);
  },
  put(resource, data) {
    return axios.put(resource, data);
  },
  delete(resource) {
    return axios.delete(resource);
  },
  customRequest(data) {
    return axios(data);
  }
};

export { ApiService };
