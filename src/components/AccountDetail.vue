<template>
  <div>
    <h4> {{ username }} </h4>
    <toot-chart :username=username></toot-chart>
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
