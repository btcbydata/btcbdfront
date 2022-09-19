<template>
  <div>
    <MyHeader></MyHeader>
    <div class="errmessage">
    <h1>page does not exists.</h1>
    </div>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from '@/components/layout/myHeader.vue';
import MyFooter from '@/components/layout/myFooter.vue'; // 묶어서 모듈 붙이면 에러 발생
export default {
  name: "404",
  components: {
    MyHeader,
    MyFooter,
  }
}
</script>

<style scoped>

.errmessage {
 height:400px;
 width:100%;
 text-align:center;
 font-size:30pt;
 margin-top: 190px;
}

h1{

}

</style>