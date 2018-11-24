<template>
  <div class="slide-container">
    <div class="grid">
      <img
        src="/video/continuous3.gif"
      >
      <video 
        src="/video/materialdesign_transition.mp4"
        autoplay />
    </div>

    <div class="slide-caption">画面遷移としてのマイクロインタラクション</div>
  </div>
</template>

<script>
import VideoPlayer from '../../components/VideoPlayer'
export default {
  components: { VideoPlayer }
}
</script>

<style scoped>
.grid {
  /* グリッドコンテナ */
  display: grid;
  grid-template-columns: repeat(auto-fill, 50%);
  height: calc(100% - 70px);
}
.grid video {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.grid img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
