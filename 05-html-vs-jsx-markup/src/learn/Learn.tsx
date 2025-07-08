import type { JSX } from "react";
import JSX_Markup from "./JSX_Markup";

// 추론을 JSX.Element로 해주기 때문에 굳이 명시적으로 표시할 필요가 없다
function Learn():JSX.Element{

    return(
        <div className="learn">
            <HeadLine/>
            <hr />
            <JSX_Markup/>
        </div>
    )

}

export default Learn;


function HeadLine():JSX.Element{
    const abbr = {
        html : 'Hyper Text Markup Language',
        jsx : {
            abbr: 'Javascript extension for ECMAScript',
            text: 'JSX'
        }
    }

    return(
        <h1>
            <abbr title={abbr.html}>HTML</abbr> vs
            <abbr title={abbr.jsx.abbr}>{abbr.jsx.text}</abbr> 마크업
        </h1>
    )
}










