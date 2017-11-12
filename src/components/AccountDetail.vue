<template>
  <b-container>
    <b-button href="/Worker-Observer-Viewer/" variant="primary" size="lg">名前一覧画面に戻る</b-button>
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
  </b-container>
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
</style>
