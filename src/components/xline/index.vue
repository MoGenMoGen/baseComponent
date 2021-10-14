<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" v-if="!option.setUp" v-show="show"
         xml:space="preserve" class="circle-load-rect-svg" width="100%" height="100%">
      <polyline :points="option.points" class="g-rect-fill" :stroke-opacity="option.opacity"
                :stroke="option.color"
                :style="{'animation-duration':option.speed+'s'}"
                :stroke-width="option.width"
                :stroke-dasharray="option.dasharray"/>
    </svg>

    <!--   设定锚点的情况下显示-->
    <i class="el-icon-plus" style="color: #FFFFFF;font-size: 60px" v-if="option.setUp"></i>
  </div>
</template>
<script>
import {getVal} from '@/api/visual'

export default {
  name: 'xline',
  props: {
    option: Object,
    component: Object,
  },
  data() {
    return {
      show: true,
    }
  },
  computed: {},
  created() {
    this.getInfo()
    setInterval(this.getInfo, 10000);
  },
  mounted() {

  },
  // 销毁监听，防止内存泄露
  destroyed() {

  },
  methods: {
    //是否显示
    getInfo() {
      console.log(this.option)
      if (this.option.addr) {
        getVal(this.option.addr).then(res => {
          let data = res.data;
          if (data.code === 200 && data.msg !== '暂无承载数据') {
            let val = data.data
            this.show = val == this.option.openVal;
          }

        })
      }
    }


  }
}
</script>
<style lang="scss" scoped>
body {
  font-size: 10px;
}

.container {
  width: 100%;
}

.line-wrap {
  //width:300px;
  margin: 0 auto;
}

.circle-load-rect-svg {
  margin: 10px;
}

.g-rect-fill {
  fill: none; //填充颜色(画折线一般把属性设置为none)
  //stroke-width: 10; //边框宽带
  //stroke: #cb8505; //边框颜色
  stroke-linejoin: round;
  stroke-linecap: round;
  //stroke-dasharray: 20; //块宽度
  animation: dash linear infinite;
  // animation-duration: 9s;
  // fill-opacity: 0.1; //透明度
  //stroke-opacity:0.1 //边框的透明度
}

@keyframes dash {
  0% {
    stroke-dashoffset: 1000;
  }
}
</style>
