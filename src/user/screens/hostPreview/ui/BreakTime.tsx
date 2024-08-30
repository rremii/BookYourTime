import { WorkingTime } from '@shared/ui/WorkingTime'
import { styles } from './styles'
import { Text, View } from 'react-native'
import { useTheme } from '@shared/moduls/theme'
import { Time } from '@shared/entities/types'

interface Props {
  breakTime?: Time[]
}

export const BreakTime = ({ breakTime }: Props) => {
  const { colors } = useTheme()

  return (
    <>
      <Text
        style={[styles.sectionTitle, { color: colors.color_section_title }]}
      >
        Break time
      </Text>
      <View style={styles.paddingSection}>
        {breakTime?.map((time, index) => (
          <WorkingTime key={time.from}>
            {time.from} - {time.to}
          </WorkingTime>
        ))}
      </View>
    </>
  )
}
