import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  count: 0
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
