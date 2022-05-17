<template>
  <div class="burgerContainer">
    <BunTop />
    <Tomatos amount="1" />
    <Salad />
    <Cheese amount="1" />
    <Patty amount="1" />
    <Pickles amount="1" />
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
  name: 'SimpleBurger',
  components: {
    BunTop,
    Tomatos,
    Salad,
    Cheese,
    Patty,
    Pickles,
    BunBottom,
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
