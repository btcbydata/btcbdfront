<template>
  <main>
    <div v-if="loading" class="bttn">
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
        <tbody v-for="(item, index) in filteredItems">
          <tr id="chart" :key="item.id">
            <td> {{item.name}}</td>
            <td> {{item.symbol}} </td>
            <td> ${{parseFloat(item.priceUsd).toFixed(6)}} </td>
            <td> {{parseFloat(item.changePercent24Hr).toFixed(5)}}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </p>

  <div class="charttitle">
      <span>호황 지수</span>
    </div>
    <div class="charter_hot">
      <a href="https://colab.research.google.com/drive/16Xhgg1sFX1A8dDU4gUOsvwRxzRmTm577?usp=sharing" target='_blank'>code by colab</a>
        <LineChart2></LineChart2>
    </div>

    <div class="date_container">
      <span class="explain02"><router-link to="/aboutrecsystem">ELECTRA 감정분석 기반 추천   </router-link></span>
      <select name="count2" data-title="MONTH2" v-model="selectBarChartDate">
        <option value="202210">2022/10</option>
        <option value="202209">2022/09</option>
        <option value="202208">2022/08</option>
      </select><br></br>
    </div>
    <div class="container">
      <span class="coiner">
        <BarChart :select-date="selectBarChartDate"></BarChart>
      </span>
    </div>

  <div class="date_container">
      <span>TERM FREQUENCY 기반 이달의 암호화폐   </span>
      <select name="count" data-title="MONTH" v-model="selectPieChartDate">
        <option value="202210">2022/10</option>
        <option value="202209">2022/09</option>
        <option value="202208">2022/08</option>
        <option value="202207">2022/07</option>
        <option value="202206">2022/06</option>
        <option value="202205">2022/05</option>
        <option value="202204">2022/04</option>
        <option value="202203">2022/03</option>
        <option value="202202">2022/02</option>
        <option value="202201">2022/01</option>
        <option value="202112">2021/12</option>
        <option value="202111">2021/11</option>
        <option value="202110">2021/10</option>
        <option value="202109">2021/09</option>
        <option value="202108">2021/08</option>
        <option value="202107">2021/07</option>
        <option value="202106">2021/06</option>
        <option value="202105">2021/05</option>
        <option value="202104">2021/04</option>
        <option value="202103">2021/03</option>
        <option value="202102">2021/02</option>
        <option value="202101">2021/01</option>
        <option value="202012">2020/12</option>
        <option value="202011">2020/11</option>
        <option value="202010">2020/10</option>
        <option value="202009">2020/09</option>
        <option value="202008">2020/08</option>
        <option value="202007">2020/07</option>
        <option value="202006">2020/06</option>
        <option value="202005">2020/05</option>
        <option value="202004">2020/04</option>
        <option value="202003">2020/03</option>
        <option value="202002">2020/02</option>
        <option value="202001">2020/01</option>
      </select><br></br>
    </div>
    <div class="container">
      <span class="coiner">
        <PieChart :select-date="selectPieChartDate"></PieChart>
      </span>
    </div>

    <div class="charttitle">
      <span>개미지수</span>
    </div>
    <div class="charter_ant">
        <LineChart></LineChart>
    </div>

    <div class="charttitle">
      <span>커뮤니티 워드클라우드</span><br/>
      <span class="explain03"></span>
    </div>
    <div class="charter_wordcloud">
      <vue-word-cloud
      style="
        height: 500px;
        width: 1000px;
      "
      :words="[['비트', 3159], ['코인', 2705], ['토스', 2183], ['앱', 2164],['오늘',1816],['위믹스',1540],['숏',1367],['리플',1330],['지금',1291],['도지',1208],['간다',1144],['아파트',1085],['롱',1076],['개',1070],['진짜',1068],['왜',125],['업비트',986],['스테픈',816],['뭐',799],['개추',740],['돈',690],['좀',661],['매수',558],['이유',557],['말',555],['내',553],['사람',549],['때',547],['나',542],['이제',529],['알트',527],['빗썸',490],['세력',489],['또',485],['상장',469]]"
      :color="([, weight]) => weight > 2000 ? 'DeepPink' : weight > 1000 ? 'GreenYellow' : weight > 700 ? 'DArkOrange' : weight > 600 ? 'RosyBrown' : weight > 500 ? 'RoyalBlue' : 'Indigo'"
      font-family="Roboto"
      />
    </div>
    <br/><br/>

  </main>
</template>

<script>
import { getCoinList } from '@/api/index.js';
import LineChart from '@/components/Line.vue'; // chart.js 라이브러리 임포트
import LineChart2 from '@/components/Line2.vue';
import BarChart from '@/components/Bar.vue'
import PieChart from '@/components/Pie.vue';
import VueWordCloud from 'vuewordcloud'; // vuewordcloud 라이브러리 임포트

export default {
  name: "helloWorld",
  components : {
    LineChart,
    PieChart,
    LineChart2,
    BarChart,
    [VueWordCloud.name]: VueWordCloud
  },
  data() {
    return {
      items: [],
      selectPieChartDate: '202210',
      selectBarChartDate: '202210'
    }
  },
  computed: {
    filteredItems: function () {
      if(this.items.data) {
        return this.items.data.slice(0,20)
      } else {
        return []
      }
    }
  },
  created() {

    getCoinList().then(res=>{
      this.items=res.data;
    }
    )

    this.timer = setInterval(()=>
      getCoinList()
        .then(res => {
        this.items = res.data;
        console.log(this.items.data[0].priceUsd)
      })
    ,10000)
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
  width:500px;
  border:3px solid black;
  font-weight: bold;
}
.charter_ant{
  padding-top:0px;
  text-align: center;
  margin:auto;
  height:500px;
  width:1000px;
}
.charter_hot{
  padding-top:0px;
  text-align: center;
  margin:auto;
  height:500px;
  width:1000px;
}
.charter_wordcloud{
  padding-top:0px;
  text-align: center;
  margin:auto;
  height:500px;
  width:1000px;
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
.explain03{
  font-size:10pt;
  color:red;
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