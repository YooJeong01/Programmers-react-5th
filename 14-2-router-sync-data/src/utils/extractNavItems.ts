import type { NavItem, RouteWithHandler } from "@/@types/global";
import { joinPaths } from "./joinPath";

function extractNavItems(routes:RouteWithHandler[], parentPath=''):NavItem[] {

  const navItems = [];

  for( const route of routes){
    // depth 단계를 더 깊이 들어가기 위함
    const path = route.index ? parentPath || '/' : joinPaths(parentPath, route.path);

    // 1 depth 처리
    if(route.handle?.showInNav && route.handle?.label){
      navItems.push({label:route.handle.label, path})
    }

    // n depth 처리
    if(route.children){
      navItems.push(...extractNavItems(route.children, path))
    }
  }


  return navItems;
}
export default extractNavItems