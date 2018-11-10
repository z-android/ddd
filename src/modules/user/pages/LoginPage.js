/**
 * Created by zhongzihuan on 2018/11/7.
 * 登录界面
 */
import React, { Component } from 'react'
import { connect } from 'dva'
import { Input, Button } from 'antd'

function LoginPage(props) {
  return (
    <div>
      <Input placeholder="用户名" onChange={(e) => {
        console.log(JSON.stringify(e))
        props.dispatch({

        })
      }}/>

      <Input placeholder="密码" onChange={(e) => {
        console.log(JSON.stringify(e))
      }}/>

      <Button type="primary" block onClick={() => {
        props.dispatch({
          type:"user/handleSubmit"
        })
      }}>Primary</Button>

    </div>
  )
}

export default connect(({user}) => ({user}))(LoginPage)
