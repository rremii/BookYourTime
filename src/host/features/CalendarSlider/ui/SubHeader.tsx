import { useTheme } from '@shared/moduls/theme/useTheme'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

export const SubHeader = () => {
  const { colors } = useTheme()

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.bcColor_standart_container },
      ]}
    >
      <Text style={[styles.weekDay, { color: colors.color_weekDay }]}>Sat</Text>
      <Text style={[styles.weekDay, { color: colors.color_weekDay }]}>Mon</Text>
      <Text style={[styles.weekDay, { color: colors.color_weekDay }]}>Tue</Text>
      <Text style={[styles.weekDay, { color: colors.color_weekDay }]}>Wed</Text>
      <Text style={[styles.weekDay, { color: colors.color_weekDay }]}>Thu</Text>
      <Text style={[styles.weekDay, { color: colors.color_weekDay }]}>Fri</Text>
      <Text style={[styles.weekDay, { color: colors.color_weekDay }]}>Sun</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  weekDay: {
    maxWidth: Math.floor(Dimensions.get('screen').width / 7), // width / daysAmount
    width: '100%',
    fontSize: 16,
    textAlign: 'center',
  },
})
