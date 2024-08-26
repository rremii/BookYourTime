import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useModal } from '@shared/moduls/modals/useModal'
import Cross from '@icons/cross.svg'

interface Props {}

export const Header = ({}: Props) => {
  const { closeModal } = useModal()

  const close = () => {
    closeModal('SearchFilters')
  }

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Filters</Text>
      <TouchableOpacity onPress={close}>
        <Cross width={15} height={15} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
