import { Dimensions, StyleSheet, View, Text } from 'react-native'

export const LoadingCalendar = () => {
  return (
    <View style={styles.container}>
      <Text>LOADING</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
  },
})
