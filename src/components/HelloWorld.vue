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
      </select><br></br>
      <span class="explain03">명사 빈도수에 기반해 커뮤니티에서 가장 언급이 많이 나온 암호화폐 파이 차트를 보여줍니다.</span><br/><br/>
    </div>
    <div class="container">
      <span class="coiner">
        <PieChart :select-date="selectPieChartDate"></PieChart>
      </span>
    </div>

    <div class="date_container">
      <span class="explain02"><router-link to="/aboutrecsystem">ELECTRA 감정분석 기반 추천</router-link></span>
      <span class="dater">: {{this.$store.state.coins[20].date}} 기준 </span></br>
      <span class="explain03">2020년 1월~2022년 9월 글에 감성분석을 실시하여, 긍정의 비율이 높은 암호화폐를 추천합니다.</span><br/><br/>
    </div>
    <div class="container">
      <span class="coiner">
        BITCOIN TETHER EITHERIUM
      </span>
    </div>

    <div class="charttitle">
      <span>개미지수</span>
    </div>
    <div class="charter_ant">
      <span class="explain03">2020년 1월~2022년 9월의 월별 글 갯수 비율을 차트로 표시합니다. 가장 많았을 때의 기준이 1로, 수치가 1에 가까울수록 개인들의 암호화폐 관심도가 높습니다.</span><br/><br/>
        <LineChart></LineChart>
    </div>

    <div class="charttitle">
      <span>호황 지수</span>
    </div>
    <div class="charter_hot">
      <span class="explain03">2020년 1월~2022년 9월의 월별 글들을 자연어처리로 긍/부정을 판별해 차트로 표시합니다. 긍정 비율이 높을수록 호황으로 파악합니다.</span><br/><br/>
        <LineChart2></LineChart2>
    </div>

    <div class="charttitle">
      <span>커뮤니티 워드클라우드</span><br/>
      <span class="explain03"></span>
    </div>
    <div class="charter_wordcloud">
      <img src = "@/assets/wordcloudex.jpg"/>
    </div>
    <br/><br/>

  </main>
</template>

<script>
import { getCoinList } from '@/api/index.js';
import LineChart from '@/components/Line.vue'; // chart.js 라이브러리 임포트
import LineChart2 from '@/components/Line2.vue';
import PieChart from '@/components/Pie.vue';
import VueWordCloud from 'vuewordcloud'; // vuewordcloud 라이브러리 임포트

export default {
  name: "helloWorld",
  components : {
    LineChart,
    PieChart,
    LineChart2,
    [VueWordCloud.name]: VueWordCloud
  },
  data() {
    return {
      items: [],
      selectPieChartDate: '202210'
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
  width:1000px;
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