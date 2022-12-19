<template>
<el-card class="main-card">
  <template #header>
    <div class="header">
      <h1>{{title}}</h1>
    </div>
  </template>

  <camera-module></camera-module>
  <div class="el-upload-list__item-file-name">
    <upload-file></upload-file>
  </div>
  <el-row>
    <div v-for="item in buttons">
      <el-col col="6" >
        <el-button plain @click="upload(item)"> {{item.name}}</el-button>
      </el-col>
    </div>
  </el-row>

</el-card>
</template>

<script >
// have to use options api not composition api for the camera module for some reason!
import Camera from 'easy-js-camera';
import CameraModule from "~/components/CameraModule.vue";
import UploadFile from "~/components/UploadFile.vue";
import {CameraFilled} from "@element-plus/icons-vue/global";
export default {
  mounted() {
  },
  components: {
    CameraModule,
    CameraFilled,
    UploadFile,
  },
  props:['title'],
  methods:{
  },
  data() {
    return {
      camera: null,
      isTaken:false,
    buttons : [
      {
        name: 'Use Camera',
        icon: 'camera',
      },
      {
        name: 'Upload Image',
        icon: 'upload',
      },
      {
        name: 'Continue on smartphone',
        icon: 'phone',
      }
    ]
    };
  },
}

let upload = (icon) => {
  console.log('upload hit', icon)
}
</script>

<style scoped>
.el-upload-list__item-file-name{
  padding: 20px;
}
</style>