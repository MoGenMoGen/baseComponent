<!-- 指示灯 -->
<template>
  <div>
    <el-button type="text" @click="add">添加指示灯</el-button>

    <div v-for="(item,index) in main.activeOption.tableData" :key="item">
      <el-form-item label="选择素材">
        <el-button type="text" @click="clickSource(index)">选择素材</el-button>
        <el-button type="text" @click="del(index)">删除当前项</el-button>
      </el-form-item>
      <el-form-item label="指示图" v-if="item.url">
        <el-image style="width: 30px; height: 30px"
                  :src="item.url"
                  fit="fit">
        </el-image>
      </el-form-item>

      <el-form-item label="指示图宽" v-if="item.url">
        <avue-input-number v-model="item.w"></avue-input-number>
      </el-form-item>
      <el-form-item label="指示图高" v-if="item.url">
        <avue-input-number v-model="item.h"></avue-input-number>
      </el-form-item>
      <el-form-item label="变量名">
        <el-input placeholder="请输入变量名" v-model="item.vars" clearable></el-input>
      </el-form-item>
      <el-form-item label="条件">
        <el-select v-model="item.con" placeholder="请选择" style="width: 100%">
          <el-option key="==" value="==" label="等于"></el-option>
          <el-option key="<" value="<" label="小于"></el-option>
          <el-option key=">" value=">" label="大于"></el-option>
          <el-option key=">=" value=">=" label="大于等于"></el-option>
          <el-option key="<=" value="<=" label="小于大于"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="值">
        <el-input placeholder="请输入值" v-model="item.val" clearable></el-input>
      </el-form-item>
      <el-divider></el-divider>
    </div>


    <!--  素材弹窗 -->
    <el-dialog custom-class="tc" title="选择素材" :close-on-click-modal="false"
               :visible.sync="dialogVisible" :modal="false" width="50%">
      <source-list></source-list>
    </el-dialog>


  </div>


</template>

<script>
import sourceList from "../../page/group/sourceList";

export default {
  inject: ["main"],
  components: {sourceList},
  data() {
    return {
      index:'',
      dialogVisible: false,
      activeName: '1',
      radio: '1',
      url: '/img/source/source13.svg',
      form: 'el-icon-info',
      info: {
        w:'',
        h:'',
        url: '',
        vars: '',
        con: '',
        val: ''
      },
      tableData: [],
      list:[]
    }
  },

  methods: {
    clickSource(index){
      this.index = index
      this.dialogVisible = true
    },
    setImg(url){
      // console.log(222222)

      this.main.activeOption.tableData[this.index].url=url
      this.dialogVisible = false
    },
    del(index){
      this.main.activeOption.tableData.splice(index, 1);
    },
    //添加条件
    add() {
      if (!this.main.activeOption.tableData) {
        this.main.activeOption.tableData = []
      }
      this.main.activeOption.tableData.push(this.info)
      this.$forceUpdate();
    }


  }
}
</script>

<style>
.tc {
  background-color: #ffffff;
}
</style>
