import React, { memo } from 'react'
import { NavLink } from "react-router-dom";

import { headerLinks } from '@/common/local-data.js';

// 样式组件
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
// antd组件
import { Input } from 'antd'
// 搜索图标
import { SearchOutlined } from '@ant-design/icons'
// 头部组件
export default memo(function CHAppHeader() {
  // 判断是路由跳转还是普通超链接
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return(
        <NavLink to={item.link}>{item.title}
        <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return(
        <a href={item.link}>{item.title}</a>
      )
    }
  }
  return (
    <HeaderWrapper>
      <div className='content wrap-v1'>
        <HeaderLeft>
          {/*1.logo*/}
          <a href='#/' className='logo sprite_01'> </a>
          {/*2.头部链接*/}
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return(
                  <div key={item.title}  className="select-item">
                    {showSelectItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
            {/*搜索框*/}
            <Input className='search' placeholder='音乐/视频/电台/用户' prefix={<SearchOutlined />}/>
            <div className="center">创作者中心</div>
            <div>登录</div>
        </HeaderRight>
      </div>
      <div className='divider'></div>
    </HeaderWrapper>
  )
})
