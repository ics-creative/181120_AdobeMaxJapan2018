<template>
  <div class="slide-container">
    <VideoPlayer
      src="/video/heart_motion_slow-28049.mov"
    />
    <p class="slide-caption">スロー再生</p>
  </div>
</template>

<script>
import VideoPlayer from '../../components/VideoPlayer'
export default {
  name: 'Slide57',
  components: { VideoPlayer }
}
</script>
