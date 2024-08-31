import {WorkingDay} from '@shared/ui/WorkingDay'
import {styles} from './styles'
import {Text, View} from 'react-native'
import {useTheme} from '@shared/moduls/theme'
import {Host} from '@shared/entities/host/types'

interface Props {
  workingDays?: Host['workDays']
}

export const WorkingDays = ({ workingDays }: Props) => {
  const { colors } = useTheme()

  return (
    <>
      <Text
        style={[styles.sectionTitle, { color: colors.color_section_title }]}
      >
        Working days
      </Text>
      <View style={[styles.sectionContainer, styles.paddingSection]}>
        {workingDays?.map((day, index) => (
          <WorkingDay key={day}>{day}</WorkingDay>
        ))}
      </View>
    </>
  )
}
