<template>
  <el-card class="main-card">
    <template #header>
      <el-row justify="center">
        <h1>Select Document</h1>
      </el-row>
    </template>
    <!--  body-->
    <el-row
      v-for="(type,i) in verficationType"
      :key="i"
      class="document-row"
      v-show="type.show"
    >
      <el-button class="button-list" plain @click="selectDocument(type.to)">
        <h1>{{ type.name }}</h1>
      </el-button>
    </el-row>
  </el-card>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useSettings } from "~/stores/userSettings";
const router = useRouter();
const store = useSettings();

let selectDocument = (document) => {
  console.log("select document hit", document);
  router.push({ name: document });
};
let verficationType = [
  {
    name: "Passport",
    image: "https://qgen-identity.s3.eu-central-1.amazonaws.com/passport.png",
    type: "passport",
    to: "upload-passport",
    show: store.allowPassport,
  },
  {
    name: "ID Card",
    image: "https://qgen-identity.s3.eu-central-1.amazonaws.com/id-card.png",
    type: "id-card",
    to: "upload-id",
    show: store.allowIDCard,
  },
  {
    name: "Driving License",
    image:
      "https://qgen-identity.s3.eu-central-1.amazonaws.com/driving-license.png",
    type: "driving-license",
    to: "upload-dl",
    show: store.allowDrivingLicense,
  },
];
</script>

<style scoped>
.button-list {
  width: 300px;
  margin-bottom: 20px;
  padding: 10px;
  text-align: center;
}

.document-row {
  display: flex;
  justify-content: center;
}
</style>
