<template>
  <div class="tomatoContainer" v-for="n in amount" :key="n">
    <div class="tomato" />
    <div class="tomato" />
  </div>
</template>

<script>
export default {
  name: 'Tomatos',
  props: {
    amount: {
      default: 0,
    },
  },
};
</script>

<style scoped>
.tomatoContainer {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.tomato {
  width: 100px;
  height: 10px;
  background-color: #e7574a;
}
</style>
