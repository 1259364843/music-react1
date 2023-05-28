import React, { memo, useEffect, useCallback, useState, useRef } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getTopBannerAction } from "../../store/actionCreators";

import { Carousel } from "antd";
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";
export default memo(function TopBanner() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const bannerRef = useRef();

	// 获取state数据
	const { topBanners } = useSelector(
		(state) => ({
			topBanners: state.recommend.get("topBanners"),
			// topBanners: state.recommend.getIn(["recommend", "topBanners"]),
		}),
		shallowEqual
	);
	// 1.获取dispatch
	const dispatch = useDispatch();
	// 2.发送网络请求
	useEffect(() => {
		dispatch(getTopBannerAction());
	}, [dispatch]);
	// 背景图
	const bgImage =
		topBanners[currentIndex] &&
		topBanners[currentIndex].imageUrl + "?imageView&blur=40x20";
	const bannerChange = useCallback((from, to) => {
		setTimeout(() => {
			setCurrentIndex(to);
		}, 0);
	}, []);
	return (
		<BannerWrapper bgImage={bgImage}>
			<div className="banner wrap-v2">
				<BannerLeft>
					{/*轮播图*/}
					<Carousel
						autoplay
						effect="fade"
						ref={bannerRef}
						beforeChange={bannerChange}
					>
						{topBanners.map((item, index) => {
							return (
								<div className="banner-item" key={item.imageUrl}>
									<img
										className="image"
										src={item.imageUrl}
										alt={item.typeTitle}
									></img>
								</div>
							);
						})}
					</Carousel>
				</BannerLeft>
				<BannerRight></BannerRight>
				{/*切换轮播图按钮*/}
				<BannerControl>
					<button
						className="btn left"
						onClick={(e) => bannerRef.current.prev()}
					></button>
					<button
						className="btn right"
						onClick={(e) => bannerRef.current.next()}
					></button>
				</BannerControl>
			</div>
		</BannerWrapper>
	);
});
