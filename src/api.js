import axios from 'axios'

let url = {
  wifi: {
    ap: '/api/signals/ap',
  },
}

const api = {
  getAPConfig: function () {
    axios.get(url.wifi.ap).then((response) => {
      console.log(response)
      return response
    }).catch((error) => console.log(error))
  },
}

export default api
