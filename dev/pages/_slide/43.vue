<template>
  <div class="slide-container">
    <img 
      v-image-loader 
      src="/181120_AdobeMaxJapan2018/video/bodymovin_1.gif" >
    <p class="slide-caption">After Effects + Bodymovinのアニメーション</p>
  </div>
</template>

<script>
import VideoPlayer from '../../components/VideoPlayer'
export default {
  components: { VideoPlayer }
}
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.slide-container {
  background: white;
}
</style>
