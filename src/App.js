/**
 * Created by zhongzihuan on 2018/11/12.
 * 应用容器层
 * (1)主题设置？？
 * (2)路由入口
 */

import React, { Component } from 'react'
import { connect } from 'dva'

class App extends Component {

  render() {
    return (
      <div>
        <h1>标题</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('APP STATE:' + state)
}
// export default connect(mapStateToProps)(App)
export default App
