import { PropsWithChildren } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

interface Props extends PropsWithChildren {
  onPress?: () => void
}

export const BtnDanger = ({ onPress, children }: Props) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#850a0a',
    borderRadius: 10,
    padding: 17,
    paddingTop: 7,
    paddingBottom: 7,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
  },
})
