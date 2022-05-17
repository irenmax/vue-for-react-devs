<template>
  <div class="container">
    <h1>Welcome to amp burgerz 👋</h1>
    <BurgerBuilderControls
      :isVeggie="isVeggie"
      @toggleVeggie="toggleVeggie"
      @addIngredient="addIngredient"
    />

    <IterativeBurger :isVeggie="isVeggie" :ingredients="ingredients" />
  </div>
</template>

<script>
import BurgerBuilderControls from '../components/BurgerBuilderControls.vue';
import IterativeBurger from '../components/IterativeBurger.vue';

export default {
  name: 'BurgerBuilderIterative',
  components: {
    BurgerBuilderControls,
    IterativeBurger,
  },
  data() {
    return {
      isVeggie: true,
      ingredients: [],
    };
  },
  methods: {
    toggleVeggie() {
      this.isVeggie = !this.isVeggie;
    },
    addIngredient(key) {
      this.ingredients = [{ type: key, amount: 1 }, ...this.ingredients];
    },
  },
};
</script>

<style scoped>
.container {
  padding-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
