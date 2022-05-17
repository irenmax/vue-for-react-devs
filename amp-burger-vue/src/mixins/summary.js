export default {
  computed: {
    summary() {
      let totalAmount = 0;
      Object.values(this.ingredients).forEach((amount) => {
        totalAmount += amount;
      });
      if (totalAmount > 0) {
        return `Your burger has ${totalAmount} ingredients 🤤`;
      }
      return 'Your burger is empty 😢';
    },
  },
};
