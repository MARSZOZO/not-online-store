<template>
    <div class="row">
        <div class="col-6">
            <img 
                class="header-logo"
                src="~/assets/logo.svg" 
                alt="logo"
            >
        </div>
        <div class="col-6">
            <div class="header-basket">
                <img
                    @click="handlerOpenBasketPanel"
                    src="~/assets/basket-empty.svg" 
                    alt="basket"
                >
                <template v-if="countGoods.length != 0">
                    <div class="count-basket-goods">
                        <span>{{countGoods.length}}</span>
                    </div>
                </template>
            </div>

        </div>


    </div>
</template>

<script>

export default {
    data() {
        return {
            countGoods: this.$store.getters.BASKET
        }
    },
    methods: {
        handlerOpenBasketPanel() {
            this.$emit('openBasketPanel')
        }
    },
}
</script>

<style>
.count-basket-goods {
    position: absolute;
    top: -9px;
    right: -13px;
    background: #959DAD;
    height: 20px;
    width: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: center; /*Центрирование по горизонтали*/
    align-items: center;     /*Центрирование по вертикали */
}
.count-basket-goods > span {
    font-weight: bold;
    font-size: 11px;
    color: white;
}
</style>
