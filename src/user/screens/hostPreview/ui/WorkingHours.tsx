import { WorkingTime } from '@shared/ui/WorkingTime'
import { styles } from './styles'
import { Text, View } from 'react-native'
import { useTheme } from '@shared/moduls/theme'
import { Host } from '@shared/entities/host/types'

interface Props {
  workingHours?: Host['workHours']
}

export const WorkingHours = ({ workingHours }: Props) => {
  const { colors } = useTheme()
  return (
    <>
      <Text
        style={[styles.sectionTitle, { color: colors.color_section_title }]}
      >
        Working hours
      </Text>
      <View style={styles.paddingSection}>
        {workingHours?.map((timeRange, index) => (
          <WorkingTime key={timeRange.from}>
            {timeRange.from} - {timeRange.to}
          </WorkingTime>
        ))}
      </View>
    </>
  )
}
