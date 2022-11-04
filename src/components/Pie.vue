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
          labels: ['BOBA', 'ETHERIUM', 'BORA', 'WEMIX', 'BITCOIN', 'BANCA', 'RIPPLE'],
          data: [236,234,155,128,83,76,63]
        },
        "202111": {
          labels: ['BITCOIN','ETHERIUM','SOLANA','FLOW','DOGE','POLYGON','NUCYPHER'],
          data: [820,212,137,126,120,97,75]
        },
        "202110": {
          labels: ['BITCOIN', 'WEMIX', 'RIPPLE', 'LUNA', 'BORA', 'BANCA', 'ANKER'],
          data: [ ]
        },
        "202109": {
          labels: ['BITCOIN', 'BITCOIN CASH ABC', 'ETHERIUM', 'SOLANA', 'EDCHAIN', 'RIPPLE', 'ELF'],
          data: [523,352,217,156,91,85,58]
        },
        "202108": {
          labels: ['BITCOIN', 'BITCOIN CASH ABC', 'ETHERIUM', 'SOLANA', 'DOGE', 'RIPPLE', 'ALCHEMY'],
          data: [619,395,265,150,81,80,77]
        },
        "202107": {
          labels: ['BITCOIN', 'DOGE', 'ETHERIUM', 'TETHER', 'BANCA', 'SOLANA', 'SENTINEL'],
          data: [1365, 1111,756,171,157,114,113]
        },
        "202106": {
          labels: ['BITCOIN', 'DOGE', 'EC2', 'MARO', 'RIPPLE', 'PICA', 'TFUEL'],
          data: [1047,195,152,81,60,60,56]
        },
        "202105": {
          labels: ['BITCOIN', 'WEMIX', 'RIPPLE', 'LUNA', 'BORA', 'BANCA', 'ANKER'],
          data: [ ]
        },
        "202104": {
          labels: ['BITCOIN', 'WEMIX', 'RIPPLE', 'LUNA', 'BORA', 'BANCA', 'ANKER'],
          data: [348, 31, 28, 22, 21, 17, 16]
        },
        "202103": {
          labels: ['DKARGO', 'CHILIZ', 'ARGO', 'PAYCOIN', 'NEM', 'AIDA', 'PIXEL'],
          data: [13551,8024,6284,6578,3993,3524]
        },
        "202102": {
          labels: ['ALPHA','GAS','BITCOIN','DOGE','AIDA','METAL','STEEM DOLLAR'],
          data: [14856,10091,8159,7163,5903,3424,2668]
        },
        "202101": {
          labels: ['BITCOIN', 'WEMIX', 'RIPPLE', 'LUNA', 'BORA', 'BANCA', 'ANKER'],
          data: [348, 31, 28, 22, 21, 17, 16]
        },
        "202012": {
          labels: ['RIPPLE','BITCOIN','REFEREUM','AMBLE','ETERIUM','STEEM DOLLAR','OBSERVER'],
          data: [15233,6433,3233,2606,1956,1723,1491]
        },
        "202011": {
          labels: ['RIPPLE', 'BITCOIN','STELLAR', 'AIDA', 'ADAPTER', 'POLARIS', 'BITCOIN CASH'],
          data: [8222,2191,1128,816,608,524,119]
        },
        "202010": {
          labels: ['BITCOIN', 'ETHERIUM', 'CATO', 'RIPPLE', 'AMPL', 'MIRAQLE', 'REX'],
          data: [386,115,71,44,40,37,37]
        },
        "202009": {
          labels: ['BITCOIN', 'RIPPLE', 'ETHERIUM', 'BITCOIN CASH', 'ANKER', 'CHAINLINK', 'AHATOKEN'],
          data: [481,210,186,73,70,53,53]
        },
        "202008": {
          labels: ['BITCOIN', 'AHATOKEN', 'CHAINLINK', 'ESSEKTOV', 'ETHERIUM', 'RIPPLE', 'BAT'],
          data: [287,97,94,65,52,49,43]
        },
        "202007": {
          labels: ['BITCOIN', 'WEMIX', 'RIPPLE', 'LUNA', 'BORA', 'BANCA', 'ANKER'],
          data: [348, 31, 28, 22, 21, 17, 16]
        },
        "202006": {
          labels: ['BITCOIN', 'ZILLICA', 'ZENCASH', 'ETHERIUM', 'FIZZ', 'CHAINLINK', 'EOS'],
          data: [464,146,100,84,82,81,78]
        },
        "202005": {
          labels: ['BITCOIN', 'QUEENBEE', 'STEEM', 'PLAY', 'PUNDIX', 'THUNDER', 'FIZZ'],
          data: [665,207,157,98,88,84,56]
        },
        "202004": {
          labels: ['BITCOIN', 'RIPPLE', 'CHAINLINK', 'STEEM', 'METAL', 'WAX', 'ETHERIUM'],
          data: [420,75,27,26,23,22,22]
        },
        "202003": {
          labels: ['BITCOIN', 'RIPPLE', 'CHAINLINK', 'STEEM', 'EMC2', 'HEDERA', 'BITCOIN CASH'],
          data: [816,122,28,23,20,16,15]
        },
        "202002": {
          labels: ['BITCOIN', 'RIPPLE', 'MOVIEBLOC', 'MLK', 'WAX', 'COSMO CHAIN', 'F1ZZ'],
          data: [273, 82, 67, 36, 36, 34, 23]
        },
        "202001": {
          labels: ['BITCOIN', 'RIPPLE', 'BITCOIN CASH', 'CHAINLINK', 'BITCOIN GOLD', 'EOS', 'TRON'],
          data: [557, 93, 32, 28, 23, 22, 18]
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