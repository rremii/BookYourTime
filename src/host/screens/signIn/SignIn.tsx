import { AuthNavigationParam } from '@host/app/navigation/types'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import {
  HostAuthContext,
  setAuthSuccess,
} from '@shared/entities/auth/authStore'
import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'
import { InputWithLabel } from '@shared/ui/InputWithLabel'
import { getAuthFormStyles } from '@shared/ui/styles/authFormStyles'
import { UIButton } from '@shared/ui/UIButton/UIButton'
import { useContext } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

export const SignIn = () => {
  const { colors } = useTheme()
  const styles = getstyles(colors)

  const navigation = useNavigation<StackNavigationProp<AuthNavigationParam>>()

  const { dispatch } = useContext(HostAuthContext)

  const signIn = () => {
    dispatch(setAuthSuccess())
  }

  const goToSignUp = () => {
    navigation.push('SignUp')
  }

  const authFormStyles = getAuthFormStyles({
    additionalInfoColor: colors.color_standart_text,
    titleColor: colors.color_standart_text,
    btnBgColor: colors.bcColor_btn_filled,
  })

  return (
    <View style={styles.container}>
      <View style={authFormStyles.form}>
        <Text style={authFormStyles.title}>Sign In</Text>

        <InputWithLabel
          labelContStyles={styles.label}
          inputStyles={styles.input}
          label="Email"
        />
        <InputWithLabel
          labelContStyles={styles.label}
          inputStyles={styles.input}
          label="Password"
        />

        <View style={authFormStyles.btnContainer}>
          <UIButton
            onPress={signIn}
            btnStyles={authFormStyles.submitBtn}
            textStyles={{ color: colors.color_btn_filled }}
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

const getstyles = (colors: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bcColor_standart_container
  },
  input: {
    backgroundColor: colors.bcColor_input,
    borderColor: colors.borderColor_standart,
  },
  label: {
    backgroundColor: colors.bcColor_layout
  }
})
