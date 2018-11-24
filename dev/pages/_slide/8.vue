<template>
  <div class="slide-container">
    <div class="grid">
      <video 
        src="/181120_AdobeMaxJapan2018/video/materialdesign_ui_1.mp4"
        autoplay
        loop/>
      <video 
        src="/181120_AdobeMaxJapan2018/video/materialdesign_ui_2.mp4"
        autoplay
        loop/>
    </div>

    <div class="slide-caption">ユーザーインターフェースとしてのマイクロインタラクション</div>
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
  /* 最小100px、最大1frの列を繰り返しつくる */
  grid-template-columns: repeat(auto-fill, 50%);
  height: calc(100% - 70px);
}
.grid video {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
