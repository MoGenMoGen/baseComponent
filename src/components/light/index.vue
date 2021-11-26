<template>
  <div>
<!--  默认指示灯  -->
    <img src="../state/img/t1.png" alt="" v-if="defShow" height="32px">
    <img v-if="show"  :height="h" :width="w"  :src="imgShowUrl" alt="">

<!--    <img src="../state/img/t1.png" alt="" height="32px">-->
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
      imgShowUrl: '',
      show:false,
      defShow:true,
      w:'',
      h:''
    }
  },
  computed: {
    // w() {
    //   return (this.option.w)
    // },
    // h() {
    //   return (this.option.h)
    // }
  },
  mounted() {
    this.getInfo()
   setInterval(this.getInfo, 10000);
  },
  methods: {
    getInfo() {
      if (this.option.tableData != undefined){
        this.defShow = false
        this.option.tableData.map(p => {
          // if (p.testModel){
          //   this.imgUrl = p.url
          //   this.w = p.w
          //   this.h = p.h
          //   this.show =true
          // }else {
            //this.show = false
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
              this.show = true
              this.imgShowUrl = p.url
              // console.log(this.imgShowUrl)
              this.w = p.w
              this.h = p.h

            }

          // }




        })
      }

    }
  }
}
</script>
