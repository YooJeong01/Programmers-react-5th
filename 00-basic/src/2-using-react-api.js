
import React, {createElement} from './lib/react.js';
import ReactDOM, {createRoot} from './lib/react-dom.js'

// console.log(React.version);
// console.log(ReactDOM);



const button = createElement('button',{ type : 'button' }, 'hello');
const div = createElement('div',{
    className:'tiger',
    lang:'en',
    'aria-label' : '버튼 태그의 부모'
}, button);

const app = document.getElementById('app');
const root = createRoot(app/* 렌더링 위치 */)

root.render(div);













