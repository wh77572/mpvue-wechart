import Vue from 'vue'
import Vuex from 'vuex'

import actions from './action'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  test: 'test12312',
  city: {}
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
});
