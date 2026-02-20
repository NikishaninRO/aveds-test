import type { SignInFormState } from '@/components/SignInForm'
import { HttpResponse, http, type HttpResponseResolver } from 'msw'

const signInResolver: HttpResponseResolver = async ({ request }) => {
  const formData = (await request.json()) as SignInFormState
  if (
    formData.name === import.meta.env.VITE_TEST_USER_NAME &&
    formData.password === import.meta.env.VITE_TEST_USER_PASSWORD
  ) {
    const token = 'qwerty'
    return HttpResponse.json({ token }, { status: 201 })
  }

  return HttpResponse.json(
    { error: 'Неправильный логин или пароль' },
    { status: 401 }
  )
}

export const signInHandler = http.post('/signin', signInResolver)
