import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'
import { PropsWithChildren } from 'react'
import { StyleSheet, Text } from 'react-native'

interface Props extends PropsWithChildren {
  rounded?: boolean
}

export const WorkingDay = ({ children, rounded = false }: Props) => {
  const { colors } = useTheme()
  const styles = getStyles(colors)

  const workDayStyle = rounded ? styles.roundedWorkingDay
    : styles.workingDay

  return (
    <Text style={workDayStyle}>
      {children}
    </Text>
  )
}
const getStyles = (colors: Theme) => StyleSheet.create({
  roundedWorkingDay: {
    borderWidth: 1,
    padding: 7,
    borderRadius: 15,
    paddingTop: 3,
    paddingBottom: 3,
    color: colors.color_rounded_work,
    borderColor: colors.borderColor_standart,
  },
  workingDay: {
    color: colors.color_standart_work
  }
})
