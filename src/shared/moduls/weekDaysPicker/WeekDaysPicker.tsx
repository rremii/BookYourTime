import { TouchableOpacity, View } from 'react-native'
import { useEffect, useState } from 'react'
import { WorkingDay } from '@shared/ui/WorkingDay'
import { weekDays } from './weekDays'
import { WeekDays } from './types'

interface Props {
  initSelectedDays: WeekDays[]
  onChange: (days: WeekDays[]) => void
}

export const WeekDaysPicker = ({ onChange, initSelectedDays }: Props) => {
  const [selectedDays, setSelectedDays] = useState<WeekDays[]>(initSelectedDays)

  useEffect(() => {
    setSelectedDays(initSelectedDays)
  }, [initSelectedDays])

  const selectDay = (day: WeekDays) => {
    const newSelectedDays = selectedDays.includes(day)
      ? selectedDays.filter((selectedDay) => selectedDay !== day)
      : [...selectedDays, day]

    onChange(newSelectedDays)
    setSelectedDays(newSelectedDays)
  }

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
