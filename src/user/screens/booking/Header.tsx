import {useTheme} from '@shared/moduls/theme'
import {Theme} from '@shared/moduls/theme/types'
import {PropsWithChildren} from 'react'
import {StyleSheet, Text, View} from 'react-native'

export const Header = ({ children }: PropsWithChildren) => {
  const { colors } = useTheme()
  const styles = getStyles(colors)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {children}
      </Text>
    </View>
  )
}

const getStyles = (colors: Theme) =>  StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bcColor_standart_container 
  },
  text: {
    fontSize: 16,
    color: colors.color_standart_text
  },
})
