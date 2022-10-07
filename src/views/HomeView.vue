<template>
  <div>
    <MyHeader></MyHeader>
    <Line></Line>
    <HelloWorld></HelloWorld>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from '@/components/layout/myHeader.vue';
import MyFooter from '@/components/layout/myFooter.vue'; // 묶어서 모듈 붙이면 에러 발생
import HelloWorld from '@/components/HelloWorld.vue';
import Line from '@/components/charts/Line.vue';
import { getDatabase, ref, child, push, update } from "firebase/database";
export default {
  name: "home",
  components: {
    MyHeader,
    MyFooter,
    Line,
    HelloWorld
}
}
</script>

<style scoped>

</style>