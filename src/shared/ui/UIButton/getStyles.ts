import {
  BtnStylesParams,
  getDangerBtnStyles,
  getFilledBtnStyles,
  getSimpleBtnStyles,
} from './styles'
import { BtnType } from './types'

export const getStyles = (type: BtnType, styleParams: BtnStylesParams) => {
  switch (type) {
    case 'simple':
      return getSimpleBtnStyles(styleParams)
    case 'danger':
      return getDangerBtnStyles(styleParams)
    case 'filled':
      return getFilledBtnStyles(styleParams)
    default:
      return getSimpleBtnStyles(styleParams)
  }
}
