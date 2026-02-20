import type { FC } from 'react'
import { Outlet } from 'react-router'
import Header from '../Header'
import './styles.css'

const MainTemplate: FC = () => {
  return (
    <>
      <Header />
      <div className='main-template__container'>
        <Outlet />
      </div>
    </>
  )
}

export default MainTemplate
