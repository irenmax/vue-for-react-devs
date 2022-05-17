import { ref, computed } from 'vue';

export default ({ ingredients }) => {
  const i = ref(ingredients);

  const summary = computed(() => {
    let totalAmount = 0;
    Object.values(i.value).forEach((amount) => {
      totalAmount += amount;
    });
    if (totalAmount > 0) {
      return `Your burger has ${totalAmount} ingredients 🤤`;
    }
    return 'Your burger is empty 😢';
  });
  return { summary };
};
