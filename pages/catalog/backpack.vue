<template>
  <div>
    <div class="col-3" v-for="(item, index) in productList.backpack" :key="index">
      <div class="card box-shadow b-white">
        <div class="card-rating">
          <img src="~/assets/star.svg"/>
          <span class="f-size-14 f-yellow f-bold position-absolute">{{item.rating}}</span>
        </div>
        <div class="card-basket">
          <span @click="addGoodsBasket(index)"><img class="w-15 pointer hover-icon" src="~/assets/basket-empty.svg"/></span>
        </div>
        <div class="center">
          <img :src="item.photo" alt="" />
        </div>
        <ul>
          <li>
            <span class="f-gray f-nowrap f-size-14">{{ item.name }}</span>
          </li>
          <li>
            <span class="f-black f-bold f-size-18">{{ item.price }} ₽</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
	props: {
		productList: { type: Object|Array },
	},
  data() {
    return {
      loading: false
    }
  },
  methods: {
    addGoodsBasket(index) {
      this.$emit('addGoodBasketBackpackItem', index)
    }
  }
}
</script>
