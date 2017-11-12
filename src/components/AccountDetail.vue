<template>
  <div>
    <h4> {{ username }} </h4>
    <b-card nobody>
      <b-tabs ref="tabs" card>
        <b-tab title="Names">
        </b-tab>
        <b-tab title="Toot Chart" active>
          <toot-chart :username="username"></toot-chart>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import TootChart from '@/components/TootChart'

export default {
  names: 'AccountDetail',
  data () {
    return {
      username: this.$route.params.username
    }
  },
  components: {
    TootChart
  },
  watch: {
    '$route' (to, from) {
      this.username = this.$route.params.username
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

.hoge {
  color: red;
}
</style>
