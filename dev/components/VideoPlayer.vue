<template>
  <div class="container">
    <video
      ref="video"
      :src="src"
      width="1920"
      height="1080"
      muted
      autoplay
      playsinline
      loop/>

    <button
      v-if="isPlaying === false"
      class="btn"
      @click="play">
      <img
        src="~/assets/svg/baseline-play_circle_outline-24px.svg"
        width="64"
        height="64">
    </button>
  </div>
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
  },
  data() {
    return {
      isPlaying: true
    }
  },
  mounted() {
    const video = this.$refs['video']
    // this.isPlaying = !video.paused
  },
  methods: {
    play() {
      const video = this.$refs['video']
      const promise = video.play()
      this.isPlaying = true
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
}
video {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.btn {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 64px;
  height: 64px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  background: none;
  padding: 0;
  filter: drop-shadow(0 0 0.75rem black);
}
</style>
