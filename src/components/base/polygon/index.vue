<template>
  <div :style="{width:component.width+'px',height:component.height+'px'}">
    <canvas :id="'c'+option.index" :width="component.width" :height="component.height" v-if="show"></canvas>
  </div>
</template>
<script>
// import {getVal} from '@/api/visual'

export default {
  name: 'basePolygon',
  props: {
    option: Object,
    component: Object,
  },
  data() {
    return {
        show:true,
        fabricObj :null,
        mouseFrom: {},
        lineCounter: 0,
        pointIndex:0,
    }
  },
  computed: {},
  created() {

  },
  mounted() {
      this.$nextTick(() => {
          setTimeout(() => {
              this.fabricObj = new fabric.Canvas('c'+this.option.index);
              this.fabricEvent();
          }, 500);
      });
  },
  // 销毁监听，防止内存泄露
  destroyed() {

  },
    watch:{
        option:{
            handler: () =>{
              // this.setCavans()
            },
            deep:true,
        },
        component:{
            handler: function () {
                this.$nextTick(() => {
                    setTimeout(() => {
                        this.fabricEvent();
                    }, 500);
                });
            },
            deep:true,
        }
    },
  methods: {
      //绘图
      fabricEvent(){
          var canvas =  this.fabricObj
          this.fabricObj.setWidth(this.component.width);
          this.fabricObj.setHeight(this.component.height);
          var points = [{
              x: 3, y: 4
          }, {
              x: 16, y: 3
          }, {
              x: 30, y: 5
          },  {
              x: 25, y: 55
          }, {
              x: 19, y: 44
          }, {
              x: 15, y: 30
          }, {
              x: 15, y: 55
          }, {
              x: 9, y: 55
          }, {
              x: 6, y: 53
          }, {
              x: -2, y: 55
          }, {
              x: -4, y: 40
          }, {
              x: 0, y: 20
          }]
          var polygon = new fabric.Polygon(points, {
              left: 100,
              top: 50,
              fill: '#D81B60',
              strokeWidth: 4,
              stroke: 'green',
              scaleX: 4,
              scaleY: 4,
              objectCaching: false,
              transparentCorners: false,
              cornerColor: 'blue',
          });
          canvas.viewportTransform = [0.7, 0, 0, 0.7, -50, 50];
          canvas.add(polygon);
          this.Edit()

    },
      polygonPositionHandler(dim, finalMatrix, fabricObject) {
          var x = (fabricObject.points[this.pointIndex].x - fabricObject.pathOffset.x),
              y = (fabricObject.points[this.pointIndex].y - fabricObject.pathOffset.y);
          return fabric.util.transformPoint(
              { x: x, y: y },
              fabric.util.multiplyTransformMatrices(
                  fabricObject.canvas.viewportTransform,
                  fabricObject.calcTransformMatrix()
              )
          );
      },
      anchorWrapper(anchorIndex, fn) {
          return (eventData, transform, x, y)=> {
              var fabricObject = transform.target,
                  absolutePoint = fabric.util.transformPoint({
                      x: (fabricObject.points[anchorIndex].x - fabricObject.pathOffset.x),
                      y: (fabricObject.points[anchorIndex].y - fabricObject.pathOffset.y),
                  }, fabricObject.calcTransformMatrix()),
                  actionPerformed = fn(eventData, transform, x, y),
                  newDim = fabricObject._setPositionDimensions({}),
                  polygonBaseSize = fabricObject._getNonTransformedDimensions(),
                  newX = (fabricObject.points[anchorIndex].x - fabricObject.pathOffset.x) / polygonBaseSize.x,
                  newY = (fabricObject.points[anchorIndex].y - fabricObject.pathOffset.y) / polygonBaseSize.y;
              fabricObject.setPositionByOrigin(absolutePoint, newX + 0.5, newY + 0.5);
              return actionPerformed;
          }
      },
      actionHandler(eventData, transform, x, y) {
          var polygon = transform.target,
              currentControl = polygon.controls[polygon.__corner],
              mouseLocalPosition = polygon.toLocalPoint(new fabric.Point(x, y), 'center', 'center'),
              polygonBaseSize = polygon._getNonTransformedDimensions(),
              size = polygon._getTransformedDimensions(0, 0),
              finalPointPosition = {
                  x: mouseLocalPosition.x * polygonBaseSize.x / size.x + polygon.pathOffset.x,
                  y: mouseLocalPosition.y * polygonBaseSize.y / size.y + polygon.pathOffset.y
              };
          polygon.points[currentControl.pointIndex] = finalPointPosition;
          return true;
      },
      Edit() {
    // clone what are you copying since you
    // may want copy and paste on different moment.
    // and you do not want the changes happened
    // later to reflect on the copy.
    var poly = this.fabricObj.getObjects()[0];
          this.fabricObj.setActiveObject(poly);
    poly.edit = !poly.edit;
    if (poly.edit) {
        var lastControl = poly.points.length - 1;
        poly.cornerStyle = 'circle';
        poly.cornerColor = 'rgba(0,0,255,0.5)';
        poly.controls = poly.points.reduce((acc, point, index) =>{
            acc['p' + index] = new fabric.Control({
                positionHandler: this.polygonPositionHandler,
                actionHandler: this.anchorWrapper(index > 0 ? index - 1 : lastControl, this.actionHandler),
                actionName: 'modifyPolygon',
                pointIndex: index
            });
            return acc;
        }, { });
    } else {
        console.log('false')
        poly.cornerColor = 'blue';
        poly.cornerStyle = 'rect';
        poly.controls = fabric.Object.prototype.controls;
    }
    poly.hasBorders = !poly.edit;
          this.fabricObj.requestRenderAll();
},


  }
}
</script>
<style lang="scss" scoped>


.container {
  width: 100%;
  height: 100%;
  /deep/.canvas-container{
    width: 100% !important;
    height: 100% !important;
  }
  canvas{
    width: 100%;
    height: 100%;
  }
}

.line-wrap {
  //width:300px;
  margin: 0 auto;
}

.circle-load-rect-svg {
  margin: 10px;
}

.g-rect-fill {
  fill: none; //填充颜色(画折线一般把属性设置为none)
  //stroke-width: 10; //边框宽带
  //stroke: #cb8505; //边框颜色
  stroke-linejoin: round;
  stroke-linecap: round;
  //stroke-dasharray: 20; //块宽度
  animation: dash linear infinite;
  // animation-duration: 9s;
  // fill-opacity: 0.1; //透明度
  //stroke-opacity:0.1 //边框的透明度
}

@keyframes dash {
  0% {
    stroke-dashoffset: 1000;
  }
}
</style>
