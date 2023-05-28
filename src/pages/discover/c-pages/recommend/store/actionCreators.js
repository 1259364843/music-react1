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
// 2.热门推荐
const changeHotRecommendAction = (res) => ({
	type: actionTypes.CHANGE_HOT_RECOMMEND,
	hotRecommends: res.result,
});
export const getHotRecommendAction = (limit) => {
	return (dispatch) => {
		getHotRecommend(limit).then((res) => {
			dispatch(changeHotRecommendAction(res));
		});
	};
};

// 3.新碟上架
const changeNewAlbumAction = (res) => ({
	type: actionTypes.CHANGE_NEW_ALBUM,
	newAlbums: res.albums,
});

export const getNewAlbumAction = (limit) => {
	return (dispatch) => {
		getNewAlbum(limit).then((res) => {
			dispatch(changeNewAlbumAction(res));
		});
	};
};
