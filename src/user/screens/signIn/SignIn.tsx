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
import { useLogin } from '@user/entities/auth/model/useLogin'
import { useContext } from 'react'
import { Controller, useForm } from 'react-hook-form'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { emailRegex } from '../../features/SignInForm/emailRegex'
import { SignInForm } from '@user/features/SignInForm/SignInForm'

interface FormValues {
  email: string
  password: string
}

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
