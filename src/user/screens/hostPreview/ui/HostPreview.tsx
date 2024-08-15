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
import { CreateEditBookingModal } from '@shared/features/CreateEditBookingModal/CreateEditBookingModal'
import { HostProfile } from '../HostProfile'
import { WorkingDays } from './WorkingDays'
import { BreakTime } from './BreakTime'
import { TagsSection } from './TagsSection'
import { WorkingHours } from './WorkingHours'

export const HostPreview = () => {
  const { openModal } = useModal()

  const openBookingModal = () => {
    openModal({ name: 'CreateEditBooking', modal: CreateEditBookingModal })
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HostProfile />
      <View style={{ width: '100%' }}>
        <WorkingHours />

        <WorkingDays />

        <BreakTime />

        <TagsSection />
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
  btnContainer: {
    width: '100%',
    marginTop: 30,
    alignItems: 'flex-end',
  },
})
