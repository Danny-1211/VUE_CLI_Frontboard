<template>
  <function-navbar></function-navbar>
  <!-- <nav>
    <router-link to="/">首頁</router-link> |
    <router-link to="dashBoard">登入</router-link>
  </nav> -->
  <router-view/>
</template>

<script>
import functionNavbar from '@/components/functionNavbar.vue';
export default {
  components: {
    functionNavbar
  }
};
</script>

<style lang="scss">
@import "bootstrap/scss/bootstrap";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
