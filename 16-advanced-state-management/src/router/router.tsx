import type { AppRoute } from "@/@types/global";
import Home from "@/pages/Home";
import Root from "@/Root";
import { configRoutes } from "@/utils/configRoutes";
import { getNavigationItems } from "@/utils/getNavigationItems";
import { createBrowserRouter } from "react-router";
// RouteObject[] 에는 text, path 등이 없기 때문에 타입 확장시켜야함


// 네비게이션용
const navigation: AppRoute[] = [
  {
    text: '홈',
    path: '',
    Component: Home,
  },
  {
    text: '어바웃',
    path: 'about',
    HydrateFallback: () => <p>loading...</p>,
    lazy: async () => {
      const mod = await import('@/pages/About'); // mod : module
      return {
        Component: mod.default,
        // loader: mod.loader,
        // action: ''
      }
    },
  },
]

// 라우팅용
export const routes = [
  {
    path: '/',
    Component: Root,
    children: configRoutes(navigation) // RouteObject[]
  }
]


const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL // vite에서 기본으로 제공해줌 : '/'
}
)

export default router;



export const navigationItems = getNavigationItems(navigation);