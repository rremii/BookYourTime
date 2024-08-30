import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'
import { PropsWithChildren } from 'react'
import { StyleSheet, Text } from 'react-native'

interface Props extends PropsWithChildren {}

export const Tag = ({ children }: Props) => {
  const { colors } = useTheme()
  const styles = getStyles(colors)

  return <Text style={styles.tag}>{children}</Text>
}
const getStyles = (colors: Theme) =>
  StyleSheet.create({
    tag: {
      borderRadius: 15,
      paddingLeft: 9,
      paddingRight: 9,
      borderColor: colors.borderColor_tags,
      color: colors.color_standart_text,

      justifyContent: 'center',
      alignItems: 'center',

      // paddingTop: 1,
      // paddingBottom: 1,

      paddingTop: 3,
      paddingBottom: 3,
      borderWidth: 1,
      fontSize: 14,
    },
  })
