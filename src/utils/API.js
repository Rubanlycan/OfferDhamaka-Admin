import ezFetch from "ez-fetch";
const API_URL = "https://offerdhamaka.com/OfferDhamaka";

const API = {
  encodedUserId(userId) {
    var encodedData = btoa(userId);
    return encodedData;
  },

  //   To add new store
  createStore({ id, body }) {
    return Auth_api.post(`/stores/addStore/${id}`, body);
  },

  // To get store details
  getStore(id) {
    return Auth_api.get(`/stores/getStore/${id}`);
  },
};

export default API;
