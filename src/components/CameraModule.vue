<template>
  <div class="center">
    <video ref="videoSection" v-show="!isTaken" autoplay playsinline></video>
    <canvas class="center" ref="canvasSection" v-show="isTaken"></canvas>
  </div>
  <div class="camera-button">
    <CameraButtonIcon @button-clicked="buttonClicked"></CameraButtonIcon>
  </div>
</template>

<script>
import Camera from "easy-js-camera";

import CameraButtonIcon from "~/components/CameraButtonIcon.vue";
import {Check} from '@element-plus/icons-vue'
export default {
  name: "CameraModule",
  components: {
    Check,
    CameraButtonIcon,
  },
  methods: {
    buttonClicked() {
      console.log("button clicked camera module");
      if (this.isTaken){
        this.isTaken = false;
      }
      else {
        this.takePicture();
      }
    },
    takePicture(){
      this.camera.snapAsBlob().then((data) => {
        this.isTaken = true;
        console.log("data ", data);
      });
    }
  },
  data() {
    return {
      isTaken: false,
    };
  },
  mounted() {
    let video = this.$refs.videoSection
    let canvas = this.$refs.canvasSection
    Camera
        .tryInvokePermission(video,canvas)
        .then(camera => {
          this.camera = camera
          camera.start()
          console.log('camera started')
          camera.snap().then(data => {
            console.log('data from snap ' , data)
          })

        })
        .catch(error => {
          // Mostly happens if the user blocks the camera or the media devices are not supported
        });
  },
}
</script>

<style scoped>
.camera-button{
  z-index: 2;
  position: absolute;
  bottom: 27%;
  left: 42%;
}
</style>