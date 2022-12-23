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

  <slot name="dialog">

  </slot>
  <el-dialog v-model="dialogTableVisible" title="Instructions" align-center :width="computeSizeOfDialog" @close="onDialogClose">
    {{instructions}}
<!--    place your face inside the circle so we can perform a liveness check and match to your photo-->
  </el-dialog>
  <el-dialog v-model="uploadComplete" title="Upload Complete" align-center :width="computeSizeOfDialog" @close="uploadDialogClose">
    upload completed!
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
  props: ['title','type','instructions'],
  setup(props) {
    let dialogTableVisible= ref(true);
    let uploadComplete = ref(false);
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
    const windowWidth = ref(window.innerWidth);

    let onDialogClose = () => {
      console.log('dialog closed');
    }
    let uploadDialogClose = () => {
      console.log('upload dialog closed');
      router.push({name: 'upload-selfie' , params: {type: 'person'}});
    }


    onMounted(() => {
      window.addEventListener('resize', () => {
        windowWidth.value = window.innerWidth;
      });
      console.log('this is the mounted props' , props.type);
      //mocking taking the picture
      let ourInterval = setInterval(() => {
        if (props.type !== 'person'){
          console.log('why are we in here ' , props.type, ' ', props.type !== 'person');
          uploadComplete.value = true;
          console.log('in our set interval',uploadComplete.value);
        }
      }, 5000);
    });

    onUnmounted(() => {
      // window.removeEventListener('resize', this.onResize);
    });
    const computeSizeOfDialog = computed(() => {
      let size = windowWidth.value > 650 ? '30%' : '90%';
      console.log('computing size of dialog ' , windowWidth.value , ' and this is what we return ' , size);
      return size
    });

    let upload = (item) => {
      console.log('upload', item);
      router.push({name:item.to , params: {type: 'person'}});
    };

    return {
      camera,
      isTaken,
      buttons,
      upload,
      dialogTableVisible,
      computeSizeOfDialog,
      mask,
      uploadComplete,
      onDialogClose,
      uploadDialogClose
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