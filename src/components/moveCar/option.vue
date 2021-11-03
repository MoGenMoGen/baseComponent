<!-- 自定义配置 -->
<template>
  <div>
    <el-form-item label="小车号">
      <avue-input v-model="main.activeOption.v1"></avue-input>
    </el-form-item>
    <el-form-item label="产品号">
      <avue-input v-model="main.activeOption.v2"></avue-input>
    </el-form-item>
    <el-form-item label="颜色号">
      <avue-input v-model="main.activeOption.v3"></avue-input>
    </el-form-item>
  </div>
</template>

<script>
export default {
  inject: ["main"]
}
</script>

<style>
</style>
