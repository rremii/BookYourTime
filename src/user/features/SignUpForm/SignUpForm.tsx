import { AuthNavigationParam } from '@host/app/navigation/types'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { InputWithLabel } from '@shared/ui/InputWithLabel'
import { getAuthFormStyles } from '@shared/ui/styles/authFormStyles'
import { UIButton } from '@shared/ui/UIButton/UIButton'
import { useRegister } from '@user/entities/auth/model/useRegister'
import { Controller, useForm } from 'react-hook-form'
import { View, Text, TouchableOpacity } from 'react-native'
import { Roles } from '@shared/entities/auth/types'
import { emailRegex } from '@shared/constants/emailRegex'
import { useTheme } from '@shared/moduls/theme'

interface FormValues {
  email: string
  password: string
}

export const SignUpForm = () => {
  const navigation = useNavigation<StackNavigationProp<AuthNavigationParam>>()

  const { register, isPending } = useRegister()
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

  const signUp = (formValues: FormValues) => {
    register({ ...formValues, role: Roles.CLIENT })
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
          pending={isPending}
          onPress={handleSubmit(signUp)}
          mainColor={colors.bcColor_btn_filled}
          activeColor={colors.bcColor_btn_filled_active}
          subColor={colors.color_btn_filled}
          withSpinner={true}
          type="filled"
          btnStyles={styles.submitBtn}
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
