import React, { memo, useEffect } from "react";
import Topbanner from "./c-cpns/top-banner/index";
import {
	RecommendWraper,
	Content,
	RecommendLeft,
	RecommendRight,
} from "./style";
// 函数式组件
function Recommend(props) {
	// 布局
	return (
		<RecommendWraper>
			{/*轮播图*/}
			<Topbanner />
		</RecommendWraper>
	);
}
export default memo(Recommend);
