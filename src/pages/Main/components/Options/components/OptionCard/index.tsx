import type { FC, ReactNode } from 'react'
import './styles.css'

interface Props {
  title: string
  icon: ReactNode
}

const OptionCard: FC<Props> = ({ title, icon }) => {
  return (
    <div className='option-card__container'>
      <div className='option-card__container__icon'>{icon}</div>
      <h5 className='option-card__container__title'>{title}</h5>
      <div className='option-card__container__divider' />
      <p className='option-card__container__description'>Рыба текст</p>
    </div>
  )
}

export default OptionCard
