import type { AppRoute } from "@/@types/global";
import type { IndexRouteObject, NonIndexRouteObject, RouteObject } from "react-router";

export function configRoutes(navigation: AppRoute[]): RouteObject[] {
  return navigation.map((item) => {
    const { children, ...routeProps } = item;

    // 우리가 navigation에 추가로 넣어준 속성들이 routeProps(rest? args?)로 전달됨
    // console.log(routeProps);


    // index 라우트 조건 처리 : path가 빈 문자열이거나 '/'일 경우 index 라우팅
    // 주 페이지
    const isIndex = routeProps.path === '' || routeProps.path === '/';

    let route: RouteObject;
    if (isIndex) {
      // 구조분해했지만 쓰지 않을거라면 언더스코어로 별칭
      const { path: _omit, ...rest } = routeProps

      // path는 빼고 index 여부만 boolean으로 전달
      // IndexRouteObject라는 타입 제공함 리액트 라우터에서
      // 인덱스인걸 명확히 하기 위해 타입 적어주기
      route = { ...rest, index: true } as IndexRouteObject;

    } else {
      // NonIndexRouteObject라는 타입 제공함 리액트 라우트에서
      // 인덱스가 아닌걸 명확히 하기 위해 타입 적어주기
      route = routeProps as NonIndexRouteObject
    }

    // depth가 존재할때 재귀로 다시 라우트 처리 해주기
    if (children && children.length > 0) {
      route.children = configRoutes(children);
    }

    return route;
  })

}