import React, { useId } from "react"

interface Props {
    label : string;
    onClick : () => void;
    items : string[];
}


function Child({label, items, onClick}:Props) {

    return (
        <>
            <p>{label}</p>
            <button type="button" onClick={onClick}>자식 버튼</button>
            <ul>
                {
                    items.map((item, i)=>
                        // 원래 키는 인덱스로 넣으면 안 된다!!
                        <li key={i}>{item}</li>
                    )
                }
            </ul>
        
        
        </>
    )
}

export default React.memo(Child);