import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useModal } from '@shared/moduls/modals/useModal'
import Cross from '@icons/cross.svg'
import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'
import { BookingModalType } from '@user/features/CreateEditBookingModal'

interface Props {
  type: BookingModalType
}

export const Header = ({ type }: Props) => {
  const { colors } = useTheme()
  const styles = getStyles(colors)

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

const getStyles = (colors: Theme) =>
  StyleSheet.create({
    modalTitle: {
      fontSize: 18,
      marginBottom: 10,
      color: colors.color_standart_text,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  })
