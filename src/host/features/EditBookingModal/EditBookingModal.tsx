import {ModalProps} from '@shared/moduls/modals/types'
import {useModal} from '@shared/moduls/modals/useModal'
import {Overlay} from '@shared/ui/Overlay'
import {useAnimatedValue} from '@shared/utils/useAnimatedValue'
import React, {useState} from 'react'
import {Animated, Dimensions, LayoutChangeEvent, ScrollView, StyleSheet,} from 'react-native'

import {useTheme} from '@shared/moduls/theme'
import {Theme} from '@shared/moduls/theme/types'
import {Header} from '@shared/features/CreateEditBookingModal/ui/Header'
import {BookingForm} from '@shared/features/CreateEditBookingModal/ui/BookingForm'
import {useGetBooking} from '@host/entities/booking/model/useGetBooking'
import {useDeleteBooking} from '@host/entities/booking/model/useDeleteBooking'
import {useUpdateBooking} from '@host/entities/booking/model/useUpdateBooking'
import {BookingInfoDto} from '@shared/features/CreateEditBookingModal/types'
import {ClientInfo} from './ClientInfo'
import {useGetClient} from '@host/entities/client/model/useGetClient'

interface Props extends ModalProps {
  clientId: string
  bookingId: string
}

export const EditBookingModal = ({ isOpen, clientId, bookingId }: Props) => {
  const { colors } = useTheme()
  const { closeModal } = useModal()
  const { client } = useGetClient(clientId)
  const { booking } = useGetBooking(bookingId)
  const { deleteBooking, isPending: deleting } = useDeleteBooking()
  const { updateBooking, isPending: updating } = useUpdateBooking()

  const handleDelete = () => {
    deleteBooking(bookingId)
    close()
  }
  const update = (bookingInfo: BookingInfoDto) => {
    updateBooking({
      id: bookingId,
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
    closeModal('EditBooking')
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
          <Header type="edit" />

          <ClientInfo clientInfo={client} />

          <BookingForm
            type={'edit'}
            deleting={deleting}
            updating={updating}
            onCancel={cancel}
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
