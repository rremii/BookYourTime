import { WorkingDay } from '@shared/ui/WorkingDay'
import { styles } from './styles'
import { Text, View } from 'react-native'
import { useState } from 'react'
import { WeekDaysPicker } from '@shared/moduls/weekDaysPicker/WeekDaysPicker'
import { WeekDays } from '@shared/moduls/weekDaysPicker/types'
import { useTheme } from '@shared/moduls/theme'

interface Props {
  isEditing?: boolean
}

export const WorkingDays = ({ isEditing }: Props) => {
  const { colors } = useTheme()

  const [selectedDays, setSelectedDays] = useState<WeekDays[]>([
    'Friday',
    'Saturday',
  ])

  const setWorkingDays = (days: WeekDays[]) => {
    setSelectedDays(days)
  }

  return (
    <>
      {isEditing ? (
        <>
          <Text
            style={[styles.sectionTitle, { color: colors.color_section_title }]}
          >
            Choose working days
          </Text>
          <WeekDaysPicker
            initSelectedDays={selectedDays}
            onChange={setWorkingDays}
          />
        </>
      ) : (
        <>
          <Text
            style={[styles.sectionTitle, { color: colors.color_section_title }]}
          >
            Working days
          </Text>
          <View style={[styles.sectionContainer, styles.paddingSection]}>
            {selectedDays.map((day) => (
              <WorkingDay key={day} rounded>
                {day}
              </WorkingDay>
            ))}
          </View>
        </>
      )}
    </>
  )
}
