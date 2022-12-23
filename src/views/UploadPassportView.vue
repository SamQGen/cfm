<template>
  <upload-item
  title="Upload Passport"
  type="passport"
  :instructions="dialogDescription"
  ></upload-item>
</template>

<script setup>
import UploadItem from "~/components/UploadItem.vue";
let dialogDescription = 'place your Passport inside the circle so we can extract information about you from your passport'
</script>

<style scoped>


</style>