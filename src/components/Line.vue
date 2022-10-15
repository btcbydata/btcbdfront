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
              label: '2021',
              data: [0.214, 0.488, 0.745, 1.0, 0.816, 0.285, 0.163, 0.321, 0.307, 0.249, 0.31, 0.258],
              borderColor: 'red',
              lineTension: 0.3
            },
            {
              label: '2022',
              data: [0.185, 0.122, 0.104, 0.096, 0.165, 0.111, 0.072, 0.059, 0.025],
              borderColor: 'blue',
              lineTension: 0.3

            }
          ]
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
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
  }
  </script>
