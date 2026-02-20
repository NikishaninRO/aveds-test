import { useContext, type FC } from 'react'
import { Link } from 'react-router'
import LogoIcon from '@/assets/icons/logo.svg?react'
import Button from '../Button'
import { authContext } from '@/providers/AuthProvider/context'
import './styles.css'

const Header: FC = () => {
  const { user, toggleSignInForm, signOut } = useContext(authContext)

  return (
    <header className='header__container'>
      <Link to='/'>
        <LogoIcon className='header__container__logo' />
      </Link>
      <div className='header__container__right'>
        <Link to='/contacts' className='header__container__link'>
          Контакты
        </Link>
        <Button
          classNames='button-text--secondary button--secondary'
          handleClick={user != null ? signOut : toggleSignInForm}
        >
          {user != null ? 'Выйти' : 'Войти'}
        </Button>
      </div>
    </header>
  )
}

export default Header
