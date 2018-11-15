/**
 * Created by zhongzihuan on 2018/11/9.
 * DemoB  界面模型
 */
export default {
  namespace: 'DemoBPageNameSpace',
  state: {
    list: [],
    total: null,
    loading: false,
    current: null, //当前分页信息
    currentItem: {}, //当前操作的用户对象
  },
  /**
   * 同步方法
   */
  reducers: {
    querySuccess() {

    },
    createSuccess() {

    },
    deleteSuccess() {

    },
    updateSuccess() {

    },
    showLoading() {

    },
    showModal() {

    },
    hideModal() {

    },
  },

  /**
   * 异步任务处理
   */
  effects: {
    * query() {

    },
    * create() {

    },
    * 'delete'() {

    },
    * update() {

    },
  },

  /**
   * 消息监听
   */
  subscriptions: {},
}
