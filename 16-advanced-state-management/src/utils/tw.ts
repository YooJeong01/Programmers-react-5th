import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function tw(...args:any[]){
  return(twMerge(clsx(args)))
}