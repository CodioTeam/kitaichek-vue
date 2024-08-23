// stores/user.js
import { defineStore } from 'pinia';

export const useOrderStore = defineStore('order', {
  state: () => ({
    orderDetails: null,
  }),
  actions: {
    setOrderDetails(details) {
      this.orderDetails = details;
    },
  },
});
