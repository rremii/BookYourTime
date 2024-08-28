import { PropsWithChildren } from 'react'
import { ViewStyle } from 'react-native'
import { SimpleBtnProps } from './buttons/filledBtn/simpleBtn/SimpleBtn'
import { FilledBtnProps } from './buttons/filledBtn/filledBtn/FilledBtn'
import { DangerBtnProps } from './buttons/filledBtn/dangerBtn/DangerBtn'

export type BtnType = 'simple' | 'danger' | 'filled'

interface BtnStyles extends ViewStyle {
  backgroundColor?: never
  color?: never
}

interface TextStyles extends ViewStyle {
  backgroundColor?: never
  color?: never
}
export interface BtnParams extends PropsWithChildren {
  onPress?: () => void
  btnStyles?: BtnStyles
  textStyles?: TextStyles
  pressed?: boolean
}

type BtnParamsWithType<
  Type extends BtnType,
  BtnProps extends BtnParams,
> = BtnProps & {
  type: Type
}

export type UIBtnProps =
  | BtnParamsWithType<'simple', SimpleBtnProps>
  | BtnParamsWithType<'filled', FilledBtnProps>
  | BtnParamsWithType<'danger', DangerBtnProps>
