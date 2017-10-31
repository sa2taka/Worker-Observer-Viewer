<template>
  <div class="table-responsive">
    <form>
      <p>input: <input type="text" v-model="searchWord" @keyup="update_names()"></p>
      <b-form-radio-group v-model="selected"
                          :options="searchOptions"
                          name="radiosMd">

      </b-form-radio-group>
    </form>

    <b-table striped hover :items="names" :fields="fields"></b-table>
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
      fields: [
        {
          key: 'id',
          label: '#',
          sortable: true
        },
        {
          key: 'account_id',
          sortable: true
        },
        {
          key: 'username',
          sortable: false
        },
        {
          key: 'display_name',
          sortable: false
        },
        {
          key: 'nickname',
          sortable: false
        },
        {
          key: 'created_at',
          sortable: true
        }
      ],
      searchWord: '',
      selected: 'username',
      searchOptions: [
        { text: 'usernameで検索', value: 'username' },
        { text: 'idで検索', value: 'id' }
      ]
    }
  },
  methods: {
    update_names () {
      console.log('update..')
      let options = ''
      if (this.searchWord !== '') {
        options = '?' + this.selected + '=' + this.searchWord
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
