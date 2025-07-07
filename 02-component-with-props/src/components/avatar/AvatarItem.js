import React, { createElement as h } from "../../lib/react.js";

export function AvatarItem({img, status}){
    return h('li', {className:'avatar'},
            h('figure',
                null,
                h('div',{className:'cover'},
                    h('img',{src:`/avatar/${img}.png`, alt:''})
                ),
                h('figcaption',null,
                    h('img',{src:`/icons/status-${status}.svg`, alt:''})
                )
            )
        )
}