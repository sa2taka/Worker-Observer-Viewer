<script>
export default {
}
</script>

<style lang="css">
</style>


<script>
import { Line } from 'vue-chartjs'
import ajaxMix from '@/ajaxMix'

export default {
  name: 'TootChart',
  extends: Line,
  mixins: [ajaxMix],
  props: ['username'],
  data () {
    return {
      counts: []
    }
  },
  mounted () {
    this.renderChart()
    this.get_ajax('toot_counts?username=' + this.username, 'counts', this, function (klass) {
      let options = {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [ {
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
      klass.renderChart({ labels: klass.labels, datasets: klass.datasets }, options)
    })
  },
  computed: {
    datasets: function () {
      let label = this.username + "'s toots count"
      const data = []
      for (let i in this.counts) {
        data.push(this.counts[i].y)
      }
      return [ { label: label, data: data } ]
    },
    labels: function () {
      let retVal = []
      for (let i in this.counts) {
        retVal.push(this.counts[i].x)
      }
      return retVal
    }
  }
}
</script>
