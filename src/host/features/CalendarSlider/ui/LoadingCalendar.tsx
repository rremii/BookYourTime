import { useTheme } from '@shared/moduls/theme/useTheme'
import { Dimensions, StyleSheet, View, Text } from 'react-native'

export const LoadingCalendar = () => {
  const { colors } = useTheme()

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.bcColor_standart_container,
          borderColor: colors.borderColor_standart,
        },
      ]}
    >
      <Text>LOADING</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    borderWidth: 1,
  },
})
