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
           :items="formatedNames"
           :fields="fields"
           :current-page="currentPage"
           :per-page="perPage"
           :filter="filter"
           @filtered="onFiltered"
           @row-clicked="onNameClicked"
           >
       <template slot="details" scope="row">
         <b-btn size="sm" @click.stop="details(row.item, row.index, $event.target)">Details</b-btn>
       </template>
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
        details: {},
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
      currentPage: 1,
      perPage: 10,
      totalRows: 0,
      filter: null,
      pageOptions: [ { text: 10, value: 10 }, { text: 15, value: 15 }, { text: 20, value: 20 } ]
    }
  },
  computed: {
    formatedNames: function () {
      let formated = []
      this.names.forEach(function (val, index, ar) {
        val['created_at'] = val['created_at'].replace(/(.*)T(.*)\..*/, '$1 $2')
        formated.push(val)
        if (val.display_name === '' || val.display_name === null) {
          formated[index].display_name = ar[index].username
        }
      })
      return formated
    }
  },
  methods: {
    onFiltered (filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    onNameClicked (item) {
      if (this.filter === item.username) {
        this.filter = ''
      } else {
        this.filter = item.username
      }
    },
    details (item, index, button) {
      // TODO 実際の使用時と違う
      location.href = '/Worker-Observer-Viewer/#/account/' + item.username
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
