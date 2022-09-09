<template>
  <div>
    <div id="content">{{ data }}</div>
    <h1>this is HelloWorld.vue</h1>
  </div>
</template>

<script>
export default {
  name: "helloWorld",
  data: () => {
    return {
      data: null
    }
  },
  mounted() {
    this.$axios.get('http://api.coincap.io/v2/assets/bitcoin').then(res => {
      if (Object.keys(res.data.data).length > 0) {
        this.data = res.data.data
      }
    })
  }
}
</script>

<style scoped>

</style>