import { BtnParams } from '@shared/ui/UIButton/types'
import { FC, useState } from 'react'
import { Text, StyleSheet, LayoutChangeEvent, Pressable } from 'react-native'

type StyleParams = {
  pending?: boolean
  mainColor?: string
  activeColor?: string
}

export interface SimpleBtnProps extends BtnParams {
  pending?:boolean
  mainColor?:string
  activeColor?:string
}

export const SimpleBtn: FC<SimpleBtnProps> = ({
  pending,
  btnStyles,
  onPress,
  textStyles,
  children,
  mainColor = '#000000',
  activeColor = '#e6e6e6',
}) => {
  const [contentWidth, setContentWidth] = useState(0)

  const onLayout = (e: LayoutChangeEvent) => {
    if (contentWidth) return
    setContentWidth(e.nativeEvent.layout.width)
  }

  const styles = getStyles({ pending, mainColor, activeColor })

  return (
    <Pressable
      disabled={pending}
      onPress={onPress}
      style={[styles.btn, btnStyles]}
      onLayout={onLayout}
    >
      <Text style={[styles.text, textStyles]}>{children}</Text>
    </Pressable>
  )
}

const getStyles = ({ pending, mainColor, activeColor }: StyleParams) =>
  StyleSheet.create({
    btn: {
      backgroundColor: 'transparent',
      borderRadius: 10,
      justifyContent: 'center',

      padding: 23,
      paddingTop: 6,
      paddingBottom: 6,
      borderColor: pending ? activeColor : mainColor,
      borderWidth: 1,
    },
    text: {
      textAlign: 'center',
      color: pending ? activeColor : mainColor,
      fontSize: 16,
      fontWeight: '500',
    },
  })
