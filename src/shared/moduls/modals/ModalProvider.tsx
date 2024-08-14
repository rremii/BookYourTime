import { FC, PropsWithChildren, useReducer } from 'react'
import { initialState, ModalContext, ModalReducer } from './modalStore'

interface Props extends PropsWithChildren {}

export const ModalProvider: FC<Props> = ({ children }) => {
  const [modalState, dispatch] = useReducer(ModalReducer, initialState)

  return (
    <ModalContext.Provider value={{ modals: modalState.modals, dispatch }}>
      {modalState.modals.map(({ modal: Modal, name, isOpen, props }) => {
        return <Modal key={name} name={name} isOpen={isOpen} {...props} />
      })}

      {children}
    </ModalContext.Provider>
  )
}
