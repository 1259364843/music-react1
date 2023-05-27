import * as actionTypes from "./constants";

import {
	getTopBanner,
	getHotRecommend,
	getNewAlbum,
	getTopList,
	getArtistList,
} from "@/services/recommend";

// action定义
// 1.改变轮播图
const changeBannerAction = (res) => ({
	// 类型
	type: actionTypes.CHANGE_TOP_BNNAER,
	banners: res.banners,
});
export const getTopBannerAction = () => {
	return (dispatch) => {
		// 发送网络请求
		getTopBanner().then((res) => {
			dispatch(changeBannerAction(res));
		});
	};
};
