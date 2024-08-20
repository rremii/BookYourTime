import { ScrollView, StyleSheet, View } from 'react-native'
import { useModal } from '@shared/moduls/modals/useModal'
import {
  BookingModalType,
  CreateEditBookingModal,
} from '@shared/features/CreateEditBookingModal/CreateEditBookingModal'
import { HostProfile } from './ui/HostProfile'
import { WorkingHours } from './ui/WorkingHours'
import { WorkingDays } from './ui/WorkingDays'
import { BreakTime } from './ui/BreakTime'
import { TagsSection } from './ui/TagsSection'
import { UIButton } from '@shared/ui/UIButton/UIButton'

export const HostPreview = () => {
  const { openModal } = useModal()

  const openBookingModal = () => {
    openModal<{
      type: BookingModalType
    }>({
      name: 'CreateEditBooking',
      modal: CreateEditBookingModal,
      props: { type: 'create' },
    })
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
        <UIButton type="filled" onPress={openBookingModal}>
          Book Appointment
        </UIButton>
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
