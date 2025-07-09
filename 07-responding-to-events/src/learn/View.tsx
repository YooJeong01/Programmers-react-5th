import { useState } from "react";
import EventHandlerProp from "./EventHandlerProp";
import EventPropagation from "./EventPropagation";
import EventWithSideEffects from "./EventWithSideEffects";


function View() {
  
    return (
    <div></div>
  )
}
export default View



function RespondingToEvents(){

    // 변수명, 변경시키는 함수 = useState(초기값);
    const [text, setText] = useState(''); // Hook

    let message = ''
    const updateMessage = (add:string):void => {
        message += add;
        console.log(message);
    }



    return(
        <div className="ViewRespondingToEvent">
            <h1>이벤트 응답</h1>
            <p>사용자와 상호작용하도록 이벤트를 구성합니다.</p>
            <hr />
            <form 
                action="/?submitted"
                onSubmit={(e:React.FormEvent<HTMLFormElement>)=>{
                    e.preventDefault();
                    const target = e.target as HTMLFormElement;
                    const input = target.children[0] as HTMLInputElement;
                    
                    setText(input.value);
                }}
            >
                <input 
                    name="사용자 이름" 
                    type="text" 
                    aria-label="사용자 이름" 
                    placeholder="심선범" 
                    // style={{marginRight:'10px'}}
                />
                {' '}
                <button type="submit">보내기</button>
            </form>
            <div>
                <output>{text}</output>
            </div>
            <EventHandlerProp onUpdateMessage={updateMessage} />
            <EventPropagation/>
            <EventWithSideEffects/>
        
        
        </div>
    )
}

// 실행하지 않고(jsx 전달x) 함수 본문(=값)을 전달한다
View.RespondingToEvents = RespondingToEvents