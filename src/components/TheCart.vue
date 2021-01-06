<template>
  <v-dialog
    transition="dialog-top-transition"
    max-width="800"
    class="cbd-nav__cart-modal"
  >
    <template v-slot:activator="{ on, attrs }">
      <button v-bind="attrs" v-on="on" class="cbd-nav__list-btn">
        Cart({{ cart.length }})
      </button>
    </template>
    <template v-slot:default="dialog">
      <v-card class="cbd-nav__cart">
        <div class="cbd-nav__cart-header">Your cart</div>
        <div class="cbd-nav__cart-main">
          <h3 class="cbd-nav__cart-title">Your purchases</h3>
          <ul class="cbd-nav__purchases-list">
            <li
              class="cbd-nav__purchases-item"
              v-for="(item, index) in cart"
              :key="item.id"
              :class="{ remove: deleteProduct }"
            >
              <div class="cbd-nav__purchases-info">
                <span class="cbd-nav__purchases-item-name">{{
                  item.title
                }}</span>
                <span class="cbd-nav__purchases-item-price"
                  >${{ item.price }} USD</span
                >
                <span class="cbd-nav__purchases-item-peaces"
                  >({{ item.pcs }} pcs)</span
                >
              </div>
              <button
                class="cbd-nav__purchases-remove"
                @click="
                  showRemoving();
                  removeProduct(index);
                "
              >
                Remove
              </button>
            </li>
          </ul>
        </div>
        <v-card-actions class="justify-end">
          <v-btn text @click="dialog.value = false" class="cbd-nav__cart-close"
            >Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      deleteProduct: false,
    };
  },
  methods: {
    ...mapActions("cartStore", ["removeItem"]),
    removeProduct(index) {
      setTimeout(() => {
        this.removeItem(index);
      }, 600);
    },
    showRemoving() {
      this.deleteProduct = !this.deleteProduct;
      setTimeout(() => {
        this.deleteProduct = !this.deleteProduct;
      }, 600);
    }
  },
  computed: {
    ...mapState("cartStore", ["cart"]),
  },
};
</script>
