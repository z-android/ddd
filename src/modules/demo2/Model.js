/**
 * Created by zhongzihuan on 2018/11/8.
 * 模块的领域模型Model
 * 用户模块
 */
export default {
  //业务模块名
  namespace: 'DemoModuleNameSpace',
  //业务模块共有的state数据
  state: {
    username: 'zhongzihuan',
    age: '27',
    count: 1
  },
  //业务模块中处理同步请求，主要用来更新state，return即刷新
  reducers: {
    //改变state  count
    changeCount(oldState) {
      return
    },

    /**
     * 改变名字
     */
    changeName(){
      return
    }

  },


  effects: {},
  subscriptions: {},
}
