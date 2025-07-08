// import { imageType, statusMessage } from "@/data/learn"
import * as learnData from '@/data/learn';
// 이렇게 한방에 객체에 담아서 가져와서 구조분해할당으로 뽑아써도됨
import DataBinding from "./DataBinding"
import ConditionalRendering from "./ConditionalRendering"
import ConditionalDisplay from "./ConditionalDisplay"
import RenderList from './RenderList';


function JSX_Markup() {
    const {statusMessage, imageType, isShowReactImage, reactLibrary, statusMessageWithId} = learnData;
  return (
    <dl className="descriptionList">
        <DataBinding statusMessage={statusMessage}/>
        <ConditionalRendering imageType={imageType}/>
        <ConditionalDisplay isShowImage={isShowReactImage}/>
        <RenderList reactLibrary={reactLibrary} items={statusMessageWithId}/>
    </dl>
  )
}
export default JSX_Markup