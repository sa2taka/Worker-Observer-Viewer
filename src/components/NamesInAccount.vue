<template>
  <b-container>
    <!-- paginationの設定 -->
    <b-pagination align="center" :limit="10" :total-rows="totalRows" :per-page="perPage" v-model="currentPage" />

    <b-table striped hover show-empty
           :items="formatedNames"
           :fields="fields"
           :current-page="currentPage"
           :per-page="perPage"
           @row-clicked="onNameClicked"
           >
    </b-table>
  </b-container>
</template>

<script>
import ajaxMix from '@/ajaxMix'

export default {
  name: 'NamesInAccount',
  mixins: [ajaxMix],
  props: {
    username: {required: true}
  },
  data () {
    return {
      names: [],
      fields: {
        order: {
          sortable: true
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
      currentPage: 1,
      perPage: 10,
      totalRows: 0,
      pageOptions: [ { text: 10, value: 10 }, { text: 15, value: 15 }, { text: 20, value: 20 } ]
    }
  },
  computed: {
    formatedNames: function () {
      let formated = []
      this.names.forEach(function (val, index, ar) {
        val['order'] = ar.length - index
        formated.push(val)
        if (val.display_name === '' || val.display_name === null) {
          formated[index].display_name = ar[index].username
        }
      })
      return formated
    }
  },
  created () {
    this.get_ajax('names?username=' + this.username, 'names', this, function (klass) {
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
