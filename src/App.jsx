import React, { memo } from 'react';
import {
  RouterProvider
} from "react-router-dom";
import routes from './router'
// 导入组件
import CHAppHeader from '@/components/app-header'
import CHAppFooter from '@/components/app-footer'
export default memo(function App() {
  return (
      <div>
        <CHAppHeader />
          123
          <RouterProvider router={routes} />
        <CHAppFooter />
      </div>
  )
})
