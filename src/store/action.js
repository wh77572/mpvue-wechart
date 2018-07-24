export default {
  test({ commit }, data) {
    commit('TEST_ACTION', data)
  },
  setCity({ commit }, data) {
    commit('SET_CITY', data)
  }
}
