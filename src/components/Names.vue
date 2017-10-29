<template>
  <div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>accounts_id</th>
          <th>display_name</th>
          <th>created_at</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in names">
          <th>{{ item.id }}</th>
          <td>{{ item.accounts_id  }}</td>
          <td>{{ item.display_name }}</td>
          <td>{{ item.created_at }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

const URL_BASE = 'http://infinite-river-99979.herokuapp.com/api/'

export default {
  name: 'Names',
  data () {
    return {
      names: []
    }
  },
  created () {
    this.get_ajax('names', 'names')
  },
  methods: {
    get_ajax (url, name) {
      return axios.get(URL_BASE + url)
      .then((res) => {
        console.log(res.data)
        Vue.set(this, name, res.data)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
