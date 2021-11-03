<template>
  <div>
    <div :style="{'margin-left': left +'%'}">
      <img src="./img/car.jpg" alt=""  width="80px">
      <table class="imagetable">
        <tr>
          <td>小车号 <span style="font-size: 15px">{{option.v1}}</span> </td>
        </tr>
        <tr>
          <td>产品号 <span style="font-size: 15px">{{option.v2}}</span></td>
        </tr>
        <tr>
          <td>颜色号 <span style="font-size: 15px">{{option.v3}}</span></td>
        </tr>
      </table>

    </div>

  </div>
</template>
<script>
export default {
  name: 'moveCar',
  props: {
    option: Object,
    component: Object
  },
  data() {
    return {
      left:0
    }
  },
  created() {
    this.getInfo()
   // setInterval(this.getInfo, 1000);
  },
  methods: {
    getInfo() {
      this.left = Number(this.left) + Number(1)
      if (this.left === 100){
        this.left = 0
      }
    }
  },
  computed: {
    fontSize() {
      return (this.option.fontSize || 30) + 'px'
    }
  },



}
</script>
<style type="text/css">
table.imagetable {
  width: 86px;
  font-size:10px;
  color:#333333;
  border-width: 1px;
  border-color: #999999;
  border-collapse: collapse;
}
/*table.imagetable th {*/
/*  background:#b5cfd2 ;*/
/*  border-width: 1px;*/
/*  padding: 8px;*/
/*  font-size:10px;*/
/*  border-style: solid;*/
/*  border-color: #999999;*/
/*}*/
table.imagetable td {
  background: rgba(68, 108, 243, 0.64);
  border-width: 1px;
  padding: 8px;
  color: #FFFFFF;
  font-size:10px;
  border-style: solid;
  border-color: #565555;
}
</style>
