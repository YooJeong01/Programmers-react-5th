function ScrollDown() {

    // 도착하고자 하는 엘리먼트를 선택하고, 그 지점으로 이동
    const handleScrollDown = () => {
        const el = document.querySelector('.buttonGroup') as HTMLDivElement;
        el.scrollIntoView({block:'start', behavior:'smooth'})
    }

    const handleScrollUp = () => {
        const el = document.querySelector('.NavContents') as HTMLDivElement;
        el.scrollIntoView({block:'end', behavior:'smooth'})
    }

  return (
    <div role="group" className="buttonGroup">
        <button onClick={handleScrollDown} type="button" className="scrollDown" aria-label="스크롤 다운" title="스크롤 다운">
            <svg
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            >
            <path
                d="m112 268 144 144 144-144M256 392V100"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                strokeMiterlimit={10}
                strokeWidth="48px"
            />
        </svg>
        </button>
        <button onClick={handleScrollUp} type="button" className="scrollUp" aria-label="스크롤 업" title="스크롤 업">
        <svg
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
        >
          <path
            d="m112 268 144 144 144-144M256 392V100"
            fill="none"
            stroke="currentColor"
            strokeLinecap="square"
            strokeMiterlimit={10}
            strokeWidth="48px"
          />
        </svg>
        </button>
    </div>
  )
}

export default ScrollDown