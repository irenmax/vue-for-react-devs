<template>
  <div class="container">
    <h1>Welcome to amp burgerz 👋</h1>
    <!---
    <p>{{ summary }}</p>
    ---->
    <BurgerBuilderControls
      :isVeggie="isVeggie"
      @toggleVeggie="toggleVeggie"
      @addIngredient="addIngredient"
    />

    <EditableBurger
      :isVeggie="isVeggie"
      :ingredients="ingredients"
      @removeIngredient="removeIngredient"
    />
  </div>
</template>

<script>
import BurgerBuilderControls from '../components/BurgerBuilderControls.vue';
import EditableBurger from '../components/EditableBurger.vue';
// import summary from '../mixins/summary';
// import useSummary from '../compositions/useSummary';

export default {
  name: 'BurgerBuilder',
  components: {
    BurgerBuilderControls,
    EditableBurger,
  },
  //  mixins: [summary],
  data() {
    return {
      isVeggie: true,
      ingredients: {
        tomatos: 0,
        cheese: 0,
        patty: 0,
        pickles: 0,
      },
    };
  },
  methods: {
    toggleVeggie() {
      this.isVeggie = !this.isVeggie;
    },
    addIngredient(key) {
      this.ingredients[key] += 1;
    },
    removeIngredient(key) {
      if (this.ingredients[key] > 0) {
        this.ingredients[key] -= 1;
      }
      return true;
    },
  },

  // computed: {
  //   summary() {
  //     let totalAmount = 0;
  //     Object.values(this.ingredients).forEach((amount) => {
  //       totalAmount += amount;
  //     });
  //     if (totalAmount > 0) {
  //       return `Your burger has ${totalAmount} ingredients 🤤`;
  //     }
  //     return 'Your burger is empty 😢';
  //   },
  //
  //   summary() {
  //     const { summary } = useSummary({ ingredients: this.ingredients });
  //     return summary.value;
  //   },
  // },
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
