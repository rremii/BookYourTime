import { Avatar } from '@shared/ui/Avatar'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useModal } from '@shared/moduls/modals/useModal'
import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'
import { Booking } from '@shared/entities/booking/types'
import { useGetHost } from '@user/entities/host/model/useGetHost'
import {
  BookingModalType,
  CreateEditBookingModal,
} from '../CreateEditBookingModal'

/*
todo back



*/
interface Props extends Booking {}

export const BookingCard = ({ ...booking }: Props) => {
  const { clientId, date, time, hostId, id, title } = booking

  const { colors } = useTheme()
  const { openModal } = useModal()
  const { host } = useGetHost(hostId)

  const editBooking = () => {
    openModal<{
      type: BookingModalType
      hostId: string
      bookingId: string
    }>({
      name: 'CreateEditBooking',
      modal: CreateEditBookingModal,
      props: {
        type: 'edit',
        bookingId: id,
        hostId: hostId,
      },
    })
  }

  const styles = getStyles(colors)
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={editBooking}
      style={styles.container}
    >
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subHeader}>Host:</Text>
      <View style={[styles.withPadding, { flexDirection: 'row' }]}>
        <Avatar size={50} color={colors.color_standart_avatar} />
        <View style={styles.textInfoContainer}>
          <Text style={styles.name}>
            {host?.firstName} {host?.lastName}
          </Text>
          <Text style={styles.specialty}>{host?.info}</Text>
        </View>
      </View>
      <Text style={styles.subHeader}>info:</Text>
      <View style={[styles.sectionContainer, styles.withPadding]}>
        <Text style={styles.sectionTitle}>date:</Text>
        <Text style={styles.sectionContent}>
          {new Date(date).toLocaleDateString()}
        </Text>
      </View>

      <View style={[styles.sectionContainer, styles.withPadding]}>
        <Text style={styles.sectionTitle}>time:</Text>
        <Text style={styles.sectionContent}>
          from {time?.from} to {time?.to}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const getStyles = (colors: Theme) =>
  StyleSheet.create({
    container: {
      padding: 15,
      borderRadius: 10,
      borderWidth: 1,
      width: '90%',
      marginLeft: '5%',
      borderColor: colors.borderColor_shadow,
      backgroundColor: colors.bcColor_card,

      shadowColor: colors.color_standart_shadow,
      elevation: 5,
    },
    title: {
      textAlign: 'center',
      fontSize: 15,
      fontWeight: 'bold',
      color: colors.color_standart_text,
    },
    withPadding: {
      paddingLeft: 20,
    },
    textInfoContainer: {
      justifyContent: 'center',
      marginLeft: 10,
    },
    name: {
      fontWeight: 'bold',
      fontSize: 16,
      color: colors.color_name,
    },
    specialty: {
      fontSize: 15,
      color: colors.color_specialty,
    },
    subHeader: {
      fontSize: 16,
      marginBottom: 5,
      marginTop: 5,
      color: colors.color_standart_text,
    },
    sectionContainer: {
      width: '100%',
      justifyContent: 'space-between',
      flexDirection: 'row',
      color: colors.color_standart_text,
    },
    sectionTitle: {
      fontSize: 15,
      fontWeight: 'bold',
      color: colors.color_standart_text,
    },
    sectionContent: {
      color: colors.color_standart_text,
    },
  })
