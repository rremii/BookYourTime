import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'
import { PropsWithChildren } from 'react'
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native'

interface Props extends PropsWithChildren {
  onPress?: () => void
  btnStyles?: StyleProp<ViewStyle>
  textStyles?: StyleProp<TextStyle>
}

export const BtnFilled = ({
  onPress,
  children,
  btnStyles,
  textStyles,
}: Props) => {
  const { colors } = useTheme()
  const styles = getStyles(colors)

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btn, btnStyles]}
    >
      <Text style={[styles.text, textStyles]} >
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const getStyles = (colors: Theme) => StyleSheet.create({
  btn: {
    borderRadius: 10,
    padding: 25,
    paddingTop: 7,
    paddingBottom: 7,
    backgroundColor: colors.bcColor_btn_filled
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.color_btn_filled
  },
})
