<template>
  <div class="cursor">
    <div :style="{left: left +'%'}">
      <img :height="h" :width="w" :src="url" alt="">
      <!--      <img src="./img/car.jpg" alt="" width="80px">-->
    </div>
  </div>
</template>
<script>
export default {
  name: 'cursor',
  props: {
    option: Object,
    component: Object
  },
  data() {
    return {
      left: 0,

    }
  },
  created() {
    this.getInfo()
    setInterval(this.getInfo, 10000);
  },


  computed: {
    url() {
      return (this.option.url)
    },
    w() {
      return (this.option.w)
    },
    h() {
      return (this.option.h)
    }
  },
  methods: {
    getInfo() {
      let z = localStorage.getItem(this.option.valNm);
      console.log('z:'+z)
        console.log(this.option.end,this.option.start)
      let total = Number(this.option.end) - Number(this.option.start)
        console.log('total:'+total)
      this.left = (Number(z)-Number(this.option.start))/ Number(total)
      // //大于最大到最右
      // if (Number(z) > Number(this.option.end)){
      //   this.left = 100
      // }
      // //小于最小
      // if (Number(z) < Number(this.option.start)){
      //   this.left = 0
      // }
      // if (Number(z) < Number(this.option.end) && Number(z) > Number(this.option.start)){
      //   //开始点位到0的偏移量 -20 + x = 0
      //   let x = Math.abs(Number(this.option.start));
      //   //求出自定范围和0-100的换算系数，例100/40=2.5
      //   let y = Number(100)/ Number(this.option.end)
      //   //z=获取到的值加上偏移量与系数换算 例z+x*y
      //   this.left =  (Number(z)+Number(x))*Number(y)
      // }
    },
      getInfo2() {
          let z = localStorage.getItem(this.option.valNm);

          //大于最大到最右
          if (Number(z) > Number(this.option.end)){
              this.left = 100
          }
          //小于最小
          if (Number(z) < Number(this.option.start)){
              this.left = 0
          }
          if (Number(z) < Number(this.option.end) && Number(z) > Number(this.option.start)){
              //开始点位到0的偏移量 -20 + x = 0
              let x = Math.abs(Number(this.option.start));
              //求出自定范围和0-100的换算系数，例100/40=2.5
              let y = Number(100)/ Number(this.option.end)
              //z=获取到的值加上偏移量与系数换算 例z+x*y
              this.left =  (Number(z)+Number(x))*Number(y)
          }
      }
  }
}
</script>
<style lang="scss" scoped>
  .cursor{
    position: relative;
    >div{
      position: absolute;
      img{
        transform: translateX(-50%);
      }
    }
  }
</style>