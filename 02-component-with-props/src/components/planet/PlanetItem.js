import React, { createElement as h } from '../../lib/react.js';

export class PlanetItem extends React.Component {

    render(){
        const {id, title} = this.props;
        return h('li',
            {className : 'item'},
            h('img', {src:`/planet/image-0${id}.jpg`, alt:''}),
            h('span', {className:'content'}, title),
            h('button', {type:'button', title:'move item'},
                h('img',{src:'/icons/icon.svg', alt:'move item'})
            ),
        );
    }
}