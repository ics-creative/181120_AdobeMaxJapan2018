<template>
  <div class="slide-container">
    <VideoPlayer
      src="/video/xd_parallax.mov"
    />

    <div class="slide-caption">XDの自動アニメーションを使ったパララックス</div>
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
