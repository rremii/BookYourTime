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
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, btnStyles]}>
      <Text style={[styles.text, textStyles]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#0A8537',
    borderRadius: 10,
    padding: 25,
    paddingTop: 7,
    paddingBottom: 7,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
})
