import { convertSlug } from "@/utils/convertSlug";
import { getNoteItem } from "../api/getNote";
import PrintError from "../components/PrintError";
import type React from "react";
import { ROUTES } from "../routes";
import BackLink from "../components/BackLink";
import './NoteDatailPage.css'

interface Props {
  noteId : number | null ;
  onChangeRoute : (nextRoute:string, pickNoteId?:number) => void
}

function NoteDetailPage({noteId, onChangeRoute}:Props) {

  if(!noteId){
    return(<PrintError>노트 정보를 불러오지 못했습니다!</PrintError>)
  }
  const note = getNoteItem(noteId);

  const handleChangeRoute = (e:React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onChangeRoute(ROUTES.edit, noteId);
  }

  const handleBackLink = () => onChangeRoute(ROUTES.list);


  const createMarkup = () => {
    if(!note) return;
    return {__html:note.content}
  }


  return (
    <div className="NoteDetailPage">
      <BackLink onClick={handleBackLink} />

      {!note && <PrintError>노트를 찾을 수 없습니다.</PrintError>}
      {// 노트가 존재한다면 아래 태그 렌더링
        note && (
          <>
            <h2>{note.title}</h2>
            <span>
              {note.expand?.user.name}{' '}
              {/* 나중에 convertSlug가 push state에 넣어지겠죠?  */}
              <a href={`#/edit/${convertSlug(note.title)}`} onClick={handleChangeRoute}>수정</a>
            </span>
            <div dangerouslySetInnerHTML={createMarkup()} />
          </>
        )
      }
    </div>
  )
}
export default NoteDetailPage