<!--能耗统计-->
<template>
  <div >
    <div style="text-align: center">

      <el-select v-model="value" placeholder="请选择" size="mini" @change="changeSelect">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
      <el-date-picker size="mini" v-if="value === '自定义'" @change="changeTime"
                      style="margin-left: 20px"
                      v-model="value1"
                      type="datetimerange"
                      range-separator="至" value-format="yyyy-MM-dd HH:mm:ss"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期">
      </el-date-picker>
    </div>


    <el-row :gutter="20" style="margin-top: 10px">
      <el-col :span="8" style="text-align: center">
          <div style="height: 180px;">
            <img src="./ydl.png" alt="">
            <span style="position: absolute;left: 160px;font-size: 30px;color: rgba(36, 247, 240, 1);top: 10px">用电量统计</span>
            <span style="position: absolute;left: 200px;font-size: 22px;color: rgb(255,255,255);top: 70px">总用电量统计</span>
            <span style="position: absolute;left: 280px;font-size: 22px;color: rgb(255,255,255);top: 120px">{{ total1 }} KWH</span>
          </div>
          <div>
            <div id="myChart1" :style="{width: '600px', height: '700px'}"></div>
          </div>
      </el-col>


      <el-col :span="8" style="text-align: center">
        <div style="height: 180px">
          <img src="./ysl.png" alt="">
          <span style="position: absolute;left: 710px;font-size: 30px;color: rgba(36, 247, 240, 1);top: 10px">用水量统计</span>
          <span style="position: absolute;left: 760px;font-size: 22px;color: rgb(255,255,255);top: 70px">总用水量统计</span>
          <span style="position: absolute;left: 840px;font-size: 22px;color: rgb(255,255,255);top: 120px">{{ total2 }} m³</span>
        </div>
        <div id="myChart2" :style="{width: '600px', height: '700px'}"></div>
      </el-col>


      <el-col :span="8" style="text-align: center">
        <div style="height: 180px">
          <img src="./yql.png" alt="">
          <span style="position: absolute;left: 1270px;font-size: 30px;color: rgba(36, 247, 240, 1);top: 10px">用气量统计</span>
          <span style="position: absolute;left: 1330px;font-size: 22px;color: rgb(255,255,255);top: 70px">总用气量统计</span>
          <span style="position: absolute;left: 1410px;font-size: 22px;color: rgb(255,255,255);top: 120px">{{ total3 }} m³</span>
        </div>
        <div id="myChart3" :style="{width: '600px', height: '700px'}"></div>

      </el-col>
    </el-row>
  </div>
</template>
<script>
import {energy} from '@/api/visual'
export default {
  data() {
    return {
      total1:'',
      total2:'',
      total3:'',
      options: [{
        value: '累计',
        label: '累计'
      }, {
        value: '自定义',
        label: '自定义'
      }],
      value: '累计',
      value1:''
    }
  },
  name: 'energy',
  props: {
    option: Object,
    component: Object
  },
  mounted(){
    this.drawLine1("累计");
    this.drawLine2("累计");
    this.drawLine3("累计");
  },
  computed: {

  },
  methods: {
    changeSelect(row){
      if (row == "累计"){
        console.log(123123)
        this.drawLine1("累计");
        this.drawLine2("累计");
        this.drawLine3("累计");
      }
      console.log(row)
    },
    changeTime(row){
      this.drawLine1(row.toString());
      this.drawLine2(row.toString());
      this.drawLine3(row.toString());
    },


    //用电量
    drawLine1(time){
      energy(this.option.ydlzl,this.option.ydl,time).then(res=>{
        let data = res.data.data.list
        this.total1 = res.data.data.total
        let myChart = this.$echart.init(document.getElementById('myChart1'))
        myChart.setOption({
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '420px',
            orient: 'vertical',
            left: '100px',
            bottom: "0",
            textStyle: {
              color: "#fff"
            },
            formatter: (name) => {
              if (data.length) {
                const item = data.filter((item) => item.name === name)[0];
                return `${name}：   ${item.value}  KWH`;
              }
            },
          },
          series: [
            {
              type: 'pie',
              top: '-250px',
              radius: '50%',
              label: {
                show:false,
                color: '#fff'
              },
              data: res.data.data.list,
            }
          ]
        });
      })
    },
    //用水量
    drawLine2(time){
      energy(this.option.yslzl,this.option.ysl,time).then(res=>{
        let data = res.data.data.list
        this.total2 = res.data.data.total
        let myChart = this.$echart.init(document.getElementById('myChart2'))
        myChart.setOption({
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '420px',
            orient: 'vertical',
            left: '100px',
            bottom: "0",
            textStyle: {
              color: "#fff"
            },
            formatter: (name) => {
              if (data.length) {
                const item = data.filter((item) => item.name === name)[0];
                return `${name}：   ${item.value}  m³`;
              }
            },
          },
          series: [
            {
              type: 'pie',
              top: '-250px',
              radius: '50%',
              label: {
                show:false,
                color: '#fff'
              },
              data: res.data.data.list,
            }
          ]
        });
      })
    },
    //燃气量
    drawLine3(time){
      energy(this.option.yqlzl,this.option.yql,time).then(res=>{
        let data = res.data.data.list
        this.total3 = res.data.data.total
        let myChart = this.$echart.init(document.getElementById('myChart3'))
        myChart.setOption({
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '420px',
            orient: 'vertical',
            left: '100px',
            bottom: "0",
            textStyle: {
              color: "#fff"
            },
            formatter: (name) => {
              if (data.length) {
                const item = data.filter((item) => item.name === name)[0];
                return `${name}：   ${item.value}  m³`;
              }
            },
          },
          series: [
            {
              type: 'pie',
              top: '-250px',
              radius: '50%',
              label: {
                show:false,
                color: '#fff'
              },
              data: res.data.data.list,
            }
          ]
        });
      })
    }
  }
}
</script>
<style>
.el-range-editor.el-input__inner{
  background-color: black;
}

</style>
