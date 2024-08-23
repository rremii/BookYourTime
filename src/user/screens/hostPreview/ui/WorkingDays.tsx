import { WorkingDay } from '@shared/ui/WorkingDay'
import { styles } from './styles'
import { Text, View } from 'react-native'
import { useTheme } from '@shared/moduls/theme/useTheme'

export const WorkingDays = () => {
  const { colors } = useTheme()

  return (
    <>
      <Text
        style={[styles.sectionTitle, { color: colors.color_section_title }]}
      >
        Working days
      </Text>
      <View style={[styles.sectionContainer, styles.paddingSection]}>
        <WorkingDay rounded>Monday</WorkingDay>
        <WorkingDay rounded>Monday</WorkingDay>
        <WorkingDay rounded>Monday</WorkingDay>
        <WorkingDay rounded>Monday</WorkingDay>
        <WorkingDay rounded>Monday</WorkingDay>
      </View>
    </>
  )
}
