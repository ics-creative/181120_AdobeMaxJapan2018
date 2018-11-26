import Vue from 'vue'

const directive = {
  bind: function(element) {
    element.addEventListener('play', onPlay)
    element.classList.add('loading')
  },
  unbind: function(element) {
    element.removeEventListener('play', onPlay)
  }
}

function onPlay(event) {
  const video = event.currentTarget
  video.classList.remove('loading')
}

/**
 * ビデオの読み込みを監視するディレクティブです。
 *
 * @author ICS-Ikeda
 * @since 2018-11-26
 */
Vue.directive('video-loader', directive)
