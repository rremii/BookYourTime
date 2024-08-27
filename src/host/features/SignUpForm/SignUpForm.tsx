import { AuthNavigationParam } from '@host/app/navigation/types'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { InputWithLabel } from '@shared/ui/InputWithLabel'
import { authFormStyles } from '@shared/ui/styles/authFormStyles'
import { UIButton } from '@shared/ui/UIButton/UIButton'
import { Controller, useForm } from 'react-hook-form'
import { View, Text, TouchableOpacity } from 'react-native'
import { Roles } from '@shared/entities/auth/types'
import { emailRegex } from '@shared/constants/emailRegex'
import { useRegister } from '@host/entities/auth/model/useRegister'

interface FormValues {
  email: string
  password: string
}

export const SignUpForm = () => {
  const navigation = useNavigation<StackNavigationProp<AuthNavigationParam>>()

  const { register, isPending } = useRegister()

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

  const signUp = (formValues: FormValues) => {
    register({ ...formValues, role: Roles.HOST })
  }

  const goToSignUp = () => {
    navigation.push('SignIn')
  }

  return (
    <View style={authFormStyles.form}>
      <Text style={authFormStyles.title}>Sign Up</Text>

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
          onPress={handleSubmit(signUp)}
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
  )
}
