import { useState } from "react";
import { getNoteList } from "./api/getNote"
import NoteListPage from "./pages/NoteListPage"


function NoteApp() {

    // 모든 노트의 데이터 & user 정보
    // useState에는 값도 전달 가능하지만 콜백도 전달 가능한데
    // 콜백을 전달하게 되면 리액트가 처음 렌더링될 때 딱 한번만 호출한다
    // 그래서 getNoteList() 바껴도 콜백 안에 있기때문에 재렌더링 하지 않는다
    // useState가 getNoteList를 딱 한 번만 호출하게 된다
    const [list, setList] = useState(()=> getNoteList());
    // Q. 초기값 설정 자리라 딱 한번만 호출해도 되는건가?
    
    return (
        <NoteListPage list={list} />
    )
}

export default NoteApp