import React, { memo } from "react";
import { NavLink, useRoutes, Outlet } from "react-router-dom";
// 发现页,菜单数据
import { dicoverMenu } from "@/common/local-data";
import { DiscoverWrapper, TopMenu } from "./style";
export default memo(function CHDiscover(props) {
	return (
		<DiscoverWrapper>
			<div className="top">
				{/*顶部红色菜单*/}
				<TopMenu className="wrap-v1">
					{dicoverMenu.map((item, index) => {
						return (
							<div className="item" key={item.title}>
								<NavLink to={item.link}>{item.title}</NavLink>
							</div>
						);
					})}
				</TopMenu>
			</div>
			{/*路由出口*/}
			<Outlet />
		</DiscoverWrapper>
	);
});
