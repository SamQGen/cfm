<template>
  <el-card class="card">
    <template #header>
      <el-row justify="center">
        <h1>{{ title }}</h1>
      </el-row>
    </template>
    <el-container class="content-container">
      <el-space direction="vertical">
        <el-container
          direction="vertical"
          class="content-container"
          style="height: 200px; border: #67c23a solid 1px; padding: 20px"
        >
          <ul class="content-container">
            <li v-for="(item, i) in calculatedList" :key="i">{{ item }}</li>
          </ul>
        </el-container>
        <div v-for="(item, i) in buttons" :key="i" class="">
          <el-row class="row-padding" v-if="item.allow" :class="item.class">
            <el-col col="6">
              <el-button plain @click="upload(item)">
                {{ item.name }}</el-button
              >
            </el-col>
          </el-row>
        </div>
      </el-space>
    </el-container>
  </el-card>
  <slot name="dialog"> </slot>
  <el-dialog
    v-model="uploadComplete"
    title="Upload Complete"
    align-center
    :width="computeSizeOfDialog"
    @close="uploadDialogClose"
    @opened="takePicture"
  >
    upload completed!
  </el-dialog>
</template>

<script lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { usePictureStore } from "../stores/pictureStore.js";
import { useRouteStore } from "../stores/routeStore.js";
import { useSettings } from "../stores/userSettings.js";
export default {
  props: {
    title: String,
    type: String,
    instructions: String,
    subtitle: String,
  },
  setup(props) {
    let dialogTableVisible = ref(true);
    let uploadComplete = ref(false);
    const camera = ref(null);
    const isTaken = ref(false);
    let ourInterval = null;
    const router = useRouter();
    const useSettingsStore = useSettings();
    const mask = ref("../assets/IDCard.png");
    const idList = [
      "All 4 corners must be visible",
      "No reflections or glare",
      "Well lit",
      "Sharp not blurred",
    ];
    const personList = [
      "fill up the area with your face",
      "look straight ahead",
      "have no expression",
      "no sunglasses",
    ];
    const calculatedList = computed(() => {
      if (props.type === "person") {
        return personList;
      } else {
        return idList;
      }
    });
    const buttons = ref([
      {
        name: "Use Camera",
        icon: "camera",
        to: "camera-view",
        allow: true,
        class:''
      },
      {
        name: "Upload Image",
        icon: "upload",
        to: "upload-image",
        allow: useSettingsStore.allowPictureUpload,
        class:''
      },
      {
        name: "Continue on smartphone",
        icon: "phone",
        to: "continue-on-smartphone",
        allow: useSettingsStore.allowMobile,
        class:'hidden-sm-and-down'
      },
    ]);
    const windowWidth = ref(window.innerWidth);

    let uploadDialogClose = () => {
      console.log("upload dialog closed");
      // usePictureStore().takePicture()
      // router.push({name: 'upload-selfie' , params: {type: 'person'}});
      router.push({ name: "captured-image" });
    };

    let takePicture = () => {
      console.log("calling take picture");
      usePictureStore().takePicture();
    };

    let caluclateNextRoute = () => {
      let usePicture = useSettings().allowPictureUpload;
      console.log("calculating next route");
      if (props.type !== "person" && usePicture) {
        let nextRoute = { name: "upload-selfie", params: { type: "person" } };
        useRouteStore().setRoute(nextRoute);
        console.log("inside calculate next route");
        // router.push({ name: "upload-selfie", params: { type: "person" } });
      } else if (!usePicture || props.type === "person") {
        let nextRoute = { name: "verification-view" };
        useRouteStore().setRoute(nextRoute);
      }
    };

    onMounted(() => {
      window.addEventListener("resize", () => {
        windowWidth.value = window.innerWidth;
      });
      useRouteStore().setType(props.type);
      caluclateNextRoute();
      console.log("this is the mounted props", props.type);
      //mocking taking the picture
      // ourInterval = setInterval(() => {
      //   uploadComplete.value = true;
      //   console.log("in our set interval", uploadComplete.value);
      // }, 5000);
    });

    onUnmounted(() => {
      console.log("in unmoutned clearing the interval fomr upload item");
      clearInterval(ourInterval);
      // window.removeEventListener('resize', this.onResize);
    });
    const computeSizeOfDialog = computed(() => {
      let size = windowWidth.value > 650 ? "30%" : "90%";
      console.log(
        "computing size of dialog ",
        windowWidth.value,
        " and this is what we return ",
        size
      );
      return size;
    });

    let upload = (item) => {
      console.log("upload", item);
      router.push({ name: item.to, params: { type: "person" } });
    };

    return {
      camera,
      isTaken,
      buttons,
      upload,
      dialogTableVisible,
      computeSizeOfDialog,
      mask,
      uploadComplete,
      uploadDialogClose,
      takePicture,
      calculatedList,
    };
  },
};
</script>

<style scoped>
.row-padding {
  padding: 10px;
}
</style>
