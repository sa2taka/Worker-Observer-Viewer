<template>
  <div class="table-responsive">
    <form>
      <p>input: <input type="text" v-model="searchWord" @keyup="update_names()"></p>
    </form>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>accounts_id</th>
          <th>user_name</th>
          <th>display_name</th>
          <th>nickname</th>
          <th>created_at</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in names">
          <th>{{ item.id }}</th>
          <td>{{ item.account_id  }}</td>
          <td>{{ item.username }}</td>
          <td>{{ item.display_name }}</td>
          <td>{{ item.nickname }}</td>
          <td>{{ item.created_at }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ajaxMix from '@/ajaxMix'

export default {
  name: 'Names',
  mixins: [ajaxMix],
  data () {
    return {
      names: [],
      searchWord: ''
    }
  },
  methods: {
    update_names () {
      console.log('update..')
      let options = ''
      if (this.searchWord !== '') {
        options = '?id=' + this.searchWord
      }
      this.get_ajax('names' + options, 'names')
    }
  },
  created () {
    this.get_ajax('names', 'names')
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
