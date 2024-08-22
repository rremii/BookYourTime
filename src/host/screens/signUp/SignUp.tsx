import { AuthNavigationParam } from '@host/app/navigation/types'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import {
  HostAuthContext,
  setAuthSuccess,
} from '@shared/entities/auth/authStore'
import { InputWithLabel } from '@shared/ui/InputWithLabel'
import { authFormStyles } from '@shared/ui/styles/authFormStyles'
import { UIButton } from '@shared/ui/UIButton/UIButton'
import { useContext } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'

export const SignUp = () => {
  const navigation = useNavigation<StackNavigationProp<AuthNavigationParam>>()

  const { dispatch } = useContext(HostAuthContext)

  const signUp = () => {
    dispatch(setAuthSuccess())
  }

  const goToSignUp = () => {
    navigation.push('SignIn')
  }

  return (
    <View style={styles.container}>
      <View style={authFormStyles.form}>
        <Text style={authFormStyles.title}>Sign Up</Text>

        <InputWithLabel label="Email" />
        <InputWithLabel label="Password" />

        <View style={authFormStyles.btnContainer}>
          <UIButton
            onPress={signUp}
            btnStyles={authFormStyles.submitBtn}
            type="filled"
          >
            Sign Up
          </UIButton>
        </View>

        <TouchableOpacity onPress={goToSignUp}>
          <Text style={authFormStyles.additionalInfo}>
            Already have an account?
          </Text>
        </TouchableOpacity>
      </View>
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
