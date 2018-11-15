/**
 * Created by zhongzihuan on 2018/11/15.
 * 模块路由表作用？？？
 * （1）组件对外暴露
 * （2）模块组件统一配置
 */
import { Route } from 'dva/router'

import DemoAPage from './pages/DemoAPage/DemoAPage'
import DemoBPage from './pages/DemoBPage/DemoBPage'

const ModuleRouter = ({match}) => {
  return (
    <div style={{backgroundColor: 'blue'}}>
      <h2>Demo2 Module APP</h2>
      <Route exact path={`${match.path + '/a'}`} component={DemoAPage}/>
      <Route exact path={`${match.path + '/b'}`} component={DemoBPage}/>
    </div>
  )
}

export { ModuleRouter }





