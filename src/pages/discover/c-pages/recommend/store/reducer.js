import { Map } from "immutable";
import * as actionTypes from "./constants";

// 默认状态
const defaultState = Map({
	// 轮播图
	topBanners: [],
	// 热门推荐
	hotRecommends: [],
	newAlbum: [],
	topUpList: {},
	topNewList: {},
	topOriginList: {},

	settleSings: [],
});

export default (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.CHANGE_TOP_BNNAER:
			// state赋值
			return state.set("topBanners", action.banners);
		// return { ...state, topBanners: action.banners };
		case actionTypes.CHANGE_HOT_RECOMMEND:
			return state.set("hotRecommends", action.hotRecommends);
		case actionTypes.CHANGE_NEW_ALBUM:
			return state.set("newAlbums", action.newAlbums);
		default:
			return state;
	}
};
