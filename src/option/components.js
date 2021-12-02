
// 底层组件库
import barOption from './components/bar'
import datetimeOption from './components/datetime'
import flopOption from './components/flop'
import funnelOption from './components/funnel'
import gaugeOption from './components/gauge'
import iframeOption from './components/iframe'
import imgOption from './components/img'
import imgborderOption from './components/imgborder'
import lineOption from './components/line'
import mapOption from './components/map'
import pictorialbarOption from './components/pictorialbar'
import pieOption from './components/pie'
import progressOption from './components/progress'
import radarOption from './components/radar'
import scatterOption from './components/scatter'
import swiperOption from './components/swiper'
import tableOption from './components/table'
import tabsOption from './components/tabs'
import textOption from './components/text'
import videoOption from './components/video'
import commonOption from './components/common'
import wordcloudOption from './components/wordcloud'
import datavOption from './components/datav'
//通用配置
import mainOption from './components/main'
//自定义组件库
import testOption from '@/components/test/option'
import stateOption from '@/components/state/option'
//线条
import xlineOption from '@/components/xline/option'
import alertOption from '@/components/alert/option'
import alertListOption from '@/components/alertList/option'
//能耗
import energyOption from '@/components/energy/option'
//液位
import levelOption from '@/components/level/option'
//移动
import moveCarOption from '@/components/moveCar/option'
//指示灯
import lightOption from '@/components/light/option'
//趋势
import trendOption from '@/components/trend/option'
//游标
import cursorOption from '@/components/cursor/option'

//基础组件
//横线
import baseXlineOption from '@/components/base/xline/option'
//竖线
import baseYlineOption from '@/components/base/yline/option'
//圆形
import baseCircleOption from '@/components/base/circle/option'
//矩形
import baseRectangleOption from '@/components/base/rectangle/option'
//文本域
import baseTextOption from '@/components/base/text/option'
//输入框
import baseInputOption from '@/components/base/input/option'
//下拉框
import baseSelectOption from '@/components/base/select/option'
//按扭
import baseButtonOption from '@/components/base/button/option'
//多边形
import basePolygonOption from '@/components/base/polygon/option'
//二维码
import baseQrcodeOption from '@/components/base/qrcode/option'
// 仪表盘
import baseBashBoardOption from '@/components/base/dashboard/option'

export default {
  components: {
    commonOption, cursorOption,
    mainOption,
    barOption,
    datetimeOption,
    flopOption,
    funnelOption,
    gaugeOption,
    iframeOption,
    imgOption,
    imgborderOption,
    lineOption,
    mapOption,
    pictorialbarOption,
    pieOption,
    progressOption,
    radarOption,
    scatterOption,
    swiperOption,
    tableOption,
    tabsOption,
    textOption,
    videoOption,
    wordcloudOption,
    datavOption,
    testOption,
    stateOption,
    xlineOption,
    alertOption,
    alertListOption,
    energyOption,
    levelOption, moveCarOption, lightOption, trendOption,

    baseXlineOption, baseYlineOption, baseCircleOption, baseRectangleOption, baseTextOption, baseButtonOption, baseInputOption, baseSelectOption,
    basePolygonOption, baseQrcodeOption, baseBashBoardOption

  }
}
