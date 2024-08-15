import { WorkingTime } from '@shared/ui/WorkingTime'
import { styles } from './styles'
import { View, Text } from 'react-native'

export const WorkingHours = () => {
  return (
    <>
      <Text style={styles.sectionTitle}>Working hours</Text>
      <View style={styles.paddingSection}>
        <WorkingTime>6 AM - 10 PM</WorkingTime>
      </View>
    </>
  )
}
