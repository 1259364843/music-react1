import React, { memo, useEffect } from "react";
import Topbanner from "./c-cpns/top-banner/index";
import HotRecommend from "./c-cpns/hot-recommend/index";
import NewAlbum from "./c-cpns/new-album";
import RankingList from "./c-cpns/ranking-list";
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
			<Content className="wrap-v2">
				<RecommendLeft>
					{/*热门推荐*/}
					<HotRecommend></HotRecommend>
					{/*新碟上架*/}

					{/*<NewAlbum />*/}
					{/*榜单*/}
					<RankingList />
				</RecommendLeft>
				<RecommendRight></RecommendRight>
			</Content>
		</RecommendWraper>
	);
}
export default memo(Recommend);
