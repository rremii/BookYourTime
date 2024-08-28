import { BtnParams } from '@shared/ui/UIButton/types'
import { FC } from 'react'
import { StyleSheet, TouchableOpacity, Text, ActivityIndicator } from 'react-native'


export interface DangerBtnProps extends BtnParams {
  withSpinner?:boolean
  mainColor?:string
  activeColor?:string
  subColor?:string
}

type StyleParams = {
  pressed?: boolean
  mainColor?: string
  activeColor?: string
  subColor?: string
}

export const DangerBtn: FC<DangerBtnProps> = ({
  pressed,
  btnStyles,
  onPress,
  textStyles,
  children,
  withSpinner = false,
  ...colors
}) => {
  const styles = getStyles({ pressed, ...colors })
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, btnStyles]}>
      {withSpinner && pressed ? (
        <ActivityIndicator size='small' animating={true} color={colors.subColor}/>
      ): (
        <Text style={[styles.text, textStyles]}>{children}</Text>
      )}
    </TouchableOpacity>
  )
}

const getStyles = ({ pressed, activeColor, mainColor, subColor }: StyleParams) =>
  StyleSheet.create({
    btn: {
      backgroundColor: pressed ? activeColor : mainColor,
      borderRadius: 10,
      padding: 25,
      paddingTop: 7,
      justifyContent: 'center',

      paddingBottom: 7,
    },
    text: {
      textAlign: 'center',
      fontSize: 15,
      fontWeight: '500',
      color: subColor,
    },
  })
