import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootNavigationParam } from '@root/app/navigation/types'
import { BtnFilled } from '@shared/ui/BtnFilled'
import { BtnSimple } from '@shared/ui/BtnSimple'
import { StyleSheet, Text, View } from 'react-native'

export const Welcome = () => {
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
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subTitle}>choose who you are</Text>
      <BtnFilled onPress={goToHost} btnStyles={styles.btn}>
        Host
      </BtnFilled>
      <BtnSimple onPress={goToClient} btnStyles={styles.btn}>
        Client
      </BtnSimple>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingTop: '40%',
    flex: 1,
    backgroundColor: 'white',
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
