/// <reference types="vite-plugin-svgr/client" />
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import MainTemplate from './components/MainTemplate/index.tsx'
import MainPage from './pages/Main/index.tsx'
import ContactsPage from './pages/Contacts/index.tsx'
import './index.css'
import ProfilePage from './pages/Profile/index.tsx'

async function enableMocking() {
  if (import.meta.env.VITE_NODE_ENV === 'development') {
    const { worker } = await import('./msw')
    return worker.start()
  }
}

const rootElement = createRoot(document.getElementById('root')!)

if (!rootElement) {
  throw new Error(`Не найден корневой Dom элемент`)
}

enableMocking().then(() => {
  rootElement.render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route element={<MainTemplate />}>
            <Route path='/' element={<MainPage />} />
            <Route path='/contacts' element={<ContactsPage />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
})
