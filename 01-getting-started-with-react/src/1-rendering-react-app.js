import {createElement} from './lib/react.js';
import {createRoot} from './lib/react-dom.js'

const listData = {
  items: [
    { id: "1", title: "Life on Earth" },
    { id: "2", title: "Jupiter's massive storms" },
    { id: "3", title: "Explore Mars now" },
    { id: "4", title: "Moonlight and craters" },
  ],
};

const children = listData.items.map( ({id, title}) => 
    {
        const liElement = createElement('li',{className:'item', key:id},
            createElement('img',{src:`/planet/image-0${id}.jpg`}),
            createElement('span',{className:'content'},title),
            createElement('button', {type:'button',title:'아이템 이동 (위/아래 화살표 키 활용)'},
                createElement('img',{src:'/icons/icon.svg', alt:'아이템 이동 (위/아래 화살표 키 활용)'})
            )
        );
        return liElement
    }
)

// 리액트한테는 children에 배열을 던져주면 알아서 생성해줌
// const ulElement = createElement('ul',{className:'planet', lang:'en', children});
const ulElement = createElement('ul',{className:'planet', lang:'en'}, children);

const root = createRoot(document.getElementById('app'));


function render(){
    root.render(ulElement)
}
render();
