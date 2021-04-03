<template>
    <div class="header-basket">
      <img
        class="hover-icon"
        @click="handlerOpenBasketPanel"
        src="~/assets/basket-empty.svg"
        alt="basket"
      />
      <template v-if="countGoods.length != 0">
        <div class="count-basket-goods">
          <span>{{ countGoods.length }}</span>
        </div>
      </template>
    </div>
</template>

<script>
export default {
  data() {
    return {
      countGoods: this.$store.getters.BASKET,
    };
  },
  methods: {
    handlerOpenBasketPanel() {
      this.$emit("openBasketPanel");
    },
  },
};
</script>

<style>
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
</style>
