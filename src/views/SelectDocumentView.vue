<template>
<el-card class="main-card">
  <template #header>
    <div class="header">
      <h1>Select Document</h1>
    </div>
  </template>
<!--  body-->
  <el-row class="document-row">
      <el-card shadow="never" class="box-card">
        <div slot="header" class="clearfix">
          <h2>Passport</h2>
        </div>
        <el-image
          src="https://qgen-identity.s3.eu-central-1.amazonaws.com/passport.png"
          fit="cover"
        ></el-image>
        <el-button plain @click="selectDocument('passport')"><h1>Select</h1></el-button>
      </el-card>
  </el-row>
  <el-row class="document-row">
    <el-card shadow="never" class="box-card">
      <template #header>
        <div  class="clearfix">
          <h2>National ID Card</h2>
        </div>
      </template>
      <el-image
          src="https://qgen-identity.s3.eu-central-1.amazonaws.com/id-card.png"
          fit="cover"
      ></el-image>
      <el-button type="primary" @click="selectDocument('id-card')">Select</el-button>
    </el-card>
  </el-row>
  <el-row class="document-row">
    <el-card shadow="never" class="box-card">
    <div slot="header" class="clearfix">
      <h2>Driving License</h2>
    </div>
    <el-image
        src="https://qgen-identity.s3.eu-central-1.amazonaws.com/driving-license.png"
        fit="cover"
    ></el-image>
    <el-button type="primary" @click="selectDocument('driving-license')">Select</el-button>
  </el-card>
  </el-row>

</el-card>
</template>

<script setup>
let selectDocument = (document) => {
  console.log('select document hit' , document)
  // router.push({name: 'upload-document', query: {document: document}})
}
// export default {
//   name: "SelectDocumentView"
// }
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