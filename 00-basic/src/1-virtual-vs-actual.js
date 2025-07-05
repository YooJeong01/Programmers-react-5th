

/**
 * virtual DOM
 * 가상 문서 객체 모델
 * 실제 DOM을 추상화 (단순화)
*/

import { createElement, isValidElement } from "./lib/virtual/index.js"
import { createRoot } from "./lib/virtual-dom/index.js"

/* actual DOM ----------------------------------------------- */
/**
 * 실제 DOM 구성 (엘리먼트 트리)
 * 웹 API 사용해서 문서 객체(document object) 생성
*/

// 1. 부모 요소 생성
const divElement = document.createElement('div');

// 2. 자식 요소 생성
const buttonElement = document.createElement('button');

// 3. 자식 요소 속성, 컨텐츠 설정
buttonElement.setAttribute('type', 'button');
buttonElement.textContent = 'hello'

// 4. 요소간 관계 형성
divElement.append(buttonElement);

// 5. 실제 DOM에 마운트
const actualDomElement = document.getElementById('app');
actualDomElement.append(divElement);



/* virtual DOM ----------------------------------------------- */

// API : createElement(type, props, ... children)
// 속성이 필요하다면 props 인자 위치에 넣어주면 된다
// children에는 연결하고싶은 자식을 넣어주면 된다 
// props에 children:[연결할 자식])으로 넣어도 된다

const buttonV_Element = createElement('button', {type:'button', 'aria-label':'인사말'},'hola👯‍♀️');
const divV_Element = createElement('div',{className:'tiger'},buttonV_Element);
// 아래처럼 적어도 된다
// const divV_Element = createElement('div',{className:'tiger', children:['hello']});
console.log(buttonV_Element);


const VirtualDomElement = document.getElementById('app');
const vRoot = createRoot(VirtualDomElement);
vRoot.render(divV_Element);



console.log(isValidElement(divElement));
console.log(isValidElement(divV_Element));



















