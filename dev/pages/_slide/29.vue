<template>
  <div class="slide-container">
    <VideoPlayer
      src="/video/animate_flare.mov"
    />
    <p class="slide-caption">Animateを使って制作したモーショングラフィックス<br>
      「Flash for HTML5 ―HTML5開発環境としてのFlash Pro CC活用テクニック」<br>
      <a 
        target="_blank" 
        href="https://book.mynavi.jp/ec/products/detail/id=42081">https://book.mynavi.jp/ec/products/detail/id=42081</a>
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
