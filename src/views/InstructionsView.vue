<template>
  <el-card class="card">
    <template #header>
      <el-row justify="center">
        <h1>Hi {{ user }}</h1>
      </el-row>
    </template>
    <template #default>
      <el-main style="" class="content-container">
        <el-row justify="center">
          <el-col :md="MD_SIZE" :sm="SM_SIZE" :xs="XS_SIZE">
            <h4>
              You will be requested to capture images from your phone. You will
              be asked to allow the pages to access your camera. Click 'Allow'
              and proceed.
            </h4>
          </el-col>
        </el-row>
        <el-row justify="center">
          <el-button> OK </el-button>
        </el-row>
        <el-row justify="center">
          <el-button type="primary" text>
            Not {{calculateUser}}? Login with someone else
          </el-button>
        </el-row>
      </el-main>
    </template>
  </el-card>
</template>

<script setup lang="ts">
import { useSettings } from "../stores/userSettings.js";
import {computed} from "vue";
import { MD_SIZE, SM_SIZE, XS_SIZE } from "../assets/columnSizes.js";
const useSettingsStore = useSettings();

let user = computed(() => {
  return useSettingsStore.getUser;
});
let calculateUser= computed(() => {
  return user.value? user.value: "who you say you are?";
});
</script>

<style scoped></style>
