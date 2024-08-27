import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
  date: Date
}

export const Header = ({ date }: Props) => {
  const { colors } = useTheme()
  const styles = getStyles(colors)

  return (
    <View style={styles.container}>
      <Text style={styles.year}>
        {date.getFullYear()}
      </Text>
      <Text style={styles.month}>
        {date.toLocaleString('default', { month: 'long' })}
      </Text>
    </View>
  )
}

const getStyles = (colors: Theme) => StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    backgroundColor: colors.bcColor_standart_container
  },
  year: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.color_standart_text
  },
  month: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.color_standart_text
  },
})
