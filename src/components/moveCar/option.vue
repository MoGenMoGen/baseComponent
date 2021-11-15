<!-- 自定义配置 -->
<template>
  <div>
    <el-form-item label="小车号变量">
      <avue-input v-model="main.activeOption.v1"></avue-input>
    </el-form-item>
    <el-form-item label="产品变量">
      <avue-input v-model="main.activeOption.v2"></avue-input>
    </el-form-item>
    <el-form-item label="颜色变量">
      <avue-input v-model="main.activeOption.v3"></avue-input>
    </el-form-item>
    <el-form-item label="位置变量">
      <avue-input v-model="main.activeOption.v4"></avue-input>
    </el-form-item>
    <el-form-item label="最远位置">
      <avue-input v-model="main.activeOption.v5"></avue-input>
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
