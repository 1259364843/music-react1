import React, { memo, useEffect } from "react";

import { connect } from "react-redux";

// 导入action
import { getTopBannerAction } from "./store/actionCreators";

// 函数式组件
function Recommend(props) {
	// 解构
	const { getBanners, topBanners } = props;
	console.log(topBanners);
	// 发送网络请求
	useEffect(() => {
		getBanners();
	}, [getBanners]);
	return <div>{topBanners.length}</div>;
}

// 将state中的数据映射到topBanners中
const mapStateToProps = (state) => ({
	topBanners: state.recommend.topBanners,
});

// 通过传入的dispatch派发action
const mapDispatchToProps = (dispatch) => ({
	getBanners: () => {
		dispatch(getTopBannerAction());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend));
