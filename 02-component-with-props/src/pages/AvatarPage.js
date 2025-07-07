import React, { createElement as h } from '../lib/react.js'
import { avatarData } from '../data/data.js';
import { AvatarList } from '../components/avatar/AvatarList.js';
import { AvatarItem } from '../components/avatar/AvatarItem.js';
import Avatar from '../components/avatar/avatar.js';

// export function AvatarPage(){
//     return h(AvatarList,{className:'avatarList'},
//         avatarData.items.map(({img, status, id})=>h(AvatarItem,{
//             img, status, key:id
//         }))
//     )
// }

export default function AvatarPage(){
    return h(
        'ul',
        {className:'avatarList'},
        h(Avatar,{name: 'jjanggu', status: 'online'}),
        h(Avatar,{name: 'jjangah', status: 'dont-disturb'}),
        h(Avatar,{name: 'principal', status: 'offline'}),
        h(Avatar,{name: 'hyungman', status: 'away'}),
    )
}
