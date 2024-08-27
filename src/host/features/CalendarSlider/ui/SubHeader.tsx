import { View, Text, StyleSheet, Dimensions } from 'react-native'

export const SubHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.weekDay}>Sat</Text>
      <Text style={styles.weekDay}>Mon</Text>
      <Text style={styles.weekDay}>Tue</Text>
      <Text style={styles.weekDay}>Wed</Text>
      <Text style={styles.weekDay}>Thu</Text>
      <Text style={styles.weekDay}>Fri</Text>
      <Text style={styles.weekDay}>Sun</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 30,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  weekDay: {
    maxWidth: Math.floor(Dimensions.get('screen').width / 7), // (width - padding) / daysAmount
    width: '100%',
    fontSize: 16,
    color: '#6E6E77',
    textAlign: 'center',
  },
})
