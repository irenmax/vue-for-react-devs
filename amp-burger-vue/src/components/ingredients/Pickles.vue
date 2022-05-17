<template>
  <div class="pickleContainer" v-for="n in amount" :key="n">
    <div class="pickle" />
    <div class="pickle" />
    <div class="pickle" />
  </div>
</template>

<script>
export default {
  name: 'Pickles',
  props: {
    amount: {
      default: 0,
    },
  },
};
</script>

<style scoped>
.pickleContainer {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.pickle {
  background-color: #69995d;
  width: 60px;
  height: 7px;
}
</style>
