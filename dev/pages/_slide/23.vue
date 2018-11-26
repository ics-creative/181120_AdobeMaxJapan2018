<template>
  <div class="slide-container">
    <div class="grid">
      <video
        v-video-loader
        src="/181120_AdobeMaxJapan2018/video/aftereffects_sample_1.mov"
        muted
        autoplay
        playsinline
        loop />
      <video
        v-video-loader
        src="/181120_AdobeMaxJapan2018/video/aftereffects_sample_2.mov"
        muted
        autoplay
        playsinline
        loop />
    </div>

    <div
      class="
        slide-caption">After Effectsでの一般的な作例イメージ</div>
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
  height: 100%;
}
.grid video {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
