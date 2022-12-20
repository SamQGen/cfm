<template>
<el-card class="main-card">
  <template #header>
    <div class="header">
      <h1>{{title}}</h1>
    </div>
  </template>

  <div>
  <camera-module></camera-module>


  <div v-for="item in buttons" class="center">
  <el-row class="row-padding">
      <el-col col="6" >
        <el-button plain @click="upload(item)"> {{item.name}}</el-button>
      </el-col>
  </el-row>
  </div>
  </div>
</el-card>
</template>

<script >
import { ref, computed, onMounted } from 'vue';
import Camera from 'easy-js-camera';
import CameraModule from "~/components/CameraModule.vue";
import UploadFile from "~/components/UploadFile.vue";
import { CameraFilled } from "@element-plus/icons-vue/global";
import {useRouter} from "vue-router";

export default {
  components: {
    CameraModule,
    CameraFilled,
    UploadFile,
  },
  props: ['title'],
  setup(props) {
    const camera = ref(null);
    const isTaken = ref(false);
    const router = useRouter();
    const buttons = ref([
      {
        name: 'Use Camera',
        icon: 'camera',
        to: '',
      },
      {
        name: 'Upload Image',
        icon: 'upload',
        to: 'upload-image',
      },
      {
        name: 'Continue on smartphone',
        icon: 'phone',
        to: 'continue-on-smartphone',
      }
    ]);
    let upload = (item) => {
      console.log('upload', item);
      router.push({name:item.to})
    }


    onMounted(() => {
      // mounted logic goes here
    });

    return {
      camera,
      isTaken,
      buttons,
      upload,
    }
  }
}

// // have to use options api not composition api for the camera module for some reason!
// import Camera from 'easy-js-camera';
// import CameraModule from "~/components/CameraModule.vue";
// import UploadFile from "~/components/UploadFile.vue";
// import {CameraFilled} from "@element-plus/icons-vue/global";
// export default {
//   mounted() {
//   },
//   components: {
//     CameraModule,
//     CameraFilled,
//     UploadFile,
//   },
//   props:['title'],
//   methods:{
//   },
//   data() {
//     return {
//       camera: null,
//       isTaken:false,
//     buttons : [
//       {
//         name: 'Use Camera',
//         icon: 'camera',
//         to:'',
//       },
//       {
//         name: 'Upload Image',
//         icon: 'upload',
//         to:'',
//       },
//       {
//         name: 'Continue on smartphone',
//         icon: 'phone',
//         to:'',
//       }
//     ]
//     };
//   },
// }
</script>

<style scoped>
.row-padding{
  padding: 10px;
}

</style>