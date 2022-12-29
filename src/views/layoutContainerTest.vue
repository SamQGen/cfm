<template>
  <!--  Some main style sheet changes will be needed to use this!-->
  <el-container>
    <el-header height="200px" class="header">Header</el-header>
    <el-main class="main container">
      <el-row justify="center" v-for="i in 5" :key="i">
        <h2>main {{ i }}</h2>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "layoutContainerTest",
};
</script>

<style scoped>
/*if we use this class instead of el-card we have to change the main style sheet app to have width 80%*/
/*perhaps some other rhings as well */

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  /*background-color: #67c23a;*/
  /*margin: 20px;*/
}
.header {
  background-color: #06648d;
}
.main {
  height: 70vh;

  background-color: #b8b8ff;
}
</style>
