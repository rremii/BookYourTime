import { useModal } from '@shared/moduls/modals/useModal'
import { PickerModal } from '@shared/moduls/PickerModal/PickerModal'
import { useTheme } from '@shared/moduls/theme'
import {
  changeTheme,
  ThemeContext,
} from '@shared/moduls/theme/model/themeStore'
import { Theme, ThemeType } from '@shared/moduls/theme/types'
import { useContext } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Themes } from '../constants/Themes'

export const OpenThemePicker = () => {
  const { colors } = useTheme()
  const styles = getStyles(colors)
  const { dispatch, theme } = useContext(ThemeContext)

  const { openModal, closeModal } = useModal()

  const openPicker = () => {
    openModal<{
      initItems: ThemeType[]
      currentItem: ThemeType
      onChange: (chosenItem: ThemeType) => void
    }>({
      name: 'ThemePicker',
      modal: PickerModal,
      props: {
        onChange,
        initItems: Themes,
        currentItem: theme,
      },
    })
  }

  const onChange = (chosenItem: ThemeType) => {
    closeModal('ThemePicker', 500)
    dispatch(changeTheme(chosenItem))
  }

  return (
    <TouchableOpacity onPress={openPicker}>
      <Text style={styles.text}>Chose theme: {theme}</Text>
    </TouchableOpacity>
  )
}

const getStyles = (colors: Theme) =>
  StyleSheet.create({
    text: {
      fontSize: 20,
      color: colors.color_standart_text,
    },
  })
