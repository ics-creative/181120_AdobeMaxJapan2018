<template>
  <img
    :src="slideUrl"
    width="1920"
    height="1080" >
</template>

<script>
import { mapState } from 'vuex'
import SlideController from '../../components/SlideController'
export default {
  components: { SlideController },
  computed: {
    slideUrl() {
      return `/slides/181120_AdobeMax_web.${String(this.slideId).padStart(
        3,
        '0'
      )}.jpeg`
    },
    ...mapState(['slideId'])
  },
  asyncData({ params }) {}
}
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
