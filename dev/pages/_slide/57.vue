<template>
  <div class="slide-container">
    <VideoPlayer
      src="/181120_AdobeMaxJapan2018/video/heart_motion_slow-28049.mov"
    />
    <p class="slide-caption">スロー再生すると、シンプルな構造であることがわかる</p>
  </div>
</template>

<script>
import VideoPlayer from '../../components/VideoPlayer'
export default {
  name: 'Slide57',
  components: { VideoPlayer }
}
</script>
