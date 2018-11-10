/**
 * 计数器模型
 */
export default {
	namespace: 'count',
	state: {
		count: 1
	},

	//同步方法
	reducers: {
		add(state) {
			// alert(JSON.stringify(countState))
			return { count: state.count + 1 };
		},

		minus(count) {
			return count - 1;
		}
	}
};
