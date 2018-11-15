/**
 * Created by zhongzihuan on 2018/11/15.
 * 模块路由表作用
 */
import { Route } from 'dva/router'

import DemoAPage from './pages/DemoAPage/DemoAPage'
import DemoBPage from './pages/DemoBPage/DemoBPage'

const ModuleRouter = ({match}) => {
  return (
    <div style={{backgroundColor: 'red'}}>
      <h2>Demo Module APP</h2>

      <Route exact path={`${match.path + '/a'}`} component={DemoAPage}/>
      <Route exact path={`${match.path + '/b'}`} component={DemoBPage}/>

    </div>
  )
}

export default ModuleRouter





