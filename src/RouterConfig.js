/**
 * 路由表配置管理
 */
import React from 'react'
import { Router, Route } from 'dva/router'

//模块1—— 计数器模块
import CountPage from './modules/counter/pages/CountPage'

import IndexPage from './routes/IndexPage'

//模块2—— 资讯模块

//模块3—— 用户账号管理模块
import LoginPage from './modules/user/pages/LoginPage'

//demo 模块
import DemoBPage from './modules/demo/pages/DemoBPage/DemoBPage'

const cached = {}

function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model)
    cached[model.namespace] = 1
  }
}

function RouterConfig({history, app}) {
   const routes = [
    {
      path: '/',
      name: 'DemoBPage',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, DemoBPage);
        });
      },
    },
    {
      path: '/users',
      name: 'LoginPage',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, LoginPage);
        });
      },
    },
  ];


  return <Router history={history} routes={routes}/>
}

export default RouterConfig
