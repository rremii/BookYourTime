import {useTheme} from '@shared/moduls/theme'
import {Theme} from '@shared/moduls/theme/types'
import {StyleSheet, View} from 'react-native'
import {SignInForm} from '@user/features/SignInForm/SignInForm'

export const SignIn = () => {
  const { colors } = useTheme()

  const styles = getStyles(colors)
  return (
    <View style={styles.container}>
      <SignInForm />
    </View>
  )
}

const getStyles = (colors: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.bcColor_standart_container,
    },
  })
