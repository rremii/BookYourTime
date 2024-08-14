import { BaseNavigationContainer } from '@react-navigation/native'
import { Tag } from '@shared/ui/Tag/Tag'
import { Tags } from '@shared/ui/Tag/types'
import { Avatar } from '@shared/ui/Avatar'
import { BtnFilled } from '@shared/ui/BtnFilled'
import { WorkingDay } from '@shared/ui/WorkingDay'
import { WorkingTime } from '@shared/ui/WorkingTime'
import { View } from 'react-native'
import { Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useModal } from '@shared/moduls/modals/useModal'
import { CreateBookingModal } from '@shared/features/CreateBookingModal'

export const HostPreview = () => {
  const { openModal } = useModal()

  const openBookingModal = () => {
    openModal({ name: 'CreateBooking', modal: CreateBookingModal })
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Avatar size={150} color={'#13d95c3d'} />
      <View style={styles.nameContainer}>
        <Text style={styles.name}>Jon</Text>
        <Text style={styles.name}>Doue</Text>
      </View>
      <Text style={styles.specialty}>Software Engineer</Text>
      <View style={{ width: '100%' }}>
        <Text style={styles.sectionTitle}>Working hours</Text>
        <View style={styles.paddingSection}>
          <WorkingTime>6 AM - 10 PM</WorkingTime>
        </View>

        <Text style={styles.sectionTitle}>Working days</Text>
        <View style={[styles.workingDaysContainer, styles.paddingSection]}>
          <WorkingDay rounded>Monday</WorkingDay>
          <WorkingDay rounded>Monday</WorkingDay>
          <WorkingDay rounded>Monday</WorkingDay>
          <WorkingDay rounded>Monday</WorkingDay>
          <WorkingDay rounded>Monday</WorkingDay>
        </View>

        <Text style={styles.sectionTitle}>Break time</Text>
        <View style={styles.paddingSection}>
          <WorkingTime>1 AM - 2 PM</WorkingTime>
        </View>

        <Text style={styles.sectionTitle}>Tags</Text>
        <View style={[styles.workingDaysContainer, styles.paddingSection]}>
          <Tag tag={Tags.BACKEND} />
          <Tag tag={Tags.FRONTEND} />
          <Tag tag={Tags.FULLSTACK} />
        </View>
      </View>
      <View style={styles.btnContainer}>
        <BtnFilled onPress={openBookingModal}>Book Appointment</BtnFilled>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 70,
    alignItems: 'center',
  },
  paddingSection: {
    paddingLeft: 20,
  },
  nameContainer: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 20,
    marginBottom: 5,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
  },
  specialty: {
    fontSize: 18,
    color: '#585455',
  },

  workingDaysContainer: {
    flexDirection: 'row',
    rowGap: 5,
    columnGap: 7,
    flexWrap: 'wrap',
  },
  sectionTitle: {
    marginTop: 20,
    marginBottom: 7,
    fontSize: 15,
    color: '#6c6c6c',
    fontWeight: '500',
  },
  btnContainer: {
    width: '100%',
    marginTop: 30,
    alignItems: 'flex-end',
  },
})
