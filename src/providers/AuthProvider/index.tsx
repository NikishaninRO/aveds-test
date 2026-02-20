import ModalWindow from '@/components/ModalWindow'
import { useState, type FC, type ReactNode } from 'react'
import { authContext, type User } from './context'
import SignInForm, { type SignInFormState } from '@/components/SignInForm'
import { useNavigate } from 'react-router'

interface Props {
  children: ReactNode
}

const AuthProvider: FC<Props> = ({ children }) => {
  const navigate = useNavigate()
  const storageUser =
    localStorage.getItem('user') || sessionStorage.getItem('user')
  const [currentUser, setCurrentUser] = useState<User | undefined>(
    storageUser && JSON.parse(storageUser)
  )
  const [showModal, setShowModal] = useState<boolean>(false)

  const toggleModal = () => setShowModal(!showModal)

  const signIn = (formState: SignInFormState, token: string) => {
    const storage = formState.rememberMe ? localStorage : sessionStorage
    storage.setItem(
      'user',
      JSON.stringify({
        token: token,
        name: formState.name,
        rememberMe: formState.rememberMe,
      })
    )
    setCurrentUser({ name: formState.name })
  }

  const signOut = () => {
    localStorage.removeItem('user')
    sessionStorage.removeItem('user')
    setCurrentUser(undefined)
    navigate('/')
  }

  return (
    <authContext.Provider
      value={{
        user: currentUser,
        toggleSignInForm: toggleModal,
        signIn,
        signOut,
      }}
    >
      {children}
      <ModalWindow isOpen={showModal} toogleModal={toggleModal}>
        <SignInForm />
      </ModalWindow>
    </authContext.Provider>
  )
}

export default AuthProvider
