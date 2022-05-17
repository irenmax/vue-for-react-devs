<template>
  <div class="controlsContainer">
    <Button title="Add Tomatos 🍅" @onClick="addIngredient('tomatos')" />
    <Button title="Add Patty 🍔" @onClick="addIngredient('patty')" />
    <Button title="Add Cheese 🧀" @onClick="addIngredient('cheese')" />
    <Button title="Add Pickles 🥒" @onClick="addIngredient('pickles')" />
    <div class="toggles">
      <div>
        <input
          id="veggie"
          type="radio"
          value="true"
          :checked="isVeggie"
          @change="$emit('toggleVeggie')"
        />
        <label htmlFor="veggie" class="toggleLabel">Veggie 🥬</label>
      </div>
      <div>
        <input
          id="beef"
          type="radio"
          value="false"
          :checked="!isVeggie"
          @change="$emit('toggleVeggie')"
        />
        <label htmlFor="beef" class="toggleLabel">Beef 🍖</label>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'BurgerBuilderControls',
  components: {
    Button,
  },
  props: {
    isVeggie: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    addIngredient(key) {
      this.$emit('addIngredient', key);
    },
  },
};
</script>

<style scoped>
.controlsContainer {
  width: 400px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 5px;
}
.toggles {
  padding-top: 10px;
}
.toggleLabel {
  padding-right: 10px;
  font-size: 20px;
}
</style>
