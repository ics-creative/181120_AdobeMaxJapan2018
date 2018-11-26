<template>
  <div>

    <slide-controller/>

    <div class="container">
      <div class="wrapper">
        <div class="content">
          <nuxt/>
        </div>
      </div>
    </div>

  </div>

</template>
<script>
import SlideController from '../components/SlideController'

export default {
  components: { SlideController },
  methods: {}
}
</script>

<style scoped>
.container {
  position: absolute;
  width: 100%;
  height: calc(100% - 64px);
  overflow: auto;
  pointer-events: none;
}
.wrapper {
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translate(0%, -50%);
}
.wrapper:before {
  content: '';
  display: block;
  padding-top: calc((100%) * 9 / 16); /* 高さを幅の75%に固定 */
}
.content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: black;
}
</style>

<style>
html {
  font-family: serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #222;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.slide-container {
  width: 100%;
  height: 100%;
  position: relative;
  background: black;
}

.slide-caption {
  font-size: calc(100vw / 40);
  font-weight: bold;
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 5px;
  width: 100%;
  text-align: center;
  pointer-events: auto;
}

a,
a:hover,
a:visited,
a:active {
  color: white;
}

video.loading,
img.loading {
  background-image: url('../assets/preloader.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 10%;
}
</style>
