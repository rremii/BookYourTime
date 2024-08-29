
import { BtnParams } from '@shared/ui/UIButton/types'
import { FC, useState } from 'react'
import {
  StyleSheet,
  Text,
  ActivityIndicator,
  LayoutChangeEvent,
  Pressable,
} from 'react-native'

export interface DangerBtnProps extends BtnParams {
  pending?: boolean
  withSpinner?:boolean
  mainColor?:string
  activeColor?:string
  subColor?:string
}

type StyleParams = {
  pending?: boolean
  mainColor?: string
  activeColor?: string
  subColor?: string
}

export const DangerBtn: FC<DangerBtnProps> = ({
  pending,
  btnStyles,
  onPress,
  textStyles,
  children,
  withSpinner = false,
  activeColor = '#eb4d6a',
  mainColor = '#bc1736',
  subColor = '#fff',
}) => {
  const [contentWidth, setContentWidth] = useState(0)

  const styles = getStyles({ pending, activeColor, mainColor, subColor })

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
        <ActivityIndicator
          style={{
            width: contentWidth ? contentWidth : undefined,
          }}
          size="small"
          animating={true}
          color={subColor}
        />
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
      color: subColor,
    },
  })
