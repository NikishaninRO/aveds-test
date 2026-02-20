import { Field, Form } from 'react-final-form'
import Button from '../Button'
import { FORM_ERROR } from 'final-form'
import { authContext } from '@/providers/AuthProvider/context'
import { useContext } from 'react'
import { NAME_FIELD_LENGTH_MIN, PASSWORD_FIELD_LENGTH_MIN } from './constants'
import './styles.css'

export interface SignInFormState {
  name: string
  password: string
  rememberMe: boolean
}

const SignInForm = () => {
  const { signIn, toggleSignInForm } = useContext(authContext)

  const handleSubmit = async (values: SignInFormState) => {
    const response = await fetch('/signin', {
      method: 'POST',
      body: JSON.stringify(values),
    })
    const json = await response.json()
    if (response.status === 201) {
      signIn(values, json.token)
      toggleSignInForm()
    } else {
      return { [FORM_ERROR]: json.error }
    }
  }

  return (
    <Form<SignInFormState>
      onSubmit={handleSubmit}
      render={({ handleSubmit, submitErrors, dirtySinceLastSubmit }) => (
        <form className='signin-form__container' onSubmit={handleSubmit}>
          <Field
            name='name'
            render={({ input }) => (
              <div className='signin-form__container__field'>
                <label className='signin-form__container__label'>Имя: </label>
                <input
                  {...input}
                  className={`signin-form__container__input ${
                    submitErrors ? 'signin-form__container__input--error' : ''
                  } `}
                  minLength={NAME_FIELD_LENGTH_MIN}
                />
              </div>
            )}
          />
          <Field
            name='password'
            render={({ input }) => (
              <div className='signin-form__container__field'>
                <label className='signin-form__container__label'>Пароль:</label>
                <input
                  {...input}
                  className={`signin-form__container__input ${
                    submitErrors ? 'signin-form__container__input--error' : ''
                  } `}
                  minLength={PASSWORD_FIELD_LENGTH_MIN}
                />
              </div>
            )}
          />
          <Field
            name='rememberMe'
            type='checkbox'
            render={({ input }) => (
              <div className='signin-form__container__field'>
                <label>Запомнить меня</label>
                <input type='checkbox' {...input} />
              </div>
            )}
          />
          <Button
            type='submit'
            disabled={submitErrors != null && !dirtySinceLastSubmit}
          >
            Войти
          </Button>
          {submitErrors ? (
            <span className='signin-form__container__error'>
              {submitErrors?.[FORM_ERROR]}
            </span>
          ) : null}
        </form>
      )}
    />
  )
}

export default SignInForm
