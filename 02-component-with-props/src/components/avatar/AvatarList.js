import React, { createElement as h } from "../../lib/react.js";


export function AvatarList({className, children}){
    return h('ul', {className},children);
}