<template>
  <div class="row">
    <div class="col-12">
      <div class="row right">
        <div class="col-12">
          <img class="sort-icon w-20 position-absolute" src="~/assets/sort-icon.svg" alt="" />
          <select name="sortBy" id="sortBy" @change="sortingOfGoods(sortType, $route.name.substring(8))" v-model="sortType">
            <option v-for="(item, index) in sortOptions" :value="item.value" :key="index">{{item.text}}</option>
          </select>
        </div>
      </div>
      <div class="row">
        <nuxt-child
        :productList="productList"
        @addGoodBasketBackpackItem="addGoodItem($event, 'backpack')"
        @addGoodBasketTShirtItem="addGoodItem($event, 'tshirt')"
        @addGoodBasketShirtItem="addGoodItem($event, 'shirt')"
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
      sortType: 'default',
      sortOptions: [
        { text: 'Сортировать по', value: 'default' },
        { text: 'По популярности', value: 'ratingUp' },
        { text: 'Сначала дешевые', value: 'priceDown' },
        { text: 'Сначала дорогие', value: 'priceUp' }
      ]
    }
  },
  watch: {
    '$route'(val) {
      if(val){
        this.sortingOfGoods(this.sortType, this.$route.name.substring(8));
      }
    }
  },
  mounted () {
    this.getAllGoods();
    this.sortingOfGoods(this.sortType, this.$route.name.substring(8));
  },
  methods: {
    addGoodItem(index, type) {
      this.$store.dispatch("GET_BASKET_ITEM", this.productList[type][index]);
    },
    getAllGoods() {
      this.productList = this.$store.getters.GOODS
    },
    sortingOfGoods(type, name) {
      switch (type) {
        case 'priceDown':
          this.sortGoodsList(this.productList[name], name, 'down')
          break;
        case 'priceUp':
          this.sortGoodsList(this.productList[name], name, 'up')
          break;
        case 'ratingUp':
          this.sortGoodsList(this.productList[name], name, 'rating')
          break;
        default:
          this.sortGoodsList(this.productList[name], name, 'default')
          break;
      }
    },
    sortGoodsList(goodsList, arrName, type){
      let sortable = []
      for(let goodItem in goodsList){
        sortable.push(goodsList[goodItem])
      }
      
      sortable.sort(function(a , b) {
          if(type == 'down')
            return b.price - a.price;
          else if(type == 'up')
            return a.price - b.price;
          else if(type == 'rating')
            return a.rating - b.rating;
          else if(type == 'default')
            return sortable
      });
      sortable.reverse();
      this.productList[arrName] = sortable
    }
  },
}
</script>

<style>
.card {
  border-radius: 8px;
  padding: 16px;
  position: relative;
}
.card-basket {
  position: absolute;
  right: 18px;
  top: 18px;
}
.card-rating {
  position: absolute;
}
.card-rating > span {
  left: 18px;
  bottom: 3px;
}
.sort-icon {
  right: 195px;
  top: 18px;
}
</style>
