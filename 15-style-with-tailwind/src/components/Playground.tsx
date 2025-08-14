function Playground() {
  return (
    <div>
      {/* sm보다 화면 사이즈가 커지면 색상이 red-400으로 바뀐다. 미디어 쿼리처럼 */}
      <div className="bg-gray-950 sm:bg-red-400 text-mint-500 px-l py-m">playground</div>
      <a href="#">links</a>
      <h1>h1</h1>
      <h2>h2</h2>
      <h3 className="highlight">h3</h3>

      <div className="_card">
        <h2>title</h2>
        <button>CTA</button>
      </div>

      <hr className="m-5"/>

      <button 
        type="button" 
        className="
          bg-sky-500 hover:bg-sky-800 
          px-4 py-2 rounded-full 
          text-white hover:text-amber-400 
          cursor-pointer" 
      >save changes</button>

    </div>
  )
}
export default Playground