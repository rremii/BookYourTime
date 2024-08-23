import { useTheme } from '@shared/moduls/theme/useTheme'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
  date: Date
}

export const Header = ({ date }: Props) => {
  const { colors } = useTheme()

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.bcColor_standart_container },
      ]}
    >
      <Text style={[styles.year, { color: colors.color_standart_text }]}>
        {date.getFullYear()}
      </Text>
      <Text style={[styles.month, { color: colors.color_standart_text }]}>
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
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  year: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  month: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})
