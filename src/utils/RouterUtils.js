/**
 * Created by zhongzihuan on 2018/11/15.
 * 路由工具管理者
 * （路由库选择）
 *  react-router、react-navigation
 *
 * 所有的路由管理者都是一个对象，拥有着通用的属性和方法来处理前端涉及到的路由问题
 * 基本保持与history相同的API，处理通用性前端路由管理
 *
 *  监听:采用观察者模式，location改变时，history会发出通知
 */

const RouterUtils = {
  /**
   * 路由跳转到指定界面
   * 不传参——>直接加上路由名称
   * 传递参数——>{pathname:'',state:{}}
   */
  push: (router, path) => {
    router.push(path)
  },

  /**
   *
   */
  replace: (router, path) => {
    router.replace(path)
  },

  /**
   * 返回上一页
   * @param props
   */
  goBack: (router) => {
    console.log('要返回上一页的路由状态：' + JSON.stringify(router))
    router.goBack()
  },

  /**
   * 向前一页
   * @param props
   */
  goForward: (router) => {
    router.goForward()
  },

  listen: (router, callBack) => {
    router.listen(callBack)
  },

  /**
   * 获取传递参数
   */
  getParams: (router) => {
    return router.location.state
  },

}

export default RouterUtils
