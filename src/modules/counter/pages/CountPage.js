/**
 * 计数器界面
 * 无状态组件
 */
import React from 'react';
import { connect } from 'dva';
import styles from './CountPage.css';

function CountPage(props) {
	alert(JSON.stringify(props));
	return (
		<div className={styles.normal}>
			<h1 className={styles.title}>Hello</h1>
			<div className={styles.welcome} />
			<ul className={styles.list}>
				<li>
					To get started,edit<code>src/index.js</code>
				</li>
				<li>
					<a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Get started</a>
				</li>
			</ul>
			<h2>{props.count.count}</h2>
			<button
				key="add"
				onClick={() => {
					props.dispatch({ type: 'count/add' });
				}}
			>
				+
			</button>
			<button
				onClick={() => {
					props.dispatch({ type: 'count/minus' });
				}}
			>
				-
			</button>
		</div>
	);
}

CountPage.prototype = {};

export default connect(({ count }) => ({count}))(CountPage);
