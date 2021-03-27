import axios from "axios";

const api_key = process.env.VUE_APP_api_key;
const baseUrl = `https://sureb-69.herokuapp.com/api`;
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
    return axios.get(resource + `?api_key=${api_key}`);
  },
  post(resource, data) {
    return axios.post(resource + `?api_key=${api_key}`, data);
  },
  put(resource, data) {
    return axios.put(resource + `?api_key=${api_key}`, data);
  },
  delete(resource) {
    return axios.delete(resource);
  },
  customRequest(data) {
    return axios(data);
  }
};

export { ApiService };
