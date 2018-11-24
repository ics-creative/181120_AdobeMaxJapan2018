<template>
  <img
    :src="slideUrl"
    width="1920"
    height="1080" >
</template>

<script>
import { mapState } from 'vuex'
import SlideController from '../components/SlideController'
import { createUrl } from '../utils/urls'
export default {
  head: {
    title: 'top ページ'
  },
  components: { SlideController },
  computed: {
    slideUrl() {
      return createUrl(1)
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
