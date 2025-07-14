import { useState } from "react";
import { getNoteList, type Note } from "./api/getNote"
import NoteListPage from "./pages/NoteListPage"
import { ROUTES } from "./routes";
import NoteDetailPage from "./pages/NoteDetailPage";
import NoteCreatePage from "./pages/NoteCreatePage";
import NoteEditPage from "./pages/NoteEditPage";


function NoteApp() {

	const [routeInfo, setRouteInfo] = useState<{
		route:string;
		noteId: number | null;
	}>({
		route: 'list',
		noteId: null,
	});   
	
	/**
		모든 노트의 데이터 & user 정보
		useState에는 값도 전달 가능하지만 콜백도 전달 가능한데
		콜백을 전달하게 되면 리액트가 처음 렌더링될 때 딱 한번만 호출한다
		그래서 getNoteList() 바껴도 콜백 안에 있기때문에 재렌더링 하지 않는다
		useState가 getNoteList를 딱 한 번만 호출하게 된다
	*/
	// 모든 노트 데이터 뽑아서 가져오기
	const [list, setList] = useState(()=> getNoteList());
	

	// 라우터 변경 함수
	// nextRoute : 가고 싶은 곳
	// pickNoteId : 도착했을때 보여질 노트 아이디
	const handleChangeRoute = (nextRoute:string, pickNoteId:number = 0) => {
		// set함수니까 리렌더링 된다 (useState)
		setRouteInfo({
			...routeInfo,
			route : nextRoute,
			noteId : pickNoteId ? pickNoteId : routeInfo.noteId
		})
	}

	// 노트 생성 함수
	const handleCreateNote = (newNoteItem:Note) => {
		setList([
			...list,
			newNoteItem
		])
	}

	// 노트 수정 함수
	const handleEditNote = (willEditNote:Note) => {
		const nextList = list.map((item)=>
			item.id === willEditNote.id ? willEditNote : item
		)
		setList(nextList);
	}

	// 노트 제거 함수
	const handleDeleteNote = (willDeleteNoteId:number) => {
		const nextList = list.filter((item)=>item.id !== willDeleteNoteId);
		setList(nextList);
	}

	// 파생 상태 (기존 상태에 의존해서 새로운 상태를 만든 것)
	const newNoteId = list.length + 1;

	switch (routeInfo.route) {
		case ROUTES.list:
			// 모든 노트를 전달해준다
			return <NoteListPage list={list} onChangeRoute={handleChangeRoute}/>
		case ROUTES.detail:
			return <NoteDetailPage 
				noteId={routeInfo.noteId}
				onChangeRoute={handleChangeRoute}
				/>
		case ROUTES.create:
			return <NoteCreatePage 
				newNoteId={newNoteId} 
				onCreate={handleCreateNote}
				onChangeRoute={handleChangeRoute}
			/>
		case ROUTES.edit:
			return <NoteEditPage
				noteId={routeInfo.noteId}
				onChangeRoute={handleChangeRoute}
				onEdit={handleEditNote}
				onDelete={handleDeleteNote}

			/>
		default:
			return <div>404 not found</div>

	}
	
}

export default NoteApp