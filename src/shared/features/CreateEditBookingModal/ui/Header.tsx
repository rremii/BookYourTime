import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useModal } from '@shared/moduls/modals/useModal'
import { BookingModalType } from '../CreateEditBookingModal'
import Cross from '@icons/cross.svg'

interface Props {
  type: BookingModalType
}

export const Header = ({ type }: Props) => {
  const { closeModal } = useModal()

  const close = () => {
    closeModal('CreateEditBooking')
  }

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.modalTitle}>
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
