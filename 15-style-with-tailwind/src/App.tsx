import Button_twMerge from './components/Button_twMerge'
import ChatCard from './components/ChatCard'
import Profile from './components/Profile'
import ProfileCard from './components/ProfileCard'
import Playground from './components/Playground'
import '/src/styles/style.css'
import Button_clsx from './components/Button_clsx'
import Button_tw from './components/Button_tw'
import Button_cva from './components/Button_cva'
import Card from './components/Card'



function App() {
  return (
    <div>
      <h1 className=' flex justify-center items-center bg-indigo-500 
      text-white px-4 py-1 text-shadow-black-500 text-shadow-xs'>hello tailwind</h1>

      {/* <Playground/> */}
      <hr className='my-5' />

      <ChatCard />
      <hr className='my-5' />

      <ProfileCard />
      <hr className='my-5' />

      <Profile />
      <hr className='my-5' />

      <Button_twMerge type="primary" className='bg-red-500'>Call To Action</Button_twMerge>
      <hr className='my-5' />

      <Button_clsx size='sm' className='bg-rose-300'>Call To Action</Button_clsx>
      <hr className='my-5' />

      {/* 불린값 프로퍼티는 값 없이 키만 전달하면 true가 전달된다 ex. disabled */}
      <Button_tw className='bg-emerald-500' size='lg' disabled >Call To Action</Button_tw>
      <hr className='my-5' />


      <Button_cva intent='secondary' size="lg" disabled block className='bg-indigo-500' loading={false} >Call To Action</Button_cva>
      <hr className='my-5' />


      <Button_cva intent='primary' size="lg" disabled block className='text-6xl' loading >Call To Action</Button_cva>
      <hr className='my-5' />


      <Button_cva>Call To Action</Button_cva>

      <Card
        type='primary'
        logoSrc='Facebook'
        rate='$120/hr'
        title='Senior UI Developer'
        company='Facebook'
      />
      <Card
        type='secondary'
        logoSrc='Google'
        rate='$120/hr'
        title='Senior Data Engineer'
        company='Google'
      />
      <Card
        type='tertiary'
        logoSrc='Airbnb'
        rate='$120/hr'
        title='Senior UX Designer'
        company='Airbnb'
        className='max-w-[400px]'
      />
      {/* <Card
        type='primary'
        logoSrc='/Facebook.svg'
        rate='$120/hr'
        title='Senior UI Developer'
      />
      <Card
        type='secondary'
        logoSrc='/Airbnb.svg'
        rate='$120/hr'
        title='Senior UI Developer'
      />
      <Card
        type='tertiary'
        logoSrc='/Google.svg'
        rate='$120/hr'
        title='Senior UI Developer'
      /> */}


    </div>
  )
}
export default App