import type { FC, ReactNode } from 'react'
import './styles.css'

interface Props {
  children: ReactNode
  classNames?: string
}

const Button: FC<Props> = ({
  children,
  classNames = 'button--primary button-text--primary',
}) => {
  return <button className={classNames}>{children}</button>
}

export default Button
