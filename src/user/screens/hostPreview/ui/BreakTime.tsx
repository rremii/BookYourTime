import { WorkingTime } from '@shared/ui/WorkingTime'
import { styles } from './styles'
import { View, Text } from 'react-native'

export const BreakTime = () => {
  return (
    <>
      <Text style={styles.sectionTitle}>Break time</Text>
      <View style={styles.paddingSection}>
        <WorkingTime>1 AM - 2 PM</WorkingTime>
      </View>
    </>
  )
}
