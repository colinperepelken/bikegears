<script>
import {Scatter} from 'vue-chartjs'

export default {
  extends: Scatter,
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted() {
   this.render();
  },
  methods: {
    render() {
      this.renderChart(this.chartdata, this.options)
    }
  },
  watch: {
    chartdata() {
      this.render();
    },
    options() {
      this.render();
    }
  }
}
</script>
