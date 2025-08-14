function ProfileCard() {
  return (
    // 모바일 기준이라 점점더 커지는 형태로 기준이 잡혀있다
    // 커지면 sm 붙은걸로 적용
    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 sm:py-4 
    gap-2 p-[32px] bg-[#fff9c6] rounded-xl m-5 min-w-[200px]">
      <img className="size-30 mx-auto block rounded-full sm:mx-0 sm:shrink-0" src="/visual.jpg" alt="프로필" />
      <div className="space-y-2 text-center sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg font-semibold text-black">퐝당</p>
          <p className="font-medium text-gray-500">Home Protector</p>
        </div>
        <button className="animate-bounce transition border-purple-200  text-purple-600 outline-1 px-3 py-1 rounded-full
                            hover:text-white hover:bg-purple-800 cursor-pointer"
        >Message</button>
      </div>
    </div>
  )
}
export default ProfileCard