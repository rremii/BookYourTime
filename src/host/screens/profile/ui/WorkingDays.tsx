import { WorkingDay } from '@shared/ui/WorkingDay'
import { styles } from './styles'
import { Text, View } from 'react-native'
import { useState } from 'react'
import { WeekDaysPicker } from '@shared/moduls/weekDaysPicker/WeekDaysPicker'
import { WeekDays } from '@shared/moduls/weekDaysPicker/types'

interface Props {
  isEditing?: boolean
}

export const WorkingDays = ({ isEditing }: Props) => {
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
          <Text style={styles.sectionTitle}>Choose working days</Text>
          <WeekDaysPicker
            initSelectedDays={selectedDays}
            onChange={setWorkingDays}
          />
        </>
      ) : (
        <>
          <Text style={styles.sectionTitle}>Working days</Text>
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
