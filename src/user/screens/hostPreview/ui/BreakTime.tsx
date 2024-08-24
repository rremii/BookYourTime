import { WorkingTime } from '@shared/ui/WorkingTime'
import { styles } from './styles'
import { Text, View } from 'react-native'
import { useTheme } from '@shared/moduls/theme'

export const BreakTime = () => {
  const { colors } = useTheme()

  return (
    <>
      <Text
        style={[styles.sectionTitle, { color: colors.color_section_title }]}
      >
        Break time
      </Text>
      <View style={styles.paddingSection}>
        <WorkingTime>1 AM - 2 PM</WorkingTime>
      </View>
    </>
  )
}
