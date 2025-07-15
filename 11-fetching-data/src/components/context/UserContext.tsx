import { createContext } from "react";

interface UserContextType {
  username : string;
  setUsername:(name:string)=>void;
}

export const UserContext = createContext<UserContextType | null>(null);
