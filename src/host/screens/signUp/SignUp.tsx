import {SignUpForm} from '@host/features/SignUpForm/SignUpForm'
import {useTheme} from '@shared/moduls/theme'
import {Theme} from '@shared/moduls/theme/types'
import {StyleSheet, View} from 'react-native'

export const SignUp = () => {
  const { colors } = useTheme()

  const styles = getStyles(colors)
  return (
    <View style={styles.container}>
      <SignUpForm />
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
