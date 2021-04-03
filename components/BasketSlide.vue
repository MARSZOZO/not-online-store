<template>
    <nav id="menu">
      <div class="menu-content">
      <div class="row">
        <div class="col-6">
          <span class="title">Корзина</span>
        </div>
        <div class="col-6 right">
          <span class="closebtn" @click="handlerCloseBasketPanel">&times;</span>
        </div>
      </div>
      <template v-if="basketGoogs.length == 0">
        <div class="row">
          <div class="col-12">
            <span class="font-size-20 text-black">Пока что вы ничего не добавили в корзину.</span>
          </div>
        </div>
        <div class="row mt-10">
          <div class="col-12">
            <button class="btn-full-width">Перейти к выбору</button>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="row mb-10">
          <div class="col-12">
            <span class="text-gray">Товары в корзине</span>
          </div>
        </div>
        <div class="row" v-for="(item, index) in basketGoogs" :key="index">
          <div class="col-12">
            <div class="card-basket-item">
              <div class="row">
                <div class="col-3">
                    <button @click="trashGoodItem(index)">O</button><img  class="image-basket-goods" :src="item.photo">
                </div>
                <div class="col-8">
                  <ul>
                    <li class="card-basket-item-name">{{item.name}}</li>
                    <li class="card-basket-item-price">{{item.price}} ₽</li>
                  </ul>
                </div>
                <div class="col-1">
                  <img src="~/assets/trash.svg" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <span class="text-gray">Оформить заказ</span>
          </div>
          <div class="col-12">
            <input class="mb-20" type="text" placeholder="Ваше имя" required>
            <input class="mb-20" type="text" placeholder="Телефон" required>
            <input type="text" placeholder="Адрес" required>
          </div>
        </div>
      </template>
      </div>
    </nav>
</template>

<script>

export default {
    data() {
        return {
          basketGoogs: this.$store.getters.BASKET
        }
    },
    methods: {
        handlerCloseBasketPanel() {
            this.$emit('closeBasketPanel')
        },
        trashGoodItem(index) {
          this.$store.dispatch('DELETE_BASKET_ITEM', index)
        }
    },
}
</script>


<style scoped>
.closebtn {
  font-size: 32px;
  cursor: pointer;
}
.menu-content {
  padding: 40px;
}
.card-basket-item {
  background: #FFFFFF;
  box-shadow: 0px 4px 16px rgb(0 0 0 / 5%);
  border-radius: 8px;
  padding: 12px;

}
.image-basket-goods {
  width: 70px;
  margin-right: 15px;
}
.card-basket-item-name {
  font-size: 14px;
  line-height: 18px;
  color: #59606D;
  margin-bottom: 5px;
}
.card-basket-item-price {
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
  color: black;
}
#menu {
	position: fixed;
  right: -460px;
	width: 460px;
	height: 100%;
	top: 0;
  z-index: 1;
  background: #FFFFFF;
  box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px 0px 0px 8px;
}

#menu.menu-open {
	right: 0;
}
</style>