<template>
  <div>
    <!--  鼠标划入显示框  -->
    <div v-if="seen" class="hover_con" :style="positionStyle">
      <iframe :src="fcUrl" frameborder="0" height="200"  width="300">
      </iframe>
    </div>

    <!--  弹窗 popupWidth -->
    <el-dialog append-to-body :modal="false" :visible.sync="show" :width="popupWidth" v-dialogdrag>
      <iframe  :src="popupUrl" scrolling="no" frameborder="0" :height="height" :width="width" id="iframe"></iframe>
    </el-dialog>


    <div v-for="item in nav" :key="item.index"
         @click="clickNav($event,item)"
         @contextmenu.prevent="contain.handleContextMenu && contain.handleContextMenu($event,item)">
      <avue-draggable v-if="!item.children"
                      v-bind="item"
                      :scale="container.stepScale"
                      :disabled="!contain.menuFlag"
                      :step="container.stepScale"
                      :width="item.component.width"
                      :height="item.component.height"
                      :ref="common.DEAFNAME+item.index"
                      :id="common.DEAFNAME+item.index"
                      :active-flag="contain.active.includes(item.index)"
                      v-show="!item.display"
                      @over="handleOver"
                      @focus="handleFocus"
                      @blur="handleBlur">
        <component :ref="common.NAME+item.index"
                   :id="common.NAME+item.index"
                   :is="common.COMPNAME+item.component.name"
                   v-bind="item"
                   :data-formatter="getFunction(item.dataFormatter)"
                   :click-formatter="getFunction(item.clickFormatter,true)"
                   :echart-formatter="getFunction(item.echartFormatter)"
                   :label-formatter="getFunction(item.labelFormatter)"
                   :styles-formatter="getFunction(item.stylesFormatter)"
                   :sql-formatter="sqlFormatter"
                   :formatter="getFunction(item.formatter)"
                   :width="item.component.width"
                   :data-query="getJson(item.dataQuery)"
                   :height="item.component.height"
                   :animation="!contain.menuFlag"
                   :theme="(item.option || {}).theme"
                   :disabled="!contain.menuFlag"
                   :scale="container.stepScale"
                   :option="item.option"
                   :home-url="contain.config.url"
                   title=""
                   :click="handleClick"/>
      </avue-draggable>
      <subgroup :nav="item.children"></subgroup>
    </div>
  </div>
</template>

<script>
//注册自定义组件
import components from '@/components/';
// import { addUrlParam } from '@/utils/utils'
// import crypto from '@/utils/crypto';
import {dynamicSql} from '@/api/db'
import common from '@/config'
import echartComponents from '../../echart/'

export default {
  name: 'subgroup',
  inject: ["contain", 'container'],
  provide() {
    return {
      contain: this.contain,
      container: this.container
    };
  },
  components: components,
  props: {
    nav: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      popupUrl: '',
      height:'460',
      width:'800',
      popupWidth:'820px',
      fcUrl:'',
      show: false,
      seen: false,
      positionStyle: "",
      sqlFormatter: dynamicSql,
      common: common,
    }
  },
  created() {
    Object.keys(echartComponents).map(ele => {
      let component = echartComponents[ele];
      Vue.component(component.name, component);
    });
  },
  methods: {
    //弹窗显示
    clickNav(e, item) {


      if (item.option.popup) {
        this.popupUrl = item.option.popupUrl
        if (item.option.popupH){
            this.height = item.option.popupH
        }else {
          this.height = "460"
        }
        if (item.option.popupW){
          this.width = item.option.popupW
        }else {
          this.width = "800"
        }

        console.log(this.popupWidth)
        this.popupWidth =(Number(this.width) + Number(20))  +'px'
        this.show = true


        // setTimeout(() => {
        //   let contentWindow = document.getElementById("iframe").contentWindow;
        //   let className = contentWindow.document.getElementsByClassName("content");
        //    console.log(className)
        //    //console.log(contentWindow.document.getElementsByClassName("content")[0])
        //   //.document.getElementsByClassName("")
        //
        //   // this.width = contentWindow.innerWidth
        //   // this.height = contentWindow.innerHeight
        //   // this.popupWidth = Number(this.width) + Number(20) +'px'
        //   // console.log(this.width)
        //   // console.log(this.height)
        //   // console.log(contentWindow.innerHeight)
        //   // console.log(contentWindow.innerWidth)
        // }, 1000)

      }
    },
    //鼠标划入
    over(url,left,top) {
      if (url !== undefined){
        this.fcUrl = url
        this.seen = true
        this.positionStyle = {top: top-200 + 'px', left: left+120 + 'px'};
      }

    },
    //鼠标划出
    leave() {
      this.seen = false
    },



    getFunction(fun, def) {
      if (!this.validatenull(fun)) {
        try {
          return eval(fun);
        } catch {
          return () => {
          }
        }
      }
      if (def) return () => {
      }
    },
    getJson(str) {
      if (this.validatenull(str)) return {};
      if (typeof str == "string") {
        try {
          return JSON.parse(str);
        } catch {
          return {}
        }
      }
      return str;
    },
    //点击事件交互
    handleClick({type, child, value}) {
      if (type === 'tabs') {
        const indexList = child.index;
        indexList.forEach((index) => {
          const paramName = child.paramName;
          const item = this.contain.findlist(index);
          if (!item.url) return
          let params = {};
          if (item.dataQuery) {
            params = this.getJson(item.dataQuery)
          } else {
            params = {}
          }
          params[paramName] = value;
          item.dataQuery = JSON.stringify(params);
          this.$refs[this.common.NAME + index].forEach(ele => {
            ele.updateData();
          })
        })
      }
    },
    handleRes() {
      return this.$refs[this.common.NAME + this.contain.activeObj.index][0];
    },
    //刷新数据
    handleRefresh() {
      return this.$refs[this.common.NAME + this.contain.activeObj.index][0].updateData();
    },
    //获取对象
    handleGetObj(val) {
      return this.$refs[`${this.common.DEAFNAME}${val}`];
    },
    //配置界面鼠标划入
    handleOver({index}) {
      this.contain.overactive = index;
    },
    handleFocus({index}) {
      this.container.gradeFlag = true;
      if (this.contain.keys.ctrl) {
        if (!Array.isArray(this.contain.active)) {
          this.contain.handleInitActive();
        }
        this.contain.active.push(index);
      } else if (!this.contain.active.includes(index)) {
        this.contain.active = [index];
      }
    },
    handleBlur({left, top, width, height}) {
      if (Array.isArray(this.contain.activeObj)) return
      this.container.gradeFlag = false;
      this.$set(this.contain.activeObj.component, 'width', width)
      this.$set(this.contain.activeObj.component, 'height', height)
      this.$set(this.contain.activeObj, 'left', left)
      this.$set(this.contain.activeObj, 'top', top)
    },
  }
}
</script>
<style>
.el-dialog__body {
  padding: 10px 10px;
}
.el-dialog__headerbtn .el-dialog__close {
  color: #ffffff;
}
.el-dialog__headerbtn {
  top: 8px;
}

.hover_con {
  position: fixed;
  height: 200px;
  width: 300px;
  z-index: 9999;
}
.el-dialog__header {
  padding: 0px 20px 20px;
}
.font {
  list-style: none;
  color: #FFFFFF;
}
</style>
