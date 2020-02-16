<template>
  <div id="app">
    <index />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
</style>

<script>
import index from "./components/index.vue";
export default {
  components: {
    index
  }
};
</script>
