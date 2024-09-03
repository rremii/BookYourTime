import { FC } from 'react'

export type ModalNames =
  | 'SearchFilters'
  | 'CreateEditBooking'
  | 'Toast'
  | 'TimeRangePicker'
  | 'BookingPreview'
  | 'ProfileSettings'
  | 'ThemePicker'
  | 'PickerFromButton'

export interface IModal {
  isOpen: boolean
  modal: FC<ModalProps>
  name: ModalNames
  props: any // TODO: fix some how
}

export interface ModalProps {
  name: ModalNames
  isOpen: boolean
}

type Action<T, P> = {
  type: T
  payload: P
}

export interface RegisterModal<PropsType> {
  modal: FC<PropsType & ModalProps>
  name: ModalNames
  duration?: number
  props?: PropsType
}
export type AddModalAction<PropsType> = Action<'add', RegisterModal<PropsType>>
export type RemoveModalAction = Action<'remove', ModalNames>
export type CloseModalAction = Action<'close', ModalNames>

export type ModalAction =
  | AddModalAction<any> // TODO: fix some how
  | CloseModalAction
  | RemoveModalAction
