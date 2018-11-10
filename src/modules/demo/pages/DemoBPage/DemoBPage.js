/**
 * Created by zhongzihuan on 2018/11/8.
 * 界面B
 */
import React, { Component } from 'react'

import { connect } from 'dva'

import UserHeaderComponent from './components/UserHeaderComponent'
import UserContentComponent from './components/UserContentComponent'
import UserFooterComponent from './components/UserFooterComponent'

class DemoBPage extends Component {



  render() {
    return (
      <div>
        {/*头部*/}
        <UserHeaderComponent/>
        {/*内容*/}
        <UserContentComponent/>
        {/*尾部*/}
        <UserFooterComponent/>
      </div>
    )
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

}

/**
 * 如何理解？？？？
 *  mapStateToProps?: Function, 将model里的数据作为props绑定到组件上
 *  mapDispatchToProps?: Function,
 *  mergeProps?: Function,
 *  options?: Object
 */

const mapStateToProps = (state) => {
  /**
   * 给绑定业务模块的数据最小集
   *xw
   * 并且处理给组件的数据
   */

  console.log("mapStateToProps:"+JSON.stringify(state))
  return state
}

export default connect(mapStateToProps)(DemoBPage)
