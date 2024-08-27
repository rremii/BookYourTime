import { SignInForm } from '@host/features/SignInForm/SignInForm'
import { View, StyleSheet } from 'react-native'

export const SignIn = () => {
  return (
    <View style={styles.container}>
      <SignInForm />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
})
