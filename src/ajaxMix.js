import Vue from 'vue'
import axios from 'axios'

const URL_BASE = 'http://localhost/api/'

export default {
  methods: {
    get_ajax (url, name, klass, callback) {
      return axios.get(URL_BASE + url)
      .then((res) => {
        Vue.set(this, name, res.data)
        callback(klass)
      })
    }
  }
}
