import { View, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'
import { WorkingDay } from '@shared/ui/WorkingDay'
import { weekDays } from './weekDays'

interface Props {
  onChange: (days: string[]) => void
}

export const WeekDaysPicker = ({ onChange }: Props) => {
  const [selectedDays, setSelectedDays] = useState<string[]>([])

  const selectDay = (day: string) => {
    setSelectedDays(
      selectedDays.includes(day)
        ? selectedDays.filter((d) => d !== day)
        : [...selectedDays, day],
    )
  }

  useEffect(() => {
    onChange(selectedDays)
  }, [selectedDays])

  return (
    <View
      style={[
        {
          paddingLeft: 20,
          flexDirection: 'column',
          gap: 10,
          alignItems: 'flex-start',
        },
      ]}
    >
      {weekDays.map((day) => (
        <TouchableOpacity key={day} onPress={() => selectDay(day)}>
          <WorkingDay rounded={selectedDays.includes(day)}>{day}</WorkingDay>
        </TouchableOpacity>
      ))}
    </View>
  )
}
