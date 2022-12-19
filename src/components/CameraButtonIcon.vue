<template>
<!--this is a wrapper class-->
<!--  cant use vue 3 things inside vue 2 style-->
<!--  need vue 2 for camera module-->
  <el-button @click="$emit('button-clicked')" class="camera-button" type="warning" circle >
    <el-icon :size="50"><Camera></Camera></el-icon>
  </el-button>
</template>

<script setup>
import {
  Camera
} from '@element-plus/icons-vue'

</script>

<style scoped>
.camera-button{
  width: 80px;
  height: 80px;
}
</style>