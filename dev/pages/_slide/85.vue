<template>
  <div class="slide-container">
    <div class="grid">
      <img
        src="/181120_AdobeMaxJapan2018/video/coordinated_example.gif"
      >
      <video
        src="/181120_AdobeMaxJapan2018/video/material_animation_chara.mp4"
        muted
        autoplay
        playsinline
        loop/>
    </div>

    <p class="slide-caption">
       接続型アニメーションが今後増えていく<br>
      ウェブでは、これの実現技術が課題
    </p>
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
  height: 100%;
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
