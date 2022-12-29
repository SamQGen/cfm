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
      <!--      <CameraButtonIcon @button-clicked="buttonClicked"></CameraButtonIcon>-->
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
    buttonClicked() {
      console.log("button clicked camera module");
      if (this.isTaken) {
        this.isTaken = false;
      } else {
        this.takePicture();
      }
    },
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
          return "src/assets/IDCard.png";
        case "dl":
          console.log("this is the type dl");
          return "src/assets/DriversLicense.png";
        case "person":
          console.log("this is the type person");
          return "src/assets/user-mask.png";
        case "passport":
          console.log("this is the type passport");
          return "src/assets/passport.png";
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
.camera-button {
  z-index: 2;
  position: absolute;
  bottom: 27%;
  left: 42%;
}
.transparent-image {
  opacity: 0.5;
}
.oval {
  width: 200px;
  height: 100px;
  border-radius: 100px / 50px;
}
.half {
  width: 560px;
  height: 100%;
}
#container {
  position: relative;
  display: flex;
  justify-content: center;
}
#container canvas video img,
#overlay {
  position: absolute;
  bottom: 0%;
  /*left: 42%;*/
}
canvas {
  border: 1px solid black;
}
@media only screen and (max-width: 600px) {
  .main-card {
    /*display: flex;*/
    /*justify-content: center;*/
    height: 100vh;
    width: 100vw;
  }
  .half {
    width: 100%;
    /*height: 100%;*/
  }
  #app {
    /*max-width: 1280px;*/
    margin: 0;
    padding: 0;
    /*display: flex;*/
    /*justify-content: center;*/
    font-weight: normal;
  }
}
</style>
