<template>
  <nav id="menu">
    <div class="menu-content">
      <div class="row">
        <div class="col-6">
          <h1>Корзина</h1>
        </div>
        <div class="col-6 right">
          <span class="closebtn" @click="handlerCloseBasketPanel">&times;</span>
        </div>
      </div>
      <template v-if="traggerSuccessOrder">
        <div class="row center mt-30vh">
          <div class="col-12">
            <img src="~/assets/success-order.svg" alt="" />
          </div>
        </div>
        <div class="row center">
          <div class="col-12">
            <ul>
              <li class="f-size-18 f-bold">Заявка успешно отправлена</li>
              <li class="f-size-14 f-gray">
                Вскоре наш менеджер свяжется с Вами
              </li>
            </ul>
          </div>
        </div>
      </template>
      <template v-else>
        <template v-if="basketGoogs.length == 0">
          <div class="row">
            <div class="col-12">
              <span class="f-size-18 f-black"
                >Пока что вы ничего не добавили в корзину.</span
              >
            </div>
          </div>
          <div class="row mt-10">
            <div class="col-12">
              <button class="btn-full-width" @click="handlerCloseBasketPanel">
                Перейти к выбору
              </button>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="row mb-10">
            <div class="col-12">
              <span class="f-gray">Товары в корзине</span>
            </div>
          </div>
          <div class="row" v-for="(item, index) in basketGoogs" :key="index">
            <div class="col-12">
              <div class="card-basket-item">
                <div class="row parent-block">
                  <div class="col-3">
                    <img class="image-basket-goods" :src="item.photo" />
                  </div>
                  <div class="col-8">
                    <ul>
                      <li class="card-basket-item-name">{{ item.name }}</li>
                      <li class="card-basket-item-price">{{ item.price }} ₽</li>
                    </ul>
                  </div>
                  <div class="col-1 trash-block">
                    <span @click="trashGoodItem(index)"
                      ><img class="trash-icon" src="~/assets/trash.svg" alt=""
                    /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form @submit.prevent="createOrder">
            <div class="row">
              <div class="col-12">
                <span class="f-gray">Оформить заказ</span>
              </div>
              <div class="col-12">
                <input
                  id="input-name"
                  class="mb-20"
                  type="text"
                  placeholder="Ваше имя"
                  v-model="customerData.name"
                  required
                />
                <input
                  id="input-phone"
                  class="mb-20"
                  type="text"
                  placeholder="Телефон"
                  v-mask="'+7 (###) ###-##-##'"
                  v-model="customerData.phone"
                  required
                />
                <input
                  id="input-address"
                  type="text"
                  placeholder="Адрес"
                  v-model="customerData.address"
                  required
                />
              </div>
            </div>
            <div class="row mt-10">
              <div class="col-12">
                <input class="btn-full-width" type="submit" value="Отправить" />
              </div>
            </div>
          </form>
        </template>
      </template>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      basketGoogs: [],
      customerData: {
        name: "",
        phone: "",
        address: "",
      },
      traggerSuccessOrder: false,
    };
  },
  watch: {
    "$store.getters.BASKET"(val) {
      this.basketGoogs = val;
    },
  },
  methods: {
    handlerCloseBasketPanel() {
      this.traggerSuccessOrder = false;
      this.$emit("closeBasketPanel");
    },
    trashGoodItem(index) {
      this.$store.dispatch("DELETE_BASKET_ITEM", index);
    },
    createOrder() {
      if (
        this.customerData.name &&
        this.customerData.phone &&
        this.customerData.address
      ) {
        this.$store.dispatch("CLEAR_BASKET_ITEM");
        this.basketGoogs = [];
        this.traggerSuccessOrder = true;
        this.customerData = {};
      }
    },
  },
};
</script>

<style >
.parent-block {
  position: relative;
}
.trash-block {
  width: 50%;
  position: absolute;
  top: 25%;
  right: -46%;
}
.trash-icon:hover {
  filter: brightness(0);
  cursor: pointer;
}
.closebtn {
  font-size: 32px;
  cursor: pointer;
}
.menu-content {
  padding: 40px;
  height: 100%;
}
.card-basket-item {
  background: #ffffff;
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
  color: #59606d;
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
  background: #ffffff;
  box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px 0px 0px 8px;
}
#menu {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

#menu.menu-open {
  right: 0;
}
</style>