<template>
  <div class="burgerContainer">
    <BunTop />
    <Tomatos :amount="ingredients.tomatos" />
    <Salad />
    <Cheese :amount="ingredients.cheese" />
    <Patty
      :amount="ingredients.patty"
      :isVeggie="isVeggie"
      @onClick="$emit('removeIngredient', 'patty')"
    />
    <Pickles :amount="ingredients.pickles" />
    <BunBottom />
  </div>
</template>

<script>
import BunTop from './ingredients/BunTop.vue';
import Tomatos from './ingredients/Tomatos.vue';
import Salad from './ingredients/Salad.vue';
import Cheese from './ingredients/Cheese.vue';
import Patty from './ingredients/Patty.vue';
import Pickles from './ingredients/Pickles.vue';
import BunBottom from './ingredients/BunBottom.vue';

export default {
  name: 'EditableBurger',
  components: {
    BunTop,
    Tomatos,
    Salad,
    Cheese,
    Patty,
    Pickles,
    BunBottom,
  },
  props: {
    ingredients: Object,
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
