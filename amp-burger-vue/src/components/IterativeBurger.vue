<template>
  <div class="burgerContainer">
    <BunTop />
    <Salad />
    <Ingredient
      v-for="i in ingredients"
      :key="i"
      :type="i.type"
      :amount="i.amount"
      :isVeggie="isVeggie"
    />
    <BunBottom />
  </div>
</template>

<script>
import Ingredient from './Ingredient.vue';
import BunTop from './ingredients/BunTop.vue';
import Salad from './ingredients/Salad.vue';
import BunBottom from './ingredients/BunBottom.vue';

export default {
  name: 'IterativeBurger',
  components: {
    Ingredient,
    BunTop,
    Salad,
    BunBottom,
  },
  props: {
    ingredients: Array,
    isVeggie: Boolean,
  },
};
</script>

<style scoped>
.burgerContainer {
  padding-top: 20px;
  width: '100%';
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
