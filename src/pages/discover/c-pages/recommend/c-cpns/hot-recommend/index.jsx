import React, { useEffect, memo, useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";

import { RecommendWrapper } from "./style";
import CHThemeHeaderRCM from "@/components/theme-header-rcm";
import ThemeCover from "@/components/theme-cover";
import { getHotRecommendAction } from "../../store/actionCreators";

// 热门推荐
function HotRecommend() {
	const { hotRecommends } = useSelector(
		(state) => ({
			hotRecommends: state.recommend.get("hotRecommends"),
		}),
		shallowEqual
	);
	const dispatch = useDispatch();
	// const history = useHistory();

	useEffect(() => {
		dispatch(getHotRecommendAction());
	}, [dispatch]);

	// const keywordClick = useCallback(
	// 	(keyword) => {
	// 		history.push({ pathname: "/discover/songs", cat: keyword });
	// 	},
	// 	[history]
	// );
	return (
		<RecommendWrapper>
			<CHThemeHeaderRCM
				title="热门推荐"
				keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
				moreLink="/discover/songs"
			/>
			<div className="recommend-list">
				{hotRecommends.slice(0, 8).map((item, index) => {
					return <ThemeCover info={item} key={item.id} />;
				})}
			</div>
		</RecommendWrapper>
	);
}

export default memo(HotRecommend);
