import type { Note } from "../api/getNote"
import NoteList from "../components/NoteList"
import { ROUTES } from "../routes";
import './NoteListPage.css'


interface Props {
    list:Note[];
    onChangeRoute : (nextRoute:string, pickNoteId?:number) => void
}

function NoteListPage({list, onChangeRoute}:Props) {

    const handleClick = (e:React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onChangeRoute(ROUTES.create);
    }

    return (
      <div className="NoteListPage">
        {/* 노트 하나씩 렌더링한다 */}
          <NoteList list={list} onChangeRoute={onChangeRoute}/>
          <a 
            href="#create-note" 
            className="createNoteLink"
            onClick={handleClick}
          >노트 작성</a>
      </div>
    )
}

export default NoteListPage