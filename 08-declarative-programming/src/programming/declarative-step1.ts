import createState from "@/lib/createState";


const data = {
    checked : false
}


const render = () => {
    const {checked} = state;

    checkbox.checked = checked;
    if(checked){
        button.removeAttribute('disabled');
        button.textContent = '활성 상태'
    } else {
        button.setAttribute('disabled', 'true');
        button.textContent = '비활성 상태'
    }
    console.log('re-render')
}


// 타입 스크립트에게 전역으로 선언해줌
declare global {
    var update : (value:boolean) => void;
}

/**
setState('checked', value) 호출 시 render()함수도 함께 호출됨 -> UI 갱신
globalThis.update 등록한 이유 : 브라우저 콘솔에서 update(true) 테스트할 수 있도록

*/


const update = (globalThis.update = (value)=>{
    setState('checked', value);
})

const [state, setState] = createState(data, render);

console.log('초기 상태', state.checked);



const container = document.getElementById('declarative-programming')!;
const checkbox = container.querySelector('input[type="checkbox"]') as HTMLInputElement;
const button = container.querySelector('button') as HTMLButtonElement;


checkbox.addEventListener('change', (e:Event)=>{
    const {checked} = e.target as HTMLInputElement;
    update(checked)
})