<template>
  <img alt="Vue logo" src="./assets/logo.png" id="logo" />
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#logo {
  height: 5vmin;
  position: absolute;
  top: 10px;
  left: 10px;
  pointer-events: none;
}
</style>
