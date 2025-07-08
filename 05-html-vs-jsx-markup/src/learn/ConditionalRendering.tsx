import reactImagePath from '@/assets/react.svg?url';
import viteImagePath from '@/assets/vite.svg?url'
import nextjsImagePath from '@/assets/next-js.svg?url'
import kakaotalkImagePath from '@/assets/kakao-talk.svg?url'
import getRandom from '@/utils/getRandom';
import isTrueOrFalse from '@/utils/isTrueOrFalse';

// svg 가져올때는 뒤에 cerfix? 붙여주기 => ?url

interface Props {
    imageType : ImageType[]
}


function ConditionalRendering({imageType}:Props) {
  
    let iconPath = ''
    let printText = ''
    const image = imageType[getRandom(imageType.length)].toLowerCase().trim();

    switch (image) {
        case 'react':
            iconPath = reactImagePath;
            printText = 'React App';
            break;
        case 'kakao talk' :
            iconPath = kakaotalkImagePath;
            printText = 'Kakao Talk App';
            break;
        case 'next.js' :
            iconPath = nextjsImagePath;
            printText = 'Next.js App';
            break;
        case 'vite' :
            iconPath = viteImagePath;
            printText = 'Vite App';
            break;
        default:
            printText = '허용된 이미지 타입이 존재하지 않습니다.';
    }

    const tf = isTrueOrFalse();
    const spinnerOrElse = tf ?
    (<img src="/icons/spinner.svg" alt="spinner" />):
    (<img src={iconPath} alt={image} />)


    return (
    <>
        <dt>조건부 렌더링(conditional rendering)({tf && '스피너 표시'})</dt>
        <dd>
            <p>이미지 타입(image type)에 따라 렌더링 여부를 결정합니다</p>
            <div className="conditionalRendering">
                <img src={iconPath} alt={image} />
                <p>{printText}</p>
            </div>
        </dd>
        <dd>
            <p>spinner 또는 vite 이미지가 랜덤으로 화면에 렌더링 되도록 합니다.</p>
            
            <div className="conditionalRendering">
                {spinnerOrElse}
            </div>
        </dd>
    </>
  )
}

export default ConditionalRendering