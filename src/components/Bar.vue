<template>
    <div>
    <Bar
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"/>
    {{ selectDate }}
    </div>
  </template>

  <script>
  import { Bar } from 'vue-chartjs/legacy'

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    Filler,
    BarElement,
    CategoryScale,
    LinearScale
  } from 'chart.js'

  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

  export default {
    name: 'BarChart',
    components: {
      Bar
    },
    props: {
      chartId: {
        type: String,
        default: 'bar-chart'
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
        default: () => {}
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
                labels: ['ETHERIUM','BITCOIN','ARGO'],
                data: [54.5, 54.3, 53.7]
                },
                "202209": {
                labels: ['STEPHN','WAVE','WEMIX'],
                data: [56.8,54,52.8]
                },
                "202208": {
                labels: ['BITCOIN', 'ETHERIUM','WEMIX'],
                data: [53.3,54.4,51.2]
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
                labels:[null,null,null],
                backgroundColor: ['#fa7497', '#209bde', '#ffb717'],
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
