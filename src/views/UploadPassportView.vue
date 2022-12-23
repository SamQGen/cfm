<template>
  <upload-item
  title="Upload Passport"
  type="passport"
  :subtitle="subtitle"
  ></upload-item>
</template>

<script setup>
import UploadItem from "~/components/UploadItem.vue";
let subtitle = 'place your Passport inside the circle so we can extract information about you from your passport'
</script>

<style scoped>


</style>