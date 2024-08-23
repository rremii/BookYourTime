import { AuthNavigationParam } from '@host/app/navigation/types'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import {
  ClientAuthContext,
  setAuthSuccess,
} from '@shared/entities/auth/authStore'
import { useTheme } from '@shared/moduls/theme/useTheme'
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
  const { colors } = useTheme()

  const navigation = useNavigation<StackNavigationProp<AuthNavigationParam>>()

  const { dispatch } = useContext(ClientAuthContext)

  const signUp = () => {
    dispatch(setAuthSuccess())
  }

  const goToSignUp = () => {
    navigation.push('SignIn')
  }

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.bcColor_standart_container },
      ]}
    >
      <View style={authFormStyles.form}>
        <Text
          style={[authFormStyles.title, { color: colors.color_standart_text }]}
        >
          Sign Up
        </Text>

        <InputWithLabel label="Email" />
        <InputWithLabel label="Password" />

        <View style={authFormStyles.btnContainer}>
          <UIButton
            onPress={signUp}
            btnStyles={[
              authFormStyles.submitBtn,
              { backgroundColor: colors.bcColor_btn_filled },
            ]}
            textStyles={{ color: colors.color_btn_filled }}
            type="filled"
          >
            Sign Up
          </UIButton>
        </View>

        <TouchableOpacity onPress={goToSignUp}>
          <Text
            style={[
              authFormStyles.additionalInfo,
              { color: colors.color_standart_text },
            ]}
          >
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
  },
})
