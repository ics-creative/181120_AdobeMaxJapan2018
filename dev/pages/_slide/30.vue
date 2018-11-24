<template>
  <div class="slide-container">
    <VideoPlayer
      src="/video/pollenmap.mov"
    />
    <p class="slide-caption">Animateを使って制作したインタラクティブコンテンツ<br>
      「日本全国花粉飛散マップ Pollen Map in Japan | ICS」<br>
      <a 
        href="http://ics-web.jp/projects/pollenmap/" 
        target="_blank">http://ics-web.jp/projects/pollenmap/</a>
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
