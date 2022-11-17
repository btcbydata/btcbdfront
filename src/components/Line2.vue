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
            borderColor: '#f34e6c',
            borderWidth: 1,
            fill: true,
            backgroundColor: (ctx) => {
              const canvas = ctx.chart.ctx;
              const gradient = canvas.createLinearGradient(0,0,0,450);

              gradient.addColorStop(0, 'rgba(243, 78, 108, 0.4)');
              gradient.addColorStop(.5, 'rgba(243, 78, 108, 0.2)');
              gradient.addColorStop(1, 'rgba(243, 78, 108, 0)');

              return gradient;
            },
            data: [0.446,0.394,0.390,0.403,0.397,0.397,0.407,0.393,0.419,0.422,0.366,0.377]
          },
          {
            label: '2021',
            fill:true,
            borderColor: '#fec20a',
            borderWidth: 1,
            backgroundColor: (ctx) => {
              const canvas = ctx.chart.ctx;
              const gradient = canvas.createLinearGradient(0,0,0,450);

              gradient.addColorStop(0, 'rgba(254, 194, 10, 0.9)');
              gradient.addColorStop(.5, 'rgba(254, 194, 10, 0.25)');
              gradient.addColorStop(1, 'rgba(254, 194, 10, 0)');

              return gradient;
            },
            data: [0.369,0.37,0.386,0.369,0.369,0.360,0.371,0.381,0.375,0.371,0.381,0.361]
          },
          {
            label: '2022',
            fill:true,
            borderColor: '#8dbafe',
            borderWidth: 1,
            backgroundColor: (ctx) => {
              const canvas = ctx.chart.ctx;
              const gradient = canvas.createLinearGradient(0,0,0,450);

              gradient.addColorStop(0, 'rgba(141, 186, 254, 0.9)');
              gradient.addColorStop(.5, 'rgba(141, 186, 254, 0.25)');
              gradient.addColorStop(1, 'rgba(141, 186, 254, 0)');

              return gradient;
            },
            data: [0.356,0.365,0.376,0.358,0.360,0.362,0.367,0.372,0.386,0.361]
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