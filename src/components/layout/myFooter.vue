<template>
  <footer>
      <div class="name">lee jihoon</div>
      <div class="email">email : hoonsw23@gmail.com</div>
      <div class="copy">Copytight 2022.</div>
  </footer>
</template>

<script>
    export default {
    name: "MyFooter"
    }
</script>

<style scoped>

footer {
  width:100%;
  bottom:0px;
  height:200px;
  background-color:darkgray ;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
div {
  text-align: center;
  width:100%
}

</style>