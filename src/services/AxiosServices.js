const axios = require('axios').default

export default class AxiosService {
  post(Url, Data, IsRequiredHeader = false, Header) {
    return axios.post(Url, Data, IsRequiredHeader && Header)
  }

  get(Url, IsRequiredHeader = false, Header) {
    return axios.get(Url, IsRequiredHeader && Header)
  }

  patch(Url, Data, IsRequiredHeader = false, Header) {
    return axios.patch(Url, Data, IsRequiredHeader && Header)
  }

  put(Url, Data, IsRequiredHeader = false, Header) {
    return axios.put(Url, Data, IsRequiredHeader && Header)
  }
}
