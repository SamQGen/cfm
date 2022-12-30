<template>
  <upload-item type="id" title="Upload ID Card" :subtitle="subtitle">
  </upload-item>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
let subtitle =
  "place your ID Card inside the circle so we can extract information about your ID";

onMounted(() => {
  console.log("mounted");
  setInterval(() => {
    console.log("completed");
  }, 5000);
});
</script>

<style scoped></style>
