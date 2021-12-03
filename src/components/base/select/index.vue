<template>
  <!-- 下拉框 -->
  <div>
    <Select v-model="value" clearable :style="styleVar">
      <Option
        v-for="(item, index) in option.List"
        :value="item.input"
        :key="index"
        >{{ item.input }}</Option
      >
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
      value: "",
    };
  },
  computed: {
    styleVar() {
      return {
        "--width": this.component.width + "px",
        "--height": this.component.height + "px",
        "--opacity": this.option.opacity / 100,
        "--borderRadius": this.option.radius + "px",
        "--borderWidth": this.option.borderWidth + "px",
        "--borderColor": this.option.borderColor,
        "--borderStyle": this.option.borderType,
        "--backgroundColor": this.option.bgColor,
        "--color": this.option.color,
        "--lineHeight": this.option.lineHeight + "px",
        "--fontSize": this.option.fontSize + "px",
        "--fontWeight": this.option.fontWeight,
        "--fontFamily": this.option.fontFamily,
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
  },
};
</script>
<style lang="scss" scoped>
.ivu-select {
  width: var(--width);
  height: var(--height);
  ::v-deep .ivu-select-selection {
    width: var(--width);
    height: var(--height);
    background-color: var(--backgroundColor);
    opacity: var(--opacity);
    border-radius: var(--borderRadius);
    border-width: var(--borderWidth);
    border-color: var(--borderColor);
    border-style: var(--borderStyle);
    color: var(--color);
    line-height: var(--lineHeight);
    font-size: var(--fontSize);
    font-weight: var(--fontWeight);
    font-family: var(--fontFamily);
  }
}
::v-deep .ivu-select-selected-value {
  font-size: var(--fontSize) !important;
  line-height: var(--lineHeight) !important;
  height: var(--height) !important;
}
::v-deep .ivu-select-placeholder {
  font-size: var(--fontSize) !important;
  line-height: var(--lineHeight) !important;
  height: var(--height) !important;
}
</style>
