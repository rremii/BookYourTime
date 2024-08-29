import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootNavigationParam } from '@root/app/navigation/types'
import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'
import { UIButton } from '@shared/ui/UIButton/UIButton'
import { StyleSheet, Text, View } from 'react-native'

export const Welcome = () => {
  const { colors } = useTheme()

  const navigation = useNavigation<StackNavigationProp<RootNavigationParam>>()

  const goToHost = () => {
    console.log('Host')
    navigation.push('Host', {
      screen: 'Booking',
    })
  }
  const goToClient = () => {
    navigation.push('Client', {
      screen: 'Search',
    })
  }

  const styles = getStyles(colors)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subTitle}>choose who you are</Text>
      <UIButton
        type="filled"
        onPress={goToHost}
        btnStyles={styles.btn}
        mainColor={colors.bcColor_btn_filled}
        activeColor={colors.bcColor_btn_filled_active}
        subColor={colors.color_btn_filled}
      >
        Host
      </UIButton>
      <UIButton
        type="simple"
        onPress={goToClient}
        btnStyles={styles.btn}
        mainColor={colors.borderColor_standart}
        activeColor={colors.borderColor_active}
      >
        Client
      </UIButton>
    </View>
  )
}
const getStyles = (colors: Theme) =>
  StyleSheet.create({
    container: {
      paddingTop: '70%',
      flex: 1,
      alignItems: 'center',
      backgroundColor: colors.bcColor_standart_container,
    },
    title: {
      fontSize: 27,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 5,
      color: colors.color_standart_text,
    },
    subTitle: {
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 30,
      color: colors.color_standart_text,
    },
    btn: {
      marginBottom: 10,
      paddingTop: 5,
      paddingBottom: 5,
      alignItems: 'center',
      width: '50%',
      minWidth: 200,
    },
  })
