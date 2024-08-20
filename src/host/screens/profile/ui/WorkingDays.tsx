import { WorkingDay } from '@shared/ui/WorkingDay'
import { styles } from './styles'
import { View, Text, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { WeekDaysPicker } from '@shared/moduls/weekDaysPicker/WeekDaysPicker'

interface Props {
  isEditing?: boolean
}

export const WorkingDays = ({ isEditing }: Props) => {
  const [selectedDays, setSelectedDays] = useState<string[]>([])

  return (
    <>
      {isEditing ? (
        <>
          <Text style={styles.sectionTitle}>Choose working days</Text>
          <WeekDaysPicker
            initSelectedDays={['Monday', 'Tuesday']}
            onChange={setSelectedDays}
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
