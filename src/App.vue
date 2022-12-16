<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useRoute } from 'vue-router'
const route = useRoute()
console.log('inside setup now in app' , route.query)
</script>

<template>
  <RouterView />
</template>

<style >


</style>
