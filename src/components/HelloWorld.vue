<template>
  <main>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th>COIN</th>
            <th>TICKER</th>
            <th>PRICE($)</th>
            <th>CHANGE IN 24</th>
          </tr>
        </thead>
        <tbody v-for="(item, index) in 15" :key="index">
          <td> {{items.data[index].name}}</td>
          <td> {{items.data[index].symbol}} </td>
          <td> {{items.data[index].priceUsd}} </td>
          <td> {{items.data[index].changePercent24Hr}}</td>
        </tbody>
      </table>
    </div>

    <div class="container">
      <p class="jb-font-weight:bold jb-font-size:xx-large">there will be another table</p>
    </div>
  </main>
</template>

<script>
export default {
  name: "helloWorld",
  data () {
    return {
      items: []
    }
  },
  mounted() {
    this.$axios.get('https://api.coincap.io/v2/assets').then(res => {
        this.items = res.data;
    })
  }
}
</script>

<style scoped>
main{
	margin: 0 auto;
	border-bottom: 1px solid #000000;
	padding: 40px 0 20px 0; /* top right bottom left */

}
table th{
      padding : 12px;
      border-bottom: 2px solid  darkgray;
}
table td{
  padding : 12px;
}

</style>