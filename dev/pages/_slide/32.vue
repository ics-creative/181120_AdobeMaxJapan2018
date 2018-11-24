<template>
  <div class="slide-container">
    <VideoPlayer
      src="/video/an_textmotion.mov"
    />
    <p class="slide-caption">Animateでの編集画面</p>
  </div>
</template>

<script>
import VideoPlayer from '../../components/VideoPlayer'
export default {
  components: { VideoPlayer }
}
</script>

<style scoped>
</style>
