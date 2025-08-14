
const data = [
  {id:1,src:'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  {id:2,src:'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  {id:3,src:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'},
  {id:4,src:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  {id:5,src:'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
]

function Profile() {
  return (
    <div className="flex flex-col items-center outline-1 outline-white m-3 p-3">
      <h3 className="text-white text-2xl mb-3 flex justify-center" >접속중인 사용자</h3>
      {/* inline block이랑 block 차이및 통하지 않는 css 알아보기 */}
      <div className="flex -space-x-2">
        {
          data.map(({id, src})=>(
            <img  
            key={id} 
            src={src} alt="프로필" 
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            />
          ))
        }
      </div>
      <div className="group">
        <div className="transition group-hover:translate-x-11 text-white">text box</div>
      </div>
      {/* group/별칭 */}
      <div className="group/card">
        <div className="transition group-hover/card:translate-x-11 text-white">text box</div>
      </div>
    </div>
  )
}
export default Profile