<template>
  <el-card class="main-card" body-style="background-color">
    <template #header>
      <el-row justify="center">
        <h1>Hi {{ name }}</h1>
      </el-row>
    </template>
    <template #default>
      <div>
        <el-row justify="center">
          <el-col :md="MD_SIZE" :sm="SM_SIZE" :xs="XS_SIZE">
            <h4>
              You will be requested to capture images from your phone. You will
              be asked to allow the pages to access your camera. Click 'Allow'
              and proceed.
            </h4>
            <el-row justify="center">
              <el-button> OK </el-button>
            </el-row>
            <el-row justify="center">
              <el-button type="primary" text>
                Not James? Login with some100one else
              </el-button>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </template>
  </el-card>
</template>

<script setup>
import { useSettings } from "~/stores/userSettings";
import { ref, watch } from "vue";
import { MD_SIZE, SM_SIZE, XS_SIZE } from "~/assets/columnSizes";
let name = ref(null);
console.log("this is the settings ", useSettings().name);
watch(
  () => useSettings().getUser,
  (nv) => {
    console.log("name changed ", nv);
    name.value = nv;
  }
);
</script>

<style scoped>
.big-fill {
  height: 100%;
  background-color: #67c23a;
  margin: 20px;
}
</style>
