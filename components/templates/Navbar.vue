<template>
  <div class="header-basket">
    <img
      class="hover-icon"
      @click="handlerOpenBasketPanel"
      src="~/assets/basket-empty.svg"
      alt="basket"
    />
    <template v-if="BASKET.length != 0">
      <div class="count-basket-goods">
        <span>{{ BASKET.length }}</span>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["BASKET"]),
  methods: {
    handlerOpenBasketPanel() {
      this.$emit("openBasketPanel");
    },
  },
};
</script>

<style >
.count-basket-goods {
  position: absolute;
  top: -9px;
  right: -13px;
  background: #959dad;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.count-basket-goods > span {
  font-weight: bold;
  font-size: 11px;
  color: white;
}
</style>>

