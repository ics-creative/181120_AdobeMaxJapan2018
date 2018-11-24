<template>
  <div class="slide-container">
    <img src="/video/bodymovin_2.gif" >
    <p class="slide-caption">After Effects + Bodymovinのアニメーション</p>
  </div>
</template>

<script>
import VideoPlayer from '../../components/VideoPlayer'
export default {
  name: 'Slide43',
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
