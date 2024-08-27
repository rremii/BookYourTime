import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'
import { PropsWithChildren } from 'react'
import { StyleSheet, Text } from 'react-native'

interface Props extends PropsWithChildren {}

export const Tag = ({ children }: Props) => {
  const { colors } = useTheme()
  const styles = getStyles(colors)

  return (
    <Text style={styles.tag}>
      {children}
    </Text>
  )
}
const getStyles = (colors: Theme) => StyleSheet.create({
  tag: {
    borderRadius: 10,
    paddingLeft: 7,
    paddingRight: 7,
    borderColor: colors.borderColor_tags,
    color: colors.color_standart_text,

    justifyContent: 'center',
    alignItems: 'center',

    paddingTop: 1,
    paddingBottom: 1,

    borderWidth: 1,
    fontSize: 14,
  },
})
