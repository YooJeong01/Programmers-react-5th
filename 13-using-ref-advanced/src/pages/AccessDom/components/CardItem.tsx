import type { Movie_list } from "../type"
import S from '../style.module.css'
import VanillaTilt from "vanilla-tilt";
import { TILT_CONFIG } from "./tiltConfig";
import { useRef } from "react";

type Props = {
  item:Movie_list;
  popup:boolean;
}

function CardItem({item, popup}: Props) {

  const { href, label, images } = item;
  const titleRef = useRef<HTMLParagraphElement|null>(null);

  const refCallback = (el:HTMLAnchorElement /* domElementNode */) => {

    // 실제 DOM 요소 노드 접근 가능함.
    // refCallback이 전달되는곳이 바로 타겟이 된다
    
    VanillaTilt.init(el, TILT_CONFIG);
    
  }

  const cardClassNames = `${S.card} ${popup ? S.popup : ''}`.trim();

  // 카드에 마우스 올렸을 때 label이 보이게
  // 카드에 마우스 떠났을 때 label이 안 보이게


  const handleEnter = () => {
    // label을 잡아서 style 수정
    const title = titleRef.current!;
    title.style.opacity = '1';
  }
  
  const handleLeave = () => {
    const title = titleRef.current!;
    title.style.opacity = '0';
  }

  return (
    <a 
      ref={refCallback}
      href={href}
      title={label}
      aria-label={label} 
      onPointerEnter={handleEnter} 
      onPointerLeave={handleLeave}
    >

    <figure className={cardClassNames}>
      <div className={S.wrapper}>
        <img src={images.src} alt="" />
      </div>
      <p ref={titleRef}>{label}</p>
      <img className={S.character} src={images.character} alt="" />
    </figure>

    </a>
  )
}
export default CardItem