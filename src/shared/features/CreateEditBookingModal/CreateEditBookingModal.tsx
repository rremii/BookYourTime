import { ModalProps } from '@shared/moduls/modals/types'
import { useModal } from '@shared/moduls/modals/useModal'
import { Overlay } from '@shared/ui/Overlay'
import { useAnimatedValue } from '@shared/utils/useAnimatedValue'
import React, { useState } from 'react'
import {
  Animated,
  Dimensions,
  LayoutChangeEvent,
  ScrollView,
  StyleSheet,
} from 'react-native'

import { HostInfo } from './ui/HostInfo'
import { BookingForm } from './ui/BookingForm'
import { Header } from './ui/Header'
import { ClientInfo } from './ui/ClientInfo'
import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'

export type BookingModalType = 'create' | 'edit'
export type UserType = 'client' | 'host'

interface Props extends ModalProps {
  type: BookingModalType
  userType: UserType
}

export const CreateEditBookingModal = ({ isOpen, type, userType }: Props) => {
  const { colors } = useTheme()
  const styles = getStyles(colors)

  const { closeModal } = useModal()

  const [modalHeight, setModalHeight] = useState(
    Dimensions.get('screen').height * 0.7, // approximate
  )

  const slideAnim = useAnimatedValue({
    initValue: modalHeight,
    isActive: isOpen,
    active: {
      value: 0,
    },
    inactive: {
      value: modalHeight,
    },
  })

  const close = () => {
    closeModal('CreateEditBooking')
  }
  const onLayout = (e: LayoutChangeEvent) => {
    setModalHeight(+e.nativeEvent.layout.height)
  }
  return (
    <>
      <Overlay
        onPress={close}
        isActive={isOpen}
        backgroundColor={colors.bcColor_overlay}
      />
      <Animated.View
        onLayout={onLayout}
        style={[
          styles.container,
          { transform: [{ translateY: slideAnim }] },
        ]}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Header type={type} />

          {userType === 'client' ? <ClientInfo /> : <HostInfo />}

          <BookingForm type={type} />
        </ScrollView>
      </Animated.View>
    </>
  )
}

const getStyles = (colors: Theme) => StyleSheet.create({
  container: {
    padding: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: 1,
    transform: [{ translateY: 0 }],
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    backgroundColor: colors.bcColor_standart_container
  },
  scrollContainer: {
    gap: 15,
  },
})
