import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useModal } from '@shared/moduls/modals/useModal'
import { useTheme } from '@shared/moduls/theme/model/useTheme'
import { Theme } from '@shared/moduls/theme/types'
import BackIcon from '@icons/back.svg'

export const Header = () => {
  const { closeModal } = useModal()

  const { colors } = useTheme()

  const close = () => {
    closeModal('ProfileSettings')
  }

  const btnSize = 30

  const styles = getStyles(colors, btnSize)
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={close} style={styles.btn}>
        <BackIcon color={colors.color_fill_icon} />
      </TouchableOpacity>

      <Text style={styles.text}>Settings</Text>
    </View>
  )
}

const getStyles = (colors: Theme, btnSize: number) =>
  StyleSheet.create({
    container: {
      position: 'relative',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors.bcColor_standart_container,
      borderBottomWidth: 1,
      borderBottomColor: colors.borderColor_standart,
      height: 50,
      width: '100%',
    },
    text: {
      fontSize: 20,
      color: colors.color_standart_text,
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
    },
    btn: {
      position: 'absolute',
      top: '50%',
      left: 20,
      width: 30,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      transform: [{ translateY: -btnSize / 2 }],
      borderWidth: 1,
      zIndex: 1,
    },
  })
