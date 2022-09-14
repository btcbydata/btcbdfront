<template>
    <div id="content" style="gap:8px">
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th>COIN</th>
            <th>TICKER</th>
            <th>PRICE($)</th>
            <th>CHANGE IN 24</th>
          </tr>
        </thead>
        <tbody v-for="(item, index) in items" :key="item.name">
          <td v-text="item.name"> </td>
          <td v-text="item.symbol"> </td>
          <td v-text="item.priceUsd"> </td>
          <td v-text="item.changePercent24Hr"> </td>
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
  name: "helloWorld",
  data: () => {
    return {
      items: null
    }
  },
  mounted() {
    this.$axios.get('http://api.coincap.io/v2/assets').then(res => {
      if (Object.keys(res.data.data).length > 0) {
        this.items = res.data.data
      }
    })
  }
}
</script>
td, th {
  padding: 10px;
  border: 1px solid #ccc;
}
<style scoped>


</style>