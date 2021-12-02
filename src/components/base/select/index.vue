<template>
  <!-- 下拉框 -->
  <div>
    <!-- <p
      :style="{
        opacity: option.opacity / 100,
        borderRadius: option.radius + 'px',
        borderWidth: option.borderWidth + 'px',
        borderColor: option.borderColor,
        borderStyle: option.borderType,
        backgroundColor: option.bgColor,
        color: option.color,
        lineHeight: option.lineHeight + 'px',
        fontSize: option.fontSize + 'px',
        fontWeight: option.fontWeight,
        fontFamily: option.fontFamily,
      }"
      style="padding: 0 10px"
    >
      {{ option.input ? option.input : "请输入文本内容" }}
    </p> -->
    <Select v-model="value" clearable :style="styleVar">
      <Option v-for="item in list" :value="item.value" :key="item.value">{{
        item.label
      }}</Option>
    </Select>
  </div>
</template>
<script>
import { getVal } from "@/api/visual";

export default {
  name: "baseSelect",
  props: {
    option: Object,
    component: Object,
  },
  data() {
    return {
      show: true,
      list: [
        {
          value: "New York",
          label: "New York",
        },
        {
          value: "London",
          label: "London",
        },
        {
          value: "Sydney",
          label: "Sydney",
        },
        {
          value: "Ottawa",
          label: "Ottawa",
        },
        {
          value: "Paris",
          label: "Paris",
        },
        {
          value: "Canberra",
          label: "Canberra",
        },
      ],
      value: "",
      color: "#384545",
    };
  },
  computed: {
    styleVar() {
      return {
        "--color": "yellow",
        "--boc": "red",
      };
    },
  },
  created() {
    this.getInfo();
    setInterval(this.getInfo, 10000);
  },
  mounted() {},
  // 销毁监听，防止内存泄露
  destroyed() {},
  methods: {
    //是否显示
    getInfo() {
      //console.log(this.option)
      if (this.option.addr) {
        getVal(this.option.addr).then((res) => {
          let data = res.data;
          if (data.code === 200 && data.msg !== "暂无承载数据") {
            let val = data.data;
            this.show = val == this.option.openVal;
          }
        });
      }
    },
    changeStyle() {
      console.log(111, this.color);
      let obj = document.getElementsByClassName("ivu-select-selection")[0];
      console.log(22, obj);
      obj.style.backgroundColor = "green !important";
    },
  },
};
</script>
<style lang="scss" scoped>
.ivu-select {
  background-color: var(--color);

  ::v-deep .ivu-select-selection {
    background-color: var(--color);
    border: 1px solid var(--boc);
  }
}
</style>
