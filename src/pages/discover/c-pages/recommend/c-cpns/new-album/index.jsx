import React, { useEffect, memo, useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import CHThemeHeaderRCM from "@/components/theme-header-rcm";
import { AlbumWrapper } from "./style.js";
import { getNewAlbumAction } from "../../store/actionCreators";
// 新碟上架
function NewAlbum() {
	const dispatch = useDispatch();
	const { newAlbums } = useSelector(
		(state) => ({
			newAlbums: state.recommend.get("newAlbums"),
		}),
		shallowEqual
	);
	// 其他hooks
	useEffect(() => {
		dispatch(getNewAlbumAction());
	}, [dispatch]);
	return (
		<AlbumWrapper>
			<CHThemeHeaderRCM title="新碟上架"></CHThemeHeaderRCM>
		</AlbumWrapper>
	);
}

export default memo(NewAlbum);
