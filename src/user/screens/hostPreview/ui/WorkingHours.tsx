import { WorkingTime } from '@shared/ui/WorkingTime'
import { styles } from './styles'
import { Text, View } from 'react-native'
import { useTheme } from '@shared/moduls/theme/useTheme'

export const WorkingHours = () => {
  const { colors } = useTheme()

  return (
    <>
      <Text
        style={[styles.sectionTitle, { color: colors.color_section_title }]}
      >
        Working hours
      </Text>
      <View style={styles.paddingSection}>
        <WorkingTime>6 AM - 10 PM</WorkingTime>
      </View>
    </>
  )
}
