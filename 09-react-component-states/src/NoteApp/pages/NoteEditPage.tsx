import { getNoteItem, type Note } from "../api/getNote";
import BackLink from "../components/BackLink";
import NoteForm from "../components/NoteForm";
import { ROUTES } from "../routes";

interface Props {
  onDelete?: (willDeleteNoteId:number) => void;
  onEdit?: (willEditNote:Note) => void;
  onChangeRoute : (nextRoute:string, pickNoteId?:number) => void;
  noteId:number | null;
}

function NoteEditPage({noteId, onChangeRoute, onEdit, onDelete}:Props) {
  
  if(!noteId) return; // noteId null인 경우 처리
  const note = getNoteItem(noteId);
  const handleBackLink = () => onChangeRoute(ROUTES.list);

  console.log(note);
  
  return (
    <div className="NoteEditpage">
      <BackLink onClick={handleBackLink}/>
      
      { // 노트가 존재할때 뒤 항목들을 렌더링한다 (null 처리)
        note && (
          <>
            <h2>노트 편집</h2>
            <NoteForm 
              mode="edit"
              onDelete={onDelete}
              onEdit={onEdit}
              note={note}
              onBackLink={handleBackLink}
            />
          </>
        )
      }
    </div>
  )
}
export default NoteEditPage

