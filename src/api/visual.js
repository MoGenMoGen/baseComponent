
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

//登录
export const login = (data) => request({
  url: '/api/blade-mh/data/login',
  method: 'post',
  data: data
});
//验证token是否有效
export const verToken = (account,token) => request({
  url: '/api/blade-mh/data/verToken',
  method: 'get',
  params: {
    account,token
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
export const getVal2 = (mqtt) => request({
  url: '/api/blade-mh/site/valByMqtt2',
  method: 'get',
  params: {
    mqtt
  }
});
export const getAllData = () => request({
  url: '/api/blade-mh/site/allData',
  method: 'get',
});


//获取报警数量
export const getAlertNum = (addr) => request({
  url: '/api/blade-mh/errlog/alertNum',
  method: 'get',
  params: {
    addr
  }
});

//报警列表
export const getAlertList = (current, size, params) => {
  return request({
    url: '/api/blade-mh/errlog/alertList',
    method: 'get',
    params: {
      ...params,
      current,
      size,
    }
  })
}
//消除报警
export const updAlert = (id,siteId) => {
  return request({
    url: '/api/blade-mh/errlog/updAlert',
    method: 'get',
    params: {
      id,siteId
    }
  })
}
//修改上下限的值
export const updAlertVal = (id,val,type) => {
  return request({
    url: '/api/blade-mh/site/updVal',
    method: 'get',
    params: {
      id,val,type
    }
  })
}
//获取能耗
export const energy = (totalName,names,time) => {
  return request({
    url: '/api/blade-mh/data/energy',
    method: 'get',
    params: {
      totalName, names,time
    }
  })
}



//设备列表
export const getSiteList = (current, size, name) => {
  return request({
    url: '/api/blade-mh/site/apiList',
    method: 'get',
    params: {
      name,
      current,
      size,
    }
  })
}
//车间设备树
export const getDictTree = () => {
  return request({
    url: '/api/blade-system/dict-biz/tree?code=DICT',
    method: 'get'
  })
}
