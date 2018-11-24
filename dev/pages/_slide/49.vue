<template>
  <div class="slide-container">
    <VideoPlayer
      src="/video/animate_move_motion.mov"
    />
    <p class="slide-caption">Animate CCでのテクニック紹介ビデオ</p>
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
