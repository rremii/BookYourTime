import { PropsWithChildren } from 'react'
import { Text, StyleSheet } from 'react-native'

interface Props extends PropsWithChildren {}

export const WorkingTime = ({ children }: Props) => {
  return <Text style={styles.workingTime}>{children}</Text>
}
const styles = StyleSheet.create({
  workingTime: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
})
