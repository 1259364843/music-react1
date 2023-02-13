import React, { memo } from 'react';
import {useRoutes, Link} from 'react-router-dom'
import routes from './router'
// 导入组件
import CHAppHeader from '@/components/app-header'
import CHAppFooter from '@/components/app-footer'
export default memo(function App() {
  const outlet = useRoutes(routes)
  return (
      <div>
        <CHAppHeader />
          123
          {outlet}
        <CHAppFooter />
      </div>
  )
})
