<template>
  <el-container>
    <el-header height="200px" class="header">Header</el-header>
    <el-main class="main">Main</el-main>
  </el-container>
</template>

<script>
export default {
  name: "layoutContainerTest",
};
</script>

<style scoped>
.header {
  background-color: #06648d;
}
.main {
  /*height: 70vh;*/
  background-color: #b8b8ff;
}
</style>
