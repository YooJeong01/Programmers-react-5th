import { animate } from 'motion'
import S from '../style.module.css'
import { useRef } from 'react'
import { motion } from 'framer-motion';
function AnimationDemo() {
  const lollipopRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLOutputElement>(null);

  const handleMoveAnimation = () => {
    const {current:element} = lollipopRef;
    if(!element) return;
    animate(element, {y:-100, x:400, rotate:360*7}, {duration:4})
    // await animate(element, {y:-100, x:400, rotate:360*7}, {duration:4})
    // animate(element, {y:100, x:0, rotate:-360*7}, {duration:4})
  }

  const handleProgressAnimation = () => {
    const {current:element} = progressRef;
    animate(0, 100, {
      duration:4,
      onUpdate: latest => element!.value = Math.round(latest) + '%'
    })
  }



  return (
    <div className={S.animation}>
      <button 
        className={S.button} 
        type='button'
        onClick={handleMoveAnimation}
      >무빙 애니메이션</button>

      <figure ref={lollipopRef} className={S.lollipop}></figure>
      <hr />
      <motion.figure 
        ref={lollipopRef} 
        className={S.lollipop}
        animate={{scale:2, x:100, rotate:-360}}
        transition={{type:'spring'}}
        onUpdate={latest => console.log(latest)}
        // 종료된 시점에 다른 어떠한 콜백을 처리해야할때
        onAnimationComplete={() => console.log('complete')}
        // 마우스를 hover하는동안 어떤 걸 하겠다
        whileHover={{scale:1.2}}
        // 드래그해서 옮길 수 있다
        drag
        // 드래그 가능 영역을 제한할 수 있다
        dragConstraints={{left:0, right:300}}
      />

      <div className={S.wrapper}>
        <button type="button" className={S.button} onClick={handleProgressAnimation}>진행률 애니메이션</button>
        <output ref={progressRef} className={S.output}>0%</output>
      
      </div>

    </div>
  )
}
export default AnimationDemo