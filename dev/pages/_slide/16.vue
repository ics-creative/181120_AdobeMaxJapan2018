<template>
  <div class="slide-container">
    <VideoPlayer
      src="/video/xd_mophing.mov"
    />

    <div class="slide-caption">XDの自動アニメーションを使ったモーフィング</div>
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
