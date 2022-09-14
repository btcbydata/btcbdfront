<template>
  <header class="navbar sticky-top navbar-expand-lg navigation-clean">
        <h1>
          <router-link class="title-link" to="/">btcbydata</router-link>
        </h1>
  </header>
</template>

<script>
  export default {
    name: "MyHeader"
  }
</script>

<style scoped>

.navbar {
  background:white;
  display:flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  z-index: 999;
  top: -10px;
  width:100%;
  margin-left: 0;
  margin-right: 0;
  box-shadow: 0 5px 5px -5px;
}

a {
  text-decoration: none;
  color: #000000;
}

</style>
