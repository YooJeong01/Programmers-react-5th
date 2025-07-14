import React, { useId, useState } from "react";
import type { Note } from "../api/getNote";
import { getUser, getUserList } from "../api/getUser";
import './NoteForm.css'
import { convertHTMLToText, convertTextToHTMLString } from "@/utils/convertHTMLToText";

interface Props {
  mode : 'create' | 'edit';
  newNoteId?: number;
  note?:Note;
  onCreate?: (newNoteItem : Note) => void;
  onBackLink: () => void;
  onDelete?: (willDeleteNoteId:number) => void;
  onEdit?: (willEditNote:Note) => void;
}

type Form = React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>

const userList = getUserList();

interface FormData {
  title:string;
  content:string;
  userId:number;
}


function NoteForm({
  mode, 
  newNoteId, 
  onCreate, 
  onBackLink, 
  note, 
  onEdit, 
  onDelete
}:Props) {


  const [formData, setFormData] = useState<FormData>(()=>{

    // mode가 edit일때
    if(mode === 'edit' && note){
      return {
        title:note.title,
        content:convertHTMLToText(note.content),
        userId:note.userId
      }
    }

    // mode가 create일때
    return {
      title:'', 
      content:'',
      userId: 0,
    }
  })

  const titleId = useId();
  const contentId = useId();
  const userId = useId();

  const handleUpdateFormData = (e:Form) => {
    const {name, value} = e.target;

    const nextFormData = {
      ...formData,
      [name] : value
    }

    setFormData(nextFormData);
    
  }

  // console.log(formData);
  
  const handleCreateNote = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, content, userId } = formData;
    const newUserId = Number(userId);

    const user = getUser(newUserId);

    // note 객체 만들기 expand : user
    if(!user) return;
    if(!newNoteId) return;

    const newNote = {
      id:newNoteId,
      title:title.trim(),
      content:convertTextToHTMLString(content),
      userId:newUserId,
      createdAt:'',
      updatedAt:'',
      expand:{
        user:user
      }
    }

    // Props에 optional로 설정했기 때문에 
    onCreate?.(newNote);
    onBackLink();
    
  }

  const handleEdit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    

    if ( note && onEdit ) {
      const willEditNote = {
      ...note, // 기존 노트 내용
      ...formData // 수정 받은 내용
      } // 뒤에걸로 덮어쓰기되니까 
      onEdit(willEditNote); 
      onBackLink();
    }

  }

  const handleDelete = () => {
    if(!note) return;
    onDelete?.(note.id);
    onBackLink();
  }

  // 파생상태 (모드에 따른 분기를 위해서)
  const isCreateMode = mode.includes('create');


  return (
    <form 
      className="NoteForm" 
      onSubmit={ isCreateMode ? handleCreateNote : handleEdit }
    >
      <div className="formControl">
        <label htmlFor={titleId}>제목</label>
        <input
          id={titleId}
          type="text"
          name="title"
          value={formData.title}
          // 나중에 성능 향상을 위해 throttle, debounce가 들어가면 좋겠죠?
          onChange={handleUpdateFormData}
        />
      </div>
      <div className="formControl">
        <label htmlFor={contentId}>내용</label>
        <textarea
          id={contentId}
          name="content"
          value={formData.content}
          onChange={handleUpdateFormData}
        />
      </div>
      <div className="formControl">
        <label htmlFor={userId}>작성자</label>
        <select
          id={userId}
          name="userId"
          value={formData.userId}
          onChange={handleUpdateFormData}
        >
        <option>작성자 선택</option>
        {
          userList.map((user)=>(
            <option key={user.id} value={user.id}>{user.name}</option>
          ))
        }
        </select>
      </div>

      <div className="buttonGroup">
        <button type="submit">{isCreateMode ? '추가' : '수정'}</button>
        {
          isCreateMode ? 
          (<button type="reset">초기화</button>) :
          (<button type="button" onClick={handleDelete}>삭제</button>)
        }
        
      </div>


    </form>
  );
}
export default NoteForm;


// function NoteForm({mode, newNoteId, onCreate}:Props) {
//   const [title, setTitle] = useState('')
//   const [content, setContent] = useState('')

//   const [formData, setFormData] = useState(()=>{
//     return {
//       title:'',
//       content:'',
//       userId: 0,
//     }
//   })
  
//   const handleInputChange = (e:React.InputEvent<HTMLInputElement>) => {
//     setTitle(e.currentTarget.value);
//   }


//   const handleContent = (e:React.InputEvent<HTMLTextAreaElement>)=>{
//     setContent(e.currentTarget.value);
//   }

//   setFormData({...formData, title, content});
//   onCreate(formData)


//   return (
//     <form action="">
//         <h2>제목</h2>
//         <input type="text" onInput={handleInputChange}/>
//         <h3>내용</h3>
//         <textarea name="" id="" onInput={handleContent}></textarea>
//         <h4>이건 뭐지</h4>
//         <select name="" id="">
//           <option value=""></option>
//         </select>
//         <button type="submit"></button>
//     </form>
    

//   )
// }
// export default NoteForm