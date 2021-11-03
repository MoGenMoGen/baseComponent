<!-- 液位 -->
<template>
  <div>
<!--    <div id="myChart2" style="width: 73px;height: 104px"></div>-->
    <dv-water-level-pond v-if="show" :config="config" :style="{width: width, height:height}" />
  </div>
</template>
<script>
import {getVal} from '@/api/visual'

export default {
  name: 'level',
  props: {
    option: Object,
    component: Object
  },
  data() {
    return {
      show:false,
      height:'85px',
      width:'74px',
      config:{
        data: [90],
        waveHeight:5,
        waveNum:5,
        waveOpacity:1,
        formatter:''
      }
    }
  },
  mounted() {
    this.setVal2()
  },
  computed: {},
  methods: {
    setVal2() {
      this.height = this.option.height
      this.width = this.option.width
      // console.log(this.option.height)
      // console.log(this.option.width)
      if (this.option.val) {
        getVal(this.option.val).then(res => {
          this.config.data=[res.data.data]
          this.show = true
        })
      }else {
        this.config.data=[90]
        this.show = true
      }
    },
  }
}
</script>
