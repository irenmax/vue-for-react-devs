<template>
  <div class="cheeseContainer" v-for="n in amount" :key="n">
    <div class="cheese" />
  </div>
</template>

<script>
export default {
  name: 'Cheese',
  props: {
    amount: {
      default: 0,
    },
  },
};
</script>

<style scoped>
.cheeseContainer {
  position: relative;
  padding-bottom: 5px;
}
.cheese {
  position: absolute;
  left: -120px;
  top: 0px;
  border-left: 120px solid transparent;
  border-right: 120px solid transparent;
  border-top: 30px solid #e6a91b;
}
</style>
