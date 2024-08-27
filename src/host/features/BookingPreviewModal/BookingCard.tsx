import { Avatar } from '@shared/ui/Avatar'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useModal } from '@shared/moduls/modals/useModal'
import { CreateEditBookingModal } from '@shared/features/CreateEditBookingModal'
import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'

export const BookingCard = () => {
  const { openModal } = useModal()

  const { colors } = useTheme()
  const styles = getStyles(colors)

  const editBooking = () => {
    openModal({
      name: 'CreateEditBooking',
      modal: CreateEditBookingModal,
      props: { type: 'edit', userType: 'client' },
    })
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={editBooking}
      style={styles.container}>
      <Text style={styles.title}>
        Some cool damn title
      </Text>

      <Text style={styles.subHeader}>
        Client:
      </Text>
      <View style={[styles.withPadding, { flexDirection: 'row' }]}>
        <Avatar size={50} color={colors.color_standart_avatar} />
        <View style={styles.textInfoContainer}>
          <Text style={styles.name}>Jon </Text>
          <Text style={styles.name}>Doue</Text>
        </View>
      </View>
      <Text style={styles.subHeader}>
        info:
      </Text>
      <View style={[styles.sectionContainer, styles.withPadding]}>
        <Text style={styles.sectionTitle}>
          date:
        </Text>
        <Text style={styles.sectionContent}>
          Monday, 12 Feb 2023
        </Text>
      </View>

      <View style={[styles.sectionContainer, styles.withPadding]}>
        <Text style={styles.sectionTitle}>
          time:
        </Text>
        <Text style={styles.sectionContent}>
          12 AM - 1PM
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const getStyles = (colors: Theme) => StyleSheet.create({
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
    color: colors.color_standart_text
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
    color: colors.color_name 
  },
  specialty: {
    fontSize: 15,
    color: colors.color_specialty
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 5,
    color: colors.color_standart_text
  },
  sectionContainer: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.color_section_title
  },
  sectionContent: {
    color: colors.color_standart_text
  },
})
