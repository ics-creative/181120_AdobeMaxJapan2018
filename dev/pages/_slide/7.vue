<template>
  <div class="slide-container">
    <div class="grid">
      <img 
        v-image-loader 
        src="/181120_AdobeMaxJapan2018/video/mi_1.gif" >
      <img 
        v-image-loader 
        src="/181120_AdobeMaxJapan2018/video/mi_2.gif" >
      <img 
        v-image-loader 
        src="/181120_AdobeMaxJapan2018/video/mi_3.gif" >
      <img 
        v-image-loader 
        src="/181120_AdobeMaxJapan2018/video/mi_4.gif" >
      <img 
        v-image-loader 
        src="/181120_AdobeMaxJapan2018/video/mi_5.gif" >
      <img 
        v-image-loader 
        src="/181120_AdobeMaxJapan2018/video/mi_6.gif" >
      <img 
        v-image-loader 
        src="/181120_AdobeMaxJapan2018/video/mi_7.gif" >
      <img 
        v-image-loader 
        src="/181120_AdobeMaxJapan2018/video/mi_8.gif" >
    </div>

    <div class="slide-caption">マイクロインタラクションの一例</div>
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
  grid-template-columns: repeat(auto-fill, 25%);
  height: 90%;
  margin-bottom: 10px;
}
.grid img {
  width: 100%;
  height: auto;
  object-fit: contain;
}
</style>
