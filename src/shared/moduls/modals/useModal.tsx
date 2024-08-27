import { useCallback, useContext, useEffect } from 'react'
import {
  addModal,
  closeModal,
  ModalContext,
  ModalDispatchContext,
  removeModal,
} from './modalStore'
import { ModalNames, RegisterModal } from './types'

export const useModal = () => {
  const dispatch = useContext(ModalDispatchContext)

  const openModal = function openModal<PropsType>({
    name,
    modal,
    props,
    duration,
  }: RegisterModal<PropsType>) {
    dispatch(addModal({ modal, name, props }))

    if (duration) {
      const timer = setTimeout(() => {
        close(name, duration)
        clearTimeout(timer)
      }, duration)
    }
  }

  const close = (name: ModalNames, removeDelay = 300) => {
    dispatch(closeModal(name))

    const timer = setTimeout(() => {
      dispatch(removeModal(name))
      clearTimeout(timer)
    }, removeDelay)
  }

  return { openModal, closeModal: close }
}
