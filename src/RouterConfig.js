/**
 * 路由表配置管理
 */
import React from 'react'
import { Router, Route, Switch } from 'dva/router'

// demo 模块
import { ModuleRouter as DemoRouter } from './modules/demo'
//demo2模块
import { ModuleRouter as Demo2Router } from './modules/demo2'

const RouterConfig = ({history, app}) => {

  //监听路由变化
  listenRouter(history)

  return (
    <Router history={history}>
      <Switch>

        {/*Demo模块*/}
        <Route path="/demo" component={DemoRouter}/>
        {/*Demo2模块*/}
        <Route path="/demo2" component={Demo2Router}/>

        {/*404界面*/}
        <Route component={() => {
          return (<h1>404</h1>)
        }}/>

        {/*Error界面*/}
        <Route path="" component={() => {
          return (<h1>异常页面处理</h1>)
        }}/>

      </Switch>
    </Router>
  )
}

function listenRouter(history) {
  history.listen((e) => {
    console.log('路由变化监听' + JSON.stringify(e) + '===' + JSON.stringify(history))
    //进行页面打点，路由得有文字关联
  })
}

export default RouterConfig

