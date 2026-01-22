import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

import './styles/globals.css'

import App from './App.tsx'
import LoginPage from './pages/Login.tsx'
import Instructions from './pages/Instructions.tsx'
import Play from './pages/Play.tsx'
import Credits from './pages/Credits.tsx'
import NotFound from './pages/NotFound.tsx'
import { Layout } from './components/Layout.tsx'
import Places from './pages/Places.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/play' element={<Play />} />
            <Route path='/credits' element={<Credits />} />
            <Route path='/instructions' element={<Instructions />} />
            <Route path='/places/:place' element={<Places />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>,
)
