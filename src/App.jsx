import React, { memo } from "react";
import { useRoutes, Link } from "react-router-dom";
// 路由
import routes from "./router";
import { Provider } from "react-redux";
// redux
import store from "./store/index";
// 导入组件
import CHAppHeader from "@/components/app-header";
import CHAppFooter from "@/components/app-footer";
export default memo(function App() {
	const element = useRoutes(routes);
	return (
		<div>
			<Provider store={store}>
				<CHAppHeader />
				{element}
				<CHAppFooter />
			</Provider>
		</div>
	);
});
