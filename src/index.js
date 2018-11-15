// import './index.css'
import React from 'react'
import dva from 'dva'
import 'antd/dist/antd.css'

import AppModel from './AppModel'
import RouterConfig from './RouterConfig'

/**
 * 1.初始化 创建应用
 * 支持多实例
 * 支持配置所有的hooks，
 * opts{
 *   history, 路由用的history，默认hasHistory
 *   initialState,  应用初始化数据，优先级高于model中的state
 * }
 */
const app = dva({
  initialState: {
    appName: 'zzz'
  },
  /**
   * 统一处理应用异常逻辑
   * （1）异常页面的展示
   * （2）界面的跳转
   * （3）
   */
  onError: () => {

  },
})

//2.添加插件
app.use({})

//3.绑定数据模型Model
app.model(AppModel)

//4.添加路由，绑定视图
app.router(RouterConfig)

//5.启动应用
app.start('#root')
