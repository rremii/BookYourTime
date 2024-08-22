import { AuthNavigationParam } from '@host/app/navigation/types'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import {
  ClientAuthContext,
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

export const SignIn = () => {
  const navigation = useNavigation<StackNavigationProp<AuthNavigationParam>>()

  const { dispatch } = useContext(ClientAuthContext)

  const signIn = () => {
    dispatch(setAuthSuccess())
  }

  const goToSignUp = () => {
    navigation.push('SignUp')
  }

  return (
    <View style={styles.container}>
      <View style={authFormStyles.form}>
        <Text style={authFormStyles.title}>Sign In</Text>

        <InputWithLabel label="Email" />
        <InputWithLabel label="Password" />

        <View style={authFormStyles.btnContainer}>
          <UIButton
            onPress={signIn}
            btnStyles={authFormStyles.submitBtn}
            type="filled"
          >
            Sign In
          </UIButton>
        </View>

        <TouchableOpacity onPress={goToSignUp}>
          <Text style={authFormStyles.additionalInfo}>
            Don't have an account?
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
