import { WorkingDay } from '@shared/ui/WorkingDay'
import { styles } from './styles'
import { Text, View } from 'react-native'
import { useState } from 'react'
import { WeekDaysPicker } from '@shared/moduls/weekDaysPicker/WeekDaysPicker'
import { WeekDays } from '@shared/moduls/weekDaysPicker/types'
import { useTheme } from '@shared/moduls/theme'
import { UpdateHostValues } from '../Profile'
import { WorkDays } from '@shared/entities/host/types'
import { weekDaysToWorkDays } from '../utils/weekDaysToWorkDays'
import { workDaysToWeekDays } from '../utils/workDaysToWeekDays'

interface Props {
  onChange: (workDays: UpdateHostValues['workDays']) => void
  workingDays?: UpdateHostValues['workDays']
  isEditing?: boolean
}

export const WorkingDays = ({ isEditing, onChange, workingDays }: Props) => {
  const { colors } = useTheme()

  const setWorkingDays = (days: WeekDays[]) => {
    onChange(weekDaysToWorkDays(days))
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
            initSelectedDays={workDaysToWeekDays(workingDays || [])}
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
            {workingDays?.map((day) => (
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
