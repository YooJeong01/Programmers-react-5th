import {createElement} from './lib/react.js';
import {createRoot} from './lib/react-dom.js'

const listData = {
    items: [],
};

const root = createRoot(document.getElementById('app'));



// 데이터를 우회 해주는 Proxy 생성자 함수가 있다
// listData를 대신해서 reactiveListData가 처리해준다
// 실제로 데이터를 꺼내고 바꿔준것마냥 대신 처리한다
// 데이터가 변경됨을 인지하게끔 코드를 구성한다 -> set에 render()

const reactiveListData = new Proxy(listData,{

    get(target, prop){
        // 대상의 객체를 읽어줌
        return target[prop];
    },

    set(target,prop,newValue){
        const oldValue = target[prop];
        target[prop] = newValue;
        render();

        return true;
    }
})






function render(){
    const children = listData.items.map( ({id, title}) => {
        const liElement = createElement('li',{className:'item', key:id},
            createElement('img',{src:`/planet/image-0${id}.jpg`}),
            createElement('span',{className:'content'},title),
            createElement('button', {type:'button',title:'아이템 이동 (위/아래 화살표 키 활용)'},
                createElement('img',{src:'/icons/icon.svg', alt:'아이템 이동 (위/아래 화살표 키 활용)'})
            )
        );
        return liElement
    })
    const ulElement = createElement(
        'ul',{className:'planet', lang:'en'}, children
    );

    root.render(ulElement)
}
render();


setTimeout(()=>{
    reactiveListData.items = [
        ...reactiveListData.items,
        {
            id:1,
            title:"Life on Earth"
        }
    ]
    console.log(listData);
    
}, 1000);


