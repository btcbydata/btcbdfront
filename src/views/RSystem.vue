<template>
  <div>
    <MyHeader></MyHeader>
    <MyExplain02></MyExplain02>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from '@/components/layout/myHeader.vue';
import MyFooter from '@/components/layout/myFooter.vue'; // 묶어서 모듈 붙이면 에러 발생
import MyExplain02 from '@/components/explain02.vue';
export default {
  name: "home",
  components: {
    MyHeader,
    MyFooter,
    MyExplain02
  }
}
</script>

<style scoped>

</style>