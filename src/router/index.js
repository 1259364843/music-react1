import React from "react";
import { Navigate } from "react-router-dom";

// 导入组件
import CHDiscover from "@/pages/discover";
import CHFriend from "@/pages/friend";
import CHMine from "@/pages/mine";
// 子页面
import Recommend from "@/pages/discover/c-pages/recommend";
import Ranking from "@/pages/discover/c-pages/ranking";
import Songs from "@/pages/discover/c-pages/songs";
import Djradio from "@/pages/discover/c-pages/djradio";
import Artist from "@/pages/discover/c-pages/artist";
import Album from "@/pages/discover/c-pages/album";
const routes = [
	{
		path: "/",
		element: <Navigate to="/discover" />,
	},
	{
		path: "/discover",
		exact: true,
		element: <CHDiscover />,
		// 子路由
		children: [
			{
				path: "/discover/recommend",
				element: <Recommend />,
			},
			{
				path: "/discover/ranking",
				element: <Ranking />,
			},
			{
				path: "/discover/songs",
				element: <Songs />,
			},
			{
				path: "/discover/djradio",
				exact: true,
				element: <Djradio />,
			},
			{
				path: "/discover/artist",
				element: <Artist />,
			},
			{
				path: "/discover/album",
				element: <Album />,
			},
		],
	},
	{
		path: "/friend",
		element: <CHFriend />,
	},
	{
		path: "/mine",
		element: <CHMine />,
	},
];
export default routes;
