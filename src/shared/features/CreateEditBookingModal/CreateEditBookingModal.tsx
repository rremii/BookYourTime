import { DatePicker } from '@shared/moduls/datePicker/DatePicker'
import { ModalProps } from '@shared/moduls/modals/types'
import { useModal } from '@shared/moduls/modals/useModal'
import { TimePicker } from '@shared/moduls/timePickers/ui/TimePicker'
import { Avatar } from '@shared/ui/Avatar'
import { BtnFilled } from '@shared/ui/BtnFilled'
import { BtnSimple } from '@shared/ui/BtnSimple'
import { Overlay } from '@shared/ui/Overlay'
import { useAnimatedValue } from '@shared/utils/useAnimatedValue'
import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TextInput,
  ScrollView,
  LayoutChangeEvent,
  TouchableOpacity,
} from 'react-native'

import { HostInfo } from './ui/HostInfo'
import { BookingForm } from './ui/BookingForm'
import Cross from '@icons/cross.svg'
import { Header } from './ui/Header'
import { ClientInfo } from './ui/ClientInfo'

export type BookingModalType = 'create' | 'edit'
export type UserType = 'client' | 'host'

interface Props extends ModalProps {
  type: BookingModalType
  userType: UserType
}

export const CreateEditBookingModal = ({ isOpen, type, userType }: Props) => {
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
      <Overlay onPress={close} isActive={isOpen} />
      <Animated.View
        onLayout={onLayout}
        style={[styles.container, { transform: [{ translateY: slideAnim }] }]}
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

const styles = StyleSheet.create({
  container: {
    padding: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'white',
    zIndex: 1,
    transform: [{ translateY: 0 }],
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
  },
  scrollContainer: {
    gap: 15,
  },
})
