import { createStore } from 'vuex'
import {INCREMENT , INDECMENT} from './mutations_type'

export default createStore({
  state: {
    count: 0 
  },
  mutations: {
    [INCREMENT] (state) {
      state.count ++
    },
    [INDECMENT] (state) {
      state.count --
    },
  },
  actions: {
  },
  modules: {
  }
})
