import type { Note } from "../api/getNote"
import BackLink from "../components/BackLink";
import NoteForm from "../components/NoteForm";
import { ROUTES } from "../routes";

interface Props {
  newNoteId : number;
  onCreate : (newNoteItem : Note) => void;
  onChangeRoute : (nextRoute:string, pickNoteId?:number) => void
}


function NoteCreatePage({newNoteId, onCreate, onChangeRoute} : Props) {


  const handleBackLink = () => onChangeRoute(ROUTES.list);

  return (
    <div className="NoteCreatePage">
      <BackLink onClick={handleBackLink}/>
      {/* Page에서 사용하지 않고 NoteForm으로 데이터 전달 */}
      <NoteForm
        mode="create"
        newNoteId={newNoteId}
        onCreate={onCreate}
        onBackLink={handleBackLink}
      />
    </div>
  )
}
export default NoteCreatePage