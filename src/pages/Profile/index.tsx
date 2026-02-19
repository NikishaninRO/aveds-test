import type { FC } from 'react'
import { Link } from 'react-router'
import Button from '@/components/Button'
import './styles.css'

const ProfilePage: FC = () => {
  return (
    <div className='profile-page__container'>
      <h1 className='profile-page__title'>Привет, Сергей</h1>
      <div className='profile-page__actions'>
        <Button>Выйти из аккаунта</Button>
        <Link to='/contacts'>
          <Button classNames='button--secondary button-text--primary'>
            Перейти в контакты
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default ProfilePage
