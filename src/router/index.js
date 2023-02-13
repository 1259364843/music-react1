import {
  createHashRouter,
  Navigate
} from "react-router-dom";

// 导入组件
import CHDiscover from '@/pages/discover'
import CHFriend from '@/pages/friend'
import CHMine from '@/pages/mine'
const routes = [
  {
    path: "/",
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <CHDiscover />
  },
  {
    path: '/friend',
    element: <CHFriend />
  },
  {
    path: '/mine',
    element: <CHMine />
  }
]
export default routes;