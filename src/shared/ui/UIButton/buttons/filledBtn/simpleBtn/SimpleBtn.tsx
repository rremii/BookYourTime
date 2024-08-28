import { BtnParams } from '@shared/ui/UIButton/types'
import { FC } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

type StyleParams = {
  pressed?: boolean
  mainColor?: string
  activeColor?: string
}

export interface SimpleBtnProps extends BtnParams {
  mainColor?:string
  activeColor?:string
}

export const SimpleBtn: FC<SimpleBtnProps> = ({
  pressed,
  btnStyles,
  onPress,
  textStyles,
  children,
  ...colors
}) => {
  const styles = getStyles({ pressed, ...colors })
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, btnStyles]}>
      <Text style={[styles.text, textStyles]}>{children}</Text>
    </TouchableOpacity>
  )
}

const getStyles = ({
  pressed,
  activeColor,
  mainColor,
}: StyleParams) =>
  StyleSheet.create({
    btn: {
      backgroundColor: 'transparent',
      borderRadius: 10,
      justifyContent: 'center',

      padding: 23,
      paddingTop: 6,
      paddingBottom: 6,
      borderColor: pressed ? activeColor : mainColor,
      borderWidth: 1,
    },
    text: {
      textAlign: 'center',
      color: pressed ? activeColor : mainColor,
      fontSize: 16,
      fontWeight: '500',
    },
  })
