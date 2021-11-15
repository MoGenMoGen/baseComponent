/**
 * 自定义组件参考文档
 * https://cn.vuejs.org/v2/guide/components-registration.html
*/
import Test from './test/';
import State from './state/';
import Xline from './xline/';
import Alert from './alert/';
import alertList from './alertList/';
import energy from './energy/';
import level from './level/'
import moveCar from './moveCar/'
import light from './light/'


import $Echart from '../echart/common';
import { KEY_COMPONENT_NAME } from '../echart/variable';

export default (() => {
  const list = [
    Test,State,Xline,Alert,alertList,energy,level,moveCar,light
  ]
  let result = {}
  //循环注册组件
  list.forEach(ele => {
    ele.mixins = [$Echart]
    result[`${KEY_COMPONENT_NAME}${ele.name}`] = ele
  })
  return result
})()
