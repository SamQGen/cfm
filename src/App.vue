<script setup lang="ts">
import { RouterView } from "vue-router";
import { useSettings } from "./stores/userSettings.js";

const store = useSettings();
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams) => searchParams.get('name'),
});
console.log("can we get route here? ", params.name);
store.getSettings(params.name);
// const background = store.backgroundColor;
</script>

<template>
  <RouterView class="background-color"  />
</template>

<style>
.background-color {
  /*background-color: v-bind(background);*/
}

</style>
