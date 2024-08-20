import { StyleSheet, Text, View } from 'react-native'

interface Props {
  date: Date
}

export const Header = ({ date }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.year}>{date.getFullYear()}</Text>
      <Text style={styles.month}>
        {date.toLocaleString('default', { month: 'long' })}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  year: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  month: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
})
