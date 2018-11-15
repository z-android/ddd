/**
 * Created by zhongzihuan on 2018/11/8.
 * 界面C
 */
import React, { Component } from 'react'

import { connect } from 'dva'

import { Button } from 'antd'
import RouterUtils from '../../../../utils/RouterUtils'

class CPage extends Component {

  render() {
    console.log(JSON.stringify(this.props))
    return (
      <div>
        {/*头部*/}
        <h1>C</h1>

        <Button onClick={() => {
          console.log(this.props)
          // RouterUtils.push(this.props, {pathname: '/demo-a', state: {name: '我是demoB'}})
          RouterUtils.push(this.props.history, '/demo-d')
        }}>跳转到下一页  </Button>

        <Button
          onClick={() => {
            RouterUtils.goBack(this.props.history)
          }}
        >
          返回上一页
        </Button>
      </div>
    )
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

}

export default CPage
