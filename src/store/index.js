import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutationTypes'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sliderBar_isCollapse: false
  },
  mutations: {
    [types.SET_SLIDER_BAR_STATUS](state, { isCollapse }) {
      state.sliderBar_isCollapse = isCollapse
    }
  },
  actions: {},
  modules: {}
})
