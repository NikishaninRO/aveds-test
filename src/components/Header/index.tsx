import type { FC } from 'react'
import { Link } from 'react-router'
import LogoIcon from '@/assets/icons/logo.svg?react'
import Button from '../Button'
import './styles.css'

const Header: FC = () => {
  return (
    <header className='header__container'>
      <LogoIcon className='logo' />
      <div className='header__container__right'>
        <Link to='/contacts' className='link'>
          Контакты
        </Link>
        <Button classNames='button-text--secondary button--secondary'>
          Войти
        </Button>
      </div>
    </header>
  )
}

export default Header
