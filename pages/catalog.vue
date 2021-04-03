<template>
  <div class="row">
    <div class="col-12">
      <div class="row right">
        <div class="col-12">
          <img class="sort-rating-icon" src="~/assets/sort-icon.svg" alt="" />
          <select name="sortBy" id="sortBy" @change="sortingOfGoods(sortType)" v-model="sortType">
            <option v-for="(item, index) in sortOptions" :value="item.value" :key="index">{{item.text}}</option>
          </select>
        </div>
      </div>
      <div class="row">
          <nuxt-child
           :productList="productList"
        />
      </div>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      productList: [],
      sortType: 'ratingUp',
      sortOptions: [
        { text: 'По популярности', value: 'ratingUp' },
        { text: 'Сначала дешевые', value: 'priceDown' },
        { text: 'Сначала дорогие', value: 'priceUp' }
      ]
    }
  },
  mounted () {
    this.getAllGoods();
    // this.sortingOfGoods();
  },
  methods: {
    getAllGoods() {
      this.productList = this.$store.getters.GOODS
    },
    // sortingOfGoods(type) {
    //   switch (type) {
    //     case 'priceDown':
    //       this.sortGoodsList(this.productList, 'down')
    //       break;
    //     case 'priceUp':
    //       this.sortGoodsList(this.productList, 'up')
    //       break;
    //     default:
    //       this.sortGoodsList(this.productList, 'rating')
    //       break;
    //   }
    // },
    addGoodsBasket(index) {
      this.$store.dispatch("GET_BASKET_ITEM", this.productList[index]);
    },
    // sortGoodsList(goodsList, type){
    //   goodsList.sort(function(a , b) {
    //       if(type == 'down')
    //         return b.price - a.price;
    //       else if(type == 'up')
    //         return a.price - b.price;
    //       else if(type == 'rating')
    //         return a.rating - b.rating;
    //   });
    //   goodsList.reverse();
    // }
  },
}
</script>

<style>
.sort-rating-icon {
  width: 20px;
  position: absolute;
  right: 195px;
  top: 18px;
}
.add-good:hover {
  transition: 0.5s;
  filter: brightness(0);
  cursor: pointer;
}
.add-good {
  transition: 0.5s;
}
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
.card-rating {
  position: absolute;

}
.card-rating > span {
  font-size: 14px;
  font-weight: bold;
  color: #F2C94C;
  position: absolute;
  left: 18px;
  bottom: 3px;
}
</style>
