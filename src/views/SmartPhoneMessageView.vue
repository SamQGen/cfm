<template>
<el-card class="main-card">
  <template #header>
    <h1 class="center">
      Use Your Smart Phone
    </h1>
  </template>
  <div class="body">
    <el-row class="center">

        An SMS link has been sent to your phone.
        Click on the link to continue on your
        smartphone.

        You will be required to come back
        here when loading the  images
        from your smartphone is completed.
    </el-row>
    <el-row class="center loading-icon">
      <el-icon :size="100" class="is-loading">
        <Loading />
      </el-icon>
    </el-row>
    <el-row class="center loading-icon">
      <el-button type="primary" > Resend SMS </el-button>
    </el-row>
    <el-row class="center loading-icon">
      <el-button text >I have changed my number</el-button>
    </el-row>
  </div>

</el-card>
</template>

<script setup>
import {
  Loading
} from '@element-plus/icons-vue'
</script>

<style scoped>
.fit-middle{
  width: 50%;
}
.loading-icon{
  margin-top: 50px;
}
.el-card__body{
}
</style>