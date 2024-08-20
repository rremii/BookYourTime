import { WorkingDay } from '@shared/ui/WorkingDay'
import { styles } from './styles'
import { Text, View } from 'react-native'

export const WorkingDays = () => {
  return (
    <>
      <Text style={styles.sectionTitle}>Working days</Text>
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
