<template>
<el-card class="main-card">
  <template #header>
    <div class="header">
      <h1>{{title}}</h1>
    </div>
  </template>

<upload-file></upload-file>

  <el-row>
    <div v-for="item in buttons">
      <el-col col="6" >
        <el-button type="plain" @click="upload(item)"> {{item.name}}</el-button>
      </el-col>
    </div>
  </el-row>
</el-card>
</template>

<script setup>
import UploadFile from "~/components/UploadFile.vue";
defineProps({
  title: String,
})
let buttons = [
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
let upload = (icon) => {
  console.log('upload hit', icon)
}
</script>

<style scoped>

</style>