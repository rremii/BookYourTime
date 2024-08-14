import CheckMarkIcon from '@icons/check-mark.svg'
import WarnIcon from '@icons/warn.svg'
import { useAnimatedValue } from '@shared/utils/useAnimatedValue'
import { ModalProps } from '@shared/moduls/modals/types'
import React from 'react'
import { FC, ReactNode, useState } from 'react'
import { Animated, LayoutChangeEvent, View } from 'react-native'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native'

export type ToastType = 'error' | 'warn'

interface Props extends ModalProps {
  type: ToastType
  children: ReactNode
}

export const Toast: FC<Props> = ({ children, type, isOpen }) => {
  const [toastWidth, setToastWidth] = useState<number>(0)

  const slideAnim = useAnimatedValue({
    isActive: isOpen,
    initValue: 100,
    active: {
      value: 0,
      delay: 100,
    },
    inActive: {
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
          backgroundColor: type === 'error' ? '#ed1245' : 'black',
          transform: [
            { translateY: slideAnim },
            { translateX: -toastWidth / 2 },
          ],
        },
      ]}
    >
      {type === 'error' ? (
        <WarnIcon color={'#fff'} width={25} height={25} />
      ) : (
        <CheckMarkIcon fill={'black'} width={25} height={25} />
      )}
      <Text style={styles.text}>{children}</Text>
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
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
  },
})
