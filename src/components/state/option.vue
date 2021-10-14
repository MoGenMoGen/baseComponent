<!-- 自定义配置 -->
<template>
  <div>
<!--    <el-form-item label="开启旋转">-->
<!--      <avue-switch v-model="main.activeOption.rotate"></avue-switch>-->
<!--    </el-form-item>-->
<!--    <template v-if="main.activeOption.rotate">-->
<!--      <el-form-item label="旋转时间">-->
<!--        <avue-input-number v-model="main.activeOption.duration"></avue-input-number>-->
<!--      </el-form-item>-->
<!--    </template>-->

    <el-form-item label="MQTT">
      <avue-input v-model="main.activeOption.mqtt"></avue-input>
    </el-form-item>

    <el-table :data="main.activeOption.tableData"  border   style="width: 100%" size="mini">
      <el-table-column prop="con" label="条件" width="100"></el-table-column>
      <el-table-column prop="val"  label="值"  width="60">  </el-table-column>
      <el-table-column  prop="img" label="状态图" width="110">
        <template slot-scope="scope">
          <el-image style="width: 24px; height: 24px" :src="scope.row.img"></el-image>
        </template>
      </el-table-column>
      <el-table-column
          label="操作"
          width="80">
        <template slot-scope="scope">
          <el-button
              @click.native.prevent="deleteRow(scope.$index, main.activeOption.tableData)"
              type="text"
              size="small">
            移除
          </el-button>
        </template>
      </el-table-column>

    </el-table>

    <el-form-item label="" label-width="1px">
      <el-input placeholder="输入值" v-model="info.val" class="input-with-select">
        <el-select v-model="info.con" slot="prepend" placeholder="条件">
          <el-option v-for="item in options"  :key="item.value"  :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <div slot="append" @click="main.handleOpenImg('activeOption.imgUrl')">
          <el-image style="width: 24px; height: 24px" :src="main.activeObj.data.value"></el-image>
        </div>
      </el-input>
      <el-button @click="addData">添加</el-button>

    </el-form-item>
  </div>
</template>

<script>
export default {
  inject: ["main"],
  data() {
    return {
      url: '/img/source/source13.svg',
      form: 'el-icon-info',
      info : {
        con:'',
        val:'',
        img:''
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
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    addData(){
      if (!this.main.activeOption.tableData){
        this.main.activeOption.tableData = []
      }
      this.info.img = this.main.activeObj.data.value;
      this.main.activeOption.tableData.push(JSON.parse(JSON.stringify(this.info)))
    },
  }
}
</script>


<style>
.el-select .el-input {
  width: 120px;
}

.input-with-select .el-input-group__prepend {
  background-color: #1d1f26;
}

.input-with-select .el-input--mini .el-input__inner {
  height: 28px;
}
</style>
