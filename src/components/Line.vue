<template>
    <LineChartGenerator
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
  </template>

  <script>
  import { Line as LineChartGenerator } from 'vue-chartjs/legacy'

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement
  } from 'chart.js'

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement
  )

  export default {
    name: 'LineChart',
    components: {
      LineChartGenerator
    },
    props: {
      chartId: {
        type: String,
        default: 'line-chart'
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
      }
    },
    data() {
      return {
        chartData: {
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ],
          datasets: [
          {
              label: '2020',
              data: [3080,2985,4840,3136,6395,6205,3306,4806,3822,3455,37353,89911],
              borderColor: '#f34e6c',
              lineTension: 0.3
            },
            {
              label: '2021',
              data: [278255,630817,989007,1341592,1065357,359873,207531,419284,401090,325799,411098,332484],
              borderColor: '#fec20a',
              lineTension: 0.3
            },
            {
              label: '2022',
              data: [241532,160023,133735,128075,208369,145529,94670,79577,36028,45935],
              borderColor: '#8dbafe',
              lineTension: 0.3

            }
          ]
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
            xAxes: [{
                gridLines: {
                    display:false
                }
            }],
            yAxes: [{
                gridLines: {
                    display:false
                }
            }]
    }
        }
      }
    }
  </script>
