import Vuex from 'vuex'
import { createUrl } from '../utils/urls'

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
      updatePage({ commit, state }, slideId) {
        commit('setPage', slideId)

        // プリロード機能
        //  <link rel="preload" href="XXX.png" as="image">
        const nextUrl1 = createUrl(Math.min(state.slideMax, slideId + 1))
        const nextUrl2 = createUrl(Math.min(state.slideMax, slideId + 2))
        const prevUrl = createUrl(Math.max(1, slideId - 1))
        const preloads = [nextUrl1, nextUrl2, prevUrl]
        preloads.forEach(url => {
          const el = document.querySelector(`link[href="${url}"]`)
          if (!el) {
            const link = document.createElement('link')
            link.rel = 'preload'
            link.href = url
            link.as = 'image'
            document.head.appendChild(link)
          }
        })
      }
    }
  })
}

export default createStore
