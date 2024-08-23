import { useTheme } from '@shared/moduls/theme/useTheme'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
  title: string
  time: Date
}

export const EventPreview = ({ time, title }: Props) => {
  const { colors } = useTheme()

  return (
    <View style={[styles.event, { backgroundColor: colors.bcColor_event }]}>
      <Text
        style={[styles.eventText, { color: colors.color_event }]}
        numberOfLines={1}
      >
        {title}
      </Text>
      <Text
        style={[styles.eventText, { color: colors.color_event }]}
        numberOfLines={1}
      >
        {time.toTimeString().slice(0, 5)}
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  event: {
    borderRadius: 7,
    padding: 3,
    width: '100%',
  },
  eventText: {
    fontSize: 12,
  },
})
