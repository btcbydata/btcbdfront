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

    <div class="date_container">
      <span class="explain02"><router-link to="/aboutrecsystem">BERT 감정분석 기반 추천</router-link></span>
      <span class="dater">: {{coins[0].date}} 기준 </span>
    </div>
    <div class="container">
      <span class="coiner">
        {{coins[0].coinnames}}
      </span>
    </div>

    <div class="charttitle">
      <span>개미지수</span>
    </div>
    <div class="charter">
      <img src="../assets/antindex.png"> </img>
    </div>

  </main>
</template>

<script>
import { getDatabase, ref, child, push, update } from "firebase/database";
import '@/plugins/firebase';
export default {
  name: "helloWorld",
  data () {
    return {
      items: null,
      coins: [
        {coinnames:'BITCOIN NEM TOPSHOT', date:'2021-03'},{coinnames:'BITCOIN FLOW NEM', date:'2021-04'},{coinnames:'BITCOIN DOGECOIN RIPPLE', date:'2021-05'},{coinnames:'BITCOIN DOGECOIN EINSTEIENIUM', date:'2021-06'},{coinnames:'BITCOIN NEM RIPPLE', date:'2021-07'},{coinnames:'BITCOIN DOGECOIN RIPPLE', date:'2021-08'},{coinnames:'BITCOIN ADTOKEN AELF', date:'2021-09'},{coinnames:'BITCOIN NEM TOPSHOT', date:'2021-10'},{coinnames:'BITCOIN FLOW DOGECOIN', date:'2021-10'},{coinnames:'BITCOIN NEM MATIC', date:'2021-11'},{coinnames:'BITCOIN BOBA BORA', date:'2021-12'},{coinnames:'BITCOIN MIX LUNA', date:'2022-01'},{coinnames:'BITCOIN NEM TOPSHOT', date:'2022-01'},{coinnames:'BITCOIN HUNT MIX', date:'2022-02'},{coinnames:'BITCOIN HUNT MIX', date:'2022-03'},{coinnames:'BITCOIN STEPN TETHER', date:'2022-04'},{coinnames:'BITCOIN TETHER ANKER', date:'2022-05'},{coinnames:'BITCOIN LUNA DOGECOIN', date:'2022-06'},{coinnames:'BITCOIN ZERO TETHER', date:'2022-07'},{coinnames:'BITCOIN TETHER ZERO', date:'2022-08'},{coinnames:'BITCOIN LUNA TETHER', date:'2022-09'}
      ],
      count:0
    }
  },
  mounted() {
    this.$axios.get('https://api.coincap.io/v2/assets').then(res => {
        this.items = res.data;
        console.log(this.$firebase) // firebase connect check
    })
  },
  methods: {
    counter() {
      this.count++
    }
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
  padding-top:20px;
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