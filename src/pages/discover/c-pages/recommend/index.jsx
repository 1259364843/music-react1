import React, { memo, useEffect } from "react";

// 导入action
import { getTopBannerAction } from "./store/actionCreators";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
// 函数式组件
function Recommend(props) {
	// 获取state数据
	const { topBanners } = useSelector(
		(state) => ({
			topBanners: state.recommend.get("topBanners"),
		}),
		shallowEqual
	);
	console.log(topBanners);
	// 1.获取dispatch
	const dispatch = useDispatch();
	// 2.发送网络请求
	useEffect(() => {
		dispatch(getTopBannerAction());
	}, [dispatch]);
	// 布局
	return <div>{topBanners.length}</div>;
}
export default memo(Recommend);
