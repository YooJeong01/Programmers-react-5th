import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Learn from "./learn";
import '@/styles/global.css';

const container = document.getElementById('app');

if(!container){
    throw new Error('문서에 #app 요소가 존재하지 않습니다.');
}

const root = createRoot(container);

root.render(
    <StrictMode>
        <Learn/>
    </StrictMode>
)