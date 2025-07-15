import { UserContext } from "@/components/context/UserContext";
import { useContext } from "react";

export function useUserContext(){
  const ctx = useContext(UserContext);
  if(!ctx) throw new Error('useUserContext는 <UserContext>안에서 사용해야합니다.</UserContext>')
  return ctx;
}