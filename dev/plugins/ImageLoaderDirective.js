import Vue from 'vue'

const directive = {
  bind: function(element) {
    element.onload = () => {
      element.classList.remove('loading')
    }
    element.classList.add('loading')
  },
  unbind: function(element) {
    element.onload = null
  }
}

/**
 * ビデオの読み込みを監視するディレクティブです。
 *
 * @author ICS-Ikeda
 * @since 2018-11-26
 */
Vue.directive('image-loader', directive)
