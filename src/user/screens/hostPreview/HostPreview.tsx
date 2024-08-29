import { ScrollView, StyleSheet, View } from 'react-native'
import { useModal } from '@shared/moduls/modals/useModal'
import { HostProfile } from './ui/HostProfile'
import { WorkingHours } from './ui/WorkingHours'
import { WorkingDays } from './ui/WorkingDays'
import { BreakTime } from './ui/BreakTime'
import { TagsSection } from './ui/TagsSection'
import { UIButton } from '@shared/ui/UIButton/UIButton'
import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'
import {
  BookingModalType,
  CreateEditBookingModal,
} from '@user/features/CreateEditBookingModal'

export const HostPreview = () => {
  const { colors } = useTheme()
  const styles = getStyles(colors)

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
      <View style={styles.workContainer}>
        <WorkingHours />

        <WorkingDays />

        <BreakTime />

        <TagsSection />
      </View>
      <View style={styles.btnContainer}>
        <UIButton
          type="filled"
          onPress={openBookingModal}
          mainColor={colors.bcColor_btn_filled}
          activeColor={colors.bcColor_btn_filled_active}
          subColor={colors.color_btn_filled}
        >
          Book Appointment
        </UIButton>
      </View>
    </ScrollView>
  )
}

const getStyles = (colors: Theme) =>
  StyleSheet.create({
    container: {
      padding: 20,
      paddingTop: 70,
      alignItems: 'center',
      backgroundColor: colors.bcColor_standart_container,
    },
    workContainer: {
      width: '100%',
    },
    btnContainer: {
      width: '100%',
      marginTop: 30,
      alignItems: 'flex-end',
    },
  })
