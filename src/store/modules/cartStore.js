const state = () => ({
  cart: [],
});
const mutations = {
  changeCart: (state, payload) => {
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
  removeFromCart: (state, index) => {
    state.cart.splice(index, 1);
  },
};
const actions = {
  addToCart: async ({ commit }, payload) => {
    commit("changeCart", payload);
  },
  removeItem: async ({ commit }, index) => {
    commit("removeFromCart", index);
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
