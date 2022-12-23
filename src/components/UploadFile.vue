<template>
  <el-upload
      class="upload-demo"
      drag
      action="https://run.mocky.io/v3/50f1610f-f9ba-4ba6-8dec-8591c649300c"
      multiple
  >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      Drop file here or <em>click to upload</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500kb
      </div>
    </template>
  </el-upload>

</template>

<script setup lang="ts">
import { UploadFilled } from '@element-plus/icons-vue'


let upload = (icon) => {
  console.log('upload hit', icon)
}

</script>

<style scoped>

</style>