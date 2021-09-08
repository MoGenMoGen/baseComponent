
import request from '../axios'
export const getList = (params) => request({
  url: '/api/blade-visual/visual/list',
  method: 'get',
  params: params
});
export const copyObj = (id) => request({
  url: '/api/blade-visual/visual/copy',
  method: 'post',
  params: {
    id: id
  }
});

export const getCategory = (params) => request({
  url: '/api/blade-visual/category/list',
  method: 'get',
  params: params
});

export const getObj = (id) => request({
  url: '/api/blade-visual/visual/detail',
  method: 'get',
  params: {
    id
  }
});
export const uploadImg = (file) => request({
  url: '/api/blade-resource/oss/endpoint/put-file',
  method: 'post',
  data: 'file=' + file,
  headers: { "Content-Type": "multipart/form-data" }
});

export const addObj = (data) => request({
  url: '/api/blade-visual/visual/save',
  method: 'post',
  data: {
    visual: {
      password: data.password,
      category: data.category,
      status: data.status,
      title: data.title,
    },
    config: {
      detail: JSON.stringify({
        name: data.title,
        width: data.width,
        height: data.height,
        scale: 1,
        backgroundImage: '/img/bg/bg1.png',
        url: '',
        mark: {},
        gradeShow: false,
        gradeLen: 30,
      }),
      component: '[]'
    },
  }
});

export const updateComponent = (data) => request({
  url: '/api/blade-visual/visual/update',
  method: 'post',
  data: data
});

export const updateObj = (data) => request({
  url: '/api/blade-visual/visual/update',
  method: 'post',
  data: {
    "visual": {
      "id": data.id,
      "password": data.password,
      "category": data.category,
      "status": data.status,
      "title": data.title,
    }
  }
});

export const delObj = (id) => request({
  url: '/api/blade-visual/visual/remove',
  method: 'post',
  params: {
    ids: id
  }
});
export const getVal = (mqtt) => request({
  url: '/api/blade-mh/site/valByMqtt',
  method: 'get',
  params: {
    mqtt
  }
});
