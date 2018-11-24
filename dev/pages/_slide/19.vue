<template>
  <div class="slide-container">
    <VideoPlayer
      src="/video/adobexd_motion.mov"
    />

    <div class="slide-caption">XDの自動アニメーションを使った接続型アニメーション</div>
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
