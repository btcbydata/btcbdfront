<template>
  <div>
    <Pie :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
      :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
    {{ selectDate }}
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs/legacy'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {
  name: 'PieChart',
  components: {
    Pie
  },
  props: {
    chartId: {
      type: String,
      default: 'pie-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => { }
    },
    plugins: {
      type: Array,
      default: () => []
    },
    selectDate: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      coinDatas: {
        "202210": {
          labels: ['BITCOIN', 'LUNA', 'ARGO', 'WAVE', 'RAVN', 'GOLEM', 'ETHERIUM'],
          data: [3460, 1099, 883, 677, 662, 540, 442]
        },
        "202209": {
          labels: ['BITCOIN', 'WEMIX', 'RIPPLE', 'DOGE', 'STEPHN', 'GAS', 'WAVE'],
          data: [3677, 1540, 1330, 1208, 816, 446, 394]
        },
        "202208": {
          labels: ['BITCOIN', 'TETHER', 'ETERIUM', 'BANCA', 'LUNA'],
          data: [198, 19, 13, 13, 8]
        },
        "202207": {
          labels: ['BITCOIN', 'TOPGUN', 'TAVE', 'BANCA', 'ETHERIUM', 'TETHER'],
          data: [242, 30, 19, 18, 14, 13]
        },
        "202206": {
          labels: ['BITCOIN', 'LUNA', 'DOGE', 'AIDA', 'SOLANA', 'TRON', 'TETHER'],
          data: [276, 58, 30, 29, 28, 26, 26]
        },
        "202205": {
          labels: ['BITCOIN', 'TETHER', 'ANKER', 'WEMIX', 'BANCA', 'UST', 'STEPHN'],
          data: [591, 152, 59, 49, 44, 43, 28]
        },
        "202204": {
          labels: ['BITCOIN', 'STEPHN', 'TETHER', 'WAVE', 'LUNA', 'BANCA', 'DOGE'],
          data: [304, 87, 32, 29, 28, 26, 23]
        },
        "202203": {
          labels: ['BITCOIN', 'WEMIX', 'RIPPLE', 'ZENCOIN', 'LUNA', 'BORA', 'BANCA'],
          data: [388, 31, 28, 24, 22, 21, 17]
        },
        "202202": {
          labels: ['BITCOIN', 'WEMIX', 'RIPPLE', 'LUNA', 'BORA', 'BANCA', 'ANKER'],
          data: [348, 31, 28, 22, 21, 17, 16]
        },
        "202112": {
          labels: ['BITCOIN', 'WEMIX', 'RIPPLE', 'DOGE', 'STEPHN', 'GAS', 'WAVE'],
          data: [3677, 1540, 1330, 1208, 816, 446, 394]
        },
        "202111": {
          labels: ['BITCOIN', 'WEMIX', 'RIPPLE', 'LUNA', 'BORA', 'BANCA', 'ANKER'],
          data: [348, 31, 28, 22, 21, 17, 16]
        },
        "202110": {
          labels: ['BITCOIN', 'WEMIX', 'RIPPLE', 'LUNA', 'BORA', 'BANCA', 'ANKER'],
          data: [348, 31, 28, 22, 21, 17, 16]
        },
        "202109": {
          labels: ['BITCOIN', 'WEMIX', 'RIPPLE', 'LUNA', 'BORA', 'BANCA', 'ANKER'],
          data: [348, 31, 28, 22, 21, 17, 16]
        },
        "202108": {
          labels: ['BITCOIN', 'WEMIX', 'RIPPLE', 'LUNA', 'BORA', 'BANCA', 'ANKER'],
          data: [348, 31, 28, 22, 21, 17, 16]
        },
        "202107": {
          labels: ['BITCOIN', 'WEMIX', 'RIPPLE', 'LUNA', 'BORA', 'BANCA', 'ANKER'],
          data: [348, 31, 28, 22, 21, 17, 16]
        },
        "202106": {
          labels: ['BITCOIN', 'WEMIX', 'RIPPLE', 'LUNA', 'BORA', 'BANCA', 'ANKER'],
          data: [348, 31, 28, 22, 21, 17, 16]
        },
        "202105": {
          labels: ['BITCOIN', 'WEMIX', 'RIPPLE', 'LUNA', 'BORA', 'BANCA', 'ANKER'],
          data: [348, 31, 28, 22, 21, 17, 16]
        },
        "202104": {
          labels: ['BITCOIN', 'WEMIX', 'RIPPLE', 'LUNA', 'BORA', 'BANCA', 'ANKER'],
          data: [348, 31, 28, 22, 21, 17, 16]
        },
        "202103": {
          labels: ['BITCOIN', 'WEMIX', 'RIPPLE', 'LUNA', 'BORA', 'BANCA', 'ANKER'],
          data: [348, 31, 28, 22, 21, 17, 16]
        },
        "202102": {
          labels: ['BITCOIN', 'WEMIX', 'RIPPLE', 'LUNA', 'BORA', 'BANCA', 'ANKER'],
          data: [348, 31, 28, 22, 21, 17, 16]
        },
        "202101": {
          labels: ['BITCOIN', 'WEMIX', 'RIPPLE', 'LUNA', 'BORA', 'BANCA', 'ANKER'],
          data: [348, 31, 28, 22, 21, 17, 16]
        }
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  computed: {
    chartData() {
      if (this.selectDate.length > 0) {
        return {
          labels: this.coinDatas[this.selectDate].labels,
          datasets: [
            {
              backgroundColor: ['#50D0D0', '#BE1E3E', '#7967C3', '#FFC639', '#A6CEB6', '#D75BEC', '#E5461C'],
              data: this.coinDatas[this.selectDate].data
            }
          ]
        }
      } else {
        null
      }
    }
  }
}
</script>