import { useTheme } from '@shared/moduls/theme'
import { PropsWithChildren } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Header = ({ children }: PropsWithChildren) => {
  const { colors } = useTheme()

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.bcColor_standart_container },
      ]}
    >
      <Text style={[styles.text, { color: colors.color_standart_text }]}>
        {children}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
})
