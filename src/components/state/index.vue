<template>
  <div>
    <el-image :src="imgUrl"></el-image>
  </div>
</template>
<script>
import {getVal} from '@/api/visual'

export default {
  name: 'state',
  props: {
    option: Object,
    component: Object
  },
  data() {
    return {
      imgUrl: '/img/source/source246.png',
    }
  },
  computed: {},
  created() {
    this.getInfo()
    setInterval(this.getInfo, 10000);
  },
  methods: {
    getInfo() {
      if (this.option.mqtt) {
        getVal(this.option.mqtt).then(res => {
          let data = res.data;
          if (data.code === 200 && data.msg !== '暂无承载数据') {
            let mqttVal = data.data
            this.option.tableData.map(item=>{
              if (item.con == "等于" && Number(mqttVal) == Number(item.val)){
                this.imgUrl = item.img
              }
              if (item.con === '小于' && Number(mqttVal) < Number(item.val)){
                this.imgUrl = item.img
              }
              if (item.con === '大于' && Number(mqttVal)  > Number(item.val)){
                this.imgUrl = item.img
              }
              if (item.con === '小于等于' && Number(mqttVal)  <= Number(item.val)){
                this.imgUrl = item.img
              }
              if (item.con === '大于等于' && Number(mqttVal)  >= Number(item.val)){
                this.imgUrl = item.img
              }
            })

          }
         // console.log(data)

          //this.imgUrl = this.option.tableData[0].img
        })

      }


    }
  }
}
</script>
