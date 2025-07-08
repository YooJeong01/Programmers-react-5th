import { Fragment } from "react/jsx-runtime";


interface Props {
    reactLibrary : ReactLibrary;
    items : StatusMessageWithId[]
}



function RenderList({reactLibrary, items}:Props) {

    // 객체의 리스트 렌더링
    const renderDefinitionList = (data:ReactLibrary) => {
        const definitionItem = Object.entries(data).map(([key, value])=> (      
            // key를 줘야하는데 부모를 이미 빼버렸고 <></>에 넣기도 마땅치않다? 그러면 fragment를 직접 입력하여 key를 넣어주면 된다
            <Fragment key={key}>
                <dt>{key}</dt> 
                <dd>{value}</dd>
            </Fragment>
        ))
        return <dl className="reactLibrary">{definitionItem}</dl>
    }

    // 배열의 메서드를 이용한 렌더링
    const renderItemsMap = items.map(({id, message})=>
        <li key={id}>{message}</li>
    )

    // for...of를 이용한 렌더링
    const renderItemsForOf = [];
    for(let i of items){
        const {id, message} = i;
        renderItemsForOf.push(<li key={id}>{message}</li>)
    }

    // 함수를 이용한 렌더링
    const renderItemsFunction = ()=> items.map(({id, message})=><li key={id}>{message}</li>)

    return (
        <>
            <dt>리스트 렌더링(list rendering)</dt>
            <dd>
                <p>
                    React 라이브러리(reactLibrary) 객체의 키, 값을 <q>설명 목록</q>으로 렌더링합니다.
                </p>                
                {renderDefinitionList(reactLibrary)}
            </dd>
            <dd>
                <ul>
                    {/* 함수 표현식을 이용한 렌더링 */}
                    {items.map(({id, message})=>
                    <li key={id}>{message}</li>
                    )}
                </ul>
                <hr />

                <ul>
                    {/* for...of를 이용한 렌더링 */}
                    {renderItemsForOf}
                </ul>
                <hr />

                <ul>
                    {/* 배열의 메서드를 이용한 렌더링 */}
                    {renderItemsMap}
                </ul>
                <hr />

                <ul>
                    {/* 함수를 이용한 렌더링 */}
                    {renderItemsFunction()}
                </ul>
            </dd>
            <dd>
                {/* 역순 정렬 렌더링 */}
                <p>상태 메시지(status message) 배열을 역순 정렬하여 렌더링합니다.</p>
                {
                    items.toReversed().map(({id, message},index)=>
                    <li key={id ?? index}>{message}</li>)
                }
            </dd>
        </>
    )
}

export default RenderList