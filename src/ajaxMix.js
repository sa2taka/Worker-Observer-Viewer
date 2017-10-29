import Vue from 'vue'
import axios from 'axios'

const URL_BASE = 'http://infinite-river-99979.herokuapp.com/api/'

export default {
  methods: {
    get_ajax (url, name) {
      return axios.get(URL_BASE + url)
      .then((res) => {
        Vue.set(this, name, res.data)
      })
    }
  }
}
