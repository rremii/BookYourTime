import { PropsWithChildren } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

interface Props extends PropsWithChildren {
  onPress?: () => void
}

export const BtnSimple = ({ onPress, children }: Props) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
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
