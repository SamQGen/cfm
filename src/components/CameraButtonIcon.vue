<template>
<!--this is a wrapper class-->
<!--  cant use vue 3 things inside vue 2 style-->
<!--  need vue 2 for camera module-->
  <el-button @click="$emit('button-clicked')" class="camera-button" type="warning" circle >
    <el-icon :size="iconSize"><Camera></Camera></el-icon>
<!--    {{windowHeight}}-->
  </el-button>
</template>

<script lang="js">

import {Camera} from '@element-plus/icons-vue';
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: "CameraButtonIcon",
  props: {
    // define any props here
  },
  components: {
    Camera,
  },
  setup() {

    let windowHeight = 0;
    let iconSize;

    const handleResize = () => {
      windowHeight = window.innerWidth;

      if (windowHeight > 650) {
        console.log('icon size', iconSize);
        iconSize = 50;
      } else {
        iconSize = 10;
        console.log('icon size ', iconSize);
      }
    };

    onMounted(() => {
      windowHeight = window.innerHeight;
      window.addEventListener('resize', handleResize);
    });

    return {
      windowHeight,
      iconSize,
    };
  },
});

</script>

<style scoped>
.camera-button{
  width: 80px;
  height: 80px;
}
@media only screen and (max-width: 600px) {
  .camera-button{ width: 50px; height: 50px;}
}

</style>