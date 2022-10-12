<template>
  <main>
    <div v-if="loading" class="bttn">
    <a class="rel" onClick="window.location.reload()"><i class="fa-solid fa-rotate-right fa-3x"></i></a>
    <span>동적인 요소가 작동하지 않아 아래 이미지들은 전부 예시입니다. (표는 리로드시 작동)</span>
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
      <span>TERM FREQUENCY 기반 이달의 암호화폐</span>
      <span class="dater">: {{this.$store.state.coins[20].date}} 기준 </span></br>
      <span class="explain03">명사 빈도수에 기반해 커뮤니티에서 가장 언급이 많이 나온 3가지 종류의 암호화폐를 선정합니다.</span><br/><br/>
    </div>
    <div class="container">
      <span class="coiner">
        {{this.$store.state.coins[20].coinnames}}
      </span>
    </div>

    <div class="date_container">
      <span class="explain02"><router-link to="/aboutrecsystem">BERT 감정분석 기반 추천</router-link></span>
      <span class="dater">: {{this.$store.state.coins[20].date}} 기준 </span></br>
      <span class="explain03">지난 달의 게시글들 중에, 암호화폐 관련 것들만 추리고, 감성분석을 실시하여, 긍정의 비율이 높은 3가지 종류의 암호화폐를 추천합니다.</span><br/><br/>
    </div>
    <div class="container">
      <span class="coiner">
        BITCOIN TETHER EITHERIUM
      </span>
    </div>

    <div class="charttitle">
      <span>개미지수</span>
    </div>
    <div class="charter">
      <span class="explain03">2020년 1월~2021년 9월의 월별 글 갯수 비율을 차트로 표시합니다. 가장 많았을 때의 기준이 1로, 수치가 1에 가까울수록 개인들의 암호화폐 관심도가 높습니다.</span><br/><br/>
      <img src = "@/assets/antindex.png" />
    </div>

    <div class="charttitle">
      <span>호황 지수</span>
    </div>
    <div class="charter">
      <span class="explain03">2020년 1월~2021년 9월의 월별 글들을 자연어처리로 긍/부정을 판별해 차트로 표시합니다. 긍정 비율이 높을수록 호황으로 파악합니다.</span><br/><br/>
      <img src = "@/assets/sentex.png" />
    </div>

    <div class="charttitle">
      <span>지난 주의 커뮤니티 워드클라우드</span><br/>
      <span class="explain03">NLP 모델 등을 사용하는 다른 부분들은 db에 자동 업데이트 시키기 어렵다고 생각하지만 이 부분은 상용 라이브러리도 많고 상대적으로 구현하기 쉽다고 생각해 크롤링-db저장-분석-웹에 띄우기까지 클라우드로 구현할 수 있다면 구현하고자 합니다. </span><br/><br/>
    </div>
    <div class="charter">
      <img src = "@/assets/wordcloudex.jpg"/>
    </div>
    <br/><br/>

  </main>
</template>

<script>
import { getDatabase, ref, child, push, update } from "firebase/database";
import '@/plugins/firebase';
import { getCoinList } from '@/api/index.js'

export default {
  name: "helloWorld",
  data () {
    return {
      items: [],
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
    this.timer = setInterval(()=>
      getCoinList()
        .then(res => {
        this.items = res.data;
        console.log(this.items.data[0].priceUsd)
      })
    , 10000);
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