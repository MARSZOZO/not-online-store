<template>
    <div>
        <img 
            class="header-logo"
            src="~/assets/logo.svg" 
            alt="logo"
        >
        <span @click="handlerOpenBasketPanel">
            <img
                class="header-basket"
                src="~/assets/basket-empty.svg" 
                alt="basket"
            >
        </span>
    </div>
</template>

<script>
export default {
    methods: {
        handlerOpenBasketPanel() {
            this.$emit('openBasketPanel')
        }
    },
}
</script>
