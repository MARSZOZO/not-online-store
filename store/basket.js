const state = {
    basket: []
}
const mutations = {
    SET_BASKET : (state, payload) => {
        state.basket.push(payload)
    }
}
const getters = {
    BASKET : state => {
        return state.basket
    }
}
const actions = {
    GET_BASKET_ITEM(context, payload){
        context.commit('SET_BASKET', payload)
    }
}

export default {
    state, getters, mutations, actions
}
