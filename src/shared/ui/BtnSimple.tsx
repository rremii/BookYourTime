import { useTheme } from '@shared/moduls/theme/useTheme'
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

export const BtnSimple = ({
  onPress,
  children,
  btnStyles,
  textStyles,
}: Props) => {
  const { colors } = useTheme()

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.btn,
        btnStyles,
        {
          backgroundColor: colors.bcColor_button,
          borderColor: colors.borderColor_standart,
        },
      ]}
    >
      <Text style={[styles.text, textStyles]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 10,
    padding: 23,
    paddingTop: 6,
    paddingBottom: 6,
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
})
