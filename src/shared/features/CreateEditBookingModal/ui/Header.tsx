import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useModal } from '@shared/moduls/modals/useModal'
import { BookingModalType } from '../CreateEditBookingModal'
import Cross from '@icons/cross.svg'
import { useTheme } from '@shared/moduls/theme'

interface Props {
  type: BookingModalType
}

export const Header = ({ type }: Props) => {
  const { colors } = useTheme()
  const { closeModal } = useModal()

  const close = () => {
    closeModal('CreateEditBooking')
  }

  return (
    <View style={styles.headerContainer}>
      <Text style={[styles.modalTitle, { color: colors.color_standart_text }]}>
        {type === 'create' ? 'Book an appointment' : 'Edit appointment'}
      </Text>
      <TouchableOpacity onPress={close}>
        <Cross width={20} height={20} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
