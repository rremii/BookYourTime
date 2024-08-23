import { useTheme } from '@shared/moduls/theme/useTheme'
import { PropsWithChildren } from 'react'
import { StyleSheet, Text } from 'react-native'

interface Props extends PropsWithChildren {
  rounded?: boolean
}

export const WorkingDay = ({ children, rounded = false }: Props) => {
  const { colors } = useTheme()
  const workDayStyle = rounded
    ? [
        styles.roundedWorkingDay,
        {
          color: colors.color_rounded_work,
          borderColor: colors.borderColor_standart,
        },
      ]
    : { color: colors.color_standart_work }

  return (
    <Text style={[workDayStyle, { color: colors.color_standart_text }]}>
      {children}
    </Text>
  )
}
const styles = StyleSheet.create({
  roundedWorkingDay: {
    borderWidth: 1,
    padding: 7,
    borderRadius: 15,
    paddingTop: 3,
    paddingBottom: 3,
  },
})
