import type { FC, ReactNode } from 'react'
import './styles.css'

interface Props {
  children: ReactNode
  classNames?: string
  disabled?: boolean
  type?: 'submit' | 'button'
  handleClick?: () => void
}

const Button: FC<Props> = ({
  children,
  disabled = false,
  classNames = 'button--primary button-text--primary',
  type = 'button',
  handleClick,
}) => {
  return (
    <button
      type={type}
      className={`${classNames} ${disabled ? 'button--disabled' : ''}`}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button
