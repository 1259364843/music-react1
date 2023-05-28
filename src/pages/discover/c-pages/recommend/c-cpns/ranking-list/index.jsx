import React, { memo } from "react";
import CHThemeHeaderRCM from "@/components/theme-header-rcm";
import { RankingWrapper } from "./style.js";
// 榜单
function RankingList() {
	return (
		<RankingWrapper>
			<CHThemeHeaderRCM title="榜单"></CHThemeHeaderRCM>
		</RankingWrapper>
	);
}

export default memo(RankingList);
