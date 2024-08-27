import { dangerBtnStyles, filledBtnStyles, simpleBtnStyles } from './styles'
import { BtnType } from './types'

export const getStyles = (type: BtnType) => {
  switch (type) {
    case 'simple':
      return simpleBtnStyles
    case 'danger':
      return dangerBtnStyles
    case 'filled':
      return filledBtnStyles
    default:
      return simpleBtnStyles
  }
}
