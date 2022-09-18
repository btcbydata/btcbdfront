<template>
  <main>
    <div class="bttn">
    <a class="rel" onClick="window.location.reload()"><i class="fa-solid fa-rotate-right fa-3x"></i></a>
    </div>
    <div id="wrapper">
      <table class="table">
        <thead>
            <th>COIN</th>
            <th>TICKER</th>
            <th>PRICE</th>
            <th>CHANGE IN 24hours</th>
        </thead>
        <tbody v-for="(item, index) in 20" :key="items.data[index].priceUsd">
          <tr id="chart">
            <td> {{items.data[index].name}}</td>
            <td> {{items.data[index].symbol}} </td>
            <td> ${{parseFloat(items.data[index].priceUsd).toFixed(4)}} </td>
            <td> {{parseFloat(items.data[index].changePercent24Hr).toFixed(3)}}%</td>
          </tr>
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
      items: null
    }
  },
  mounted() {
    this.$axios.get('https://api.coincap.io/v2/assets').then(res => {
        this.items = res.data;
    })
  },
  watch : {
    'items.data' : {
      handler : function() {
        console.log('items changed')
      }
    }
  }
}
</script>

<style scoped>
main{
	margin: 0 auto;
	padding: 40px 0 20px 0; /* top right bottom left */

}

.rel{
  cursor : pointer;
  color:black;
}

.rel:hover {
  color:black;
}

div#wrapper{
  overflow-x: auto;
}
.bttn {
  text-align:center;
  padding : 10px;
}

table {
  table-layout: fixed;
  width: 700px;
  border-collapse: collapse;
  border: 3px solid black;
  margin-left:auto;
  margin-right:auto;
}
.table tr:hover {
  background-color:	gainsboro
}
table th{
  padding : 12px;
  border-bottom: 2px solid  darkgray;
}
table td{
  padding : 12px;
}
td {
   border:none;
}

</style>