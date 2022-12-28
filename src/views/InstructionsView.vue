<template>
  <el-card class="main-card">
    <template #header>
      <el-row justify="center">
        <h1>Hi {{ name }}</h1>
      </el-row>
    </template>
    <el-row justify="center">
      <h4>
        You will be requested to capture images from your phone. You will be
        asked to allow the pages to access your camera. Click 'Allow' and
        proceed.
      </h4>
    </el-row>
    <el-row justify="center">
      <el-button> OK </el-button>
    </el-row>
    <el-row justify="center">
      <el-button text> Not James? Login with someone else </el-button>
    </el-row>
  </el-card>
</template>

<script setup>
import { useSettings } from "~/stores/userSettings";
import { ref, watch } from "vue";
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

<style scoped></style>
