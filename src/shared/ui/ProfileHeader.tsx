import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'
import { View, StyleSheet } from 'react-native'
import SettingsIcon from '@icons/settings.svg'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useModal } from '@shared/moduls/modals/useModal'
import { ProfileSettingsModal } from '@shared/features/ProfileSettingsModal/ProfileSettingsModal'

export const ProfileHeader = () => {
  const { colors } = useTheme()

  const styles = createStyle(colors)

  const { openModal } = useModal()

  const openSettings = () => {
    openModal({ name: 'ProfileSettings', modal: ProfileSettingsModal })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={openSettings}>
        <SettingsIcon color={styles.icon.color} />
      </TouchableOpacity>
    </View>
  )
}

const createStyle = (colors: Theme) =>
  StyleSheet.create({
    container: {
      height: '5%',
      width: '100%',
      backgroundColor: colors.bcColor_standart_container,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    button: {
      marginRight: '2%',
    },
    icon: {
      color: colors.color_fill_icon,
    },
  })
