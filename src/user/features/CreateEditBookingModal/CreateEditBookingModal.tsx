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

import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'
import { useDeleteBooking } from '@user/entities/booking/model/useDeleteBooking'
import { useUpdateBooking } from '@user/entities/booking/model/useUpdateBooking'
import { Header } from '@shared/features/CreateEditBookingModal/ui/Header'
import { HostInfo } from '@user/features/CreateEditBookingModal/HostInfo'
import { BookingForm } from '@shared/features/CreateEditBookingModal/ui/BookingForm'
import { useGetBooking } from '@user/entities/booking/model/useGetBooking'
import { useGetHost } from '@user/entities/host/model/useGetHost'
import { useCreateBooking } from '@user/entities/booking/model/useCreateBooking'
import { BookingInfoDto } from '@shared/features/CreateEditBookingModal/types'

export type BookingModalType = 'create' | 'edit'

interface Props extends ModalProps {
  type: BookingModalType
  hostId: string
  bookingId?: string
}

export const CreateEditBookingModal = ({
  isOpen,
  type,
  hostId,
  bookingId,
}: Props) => {
  const { colors } = useTheme()
  const { closeModal } = useModal()
  const { host } = useGetHost(hostId)
  const { booking } = useGetBooking(bookingId)
  const { deleteBooking, isPending: deleting } = useDeleteBooking()
  const { updateBooking, isPending: updating } = useUpdateBooking()
  const { createBooking, isPending: creating } = useCreateBooking()

  const handleDelete = () => {
    if (!bookingId) return
    deleteBooking(bookingId)
    close()
  }
  const update = (bookingInfo: BookingInfoDto) => {
    if (!bookingId) return

    updateBooking({
      id: bookingId,
      ...bookingInfo,
    })

    close()
  }
  const create = (bookingInfo: BookingInfoDto) => {
    createBooking({
      hostId,
      ...bookingInfo,
    })
    close()
  }
  const cancel = () => close()

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
  const styles = getStyles(colors)
  return (
    <>
      <Overlay
        onPress={close}
        isActive={isOpen}
        backgroundColor={colors.bcColor_overlay}
      />
      <Animated.View
        onLayout={onLayout}
        style={[styles.container, { transform: [{ translateY: slideAnim }] }]}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Header type={type} />

          <HostInfo hostInfo={host} />

          <BookingForm
            type={type}
            deleting={deleting}
            updating={updating}
            creating={creating}
            onCancel={cancel}
            onCreate={create}
            onUpdate={update}
            onDelete={handleDelete}
            booking={booking}
          />
        </ScrollView>
      </Animated.View>
    </>
  )
}

const getStyles = (colors: Theme) =>
  StyleSheet.create({
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
      backgroundColor: colors.bcColor_standart_container,
    },
    scrollContainer: {
      gap: 15,
    },
  })
