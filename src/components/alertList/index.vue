<template>
  <div>

    <el-button type="primary" @click="openDataShow">报警设置</el-button>
    <dv-scroll-board v-if="show" :config="config" class="table" @click="toRow"/>


    <el-dialog title="报警设置" :visible.sync="dataShow" width="30%" append-to-body fullscreen>

      <el-input placeholder="请输入设备名称搜索" v-model="name">
        <template slot="prepend">输入设备名称搜索</template>
        <el-button slot="append" icon="el-icon-search" @click="onLoad"></el-button>
      </el-input>


      <el-table :data="data" style="width: 100%">
        <el-table-column prop="name" label="设备名称"></el-table-column>
        <el-table-column prop="unit" label="单位" width="180"></el-table-column>
        <el-table-column prop="faultVal" label="上限" width="180">
          <template slot-scope="scope">
            <el-input v-model="scope.row.faultVal" placeholder="请输入上限警报值" @change="updVal(scope.row,1)"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="lowVal" label="下限" width="180">
          <template slot-scope="scope">
            <el-input v-model="scope.row.lowVal" placeholder="请输入下限警报值" @change="updVal(scope.row,2)"></el-input>
          </template>
        </el-table-column>


      </el-table>
      <el-pagination
          background @size-change="sizeChangeHandle"
          @current-change="currentChangeHandle"
          :current-page="page.currentPage"
          :page-size="page.pageSize"
          :total="page.total"
          layout="prev, pager, next">
      </el-pagination>

    </el-dialog>

  </div>
</template>
<script>
import {getAlertList, updAlert, getSiteList,updAlertVal} from '@/api/visual'


export default {
  name: 'alertList',
  data() {
    return {
      name:'',
      form: {},
      data: [],
      query: {},
      page: {
        pageSize: 20,
        currentPage: 1,
        total: 0
      },
      loading: true,
      option2: {
        searchLabelWidth: 150,
        height: 'auto',
        size: 'mini',
        calcHeight: 30,
        tip: false,
        addBtn: false,
        editBtn: false,
        searchShow: true,
        searchMenuSpan: 6,
        border: true,
        index: true,
        viewBtn: true,
        selection: false,
        menu: false,
        dialogClickModal: false,
        column: [
          {
            label: "设备名称",
            prop: "name",
            search: true,
          },
          {
            label: "单位",
            prop: "unit",
            width: 100,
          },
          {
            label: "上限",
            prop: "faultVal",
            width: 120,

            slot: true,
          },
          {
            label: "下限",
            prop: "lowVal",
            width: 120,
          },
        ]
      },
      dataShow: false,
      show: false,
      list: [],
      config: {
        headerHeight: 60,
        index: true,
        rowNum: 10,
        columnWidth: [80, 200, 200, 300, 1000, 80],
        align: ['center'],
        header: ['发生时间', '错误消息文本', '错误点', '错误详情', '操作'],
        data: []
      },
    };
  },
  props: {
    option: Object,
    component: Object
  },
  computed: {
    fontSize() {
      return (this.option.fontSize || 30) + 'px'
    }
  },

  methods: {
    openDataShow() {
      this.dataShow = true
      this.onLoad()
    },
    // 分页, 每页条数
    sizeChangeHandle(val) {
      this.page.currentPage = 1;
      this.page.pageSize = val;
      this.onLoad()
    },
    // 分页, 当前页
    currentChangeHandle(val) {
      this.page.currentPage = val;
      this.onLoad()
    },


    updVal(row, type) {
      //上限
      if (type === 1) {
        updAlertVal(row.id,row.faultVal,type).then(res=>{
          console.log(res.data.code)
          if (res.data.code === 200){
            this.$message({
              message: '修改成功',
              type: 'success'
            });
          }
        })
      }
      //下限
      if (type === 2) {
        updAlertVal(row.id,row.lowVal,type).then(res=>{
          if (res.data.code === 200){
            this.$message({
              message: '修改成功',
              type: 'success'
            });
          }
        })
      }

    },
    //点击行
    toRow(row) {
      if (row.columnIndex === 5) {
        //消除报警
        updAlert(this.list[row.rowIndex].id).then(res => {
          if (res.data.code === 200) {
            this.$message({
              message: '消除成功',
              type: 'success'
            });
            this.show = false
            this.init()
          }
        })

      }else {
        //跳转页面
        window.location.href="http://10086sj.jinkworld.com/view/1435859771960881153";


      }

    },
    init() {
      this.config.data = []
      getAlertList().then(res => {
        let data = res.data.data
        this.list = data
        for (let i in data) {
          let myCars = [data[i].createTime, data[i].msg, data[i].addr, data[i].details, "消除"];
          this.config.data.push(myCars)
        }
        this.show = true
      })
    },
    // searchReset() {
    //   this.query = {};
    //   this.onLoad(this.page);
    // },
    // sizeChange(pageSize){
    //   this.page.pageSize = pageSize;
    // },
    // currentChange(currentPage){
    //   this.page.currentPage = currentPage;
    // },
    // searchChange(params, done) {
    //   this.query = params;
    //   this.page.currentPage = 1;
    //   this.onLoad(this.page, params);
    // },
    // refreshChange() {
    //   this.onLoad(this.page, this.query);
    // },
    onLoad() {
      this.loading = true;
      getSiteList(this.page.currentPage, this.pageSize, this.name ).then(res => {
        const data = res.data.data;
        this.page.total = data.total;
        this.data = data.records;
        this.loading = false;
      });
      // axios.get(this.apiUrl + 'blade-mh/site/apiList?current=' + page.currentPage + '&size=' + page.pageSize + '&name=' + params.name ).then(res => (
      //     this.page.total = res.data.data.total,
      //         this.data = res.data.data.records
      // ))

    }

  }
}
</script>
<style>
.table {

  width: 1650px;
  height: 900px;
}

</style>
