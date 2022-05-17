<template>
  <div v-for="n in amount" :key="n" @click="$emit('onClick')">
    <VeggiePatty v-if="isVeggie" />
    <BeefPatty v-else />
  </div>
</template>

<script>
import VeggiePatty from './VeggiePatty.vue';
import BeefPatty from './BeefPatty.vue';

export default {
  name: 'Patty',
  components: {
    VeggiePatty,
    BeefPatty,
  },
  props: {
    isVeggie: {
      type: Boolean,
      default: true,
    },
    amount: {
      defalut: 0,
    },
  },
  emits: {
    onClick() {
      return true;
    },
  },
};
</script>

<style></style>
