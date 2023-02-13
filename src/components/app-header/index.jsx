import React, { memo } from 'react'
import { NavLink } from "react-router-dom";

// 头部组件
export default memo(function CHAppHeader() {
  return (
    <div>
      <NavLink to={'/'}>发现音乐</NavLink>
      <NavLink to={'/mine'}>我的音乐</NavLink>
      <NavLink to={'/friend'}>我的朋友</NavLink>
    </div>
  )
})
