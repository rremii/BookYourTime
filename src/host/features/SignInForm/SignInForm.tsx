import { AuthNavigationParam } from '@host/app/navigation/types'
import { useLogin } from '@host/entities/auth/model/useLogin'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { emailRegex } from '@shared/constants/emailRegex'

import { InputWithLabel } from '@shared/ui/InputWithLabel'
import { authFormStyles } from '@shared/ui/styles/authFormStyles'
import { UIButton } from '@shared/ui/UIButton/UIButton'
import { useContext } from 'react'
import { Controller, useForm } from 'react-hook-form'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'

interface FormValues {
  email: string
  password: string
}

export const SignInForm = () => {
  const navigation = useNavigation<StackNavigationProp<AuthNavigationParam>>()

  const { login, isPending } = useLogin()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const signIn = (formValues: FormValues) => {
    login(formValues)
  }

  const goToSignUp = () => {
    navigation.push('SignUp')
  }

  return (
    <View style={authFormStyles.form}>
      <Text style={authFormStyles.title}>Sign In</Text>

      <Controller
        control={control}
        rules={{
          required: true,
          pattern: emailRegex,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputWithLabel
            keyboardType="email-address"
            isError={!!errors.email}
            label="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputWithLabel
            keyboardType="visible-password"
            isError={!!errors.password}
            label="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />

      <View style={authFormStyles.btnContainer}>
        <UIButton
          pressed={isPending}
          onPress={handleSubmit(signIn)}
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
  )
}
