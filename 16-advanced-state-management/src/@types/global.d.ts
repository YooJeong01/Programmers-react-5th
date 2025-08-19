
// Omit으로 라우터오브젝트가 가지고 있는 children만 빼서 내가 children을 직접 설계하도록 함
export type AppRoute = Omit<ReactObject, 'children'> & {
  text?: string;
  display?: boolean;
  children?: AppRoute[]
}