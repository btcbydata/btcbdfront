<template>
  <main>
    <div v-if="loading" class="bttn">
    <a class="rel" onClick="window.location.reload()"><i class="fa-solid fa-rotate-right fa-3x"></i></a>
    <span>click to reload chart</span>
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
  </p>

  <div class="charttitle">
      <span>TERM FREQUENCY 기반 이달의 암호화폐</span>
      <span class="dater">: {{this.$store.state.coins[20].date}} 기준 </span>
    </div>
    <div class="container">
      <span class="coiner">
        {{this.$store.state.coins[20].coinnames}}
      </span>
    </div>

    <div class="date_container">
      <span class="explain02"><router-link to="/aboutrecsystem">BERT 감정분석 기반 추천</router-link></span>
      <span class="dater">: {{this.$store.state.coins[20].date}} 기준 </span>
    </div>
    <div class="container">
      <span class="coiner">
        maintaing
      </span>
    </div>

    <div class="charttitle">
      <span>개미지수</span>
    </div>
    <div class="charter">
      restoring... (chart library not working)
    </div>

  </main>
</template>

<script>
import { getDatabase, ref, child, push, update } from "firebase/database";
import '@/plugins/firebase';
import { getCoinList } from '@/api/index.js'
import { ECharts } from '@/components/ECharts.vue'

export default {
  name: "helloWorld",
  data () {
    return {
      items: [],
      loading : false
    }
  },
  mounted() {
    this.loading=true;

    getCoinList()
      .then(res => {
      this.items = res.data;
      console.log(this.items.data[0].priceUsd) // firebase connect check
    });

    this.timer = setInterval("this.getCoinList()", 60000);
  }
}
</script>

<style scoped>
main{
	margin: 0 auto;
	padding: 40px 0 20px 0; /* top right bottom left */
}
.container {
  text-align: center;
  font-size:20pt;
  padding-top:10px;
  padding-bottom:10px;
  width:1000px;
  border:3px solid black;
  font-weight: bold;
}
.charter{
  padding-top:0px;
  text-align: center;
}
.charttitle{
  padding-top:50px;
  text-align: center;
  color:rgb(53, 152, 219);
  font-weight:bold;
  font-size:30pt;
}
.explain02{
  font-size:16pt;
  text-decoration: underline;
}
.date_container{
  text-align: center;
  font-size:14pt;
  font-family: monospace;
  padding-top:50px;
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