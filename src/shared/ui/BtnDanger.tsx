import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'
import { PropsWithChildren } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface Props extends PropsWithChildren {
  onPress?: () => void
}

export const BtnDanger = ({ onPress, children }: Props) => {
  const { colors } = useTheme()
  const styles = getStyles(colors)

  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={onPress}
    >
      <Text style={styles.text}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const getStyles = (colors: Theme) => StyleSheet.create({
  btn: {
    borderRadius: 10,
    padding: 25,
    paddingTop: 7,
    paddingBottom: 7,
    backgroundColor: colors.bcColor_btn_danger
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.color_btn_danger
  },
})
