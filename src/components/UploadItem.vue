<template>
<el-card class="main-card">
  <template #header>
    <div class="header">
      <h1>{{title}}</h1>
    </div>
  </template>
  <div>
  <camera-module :type="type"></camera-module>
  <div v-for="item in buttons" class="center">
  <el-row class="row-padding">
      <el-col col="6" >
        <el-button plain @click="upload(item)"> {{item.name}}</el-button>
      </el-col>
  </el-row>
  </div>
  </div>

</el-card>

  <el-dialog v-model="dialogTableVisible" title="Instructions" align-center :width="computeSizeOfDialog">
    place your face inside the circle so we can perform a liveness check and match to your photo
  </el-dialog>
</template>

<script >
import {ref, computed, onMounted, onUnmounted} from 'vue';
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
  props: ['title','type'],
  setup(props) {
    const dialogTableVisible= ref(true);
    const camera = ref(null);
    const isTaken = ref(false);
    const router = useRouter();
    const mask = ref("../assets/IDCard.png");
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
    const windowHeight = ref(window.innerHeight);

    onMounted(() => {
      window.addEventListener('resize', () => {
        windowHeight.value = window.innerHeight;
      });
    });

    onUnmounted(() => {
      window.removeEventListener('resize', this.onResize);
    });
    const computeSizeOfDialog = computed(() => {
      console.log('inside the thing')
      return windowHeight.value > 650 ? '30%' : '90%';
    });

    let upload = (item) => {
      console.log('upload', item);
      router.push({name:item.to})
    };

    return {
      camera,
      isTaken,
      buttons,
      upload,
      dialogTableVisible,
      computeSizeOfDialog,
      mask
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