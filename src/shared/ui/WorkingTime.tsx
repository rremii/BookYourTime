import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'
import { PropsWithChildren } from 'react'
import { StyleSheet, Text } from 'react-native'

interface Props extends PropsWithChildren {}

export const WorkingTime = ({ children }: Props) => {
  const { colors } = useTheme()
  const styles = getStyles(colors)
  
  return (
    <Text style={styles.workingTime}>
      {children}
    </Text>
  )
}
const getStyles = (colors: Theme) => StyleSheet.create({
  workingTime: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.color_work_time
  },
})
