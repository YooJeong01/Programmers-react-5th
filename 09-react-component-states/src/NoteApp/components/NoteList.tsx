import { convertSlug } from "@/utils/convertSlug"
import type { Note } from "../api/getNote"
import './NoteList.css'

interface Props {
    list : Note[]
}

function NoteList({list}:Props) {

  return (
        <div className="NoteList">
            <h2>노트 필기 목록</h2>                
            <ul>
                {
                    list.map((note:Note)=>{
                        const slug = `#${convertSlug(note.title)}`
                        return (
                            <li key={note.id}>
                                <a href={slug}>{note.title}</a>
                            </li>
                        )   
                    })   
                }
            </ul>
            
        </div>
  )
}

export default NoteList