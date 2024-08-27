import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useModal } from '@shared/moduls/modals/useModal'
import Cross from '@icons/cross.svg'
import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'

interface Props {}

export const Header = ({}: Props) => {
  const { colors } = useTheme()
  const styles = getStyles(colors)

  const { closeModal } = useModal()

  const close = () => {
    closeModal('SearchFilters')
  }

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>
        Filters
      </Text>
      <TouchableOpacity onPress={close}>
        <Cross width={15} height={15} color={colors.color_cross} />
      </TouchableOpacity>
    </View>
  )
}

const getStyles = (colors: Theme) => StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.color_standart_text
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
