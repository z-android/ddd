/**
 * Created by zhongzihuan on 2018/11/8.
 * 界面B
 */
import React, { Component } from 'react'

import { connect } from 'dva'

import { Button } from 'antd'

import UserHeaderComponent from './components/UserHeaderComponent'
import UserContentComponent from './components/UserContentComponent'
import UserFooterComponent from './components/UserFooterComponent'
import RouterUtils from '../../../../utils/RouterUtils'

class DemoBPage extends Component {

  render() {
    console.log(JSON.stringify(this.props))
    return (
      <div>
        <h1>B</h1>
        {/*头部*/}
        <UserHeaderComponent/>
        {/*内容*/}
        <UserContentComponent/>
        {/*尾部*/}
        <UserFooterComponent/>

        <Button
          onClick={() => {
            RouterUtils.push(this.props.history, '/demo-c')
          }}
        >
          跳转到下一页
        </Button>

        <Button
          onClick={() => {
            RouterUtils.goBack(this.props.history)
          }}
        >
          返回上一页
        </Button>

        <Button
          onClick={() => {
            RouterUtils.goForward(this.props.history)
          }}
        >
          向前前进一页
        </Button>
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

const mapStateToProps = ({DemoBPageNameSpace}) => {
  /**
   * 给绑定业务模块的数据最小集
   *xw
   * 并且处理给组件的数据
   */

  console.log('mapStateToProps:' + JSON.stringify({DemoBPageNameSpace}))
  return false
}

export default connect(mapStateToProps)(DemoBPage)
