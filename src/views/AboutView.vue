<template>
  <el-row class="mb-4">
    <el-col :span="24">
      <el-card>
        <template #header>
          <h1>
            Prove your identity

          </h1>

        </template>
          <h2>
            consent
          </h2>
          <div>
            I declare that I am over 16 years old and I agree to the collection, processing and storing of my personal information by QGen for the purposes of identity verification and that the information I provide is accurate and true. I understand that I remain responsible in case I provide wrong information or any documents I provide are counterfeits or fake.
          </div>
  <el-checkbox class="footer" v-model="checked" label="I agree to the terms and conditions" name="type"></el-checkbox>
        <el-row class="footer">
          <el-button  :disabled="!checked" type="primary" @click="submit">Submit</el-button>
        </el-row>

      </el-card>
    </el-col>
  </el-row>

</template>

<style>
  .footer {
    display: flex;
    justify-content: center;
  }
</style>

<script setup >
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
import {ref} from 'vue'
import { useRoute } from 'vue-router'
const checked = ref(false)
let submit = () => {
  console.log('submit hit')
}
const route = useRoute()
console.log('inside setup now in about view' , route.query)
</script>
