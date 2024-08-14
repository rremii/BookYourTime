import { PropsWithChildren } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

interface Props extends PropsWithChildren {
  onPress?: () => void
}

export const BtnFilled = ({ onPress, children }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
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
