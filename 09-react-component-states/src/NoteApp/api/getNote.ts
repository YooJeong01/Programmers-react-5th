
import notesData from '@/data/notes.json'
import usersData from '@/data/users.json'

export type Note = (typeof notesData)[number] & {
    expand?:{
        user: typeof usersData[number]
    }
}


// 노트 가져오면서 작성자 정보도 같이 가져오기
export function getNoteList():Note[]{
    return notesData.map((note)=>{
        const user = usersData.find((user)=> user.id === note.userId);
        if(user){
            // expend라는 키에 user 객체를 담는거다
            // 컴파운드 컴포넌트?
            (note as Note).expand = {user}
        }
        return note;
    })
    

}

// 특정 노트 하나만 가져오기
export function getNoteItem(noteId:number):Note|null{
    const notes = getNoteList();
    const note = notes.find((note)=> note.id === noteId);
    return note ? note : null;;

}