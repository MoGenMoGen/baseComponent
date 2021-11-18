<template>
  <div>
<!--  默认指示灯  -->
    <img src="../state/img/t1.png" alt="" v-if="defShow" height="32px">

    <img v-if="show"
         :height="h" :width="w"
        :src="imgUrl" alt="">
  </div>
</template>
<script>
export default {
  name: 'light',
  props: {
    option: Object,
    component: Object
  },
  data() {
    return {
      tUrl:'../state/img/t1.png',
      imgUrl: '',
      show:false,
      defShow:true,
      screenWidth:'',
      w:'',
      h:''
    }
  },
  computed: {

  },
  mounted() {
    this.getInfo()
    setInterval(this.getInfo, 1000);
  },
  methods: {
    getInfo() {
      if (this.option.tableData != undefined){
        this.defShow = false
        this.option.tableData.map(p => {
          if (p.testModel){
            this.imgUrl = p.url
            this.w = p.w
            this.h = p.h
            this.show =true
          }else {
            this.show = false
            let b = false;
            //con条件  vars变量  val值
            let item = localStorage.getItem(p.vars);
            //判断获取的变量满足
            if (p.con == '=='){
              if (item == p.val){
                b=true
              }
            }
            if (p.con == '<'){
              if (item < p.val){
                b=true
              }
            }
            if (p.con == '>'){
              if (item < p.val){
                b=true
              }
            }
            if (p.con == '<='){
              if (item < p.val){
                b=true
              }
            }
            if (p.con == '>='){
              if (item < p.val){
                b=true
              }
            }
            if (b) {
              this.imgUrl = p.url
              this.w = p.w
              this.h = p.h
              this.show =true
            }
          }




        })
      }

    }
  }
}
</script>
