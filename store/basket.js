const state = {
    basket: []
}
const mutations = {
    SET_BASKET : (state, payload) => {
        state.basket.push(payload)
    },
    DELETE_BASKET : (state, payload) => {
        state.basket.splice(payload, 1)
    },
    CLEAR_BASKET : (state) => {
        state.basket = []
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
    },
    CLEAR_BASKET_ITEM(context){
        context.commit('CLEAR_BASKET')
    }
}

export default {
    state, getters, mutations, actions
}
