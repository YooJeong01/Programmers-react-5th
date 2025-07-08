import getRandom from "@/utils/getRandom";
import type { JSX } from "react";

interface Props {
    statusMessage: StatusMessage[];
}

function DataBinding({statusMessage}:Props):JSX.Element{

    const message = statusMessage[getRandom(statusMessage.length)];

    return(
        <>
            <dt>데이터 바인딩(data binding)</dt>
            <dd>
                <p>상태 메시지(status message)를 연결해 화면에 출력합니다</p>
                <span className="status">{message}</span>
            </dd>
        </>
    )
}

export default DataBinding