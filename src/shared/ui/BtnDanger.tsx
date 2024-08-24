import { useTheme } from '@shared/moduls/theme'
import { PropsWithChildren } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface Props extends PropsWithChildren {
  onPress?: () => void
}

export const BtnDanger = ({ onPress, children }: Props) => {
  const { colors } = useTheme()

  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor: colors.bcColor_btn_danger }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: colors.color_btn_danger }]}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 10,
    padding: 25,
    paddingTop: 7,
    paddingBottom: 7,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
  },
})
