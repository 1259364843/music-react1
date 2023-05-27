import { combineReducers } from "redux";

// 导入子页面的reducer
import { reducer as recommendReducer } from "../pages/discover/c-pages/recommend/store";
// 合并reducer
const cReducer = combineReducers({
	recommend: recommendReducer,
});

export default cReducer;
