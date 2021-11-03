<!-- 液位 -->
<template>
  <div>

    <el-form-item label="数据绑定">
      <avue-input v-model="main.activeOption.val"></avue-input>
    </el-form-item>

    <el-form-item label="高">
      <avue-input v-model="main.activeOption.height"></avue-input>
    </el-form-item>

    <el-form-item label="宽">
      <avue-input v-model="main.activeOption.width"></avue-input>
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
