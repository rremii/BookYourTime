import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from '@shared/ui/Avatar'
import { Tag } from '@shared/ui/Tag'
import { WorkingDay } from '@shared/ui/WorkingDay'
import { RootNavigationParam } from '@user/app/navigation/types'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import CalendarIcon from '@icons/calendar.svg'
import TagIcon from '@icons/tag.svg'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native'
import { useModal } from '@shared/moduls/modals/useModal'
import {
  BookingModalType,
  CreateEditBookingModal,
} from '@shared/features/CreateEditBookingModal'
import { inputSectionStyles } from '@shared/ui/InputSection/InputSectionStyles'

export const BookingCard = () => {
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
      style={styles.container}
    >
      <Text style={styles.title}>Some cool damn title</Text>

      <Text style={styles.subHeader}>Host:</Text>
      <View
        style={[
          {
            flexDirection: 'row',
          },
          styles.withPadding,
        ]}
      >
        <Avatar size={50} color={'#13d95c3d'} />
        <View style={styles.textInfoContainer}>
          <Text style={styles.name}>Jon Doue</Text>
          <Text style={styles.specialty}>Software Engineer</Text>
        </View>
      </View>
      <Text style={styles.subHeader}>info:</Text>
      <View style={[styles.sectionContainer, styles.withPadding]}>
        <Text style={styles.sectionTitle}>date:</Text>
        <Text style={styles.sectionContent}>Monday, 12 Feb 2023</Text>
      </View>

      <View style={[styles.sectionContainer, styles.withPadding]}>
        <Text style={styles.sectionTitle}>time:</Text>
        <Text style={styles.sectionContent}>12 AM - 1PM</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderColor: '#0000002c',
    borderRadius: 10,
    borderWidth: 1,
    width: '90%',
    marginLeft: '5%',
    backgroundColor: '#FFFFFF',

    shadowColor: '#0A8537',
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
    color: '#8E898A',
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
