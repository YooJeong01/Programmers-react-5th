import React, { useId, useImperativeHandle, useRef, useState, type RefObject } from 'react';
import type {Chat} from '..'
import S from '../style.module.css'

export interface ChatBoxHandle {
  scrollDownList: () => void;
}

type Props = {
  message: Chat;
  onAddMessage:(message:string)=>void;
  ref:RefObject<ChatBoxHandle|null>
}


function ChatBox({message, onAddMessage, ref}:Props) {
  const id = useId();
  const textareaRef = useRef<HTMLTextAreaElement|null>(null);
  const olRef = useRef<HTMLOListElement|null>(null);

  // 문자가 조합될때 생기는 오류 해결
  // IME(Input Method Editor) 로 생기는 문제 해결
  const [isComposing, setIsComposing] = useState(false);

  // 강제로 부모에게 노출시키는것 (원래는 부모가 알 수 없는건데)
  // 이렇게 되면 부모도 사용할 수 있게된다
  useImperativeHandle(ref,()=>({
    scrollDownList: () => {
      const ol = olRef.current;
      if(!ol) return;
      // 타이머를 사용하지 않은 경우 제대로 인식 x, 렌더링 시간 계산 x
      setTimeout(()=>ol.scrollTo(0, ol.scrollHeight));
    }
  }))

  const sendMessage = (newMessage:string) => {
    const textarea = textareaRef.current;

    if(!textarea) return;
    if(newMessage.length <= 0){
      alert('메시지 내용을 입력하세요~~!');
      textarea.select(); // 인풋창을 선택해줌
      return;
    }
    onAddMessage(newMessage);
    textarea.value = ''; // 값 비워주기


    
  }

  const handleSendMessage = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const textarea = textareaRef.current!;

    const formData = new FormData(e.currentTarget);
    let newMessage = formData.get('message');
    // form 안에 아이디들을 수집해서 가져온다
    if(typeof newMessage !== 'string') return;
    newMessage = newMessage.trim();
    sendMessage(newMessage);
  }

  const handleKeyDown = (e:React.KeyboardEvent<HTMLTextAreaElement>) => {
    const {key, shiftKey} = e;
    
    if(key === 'Enter' && !shiftKey && !isComposing){
      e.preventDefault();

      const newMessage = e.currentTarget.value.trim();
      if(newMessage.length > 0){
        sendMessage(newMessage);
      }
    }
  }

  return (
    <section className={S.chatBox}>
      <h2 className='a11y-hidden'>채팅 화면</h2>
      <ol ref={olRef} className={S.chats}>
        {
          message.map(({id, isMe, message})=>{
            const classNames = `${S.chat} ${isMe? S.me : ''}`.trim();
            return (
              <li key={id} className={classNames}>
                {message}
              </li>
            )
          })
        }
      </ol>
      <form className={S.form} onSubmit={handleSendMessage}>
        <div className={S.messageBox}>
          <label htmlFor={id} className='a11y-hidden'>메시지 입력</label>
          <textarea 
            //웹 표준 이벤트(글자가 시작할때는 true, 끝났다고 판단되면 false로 설정)
            onCompositionStart={()=>{
              setIsComposing(true)
            }}
            onCompositionEnd={()=>{
              setIsComposing(false)
            }}
            onKeyDown={handleKeyDown}
            ref={textareaRef}
            name="message" 
            id={id}>
          </textarea>
        </div>
        <button type='submit'>
          보내기
        </button>
      </form>
    </section>
  )
}
export default ChatBox