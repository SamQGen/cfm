<template>
  <div class="" id="container center">
    <video
      class="center half"
      ref="videoSection"
      v-show="!isTaken"
      autoplay
      playsinline
    ></video>
    <canvas class="center half" ref="canvasSection" v-show="isTaken"></canvas>
    <div class="center" id="overlay">
      <img
        v-if="applyMask && isCameraLoaded"
        class="center half transparent-image"
        :src="applyMask"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import { usePictureStore } from "~/stores/pictureStore";

export default {
  name: "CameraModule",
  components: {},
  props: {
    type: {
      type: String,
      default: "default",
      required: false,
    },
    mask: {
      type: String,
      required: false,
    },
  },
  methods: {
    takePicture() {
      this.camera.snapAsBlob().then((data) => {
        this.isTaken = true;
        console.log("data ", data);
      });
    },
  },
  computed: {
    isCameraLoaded() {
      let loaded = usePictureStore().cameraLoaded;
      console.log("is camera loaded", loaded);
      return loaded;
    },
    applyMask() {
      switch (this.type) {
        case "id":
          console.log("this is the type id");
          return "/IDCard.png";
        case "dl":
          console.log("this is the type dl");
          return "/DriversLicense.png";
        case "person":
          console.log("this is the type person");
          return "/user-mask.png";
        case "passport":
          console.log("this is the type passport");
          return "/passport.png";
        default:
          return false;
      }
    },
  },

  data() {
    return {
      isTaken: false,
      isLoaded: false,
    };
  },
  mounted() {
    let video = this.$refs.videoSection;
    let canvas = this.$refs.canvasSection;
    usePictureStore().setCamera(video, canvas);
  },
  unmounted() {
    usePictureStore().stopCamera();
    console.log("camera unmounted!!!!!");
  },
};
</script>

<style scoped>
.transparent-image {
  opacity: 0.5;
}
</style>
