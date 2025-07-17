import { useEffect, useRef } from 'react'
import S from './Home.module.css'
import gsap from 'gsap'


function Home() {

  const textRef = useRef<HTMLDivElement>(null);

  
  useEffect(()=>{
    if(textRef.current){
      // textRef.current.children은 유사배열임
      gsap.fromTo(textRef.current.children,{
        // 처음 위치
        x:40,
        opacity:0
      },{
        // 최종 도착 위치
        x:0,
        opacity:1,
        stagger:0.3,
      })
    }
  })


  return (
    <div className={S.container}>
      <div ref={textRef}>
        <h2><strong>2.9cm</strong> is</h2>
        <span>everything</span>
      </div>

      <video src="/visual.mp4" muted loop playsInline></video>
    </div>
  )
}
export default Home