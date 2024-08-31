import {Avatar} from '@shared/ui/Avatar'
import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {useModal} from '@shared/moduls/modals/useModal'
import {useTheme} from '@shared/moduls/theme'
import {Theme} from '@shared/moduls/theme/types'
import {EditBookingModal} from '../EditBookingModal'
import {Booking} from '@shared/entities/booking/types'
import {useGetClient} from '@host/entities/client/model/useGetClient'

interface Props extends Booking {}

export const BookingCard = ({ ...boooking }: Props) => {
  const { clientId, date, hostId, id, time, title } = boooking || {}

  const { client } = useGetClient(clientId)
  const { openModal } = useModal()

  const { colors } = useTheme()
  const styles = getStyles(colors)

  const editBooking = () => {
    openModal<{
      clientId: string
      bookingId: string
    }>({
      name: 'EditBooking',
      modal: EditBookingModal,
      props: { bookingId: id, clientId: clientId },
    })
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={editBooking}
      style={styles.container}
    >
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subHeader}>Client:</Text>
      <View style={[styles.withPadding, { flexDirection: 'row' }]}>
        <Avatar size={50} color={colors.color_standart_avatar} />
        <View style={styles.textInfoContainer}>
          <Text style={styles.name}>{client?.firstName} </Text>
          <Text style={styles.name}>{client?.lastName}</Text>
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
          from {time.from} to {time.to}
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
      borderColor: colors.borderColor_shadow,
      backgroundColor: colors.bcColor_standart_container,

      shadowColor: colors.color_standart_shadow,
      elevation: 5,
    },
    title: {
      textAlign: 'center',
      fontSize: 15,
      fontWeight: 'bold',
      marginBottom: 10,
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
      fontWeight: 'semibold',
      fontSize: 18,
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
    },
    sectionTitle: {
      fontSize: 15,
      fontWeight: 'bold',
      color: colors.color_section_title,
    },
    sectionContent: {
      color: colors.color_standart_text,
    },
  })
