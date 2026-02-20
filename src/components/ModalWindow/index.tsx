import type { FC, ReactNode } from 'react'
import Modal from 'react-modal'
import Button from '../Button'
import './styles.css'

interface Props {
  children: ReactNode
  isOpen: boolean
  toogleModal: () => void
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

Modal.setAppElement('#root')

const ModalWindow: FC<Props> = ({ isOpen, children, toogleModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toogleModal}
      style={customStyles}
      closeTimeoutMS={250}
    >
      <div className='close-button__container'>
        <Button
          classNames='button--primary button-text--primary close-button'
          handleClick={toogleModal}
        >
          x
        </Button>
      </div>
      {children}
    </Modal>
  )
}

export default ModalWindow
