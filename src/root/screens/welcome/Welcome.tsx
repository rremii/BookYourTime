import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootNavigationParam } from '@root/app/navigation/types'
import { useTheme } from '@shared/moduls/theme/useTheme'
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

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.bcColor_standart_container },
      ]}
    >
      <Text style={[styles.title, { color: colors.color_standart_text }]}>
        Welcome
      </Text>
      <Text style={[styles.subTitle, { color: colors.color_standart_text }]}>
        choose who you are
      </Text>
      <UIButton
        type="filled"
        onPress={goToHost}
        btnStyles={[styles.btn, { backgroundColor: colors.bcColor_btn_filled }]}
        textStyles={{ color: colors.color_btn_filled }}
      >
        Host
      </UIButton>
      <UIButton
        type="simple"
        onPress={goToClient}
        btnStyles={[
          styles.btn,
          {
            backgroundColor: colors.bcColor_button,
            borderColor: colors.borderColor_standart,
          },
        ]}
        textStyles={{ color: colors.color_standart_text }}
      >
        Client
      </UIButton>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingTop: '40%',
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
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
