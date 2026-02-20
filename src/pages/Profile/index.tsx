import { useContext, type FC } from 'react'
import { Link } from 'react-router'
import Button from '@/components/Button'
import { authContext } from '@/providers/AuthProvider/context'
import './styles.css'

const ProfilePage: FC = () => {
  const { user, signOut } = useContext(authContext)

  return (
    <div className='profile-page__container'>
      <h1 className='profile-page__title'>{`Привет, ${user?.name}`}</h1>
      <div className='profile-page__actions'>
        <Button handleClick={signOut}>Выйти из аккаунта</Button>
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
