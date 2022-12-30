<template>
  <el-card class="main-card">
    <template #header>
      <el-row justify="center">
        <h1>Upload File</h1>
      </el-row>
    </template>
    <UploadFile></UploadFile>
  </el-card>
</template>
<script setup>
import UploadFile from "~/components/UploadFile.vue";
</script>

<style scoped></style>
