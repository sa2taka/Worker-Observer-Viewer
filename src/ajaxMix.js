import Vue from 'vue'
import axios from 'axios'

const URL_BASE = 'https://infinite-river-99979.herokuapp.com/api/'

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
