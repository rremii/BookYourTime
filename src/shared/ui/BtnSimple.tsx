import { PropsWithChildren } from 'react'
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
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
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, btnStyles]}>
      <Text style={[styles.text, textStyles]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 23,
    paddingTop: 6,
    paddingBottom: 6,
    borderColor: 'black',
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
})
