<template>
  <b-container>
    <b-button href="/#/" variant="primary" size="lg">名前一覧画面に戻る</b-button>

    <b-card nobody>
      <h2> @{{ username }} </h2>
      <b-tabs ref="tabs" card>
        <b-tab title="Names"  active>
          <names-in-account :username="username"></names-in-account>
        </b-tab>
        <b-tab title="Toot Chart">
          <toot-chart :username="username"></toot-chart>
          <h5>※正しい情報とは限らないのでご了承ください</h5>
        </b-tab>
      </b-tabs>
    </b-card>
  </b-container>
</template>

<script>
import TootChart from '@/components/TootChart'
import NamesInAccount from '@/components/NamesInAccount'

export default {
  names: 'AccountDetail',
  data () {
    return {
      username: this.$route.params.username
    }
  },
  components: {
    TootChart,
    NamesInAccount
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
