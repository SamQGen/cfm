<template>
<el-card class="main-card">
  <template #header>
    <div class="header">
      <el-space direction="vertical">
        <h1>{{title}}</h1>
        <h4>{{subtitle}} the picture will be captured automatically</h4>
      </el-space>
    </div>
  </template>
  <el-container class="center">
    <el-space direction="vertical">
      <camera-module :test="test" :type="type"></camera-module>
      <div v-for="item in buttons" class="">
        <el-row class="row-padding">
          <el-col col="6" >
            <el-button plain @click="upload(item)"> {{item.name}}</el-button>
          </el-col>
        </el-row>
      </div>
    </el-space>

  </el-container>

</el-card>

  <slot name="dialog">

  </slot>
  <el-dialog v-model="uploadComplete" title="Upload Complete" align-center :width="computeSizeOfDialog" @close="uploadDialogClose">
    upload completed!
  </el-dialog>
</template>

<script >

import CameraModule from "~/components/CameraModule.vue";
import {CameraFilled} from "@element-plus/icons-vue";
import UploadFile from "~/components/UploadFile.vue";

export default {
  components: {
    CameraModule,
    CameraFilled,
    UploadFile,
  },
  props: ['title','type','instructions','subtitle'],
  data() {
    return {
      dialogTableVisible: true,
      uploadComplete: false,
      camera: null,
      isTaken: false,
      mask: '../assets/IDCard.png',
      test: 'unmodified',
      buttons: [
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
      ],
      windowWidth: window.innerWidth
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth;
    });
    console.log('this is the mounted props', this.type);
    //mocking taking the picture
    let ourInterval = setInterval(() => {
      if (this.type !== 'person'){
        console.log('why are we in here ', this.type, ' ', this.type !== 'person');
        this.uploadComplete = true;
        console.log('in our set interval', this.uploadComplete);
      }
    }, 5000);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  computed: {
    computeSizeOfDialog() {
      let size = this.windowWidth > 650 ? '30%' : '90%';
      console.log('computing size of dialog ', this.windowWidth, ' and this is what we return ', size);
      return size;
    }
  },
  methods: {
    upload(item) {
      console.log('upload', item);
      this.$router.push({name:item.to , params: {type: 'person'}});
    },
    onDialogClose() {
      console.log('dialog closed');
    },
    uploadDialogClose() {
      console.log('upload dialog closed');
      this.test = 'modified';
      // this.$router.push({name: 'upload-selfie' , params: {type: 'person'}});
      // this.$router.push({name: 'captured-image'});
    }
  }
}

// import {ref, computed, onMounted, onUnmounted} from 'vue';
// import Camera from 'easy-js-camera';
// import CameraModule from "~/components/CameraModule.vue";
// import UploadFile from "~/components/UploadFile.vue";
// import { CameraFilled } from "@element-plus/icons-vue/global";
// import {useRouter} from "vue-router";
// import {usePictureStore} from "~/stores/pictureStore";

// export default {
//   components: {
//     CameraModule,
//     CameraFilled,
//     UploadFile,
//   },
//   props: ['title','type','instructions','subtitle'],
//   setup(props) {
//     let dialogTableVisible= ref(true);
//     let uploadComplete = ref(false);
//     const camera = ref(null);
//     const isTaken = ref(false);
//     const router = useRouter();
//     const mask = ref("../assets/IDCard.png");
//     let test = ref('unmodified');
//     const buttons = ref([
//       {
//         name: 'Use Camera',
//         icon: 'camera',
//         to: '',
//       },
//       {
//         name: 'Upload Image',
//         icon: 'upload',
//         to: 'upload-image',
//       },
//       {
//         name: 'Continue on smartphone',
//         icon: 'phone',
//         to: 'continue-on-smartphone',
//       }
//     ]);
//     const windowWidth = ref(window.innerWidth);
//
//     let onDialogClose = () => {
//       console.log('dialog closed');
//     }
//     let uploadDialogClose = () => {
//       console.log('upload dialog closed');
//       test = 'modified';
//       // router.push({name: 'upload-selfie' , params: {type: 'person'}});
//       // router.push({name: 'captured-image'});
//     }
//
//
//     onMounted(() => {
//       window.addEventListener('resize', () => {
//         windowWidth.value = window.innerWidth;
//       });
//       console.log('this is the mounted props' , props.type);
//       //mocking taking the picture
//       let ourInterval = setInterval(() => {
//         if (props.type !== 'person'){
//           console.log('why are we in here ' , props.type, ' ', props.type !== 'person');
//           uploadComplete.value = true;
//           console.log('in our set interval',uploadComplete.value);
//         }
//       }, 5000);
//     });
//
//     onUnmounted(() => {
//       // window.removeEventListener('resize', this.onResize);
//     });
//     const computeSizeOfDialog = computed(() => {
//       let size = windowWidth.value > 650 ? '30%' : '90%';
//       console.log('computing size of dialog ' , windowWidth.value , ' and this is what we return ' , size);
//       return size
//     });
//
//     let upload = (item) => {
//       console.log('upload', item);
//       router.push({name:item.to , params: {type: 'person'}});
//     };
//
//     return {
//       camera,
//       isTaken,
//       buttons,
//       upload,
//       dialogTableVisible,
//       computeSizeOfDialog,
//       mask,
//       uploadComplete,
//       onDialogClose,
//       uploadDialogClose,
//       test
//     }
//   }
// }

// // have to use options
</script>

<style scoped>
.row-padding{
  padding: 10px;
}

</style>