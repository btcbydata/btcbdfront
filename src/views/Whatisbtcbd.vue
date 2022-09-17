<template>
  <div>
    <MyHeader></MyHeader>
    <MyExplain01></MyExplain01>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from '@/components/layout/myHeader.vue';
import MyFooter from '@/components/layout/myFooter.vue'; // 묶어서 모듈 붙이면 에러 발생
import MyExplain01 from '@/components/explain01.vue';
export default {
  name: "home",
  components: {
    MyHeader,
    MyFooter,
    MyExplain01
  }
}
</script>

<style scoped>

</style>