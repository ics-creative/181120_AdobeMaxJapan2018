<template>
  <div class="ui">
    <div class="ui-left">
      <nuxt-link 
        :to="prevUrl" 
        class="btn"><img
          src="~/assets/svg/baseline-arrow_back_ios-24px.svg"
          width="32"
          height="32"></nuxt-link>
      <span class="slide-num">{{ slideId }} / {{ slideMax }}</span>
      <nuxt-link 
        :to="nextUrl" 
        class="btn"><img
          src="~/assets/svg/baseline-arrow_forward_ios-24px.svg"
          width="32"
          height="32"></nuxt-link>
    </div>

    <div class="ui-right">
      <button 
        v-if="isFullscreen === false"
        class="btn"
        @click="goFullScreen">
        <img
          src="~/assets/svg/baseline-fullscreen-24px.svg"
          width="32"
          height="32">
      </button>
      <button 
        v-if="isFullscreen === true"
        class="btn"
        @click="cancelFullScreen">
        <img
          src="~/assets/svg/baseline-fullscreen_exit-24px.svg"
          width="32"
          height="32">
      </button>
    </div>

    <div 
      class="progress"
      @click="progressClickHandler">
      <div
        :style="{width:pregress + '%'}"
        class="progress-bar"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'SlideController',
  data: function() {
    return {
      isFullscreen: false
    }
  },

  computed: {
    prevUrl() {
      const id = Math.max(1, Number(this.slideId) - 1)

      return `/slide/${id}`
    },
    nextUrl() {
      const id = Math.min(this.slideMax, Number(this.slideId) + 1)

      return `/slide/${id}`
    },

    pregress() {
      return Math.round((Number(this.slideId) / this.slideMax) * 100)
    },

    ...mapState(['slideId', 'slideMax'])
  },

  mounted() {
    window.addEventListener('keydown', this.keydownHandler)

    document.addEventListener('webkitfullscreenchange', this.fullscreenHandler)
    document.addEventListener('mozfullscreenchange', this.fullscreenHandler)
    document.addEventListener('MSFullscreenChange', this.fullscreenHandler)
    document.addEventListener('fullscreenchange', this.fullscreenHandler)
  },
  destroyed() {
    window.removeEventListener('keydown', this.keydownHandler)

    document.removeEventListener(
      'webkitfullscreenchange',
      this.fullscreenHandler
    )
    document.removeEventListener('mozfullscreenchange', this.fullscreenHandler)
    document.removeEventListener('MSFullscreenChange', this.fullscreenHandler)
    document.removeEventListener('fullscreenchange', this.fullscreenHandler)
  },

  methods: {
    goFullScreen() {
      requestFullscreen(document.body)
    },
    cancelFullScreen() {
      exitFullscreen()
    },
    keydownHandler(event) {
      switch (event.keyCode) {
        case 37:
          this.$router.push(this.prevUrl)
          break
        case 39:
          this.$router.push(this.nextUrl)
          break
      }
    },
    progressClickHandler(event) {
      console.log(event)

      const x = event.clientX
      const rate = x / window.innerWidth

      const id = Math.round(this.slideMax * rate)

      this.$router.push(`/slide/${id}`)
    },
    fullscreenHandler(event) {
      let fullscreenElement = null

      if (document.webkitFullscreenElement) {
        fullscreenElement = document.webkitFullscreenElement
      } else if (document.mozFullScreenElement) {
        fullscreenElement = document.mozFullScreenElement
      } else if (document.msFullscreenElement) {
        fullscreenElement = document.msFullscreenElement
      } else if (document.fullscreenElement) {
        fullscreenElement = document.fullscreenElement
      }

      this.isFullscreen = Boolean(fullscreenElement)
    }
  }
}

/*フルスクリーン実行用ファンクション*/
function requestFullscreen(target) {
  if (target.webkitRequestFullscreen) {
    target.webkitRequestFullscreen() //Chrome15+, Safari5.1+, Opera15+
  } else if (target.mozRequestFullScreen) {
    target.mozRequestFullScreen() //FF10+
  } else if (target.msRequestFullscreen) {
    target.msRequestFullscreen() //IE11+
  } else if (target.requestFullscreen) {
    target.requestFullscreen() // HTML5 Fullscreen API仕様
  } else {
    alert('ご利用のブラウザはフルスクリーン操作に対応していません')
  }
}
/*フルスクリーン終了用ファンクション*/
function exitFullscreen() {
  if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen() //Chrome15+, Safari5.1+, Opera15+
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen() //FF10+
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen() //IE11+
  } else if (document.cancelFullScreen) {
    document.cancelFullScreen() //Gecko:FullScreenAPI仕様
  } else if (document.exitFullscreen) {
    document.exitFullscreen() // HTML5 Fullscreen API仕様
  }
}
</script>

<style scoped>
.ui {
  position: absolute;
  width: 100%;
  height: 64px;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn {
  width: 40px;
  height: 40px;
  display: inline-flex;
  line-height: 40px;
  justify-content: center;
  align-items: center;
  user-select: none;
  transition: all 0.2s;
  opacity: 0.75;
}

button.btn {
  -webkit-appearance: none;
  appearance: none;
  border: none;
  background: none;
}

.btn:hover {
  opacity: 1;
}
.btn:active {
  opacity: 0.7;
}

.ui-left {
  margin-left: 10px;
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: start;
  align-items: center;
}

.slide-num {
  color: white;
  font-weight: bold;
  line-height: 40px;
  font-family: sans-serif;
}
.ui-right {
  margin-right: 10px;
}

.progress {
  position: absolute;
  width: 100%;
  height: 5px;
  bottom: 0;
  background: black;
  transition: all 0.3s;
  cursor: pointer;
}
.progress:hover {
  height: 10px;
  background: #444;
}
.progress-bar {
  position: absolute;
  height: 100%;
  background: #888;
  transition: all 0.5s;
}

.progress:hover .progress-bar {
  background: #fff;
}
</style>
