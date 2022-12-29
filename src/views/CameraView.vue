<template>
  <el-card class="main-card">
    <template #header>
      <el-row justify="center">
        <h1>Capture Image {{ formattedString }}</h1>
      </el-row>
    </template>
    <template #default>
      <el-container class="content-container">
        <el-row justify="center">
          <camera-module :type="type"></camera-module>
        </el-row>
        <el-row class="row-padding" justify="space-evenly">
          <el-button plain @click="upload"> Capture</el-button>
        </el-row>
      </el-container>
    </template>
  </el-card>
</template>

<script setup>
import { useRouteStore } from "~/stores/routeStore";
import { computed } from "vue";
import { usePictureStore } from "~/stores/pictureStore";
import { useRouter } from "vue-router";

let type = useRouteStore().type;
const router = useRouter();

let formattedString = computed(() => {
  return type.charAt(0).toUpperCase() + type.slice(1);
});
let upload = () => {
  console.log("upload");
  usePictureStore().takePicture();
  router.push({ name: "captured-image" });
};
console.log("this is the type  in camera view", type);
</script>

<style scoped></style>
