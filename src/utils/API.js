import axios from "axios";
const Base_URL = "https://offerdhamaka.com/OfferDhamaka";

let headers = {
  "Content-Type": "application/json",
};

let Auth_api = axios.create({
  baseURL: Base_URL,
  headers,
});

Auth_api.interceptors.request.use(
  (config) => {
    // perform a task before the request is sent
    console.log("Request was sent");
    return config;
  },
  (error) => {
    // handle the error
    return Promise.reject(error);
  }
);

Auth_api.interceptors.response.use(
  (response) => {
    // do something with the response data
    console.log("Response was received");
    return response;
  },
  (error) => {
    // handle the response error
    return Promise.reject(error);
  }
);

const encodedUserId = (userId) => {
  var encodedData = btoa(userId);
  return encodedData;
};

const API = {
  // To add new store
  createStore({ id, body }) {
    return Auth_api.post(`/stores/addStore/${id}`, body);
  },

  // Get company by user
  getCompanyByUser(user_id) {
    return Auth_api.get(`/companies/getCompany/${user_id}`);
  },

  // Get store by company
  getStoreByCompany(company_id) {
    return Auth_api.get(`/stores/getStoreByCompany/${company_id}`);
  },

  // Get store by user
  getStoreByUser(user_id) {
    return Auth_api.get(`/stores/getStore/${user_id}`);
  },
};

export default API;
