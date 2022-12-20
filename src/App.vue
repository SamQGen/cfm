<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useRoute } from 'vue-router'
import axios from 'axios'
import {useSettings} from "~/stores/userSettings";

const route = useRoute()
const store = useSettings()
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
console.log('can we get route here? ', params.name)
store.getSettings(params.name)

</script>

<template>
  <RouterView />
</template>

<style >


</style>
