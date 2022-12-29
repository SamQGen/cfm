<template>
  <el-card class="main-card">
    <template #header>
      <el-row justify="center">
        <h1>Verification Section</h1>
      </el-row>
    </template>
    <div class="full-height">
      <el-row class="loading-icon" justify="center">
        <el-icon :size="100" class="is-loading">
          <Loading />
        </el-icon>
      </el-row>
      <el-row justify="center" align="end">
        <el-col :md="MD_SIZE" class="loading-icon" :sm="SM_SIZE" :xs="XS_SIZE">
          <h2>
            We are currently reviewing your images. This may take up to 10 mins
          </h2>
        </el-col>
      </el-row>
      <el-row justify="center" align="end" class="loading-icon">
        <el-button> close </el-button>
      </el-row>
    </div>
  </el-card>
</template>
.loading-icon{ margin-top: 50px; }

<script setup>
import { Loading } from "@element-plus/icons-vue";
import { MD_SIZE, SM_SIZE, XS_SIZE } from "~/assets/columnSizes";
</script>

<style scoped>
.full-height {
  height: 100%;
}
.loading-icon {
  margin-top: 50px;
}
</style>
