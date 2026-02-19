import type { FC, ReactNode } from 'react'
import HeartIcon from '@/assets/icons/heart.svg?react'
import ToolIcon from '@/assets/icons/tool.svg?react'
import ReportIcon from '@/assets/icons/report.svg?react'
import OptionCard from './components/OptionCard'
import './styles.css'

interface Option {
  title: string
  icon: ReactNode
}

const options: Option[] = [
  { title: 'Онлайн-прием', icon: <HeartIcon /> },
  { title: 'Экстренный Случай', icon: <ToolIcon /> },
  { title: 'Лечение рака', icon: <ReportIcon /> },
]
const Options: FC = () => {
  return (
    <div className='options__container'>
      {options.map((option) => (
        <OptionCard key={option.title} {...option} />
      ))}
    </div>
  )
}

export default Options
