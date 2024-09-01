import { AuthNavigationParam } from '@host/app/navigation/types'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { InputWithLabel } from '@shared/ui/InputWithLabel'
import { getAuthFormStyles } from '@shared/ui/styles/authFormStyles'
import { UIButton } from '@shared/ui/UIButton/UIButton'
import { Controller, useForm } from 'react-hook-form'
import { Text, TouchableOpacity, View } from 'react-native'
import { Roles } from '@shared/entities/auth/types'
import { emailRegex } from '@shared/constants/emailRegex'
import { useRegister } from '@host/entities/auth/model/useRegister'
import { useTheme } from '@shared/moduls/theme'
import { useEffect } from 'react'

interface FormValues {
  email: string
  password: string
}

export const SignUpForm = () => {
  const navigation = useNavigation<StackNavigationProp<AuthNavigationParam>>()

  const { register, isPending, isError } = useRegister()
  const { colors } = useTheme()

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  useEffect(() => {
    if (isError) reset()
  }, [isError])

  const signUp = (formValues: FormValues) => {
    register({ ...formValues, role: Roles.HOST })
  }

  const goToSignUp = () => {
    navigation.push('SignIn')
  }

  const styles = getAuthFormStyles({
    additionalInfoColor: colors.color_standart_text,
    titleColor: colors.color_standart_text,
    btnBgColor: colors.bcColor_btn_filled,
  })
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Sign Up</Text>

      <Controller
        control={control}
        rules={{
          required: true,
          pattern: emailRegex,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputWithLabel
            keyboardType="email-address"
            isError={!!errors.email || isError}
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
            isError={!!errors.password || isError}
            label="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />

      <View style={styles.btnContainer}>
        <UIButton
          pending={isPending}
          onPress={handleSubmit(signUp)}
          mainColor={colors.bcColor_btn_filled}
          subColor={colors.color_btn_filled}
          activeColor={colors.bcColor_btn_filled_active}
          withSpinner={true}
          btnStyles={styles.submitBtn}
          type="filled"
        >
          Sign Up
        </UIButton>
      </View>

      <TouchableOpacity onPress={goToSignUp}>
        <Text style={styles.additionalInfo}>Already have an account?</Text>
      </TouchableOpacity>
    </View>
  )
}
