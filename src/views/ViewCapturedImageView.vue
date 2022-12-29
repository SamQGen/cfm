<template>
  <el-card class="main-card">
    <template #header>
      <div class="header">
        <el-space direction="vertical">
          <h1>Captured Image</h1>
          <h4>Are you happy with the captured image</h4>
        </el-space>
      </div>
    </template>
    <!--  body -->
    <el-row justify="center" id="container" class="half">
      <img class="center half" :src="image" alt="" />
    </el-row>
    <el-row class="row-padding" justify="space-evenly">
      <el-button plain @click="retake"> Retake</el-button>
      <el-button plain @click="upload"> Continue</el-button>
    </el-row>
  </el-card>
</template>

<script setup>
import { usePictureStore } from "~/stores/pictureStore";
import { ref, watch } from "vue";
import { useRouteStore } from "~/stores/routeStore";
import { useRouter } from "vue-router";
let image = ref(null);
let blob = usePictureStore().picture;
const router = useRouter();
watch(
  () => usePictureStore().picture,
  (nv) => {
    processPicture(nv);
  }
);
const processPicture = (img) => {
  let reader = new FileReader();
  reader.readAsDataURL(img);
  reader.onloadend = function () {
    let base64data = reader.result;
    image.value = base64data;
    console.log("this is the base 64 data ", base64data);
  };
  console.log("process picture");
};

if (blob) {
  processPicture(blob);
}

let upload = () => {
  let nextRoute = useRouteStore().route;
  console.log("this is the next route ", nextRoute);
  router.push(nextRoute);
  console.log("upload");
};
let retake = () => {
  router.back();
  console.log("retake");
};
</script>

<style scoped>
.row-padding {
  margin-top: 20px;
}
#container {
  position: relative;
  display: flex;
  justify-content: center;
}
.half {
  width: 560px;
  height: 100%;
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
