<template>
  <div class="slide-container">
    <VideoPlayer
      src="/video/ae_move.mov"
    />
    <p class="slide-caption">After Effects CCでのテクニック紹介ビデオ</p>
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
