import { useTheme } from '@shared/moduls/theme/useTheme'
import { PropsWithChildren } from 'react'
import { StyleSheet, Text } from 'react-native'

interface Props extends PropsWithChildren {}

export const WorkingTime = ({ children }: Props) => {
  const { colors } = useTheme()
  return (
    <Text style={[styles.workingTime, { color: colors.color_work_time }]}>
      {children}
    </Text>
  )
}
const styles = StyleSheet.create({
  workingTime: {
    fontSize: 16,
    fontWeight: '500',
  },
})
