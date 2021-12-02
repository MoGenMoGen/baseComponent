<!-- 自定义配置 -->
<template>
  <div>
    <el-form-item label="绘图">
      <avue-switch v-model="main.activeOption.setUp"></avue-switch>
    </el-form-item>

    <el-form-item label="路径坐标">
      <p v-for="(item,index) in main.activeOption.optionArr" :key="index">{{item.x}},{{item.y}}</p>
    </el-form-item>
    <el-form-item label="填充颜色">
      <avue-input-color color-format="hex" :show-alpha="false" placeholder="请选择颜色" v-model="main.activeOption.bgColor" ></avue-input-color>
    </el-form-item>
    <el-form-item label="线条颜色">
      <avue-input-color color-format="hex" :show-alpha="false" placeholder="请选择颜色" v-model="main.activeOption.color" ></avue-input-color>
    </el-form-item>

    <el-form-item label="线条宽度">
      <avue-input-number v-model="main.activeOption.width"></avue-input-number>
    </el-form-item>

    <el-form-item label="虚线长度">
      <avue-input-number v-model="main.activeOption.dasharray"></avue-input-number>
    </el-form-item>
    <el-form-item label="透明度">
      <avue-input-number maxRows="1" minRows="0" precision="1"  v-model="main.activeOption.opacity"></avue-input-number>
    </el-form-item>

    <el-form-item label="动画速度">
      <avue-input-number  v-model="main.activeOption.speed"></avue-input-number>
    </el-form-item>

    <el-form-item label="显示条件">
      <avue-input v-model="main.activeOption.addr" style="width: 120px"></avue-input>
      =
      <avue-input v-model="main.activeOption.openVal" style="width: 70px"></avue-input>
    </el-form-item>

  </div>
</template>

<script>
export default {
  inject: ["main"],
  data() {
    return {
      fabricObj: null,
    }
  },
  computed(){
    //this.init()
  },
  mounted() {
    window.addEventListener('keyup', this.handleKeyup)
      this.$nextTick(() => {
          setTimeout(() => {
              this.fabricObj = new fabric.Canvas('c'+this.main.activeOption.index);
              window.addEventListener('onClick',this.canvasClick)
              this.fabricObj.on(e=>{
                  console.log('111111111111')
                  this.canvasClick(e)
              })
          }, 500);
      });
    this.$nextTick(()=>{


    })
  },
  methods: {
      fabricEvent(){

    },
      canvasClick(e){
          console.log(e)
          if (this.main.activeOption.setUp) { //绘图
              this.fabricObj.selection = false;
              this.mouseFrom.x = e.pointer.x;
              this.mouseFrom.y = e.pointer.y
              let a = {}
              a["x"] = this.mouseFrom.x;
              a["y"] = this.mouseFrom.y;
              this.roofPoints.push(a);
              var points = [a.x, a.y, a.x, a.y];
              this.lines.push(
                  new fabric.Line(points, {
                      strokeWidth: 3,
                      selectable: false,
                      stroke: "red"
                  })
              );
              this.fabricObj.add(this.lines[this.lineCounter]);
              this.lineCounter++;
          }
      },
    init(){
      if (this.main.activeOption.speed === undefined){
        this.main.activeOption.speed = 3
      }
      if (this.main.activeOption.opacity === undefined){
        this.main.activeOption.opacity = 1
      }
      if (this.main.activeOption.dasharray === undefined){
        this.main.activeOption.dasharray = 10
      }
      if (this.main.activeOption.width === undefined){
        this.main.activeOption.width = 10
      }
      if (this.main.activeOption.color === undefined){
        this.main.activeOption.color = "#FFFFFF"
      }
      //console.log(this.main.activeOption.speed)
    },


    handleKeyup(e) {
      if (e.key === 'q') {
        let x = Number(this.main.activeObj.left + 40).toFixed(0)
        let y = Number(this.main.activeObj.top + 40).toFixed(0)
        if (this.main.activeOption.points === undefined){
          this.main.activeOption.points = x + "," + y + " "
        }else {
          this.main.activeOption.points = this.main.activeOption.points + x + "," + y + " "
        }
      }

    },
    fabricEvent(){
        this.fabricObj.on({
            "mouse:down": e => {
                if (this.drawingObject.type == "roof") {
                    this.fabricObj.selection = false;
                    this.mouseFrom.x = e.pointer.x;
                    this.mouseFrom.y = e.pointer.y
                    let a = {}
                    a["x"] = this.mouseFrom.x;
                    a["y"] = this.mouseFrom.y;
                    this.roofPoints.push(a);
                    var points = [a.x, a.y, a.x, a.y];
                    this.lines.push(
                        new fabric.Line(points, {
                            strokeWidth: 3,
                            selectable: false,
                            stroke: "red"
                        })
                    );
                    this.fabricObj.add(this.lines[this.lineCounter]);
                    this.lineCounter++;
                }
            },
            "mouse:move": e => {
                if (
                    this.lines[0] !== null &&
                    this.lines[0] !== undefined &&
                    this.drawingObject.type == "roof"
                ) {
                    this.x = e.pointer.x;
                    this.y = e.pointer.y;
                    this.lines[this.lineCounter - 1].set({
                        x2: this.x,
                        y2: this.y
                    });
                    this.fabricObj.renderAll();
                }
            },
            "mouse:dblclick": () => {
                this.lines.forEach(item => this.fabricObj.remove(item));
                // canvas.remove(lines[lineCounter - 1]);
                this.makeRoof();
                console.log(this.roof)
                this.fabricObj.add(this.roof);
                this.fabricObj.renderAll();

                console.log("double click");
                //clear arrays
                this.roofPoints = [];
                this.lines = [];
                this.lineCounter = 0;
            }
        });
    }
  }
}
</script>

<style>
</style>
