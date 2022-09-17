<template>
    <header class="navbar sticky-top navbar-expand-lg navigation-clean">
      <h1>
        <router-link to="/"><a>btcbydata</a></router-link>
      </h1>
    <nav>
      <ul class="navbar-nav text-center">
        <li><a href="https://github.com/btcbydata" target='_blank'><i class="fa-brands fa-github fa-2x"></i></a></li>
        <li><a><router-link to="/whatisbtcbd"><i class="fa-solid fa-circle-info fa-2x"></i></router-link></a></li>
      </ul>
    </nav>
    </header>
</template>

<script>
  export default {
    name: "MyHeader"
  }
</script>

<style scoped>

.wrapper {
  margin : 0 auto;
}
.navbar-nav a{
  padding:0 3px;
}

.navbar {
  background:white;
  display:flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  z-index: 999;
  top: -10px;
  width:100%;
  height:100px;
  margin-left: 0;
  margin-right: 0;
}

a {
  text-decoration: none;
  color: #000000;
}

a:hover {
  color:black
}

</style>
