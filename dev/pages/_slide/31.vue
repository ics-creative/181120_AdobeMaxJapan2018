<template>
  <div class="slide-container">
    <VideoPlayer
      src="/181120_AdobeMaxJapan2018/video/animate_sample.mov"
    />
    <p class="slide-caption">Animateで作成するキャラクターアニメーション<br>
      （Animateに同梱された公式サンプル）
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
</style>
