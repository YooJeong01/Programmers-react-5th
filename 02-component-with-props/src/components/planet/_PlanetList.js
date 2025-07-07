import React, { createElement as h } from "../../lib/react.js";

export function _PlanetList ({lang,children}){
  
  return h(
    'ul',
    {className:'planet',lang},
    children
  )
}