
import { BtnParams } from '@shared/ui/UIButton/types'
import { FC, useState } from 'react'
import {
  StyleSheet,
  Text,
  ActivityIndicator,
  LayoutChangeEvent,
  Pressable,
} from 'react-native'

export interface FilledBtnProps extends BtnParams {
  pending?:boolean
  withSpinner?:boolean
  mainColor?:string
  activeColor?:string
  subColor?:string
}

type StyleParams = {
  pending?: boolean
  mainColor?: string
  activeColor?: string
  subColor?:string
}

export const FilledBtn: FC<FilledBtnProps> = ({
  pending,
  btnStyles,
  onPress,
  textStyles,
  children,
  withSpinner = false,
  mainColor = '#0A8537',
  activeColor = '#12e35f',
  subColor = '#fff',
}) => {
  const styles = getStyles({ pending, mainColor, activeColor, subColor })

  const [contentWidth, setContentWidth] = useState(0)

  const onLayout = (e: LayoutChangeEvent) => {
    if (contentWidth) return
    setContentWidth(e.nativeEvent.layout.width)
  }

  return (
    <Pressable
      disabled={pending}
      onPress={onPress}
      style={[styles.btn, btnStyles]}
    >
      {withSpinner && pending ? (
        <ActivityIndicator size="small" animating={true} color={subColor} />
      ) : (
        <Text onLayout={onLayout} style={[styles.text, textStyles]}>
          {children}
        </Text>
      )}
    </Pressable>
  )
}

const getStyles = ({ pending, activeColor, mainColor, subColor }: StyleParams) =>
  StyleSheet.create({
    btn: {
      backgroundColor: pending ? activeColor : mainColor,
      borderRadius: 10,
      padding: 25,
      paddingTop: 7,
      paddingBottom: 7,
      justifyContent: 'center',
    },
    text: {
      textAlign: 'center',
      fontSize: 15,
      fontWeight: '500',
      color: subColor
    },
  })
