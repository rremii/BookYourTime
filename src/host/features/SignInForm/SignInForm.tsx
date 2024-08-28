import { AuthNavigationParam } from '@host/app/navigation/types'
import { useLogin } from '@host/entities/auth/model/useLogin'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { emailRegex } from '@shared/constants/emailRegex'
import { useTheme } from '@shared/moduls/theme'

import { InputWithLabel } from '@shared/ui/InputWithLabel'
import { getAuthFormStyles } from '@shared/ui/styles/authFormStyles'
import { UIButton } from '@shared/ui/UIButton/UIButton'
import { Controller, useForm } from 'react-hook-form'
import { View, Text, TouchableOpacity } from 'react-native'

interface FormValues {
  email: string
  password: string
}

export const SignInForm = () => {
  const navigation = useNavigation<StackNavigationProp<AuthNavigationParam>>()

  const { login, isPending } = useLogin()
  const { colors } = useTheme()

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

  const styles = getAuthFormStyles({
    additionalInfoColor: colors.color_standart_text,
    titleColor: colors.color_standart_text,
    btnBgColor: colors.bcColor_btn_filled,
  })
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Sign In</Text>

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

      <View style={styles.btnContainer}>
        <UIButton
          pressed={isPending}
          onPress={handleSubmit(signIn)}
          mainColor={colors.bcColor_btn_filled}
          subColor={colors.color_btn_filled}
          activeColor={colors.bcColor_btn_filled_active}
          withSpinner={true}
          btnStyles={styles.submitBtn}
          type="filled"
        >
          Sign In
        </UIButton>
      </View>

      <TouchableOpacity onPress={goToSignUp}>
        <Text style={styles.additionalInfo}>Don't have an account?</Text>
      </TouchableOpacity>
    </View>
  )
}
