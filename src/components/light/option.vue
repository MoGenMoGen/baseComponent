<!-- 指示灯 -->
<template>
  <div>
    <el-form-item label="选择素材">
<!--      <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>-->
      <!--      <avue-input-number v-model="main.activeOption.fontSize"></avue-input-number>-->
    </el-form-item>

  </div>



</template>

<script>
export default {
  inject: ["main"],
  data() {
    return {
      dialogVisible:false,
      activeName: '1',
      radio: '1',
      url: '/img/source/source13.svg',
      form: 'el-icon-info',
      info: {
        con: '',
        val: '',
        img: ''
      },
      tableData: [],
      options: [{
        value: '等于',
        label: '等于'
      }, {
        value: '小于',
        label: '小于'
      }, {
        value: '大于',
        label: '大于'
      }, {
        value: '小于等于',
        label: '小于等于'
      }, {
        value: '大于等于',
        label: '大于等于'
      }],
    }
  },
}
</script>

<style>
</style>
