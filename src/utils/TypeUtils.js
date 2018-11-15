/**
 * Created by zhongzihuan on 2018/11/15.
 * 判断类型工具
 */
const TypeUtils = {

  typeString: (obj) => {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
  },

  isObject: (obj) => {
    return TypeUtils.typeString(obj) === 'object'
  }

}

export default TypeUtils
