import { useTheme } from '@shared/moduls/theme/useTheme'
import { PropsWithChildren } from 'react'
import { StyleSheet, Text } from 'react-native'

interface Props extends PropsWithChildren {}

export const Tag = ({ children }: Props) => {
  const { colors } = useTheme()

  return (
    <Text
      style={[
        styles.tag,
        {
          borderColor: colors.borderColor_tags,
          color: colors.color_standart_text,
        },
      ]}
    >
      {children}
    </Text>
  )
}
const styles = StyleSheet.create({
  tag: {
    borderRadius: 10,
    paddingLeft: 7,
    paddingRight: 7,

    justifyContent: 'center',
    alignItems: 'center',

    paddingTop: 1,
    paddingBottom: 1,

    borderWidth: 1,
    fontSize: 14,
  },
})
