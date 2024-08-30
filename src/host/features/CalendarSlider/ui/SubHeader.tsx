import {useTheme} from '@shared/moduls/theme'
import {Theme} from '@shared/moduls/theme/types'
import {Dimensions, StyleSheet, Text, View} from 'react-native'

export const SubHeader = () => {
  const { colors } = useTheme()
  const styles = getStyles(colors)

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

const getStyles = (colors: Theme) => StyleSheet.create({
  container: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bcColor_standart_container
  },
  weekDay: {
    maxWidth: Math.floor(Dimensions.get('screen').width / 7), // width / daysAmount
    width: '100%',
    fontSize: 16,
    textAlign: 'center',
    color: colors.color_weekDay 
  },
})
