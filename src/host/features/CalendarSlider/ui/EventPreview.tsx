import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
  title: string
  time: Date
}

export const EventPreview = ({ time, title }: Props) => {
  const { colors } = useTheme()
  const styles = getStyles(colors)

  return (
    <View style={styles.event}>
      <Text
        style={styles.eventText}
        numberOfLines={1}
      >
        {title}
      </Text>
      <Text
        style={styles.eventText}
        numberOfLines={1}
      >
        {time.toTimeString().slice(0, 5)}
      </Text>
    </View>
  )
}
const getStyles = (colors: Theme) => StyleSheet.create({
  event: {
    borderRadius: 7,
    padding: 3,
    width: '100%',
    backgroundColor: colors.bcColor_event
  },
  eventText: {
    fontSize: 12,
    color: colors.color_event
  },
})
