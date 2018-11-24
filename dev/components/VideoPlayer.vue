<template>
  <video
    :src="src"
    width="1920"
    height="1080"
    autoplay
    loop/>
</template>

<script>
export default {
  name: 'VideoPlayer',
  props: {
    src: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>

<style scoped>
video {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
