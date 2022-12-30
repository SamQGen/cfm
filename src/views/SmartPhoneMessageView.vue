<template>
  <el-card class="main-card">
    <template #header>
      <el-row justify="center">
        <h1>Use Your Smart Phone</h1>
      </el-row>
    </template>
    <div>
      <el-row justify="center">
        An SMS link has been sent to your phone. Click on the link to continue
        on your smartphone. You will be required to come back here when loading
        the images from your smartphone is completed.
      </el-row>
      <el-row class="row-padding" justify="center">
        <el-icon :size="100" class="is-loading">
          <Loading />
        </el-icon>
      </el-row>
      <el-row class="row-padding" justify="center">
        <el-button type="primary"> Resend SMS </el-button>
      </el-row>
      <el-row class="row-padding" justify="center">
        <el-button text type="primary" @click="openDialog"
          >I have changed my number</el-button
        >
      </el-row>
    </div>
  </el-card>
  <el-dialog v-model="showNewNumberDialog">
    <template #header>
      <el-row justify="center"> <h1>Change number</h1></el-row>
    </template>
    <el-row justify="center">
      <el-col :span="12"> Enter your new number: </el-col>
      <el-col :span="12">
        <el-input v-model="number" />
      </el-col>
    </el-row>
    <template #footer>
      <el-row justify="end">
        <el-button type="success" @click="closeDialog"> save </el-button>
      </el-row>
    </template>
  </el-dialog>
</template>
<script setup>
import { Loading } from "@element-plus/icons-vue";
import {onMounted, onUnmounted, ref} from "vue";
import {useRouter} from "vue-router";
let showNewNumberDialog = ref(false);
let number = ref("");
let ourInterval = null;
const router = useRouter();
let openDialog = () => {
  showNewNumberDialog.value = true;
};

onMounted(() => {
  console.log("mounted smartphone page");
  ourInterval = setInterval(() => {
    router.push({ name: "instructions-view" });
    console.log("interval hit");
  }, 5000);
});
onUnmounted(() => {
  clearInterval(ourInterval);
  console.log("unmounted");
});

let closeDialog = () => {

  showNewNumberDialog.value = false;
};
</script>

<style scoped>
.row-padding {
  margin-top: 50px;
}
</style>
