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
import { useTheme } from '@shared/moduls/theme'

export const HostPreview = () => {
  const { colors } = useTheme()

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
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: colors.bcColor_standart_container },
      ]}
    >
      <HostProfile />
      <View style={{ width: '100%' }}>
        <WorkingHours />

        <WorkingDays />

        <BreakTime />

        <TagsSection />
      </View>
      <View style={styles.btnContainer}>
        <UIButton
          type="filled"
          onPress={openBookingModal}
          btnStyles={{ backgroundColor: colors.bcColor_btn_filled }}
          textStyles={{ color: colors.color_btn_filled }}
        >
          Book Appointment
        </UIButton>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
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
