<template>
<!-- 报警数 -->
  <div>
    <div class="circle" @click="toPage">
        <span class="font" :style="{fontSize:fontSize,color:'#fff'}">{{ num }}</span>
    </div>
  </div>
</template>
<script>
import {getAlertNum} from '@/api/visual'
export default {
  name: 'alert',
  data() {
    return {
     num:0,
    }
  },
  props: {
    option: Object,
    component: Object
  },
  computed: {
    fontSize () {
      return (this.option.fontSize || 30) + 'px'
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    toPage(){
      if (this.option.url != undefined){
        window.location.href=this.option.url
      }
    },
    init(){
      if (this.option.device != undefined){
        getAlertNum(this.option.device).then(res=>{
          this.num = res.data.data
        })
      }
    }
  }
}
</script>
<style>
.circle{
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #ec0b0b;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}
.font {
  font-weight: bold;
}
</style>
