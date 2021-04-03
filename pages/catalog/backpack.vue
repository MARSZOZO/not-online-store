<template>
  <div>
    <div class="col-3" v-for="(item, index) in productList.backpacks" :key="index">
      <div class="card">
        <div class="card-basket">
          <span @click="addGoodsBasket(index)"><img src="~/assets/basket-empty.svg"/></span>
        </div>
        <div class="center">
          <img :src="item.photo" alt="" />
        </div>
        <ul>
          <li>
            <span class="card-name">{{ item.name }}</span>
          </li>
          <li>
            <span class="card-price">{{ item.price }} ₽</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
	props: {
		productList: { type: Array },
	},
}
</script>
