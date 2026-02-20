import type { SignInFormState } from '@/components/SignInForm'
import { createContext } from 'react'

export interface User {
  name: string
}

interface AuthContextValue {
  user?: User
  signIn: (formState: SignInFormState, token: string) => void
  signOut: () => void
  toggleSignInForm: () => void
}

export const authContext = createContext<AuthContextValue>({
  signIn: () => {},
  signOut: () => {},
  toggleSignInForm: () => {},
})
