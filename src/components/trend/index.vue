<template>
  <div>
    <img :height="h" :width="w"  :src="url" alt="" @click="openShow">
    <Modal v-model="dialogVisible" title="趋势" :mask-closable="false" draggable="true"
           :mask="false" :footer-hide="true" width="900" :on-cancel="off">

      <RadioGroup v-model="vertical"  @on-change="changeRadio">
        <Radio :label="item" v-for="item in type" :key="item">
          <span>{{ item }}</span>
        </Radio>
      </RadioGroup>
      <div id="myChart" v-if="dialogVisible" :style="{width: '850px', height: '300px'}"></div>
    </Modal>
  </div>
</template>
<script>
export default {
  name: 'trend',
  props: {
    option: Object,
    component: Object
  },
  data() {
    return {
      vertical:'',
      dialogVisible: false,
      now: '',
      oneDay: '',
      value: '',
      data: [],
      timer: null,
      myChart: null,
      xData: [],
      vData: [],
      imgUrl: '',
      show:false,
      defShow:true,
      type:[]
      // w:'',
      // h:''
    }
  },
  computed: {
    url(){
      return (this.option.url)
    },
    w(){
      return (this.option.w)
    },
    h(){
      return (this.option.h)
    }
  },
  mounted() {
    this.getInfo()
  },

  methods: {
    changeRadio(){
      this.xData=[]
      this.vData=[]
    },
    getInfo(){
      this.type =  this.option.points.split(",")
      this.vertical = this.type[0]
    },


    off() {
      clearInterval(this.timer);
      this.timer = null;
      this.dialogVisible = false
      this.data = []
      this.value = ''
      this.oneDay = ''
      this.now = ''

    },
    openShow() {
      this.dialogVisible = true
      setTimeout(() => {
        this.drawLine()
      }, 500)
    },

    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = this.$echart.init(document.getElementById('myChart'))
      this.timer = setInterval(this.setData, 1000);
    },
    setData() {
      this.xData.push(this.dateFormat(new Date(), "hh:mm:ss"));
      this.vData.push(localStorage.getItem(this.vertical));
      if (this.xData.length > 20) {
        this.xData.shift();
        this.vData.shift();
      }
      this.myChart.setOption({
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: this.xData
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.vData,
            type: 'line',
            smooth: true,
            showSymbol: false,
          }
        ]
      });


    },
    //格式化时间
    dateFormat(date, format) {
      format = format || 'yyyy-MM-dd hh:mm:ss';
      if (date !== 'Invalid Date') {
        let o = {
          "M+": date.getMonth() + 1, //month
          "d+": date.getDate(), //day
          "h+": date.getHours(), //hour
          "m+": date.getMinutes(), //minute
          "s+": date.getSeconds(), //second
          "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
          "S": date.getMilliseconds() //millisecond
        }
        if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
            (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (let k in o)
          if (new RegExp("(" + k + ")").test(format))
            format = format.replace(RegExp.$1,
                RegExp.$1.length === 1 ? o[k] :
                    ("00" + o[k]).substr(("" + o[k]).length));
        return format;
      }
      return '';

    }
  }
}
</script>
<style>
.bj {
  background-color: #ffffff;
}
</style>
