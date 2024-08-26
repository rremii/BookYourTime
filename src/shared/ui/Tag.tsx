import { PropsWithChildren } from 'react'
import { Text, StyleSheet } from 'react-native'

interface Props extends PropsWithChildren {}

export const Tag = ({ children }: Props) => {
  return <Text style={styles.tag}>{children}</Text>
}
const styles = StyleSheet.create({
  tag: {
    borderRadius: 10,
    paddingLeft: 7,
    paddingRight: 7,

    justifyContent: 'center',
    alignItems: 'center',

    paddingTop: 1,
    paddingBottom: 1,

    borderColor: '#0a853760',
    borderWidth: 1,
    fontSize: 14,
    color: '#000000',
  },
})
