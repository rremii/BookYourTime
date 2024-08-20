import { PropsWithChildren } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Header = ({ children }: PropsWithChildren) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
})
