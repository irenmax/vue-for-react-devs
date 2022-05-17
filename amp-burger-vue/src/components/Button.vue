<template>
  <button class="button" @click="$emit('onClick')">{{ title }}</button>
</template>

<script>
export default {
  name: 'Button',
  components: {},
  props: {
    title: String,
  },
};
</script>

<style scoped>
.button {
  width: 180px;
  height: 50px;
  font-size: 18px;
  background-color: #98d7d6;
  border-radius: 7px;
}
</style>
