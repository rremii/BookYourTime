import { PropsWithChildren } from 'react'
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native'
import { BtnType } from './types'
import { getStyles } from './getStyles'

interface Props extends PropsWithChildren {
  onPress?: () => void
  pressed?: boolean
  btnStyles?: StyleProp<ViewStyle>
  textStyles?: StyleProp<TextStyle>
  type: BtnType
}

export const UIButton = ({
  onPress,
  children,
  btnStyles,
  textStyles,
  type,
  pressed,
}: Props) => {
  const styles = getStyles(type, { pressed })
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, btnStyles]}>
      <Text style={[styles.text, textStyles]}>{children}</Text>
    </TouchableOpacity>
  )
}
