<template>
  <el-card class="main-card">
    <template #header>
      <h1 class="center">Upload File</h1>
    </template>
  <UploadFile></UploadFile>

  </el-card>
</template>

<script setup>
import UploadFile from "~/components/UploadFile.vue";
</script>

<style scoped>

</style>