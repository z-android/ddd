/**
 * Created by zhongzihuan on 2018/11/12.
 * 应用容器层
 * (1)主题设置？？
 * (2)路由入口
 */
//
// import React, { Component } from 'react'
// import { connect } from 'dva'
//
// class IndexPage extends Component {
//
//   render() {
//     return (
//       <div>
//         {'初始化界面'}
//       </div>
//     )
//   }
// }
//
// const mapStateToProps = (state) => {
//   console.log('APP STATE:' + state)
// }
// export default IndexPage
//
//
import React from 'react';
import { connect } from 'dva';

function IndexPage() {
  return (
    <div>
      <h1> Yay! Welcome to dva!</h1>
    </div>
  );
}

IndexPage.propTypes = {
};

export default IndexPage;

