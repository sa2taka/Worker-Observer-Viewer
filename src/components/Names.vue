<template>
  <b-container>
    <b-row align-h ="between">
      <b-col cols="4">
        <b-form-fieldset horizontal label="Filter" :label-cols="3">
          <b-form-input v-model="filter" placeholder="検索文字列" />
        </b-form-fieldset>
      </b-col>
      <b-col cols="4">
        <b-form-fieldset horizontal label="1ページあたりの表示数" :label-cols="6">
          <b-form-select :options="pageOptions" v-model="perPage" />
        </b-form-fieldset>
      </b-col>
    </b-row>

    <!-- paginationの設定 -->
    <b-pagination align="center" :limit="10" :total-rows="totalRows" :per-page="perPage" v-model="currentPage" />

    <b-table striped hover show-empty
           :items="names"
           :fields="fields"
           :current-page="currentPage"
           :per-page="perPage"
           :filter="filter"
           @filtered="onFiltered"
           @row-dblclicked="onNameDblClicked"
           >
    </b-table>
  </b-container>
</template>

<script>
import ajaxMix from '@/ajaxMix'

export default {
  name: 'Names',
  mixins: [ajaxMix],
  data () {
    return {
      names: [],
      fields: {
        account_id: {
          sortable: true
        },
        username: {
          sortable: false
        },
        display_name: {
          sortable: false
        },
        nickname: {
          sortable: false
        },
        created_at: {
          sortable: true
        }
      },
      searchWord: '',
      selected: 'username',
      searchOptions: [
        { text: 'usernameで検索', value: 'username' },
        { text: 'idで検索', value: 'id' }
      ],
      currentPage: 1,
      perPage: 10,
      totalRows: 0,
      filter: null,
      pageOptions: [ { text: 10, value: 10 }, { text: 15, value: 15 }, { text: 20, value: 20 } ],
      modalDetails: { index: '', data: '' }
    }
  },
  methods: {
    update_names () {
      let options = ''
      if (this.searchWord !== '') {
        options = '?' + this.selected + '=' + this.searchWord
      }
      this.get_ajax('names' + options, 'names', this, function (klass) {
        klass.totalRows = klass.names.length
      })
    },
    onFiltered (filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    onNameDblClicked (item) {
      if (this.filter === item.username) {
        this.filter = ''
      } else {
        this.filter = item.username
      }
    }
  },
  created () {
    this.get_ajax('names', 'names', this, function (klass) {
      klass.totalRows = klass.names.length
    })
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

.hoge {
    color: red;
}
</style>
