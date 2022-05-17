<template>
  <Tomatos v-if="type === 'tomatos'" :amount="amount" />
  <Patty v-if="type === 'patty'" :amount="amount" :isVeggie="isVeggie" />
  <Pickles v-if="type === 'pickles'" :amount="amount" />
  <Cheese v-if="type === 'cheese'" :amount="amount" />
</template>

<script>
import Tomatos from './ingredients/Tomatos.vue';
import Cheese from './ingredients/Cheese.vue';
import Patty from './ingredients/Patty.vue';
import Pickles from './ingredients/Pickles.vue';

export default {
  name: 'Ingredient',
  components: {
    Tomatos,
    Cheese,
    Patty,
    Pickles,
  },
  props: {
    amount: {
      default: 0,
    },
    type: String,
    isVeggie: Boolean,
  },
};
</script>
