import Vuex from 'vuex'
import catalog from '~/store/catalog.js'
import basket from '~/store/basket.js'

const createStore = () => {
    return new Vuex.Store({
      state: {},
      mutations: {},
      actions: {},
      modules: {
          catalog,
          basket
      }
    })
  }
  
  export default createStore