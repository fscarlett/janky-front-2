import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import './styles/globals.css'

import App from './App.tsx'
import LoginPage from './pages/Login.tsx'
import Instructions from './pages/Instructions.tsx'
import Play from './pages/Play.tsx'
import Credits from './pages/Credits.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/play' element={<Play />} />
        <Route path='/credits' element={<Credits />} />
        <Route path='/instructions' element={<Instructions />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
