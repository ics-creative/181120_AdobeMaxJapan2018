<template>
  <img
    v-image-loader
    :src="slideUrl"
    width="1920"
    height="1080">
</template>

<script>
import { mapState } from 'vuex'
import { createUrl } from '../../utils/urls'

export default {
  computed: {
    slideUrl() {
      return createUrl(this.slideId)
    },
    ...mapState(['slideId', 'slideMax'])
  }
}
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
