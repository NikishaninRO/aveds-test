import type { FC } from 'react'
import './styles.css'
import Button from '@/components/Button'
import { Link } from 'react-router'

const UserBoard: FC = () => {
  return (
    <div>
      <h1 className='user-board__title'>
        Место для получения медицинской помощи
      </h1>
      <div className='user-board__actions'>
        <Button>Войти</Button>
        <Link to='/contacts'>
          <Button classNames='button--secondary button-text--primary'>
            Контакты
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default UserBoard
