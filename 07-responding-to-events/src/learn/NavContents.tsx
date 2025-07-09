



/**
1. 핸들러 함수를 선언만 해두고
2. 이벤트 쓰고싶은 곳에다가 onClick={핸들러 함수명} 으로 전달하면 된다

이렇게 등록해두면 리액트가 알아서 addEvenetListener를 합성해서 이벤트를 등록해준다.
이벤트 객체 타입 : React.MouseEvent<HTMLAnchorElement>
*/



function NavContents() {

    // 컴포넌트 안에서 대상을 찾거나 수정하는 행위 X -> 이벤트 핸들러에서 처리
    // 일단 실행 순서 자체부터 생성되지 않은 노드를 선택하려하니 오류가 난다
    // const firstLink = document.querySelector('[href="#jsx-markup"]') as HTMLAnchorElement;
    // firstLink.dataset.element = 'jsx-markup' 

    const handleClickFirstLink = (e:React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        
        // 이벤트 핸들러 안에서는 side Effect를 처리하기에 아주 완벽한 공간이다
        
        // const firstLink = document.querySelector('[href="#jsx-markup"]') as HTMLAnchorElement;
        // firstLink.dataset.element = 'jsx-markup' 
        // console.log(firstLink);
        
        e.currentTarget.dataset.element = 'jsx-markup'
    }

    const handleRespondingToEvents = (e:React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        e.currentTarget.dataset.element = 'responding-to-events'
    }
    
    
    return (
        <nav className="NavContents" aria-label="학습 주제 탐색">
            <a href="#jsx-markup" onClick={handleClickFirstLink}>JSX 마크업</a>
            <a href="#responding-to-events" onClick={handleRespondingToEvents}>이벤트 응답</a>
        </nav>
    )
}

export default NavContents