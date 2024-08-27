import { View, Text, StyleSheet } from 'react-native'

interface Props {
  title: string
  time: Date
}

export const EventPreview = ({ time, title }: Props) => {
  return (
    <View style={styles.event}>
      <Text style={styles.eventText} numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.eventText} numberOfLines={1}>
        {time.toTimeString().slice(0, 5)}
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  event: {
    backgroundColor: '#0a8537',
    borderRadius: 7,
    padding: 3,
    width: '100%',
  },
  eventText: {
    fontSize: 12,
    color: 'white',
  },
})
