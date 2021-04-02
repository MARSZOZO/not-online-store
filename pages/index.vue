<template>
  <div class="row">
    <span @click="sortingOfGoods('price')">По цене</span>
    <span @click="sortingOfGoods('rating')">По популярности</span>
    <div class="col-3" v-for="(item, index) in catalogList" :key="index">
      <div class="card">
        <div class="card-basket">
          <span @click="addGoodsBasket(index)"><img src="~/assets/basket-empty.svg"></span>
        </div>
        <div class="center">
          <img :src="item.photo" alt="">
        </div>
        <ul>
          <li><span class="card-name">{{item.name}}</span></li>
          <li><span class="card-price">{{item.price}} ₽</span></li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      catalogList: []
    }
  },
  mounted () {
    this.getCatalog()
  },
  methods: {
    getCatalog() {
      let catalog = this.$store.getters.BACKPACKS
      this.catalogList = catalog
    },
    sortingOfGoods(typeSort) {
      let catalog = this.catalogList
      if(typeSort == 'price'){
        catalog.sort(function(a , b) {
            return a.price - b.price;
        });
        catalog.reverse();
      }
    },
    addGoodsBasket(index) {
      this.$store.dispatch("GET_BASKET_ITEM", this.catalogList[index]);
    }
  },
}
</script>

<style>
.card {
  background: #FFFFFF;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 16px;
  position: relative;
}
.card-name {
  font-size: 14px;
  line-height: 18px;
  color: #59606D;
  white-space: nowrap;
}
.card-price {
  font-size: 18px;
  line-height: 18px;
  color: #1F1F1F;
  font-weight: bold;
}
.card-basket {
  position: absolute;
  right: 18px;
  top: 18px;
}
.card-basket > span > img {
  width: 15px;
  cursor: pointer;
}
</style>



