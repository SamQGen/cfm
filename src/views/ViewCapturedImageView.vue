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
  <el-space class="vertical">
<el-row class="row-padding">
      <el-col col="6" >
        <el-button plain @click="upload"> Upload</el-button>
      </el-col>
    </el-row>
    <el-row class="row-padding">
      <el-col col="6" >
        <el-button plain @click="retake"> Retake</el-button>
      </el-col>
    </el-row>
  </el-space>
  <img :src="image" alt="">
</el-card>
</template>

<script setup>

import {usePictureStore} from "~/stores/pictureStore";
import {ref, watch} from "vue";
let image = ref(null)
let blob = usePictureStore().picture

watch(() => usePictureStore().picture, (nv, ov) => {
  processPicture(nv)
});
const processPicture = (img) => {
  let reader = new FileReader();
  reader.readAsDataURL(img);
  reader.onloadend = function () {
    let base64data = reader.result;
    image.value = base64data;
    console.log('this is the base 64 data ' , base64data);
  };
  console.log('process picture');
}

if (blob) {
  processPicture(blob)

}


let upload = () => {
  console.log('upload')
}
let retake = () => {
  console.log('retake')
}

</script>

<style scoped>

</style>