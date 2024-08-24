import { Avatar } from '@shared/ui/Avatar'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useModal } from '@shared/moduls/modals/useModal'
import {
  BookingModalType,
  CreateEditBookingModal,
} from '@shared/features/CreateEditBookingModal'
import { useTheme } from '@shared/moduls/theme'

export const BookingCard = () => {
  const { colors } = useTheme()
  const { openModal } = useModal()

  const editBooking = () => {
    openModal<{
      type: BookingModalType
    }>({
      name: 'CreateEditBooking',
      modal: CreateEditBookingModal,
      props: { type: 'edit' },
    })
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={editBooking}
      style={[
        styles.container,
        {
          borderColor: colors.borderColor_shadow,
          backgroundColor: colors.bcColor_card,
          shadowColor: colors.color_standart_shadow,
        },
      ]}
    >
      <Text style={[styles.title, { color: colors.color_standart_text }]}>
        Some cool damn title
      </Text>

      <Text style={[styles.subHeader, { color: colors.color_standart_text }]}>
        Host:
      </Text>
      <View
        style={[
          {
            flexDirection: 'row',
          },
          styles.withPadding,
        ]}
      >
        <Avatar size={50} color={colors.color_standart_avatar} />
        <View style={styles.textInfoContainer}>
          <Text style={[styles.name, { color: colors.color_name }]}>
            Jon Doue
          </Text>
          <Text style={[styles.specialty, { color: colors.color_specialty }]}>
            Software Engineer
          </Text>
        </View>
      </View>
      <Text style={[styles.subHeader, { color: colors.color_standart_text }]}>
        info:
      </Text>
      <View style={[styles.sectionContainer, styles.withPadding]}>
        <Text
          style={[styles.sectionTitle, { color: colors.color_standart_text }]}
        >
          date:
        </Text>
        <Text
          style={[styles.sectionContent, { color: colors.color_standart_text }]}
        >
          Monday, 12 Feb 2023
        </Text>
      </View>

      <View style={[styles.sectionContainer, styles.withPadding]}>
        <Text
          style={[styles.sectionTitle, { color: colors.color_standart_text }]}
        >
          time:
        </Text>
        <Text
          style={[styles.sectionContent, { color: colors.color_standart_text }]}
        >
          12 AM - 1PM
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    width: '90%',
    marginLeft: '5%',

    elevation: 5,
  },
  title: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
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
  },
  specialty: {
    fontSize: 15,
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 5,
  },
  sectionContainer: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  sectionContent: {},
})
