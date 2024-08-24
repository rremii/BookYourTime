import CheckMarkIcon from '@icons/check-mark.svg'
import WarnIcon from '@icons/warn.svg'
import { useAnimatedValue } from '@shared/utils/useAnimatedValue'
import { ModalProps } from '@shared/moduls/modals/types'
import React, { FC, ReactNode, useState } from 'react'
import { Animated, LayoutChangeEvent, StyleSheet, Text } from 'react-native'
import { useTheme } from '@shared/moduls/theme'

export type ToastType = 'error' | 'warn'

interface Props extends ModalProps {
  type: ToastType
  children: ReactNode
}

export const Toast: FC<Props> = ({ children, type, isOpen }) => {
  const { colors } = useTheme()
  const [toastWidth, setToastWidth] = useState<number>(0)

  const slideAnim = useAnimatedValue({
    isActive: isOpen,
    initValue: 100,
    active: {
      value: 0,
      delay: 100,
    },
    inactive: {
      value: 100,
    },
  })

  const onLayout = (event: LayoutChangeEvent) => {
    setToastWidth(event.nativeEvent.layout.width)
  }
  return (
    <Animated.View
      onLayout={onLayout}
      style={[
        styles.toast,
        {
          backgroundColor:
            type === 'error'
              ? colors.bcColor_toast_error
              : colors.bcColor_toast,
          transform: [
            { translateY: slideAnim },
            { translateX: -toastWidth / 2 },
          ],
        },
      ]}
    >
      {type === 'error' ? (
        <WarnIcon color={colors.color_warn_icon} width={25} height={25} />
      ) : (
        <CheckMarkIcon fill={colors.color_fill_icon} width={25} height={25} />
      )}
      <Text style={[styles.text, { color: colors.color_toast_text }]}>
        {children}
      </Text>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  toast: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    bottom: 20,
    borderRadius: 20,
    position: 'absolute',
    left: '50%',
    zIndex: 100,
  },

  text: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
  },
})
