import { SignUpForm } from '@user/features/SignUpForm/SignUpForm'
import { View, StyleSheet } from 'react-native'

export const SignUp = () => {
  return (
    <View style={styles.container}>
      <SignUpForm />
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
