<template>
  <div class="slide-container">
    <img
      v-image-loader
      class="base"
      src="/181120_AdobeMaxJapan2018/slides/181120_AdobeMax_web.060.jpeg"
      width="1920"
      height="1080" >

    <img
      v-image-loader
      class="gif"
      src="/181120_AdobeMaxJapan2018/video/adobeblog-api-image11.gif"
    >
  </div>
</template>

<script>
import VideoPlayer from '../../components/VideoPlayer'
export default {
  components: { VideoPlayer }
}
</script>

<style scoped>
img.base {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

img.gif {
  position: absolute;
  right: 7%;
  top: 26%;
  width: 24%;
  height: auto;
}
</style>
