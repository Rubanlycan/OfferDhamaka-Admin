import ezFetch from "ez-fetch";
const API_URL = "https://offerdhamaka.com/OfferDhamaka";

const API = {
  encodedUserId(userId) {
    var encodedData = btoa(userId);
    return encodedData;
  },
};

export default API;
