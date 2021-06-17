import axios from "axios"
const Base_URL = "https://offerdhamaka.com/OfferDhamaka"

let headers = {
  "Content-Type": "application/json",
}

let Auth_api = axios.create({
  baseURL: Base_URL,
  headers,
})

Auth_api.interceptors.request.use(
  (config) => {
    // perform a task before the request is sent
    console.log("Request was sent")
    return config
  },
  (error) => {
    // handle the error
    return Promise.reject(error)
  }
)

Auth_api.interceptors.response.use(
  (response) => {
    // do something with the response data
    console.log("Response was received")
    return response
  },
  (error) => {
    // handle the response error
    return Promise.reject(error)
  }
)

const API = {
  encodedUserId(userId) {
    var encodedData = btoa(userId)
    return encodedData
  },

  createStore({ id, body }) {
    return Auth_api.post(`/stores/addStore/${id}`, body)
  },

  getStore(id) {
    return Auth_api.get(`/stores/getStore/${id}`)
  },
}

export default API
