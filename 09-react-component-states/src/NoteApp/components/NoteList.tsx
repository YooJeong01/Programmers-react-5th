import { convertSlug } from "@/utils/convertSlug"
import type { Note } from "../api/getNote"
import './NoteList.css'
import { ROUTES } from "../routes";

interface Props {
 list : Note[];
 onChangeRoute : (nextRoute:string, pickNoteId?:number) => void
}

function NoteList({list, onChangeRoute}:Props) {

  // 핸들러 함수 추가
  // 핸들러 함수 바인딩
  // onChangeRoute 실행

  // 클로저로 만들기
  // 그냥 handleClick()으로 컴포넌트에 바인딩해버리면 클릭을 하기도 전에 바로 실행되니까 문제가 생긴다
  // 그럼 바로 실행하지 않으면서 인자도 전달해야한다면? 클로저로 묶어버리기
  // 클로저가 된 handleClick에 파라미터로 id를 넘겨주면 된다
  // 클로저가 돼 버리면 실질적으로 이 함수를 실행하려면 두번 실행은 해줘야 route가 바뀌는거다
  // 첫번째 실행(클릭 전)에 id를 전달하고 두번째 실행(클릭했을때)에 라우터가 동작하는거다
  const handleClick = (pickNoteId:number) => (e:React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      onChangeRoute(ROUTES.detail,pickNoteId);
  }

    
  return (
    <div className="NoteList">
      <h2>노트 필기 목록</h2>                
      <ul>
        {
          list.map((note:Note)=>{
            const slug = `#${convertSlug(note.title)}`
            return (
              <li key={note.id}>
                <a 
                  href={slug} 
                  // id를 전달해주기 위해 클로저를 사용한다
                  onClick={handleClick(note.id)}
                >{note.title}</a>
              </li>
        
            )   
          })   
        }
      </ul>
          
    </div>
  )
}

export default NoteList