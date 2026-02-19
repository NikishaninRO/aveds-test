import type { FC } from 'react'
import UserBoard from './components/UserBoard'
import Options from './components/Options'
import './styles.css'

const MainPage: FC = () => {
  return (
    <div className='main-page__container'>
      <UserBoard />
      <Options />
    </div>
  )
}

export default MainPage
