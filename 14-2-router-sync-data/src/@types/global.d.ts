import type { RouteObject } from "react-router";

export type NavItem = {
  label: string;
  path: string;
}

export type RouteWithHandler = RouteObject & {
  // handle은 원래 타입이 any였다
  // 커스텀 하고 있으니까 타입 지정해주기
  handle?:{
    label?: string;
    showInNav?: boolean;
  },
  children?:RouteWithHandler[]
}

export interface User {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

export interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}