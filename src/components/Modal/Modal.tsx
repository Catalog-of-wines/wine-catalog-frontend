import { FC } from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.scss';
import { Close } from '../icons';
import classNames from 'classnames';


interface Props {
  open: boolean
  size?: 'sm' | 'md' | 'lg';
  onClose?: () => void
  children?: JSX.Element | undefined
  closeOnOutclick?: boolean
  loading?: boolean
}

const Modal: FC<Props> = ({
  children,
  open,
  onClose,
  size = 'md',
  closeOnOutclick = true,
  loading = false,
}) => {
  const contentClassName = classNames(
    styles.content,
    styles[size],
  )

  const renderedChild = (
    <div className={styles.modal}>
      <span
        className={styles.bg}
        onClick={() => {
          if (closeOnOutclick && !loading) {
            onClose?.()
          }
        }}
      />
      <div className={contentClassName}>
        {onClose && (
          <span className={styles.close} onClick={onClose}>
            <Close />
          </span>
        )}
        {children}
      </div>
    </div>
  )

  if (open && typeof document !== 'undefined' && document.body) {
    return createPortal(renderedChild, document.body)
  }

  return null
}

export default Modal
