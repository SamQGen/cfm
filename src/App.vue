<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useRoute } from 'vue-router'
import axios from 'axios'
import {useSettings} from "~/stores/userSettings";

const route = useRoute()
console.log('inside setup now in app' , route.query)
const store = useSettings()
store.getSettings()

</script>

<template>
  <RouterView />
</template>

<style >


</style>
