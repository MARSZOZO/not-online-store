const state = {
    basket: []
}
const mutations = {
    SET_BASKET : (state, payload) => {
        state.basket.push(payload)
    },
    DELETE_BASKET : (state, payload) => {
        state.basket.splice(payload, 1)
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
    },
    DELETE_BASKET_ITEM(context, payload){
        context.commit('DELETE_BASKET', payload)
    }
}

export default {
    state, getters, mutations, actions
}
