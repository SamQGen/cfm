<template>
<el-card class="main-card">
  <template #header>
    <div class="header">
      <h1>Select Document</h1>
    </div>
  </template>
<!--  body-->
  <el-row v-for="type in verficationType" class="document-row">
      <el-card shadow="never" class="box-card">
        <template #header>
          <div  class="clearfix">
            <h2>{{type.name}}</h2>
          </div>
        </template>
        <el-image
          :src='type.image'
          fit="cover"
        ></el-image>
        <el-button plain @click="selectDocument(type.to)"><h1>Select</h1></el-button>
      </el-card>
  </el-row>


</el-card>
</template>

<script setup>
import {useRouter} from "vue-router";
const router = useRouter()
let selectDocument = (document) => {
  console.log('select document hit' , document)
  router.push({name: document})
}
let verficationType = [
  {
    name:'Passport',
    image: 'https://qgen-identity.s3.eu-central-1.amazonaws.com/passport.png',
    type: 'passport',
    to:'upload-passport'
  },
  {
    name:'ID Card',
    image: 'https://qgen-identity.s3.eu-central-1.amazonaws.com/id-card.png',
    type: 'id-card',
    to:''
  },
  {
    name:'Driving License',
    image: 'https://qgen-identity.s3.eu-central-1.amazonaws.com/driving-license.png',
    type: 'driving-license',
    to:''
  },
]
</script>

<style scoped>
.box-card {
  width: 300px;
  margin-bottom: 20px;
  padding: 10px;
  text-align: center;

}
.document-row{
  display: flex;
  justify-content: center;
}
</style>