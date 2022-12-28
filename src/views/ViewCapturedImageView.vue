<template>
<el-card class="main-card">
  <template #header>
    <div class="header">
      <el-space direction="vertical">
        <h1>Captured Image</h1>
        <h4>Are you happy with the captured image</h4>
      </el-space>
    </div>
  </template>
<!--  body -->
  <el-space class="vertical">
<el-row class="row-padding">
      <el-col col="6" >
        <el-button plain @click="upload"> Upload</el-button>
      </el-col>
    </el-row>
    <el-row class="row-padding">
      <el-col col="6" >
        <el-button plain @click="retake"> Retake</el-button>
      </el-col>
    </el-row>
  </el-space>
</el-card>
</template>

<script setup>
let upload = () => {
  console.log('upload')
}
let retake = () => {
  console.log('retake')
}

</script>

<style scoped>

</style>