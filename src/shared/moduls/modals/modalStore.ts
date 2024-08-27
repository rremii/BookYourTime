import { createContext } from 'react'
import {
  AddModalAction,
  CloseModalAction,
  IModal,
  ModalAction,
  ModalNames,
  RegisterModal,
  RemoveModalAction,
} from './types'

interface InitialState {
  modals: IModal[]
}

export const initialState: InitialState = {
  modals: [],
}

export const ModalDispatchContext = createContext<React.Dispatch<ModalAction>>(
  () => {},
)
export const ModalContext = createContext<
  InitialState & { dispatch: React.Dispatch<ModalAction> }
>({ modals: [], dispatch: (action: ModalAction) => {} })

export const ModalReducer = (
  state: InitialState,
  action: ModalAction,
): InitialState => {
  switch (action.type) {
    case 'add': {
      const { modal, name, props } = action.payload

      if (state.modals.find((modal) => modal.name === name)) return state

      return {
        ...state,
        modals: [...state.modals, { modal, name, isOpen: true, props }],
      }
    }

    case 'close':
      return {
        ...state,
        modals: state.modals.map((modal) => {
          if (modal.name === action.payload) {
            return { ...modal, isOpen: false }
          }
          return modal
        }),
      }
    case 'remove':
      return {
        ...state,
        modals: state.modals.filter((modal) => modal.name !== action.payload),
      }
    default:
      return state
  }
}

export function addModal<PropsType>(
  payload: RegisterModal<PropsType>,
): AddModalAction<PropsType> {
  return {
    type: 'add',
    payload,
  }
}

export const closeModal = (payload: ModalNames): CloseModalAction => ({
  type: 'close',
  payload,
})

export const removeModal = (payload: ModalNames): RemoveModalAction => ({
  type: 'remove',
  payload,
})
