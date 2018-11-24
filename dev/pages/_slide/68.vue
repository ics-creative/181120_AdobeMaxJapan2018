<template>
  <div class="slide-container">
    <VideoPlayer
      src="/181120_AdobeMaxJapan2018/video/prettyloaded.mov"
    />
    <p class="slide-caption">Pretty Loaded（Flashのかっこいいローディングをまとめたサイト）</p>
  </div>
</template>

<script>
import VideoPlayer from '../../components/VideoPlayer'
export default {
  components: { VideoPlayer }
}
</script>
