import React, { createElement as h } from '../../lib/react.js';

export class PlanetList extends React.Component {
    render(){
        const {lang, children} = this.props;
        // console.log(children);
        return h(
            'ul',
            {className : 'planet', lang}, children
        )
    }
}