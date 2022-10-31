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
  Filler,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  Filler,
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
            borderColor: '#FC2525',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            radius: 0,
            fill: true,
            pointBorderColor: 'white',
            backgroundColor: (ctx) => {
              const canvas = ctx.chart.ctx;
              const gradient = canvas.createLinearGradient(0,0,0,450);

              gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)');
              gradient.addColorStop(.5, 'rgba(255, 0, 0, 0.25)');
              gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');

              return gradient;
            },
            data: [40, 39, 10, 40, 39, 80, 40,30,80,15,66,57]
          },
          {
            label: '2021',
            fill:true,
            borderColor: '#05CBE1',
            pointBackgroundColor: 'white',
            pointBorderColor: 'white',
            borderWidth: 1,
            backgroundColor: (ctx) => {
              const canvas = ctx.chart.ctx;
              const gradient = canvas.createLinearGradient(0,0,0,160);

              gradient.addColorStop(0, 'rgba(0, 231, 255, 0.9)');
              gradient.addColorStop(.5, 'rgba(0, 231, 255, 0.25)');
              gradient.addColorStop(1, 'rgba(0, 231, 255, 0)');

              return gradient;
            },
            data: [40, 39, 10, 40, 39, 80, 40]
          },
          {
            label: '2022',
            fill:true,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            data: [10, 22, 33, 44, 55, 66, 77]
          },
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
}
</script>