import { Fragment } from "react/jsx-runtime";
import Avatar from "../components/Avatar";

interface Props {
  list:AvatarData[]
}

// sideEffect 다른 예시
// 외부 변수를 변형하고 렌더링에 반영해서
// 무조건적으로 외부 변수 만들고 참조한다고 side Effect는 아니다
// const anotherData = {
//   count:0
// }




function AvatarListPage(props:Props){

  // ❌
  // 배열 객체의 pop() 메서드 사용
  // 입력받은 원본 데이터(props.list) -> mutation(뮤테이션, 수정)
  // 원본 데이터를 강제로 수정 => 리액트 세상에서는 구속감이다
  // props.list.pop()
  // console.log(props.list);

  // 외부 데이터인 props에 의존한 파생된 데이터
  // props는 읽지 전용 데이터다. 전달 받은 하위 컴포넌트에서 수정하면 안된다 (구속)



  // ✅
  // 로컬 뮤테이션 (local mutation)
  // 지역 내 수정은 허용된다
  const myList = [...props.list] // spread syntax
  // const myList = Array.from(props.list);
  // const myList = Array.prototype.slice.call(props.list);



  /**
    아래 코드는 컴포넌트가 렌더링 될 때마다 실행된다
    타이머나 외부 동작은 그 사이클과 독립적으로 
    움직이기 때문에(browser API) side Effect이다 
  */

  // let renderCount = 0;
  // setInterval(()=>{
  //   console.log(renderCount);
  //   document.getElementById('app')!.dataset.render = String(++renderCount)
  // },1000);

  // JSX
  return (
    <ul className="avatarList">
      {myList.map((user:AvatarData)=>
        <Fragment key={user.id}>
          <Avatar user={user}/>
          {/* {anotherData.count++} */}
        </Fragment>
      )}
    </ul>
  );
}
export default AvatarListPage