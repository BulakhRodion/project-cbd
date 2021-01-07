const state = () => ({
  cart: [],
});
const mutations = {
  CHANGE_CART: (state, payload) => {
    if (state.cart.length) {
      let isAdded = false;
      state.cart.map(function(item) {
        if (item.id === payload.id) {
          isAdded = true;
          item.pcs++;
        }
      });
      if (!isAdded) {
        state.cart = [...state.cart, payload];
      }
    } else {
      state.cart = [...state.cart, payload];
    }
  },
  REMOVE_FROM_CART: (state, index) => {
    state.cart.splice(index, 1);
  },
};
const actions = {
  ADD_TO_CART: async ({ commit }, payload) => {
    commit("CHANGE_CART", payload);
  },
  REMOVE_ITEM: async ({ commit }, index) => {
    commit("REMOVE_FROM_CART", index);
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
