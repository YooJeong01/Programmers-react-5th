import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AvatarList from './pages/AvatarList';
import './styles/main.css'
// import './index.css'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AvatarList/>
  </StrictMode>,
)
