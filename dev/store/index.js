import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      slideId: 1,
      slideMax: 87
    },
    mutations: {
      setPage(state, slideId) {
        state.slideId = slideId
      }
    },
    actions: {
      updatePage({ commit }, slideId) {
        commit('setPage', slideId)
      }
    }
  })
}

export default createStore
