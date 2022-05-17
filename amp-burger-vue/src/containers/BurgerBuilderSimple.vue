<template>
  <div class="container">
    <h1>Welcome to amp burgerz 👋</h1>
    <SimpleBurger />
  </div>
</template>

<script>
import SimpleBurger from '../components/SimpleBurger.vue';

export default {
  name: 'BurgerBuilderSimple',
  components: {
    SimpleBurger,
  },
};
</script>

<style scoped>
.container {
  padding-top: 30px;
  text-align: 'center';
}
</style>
