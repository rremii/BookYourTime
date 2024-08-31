import { WorkingTime } from '@shared/ui/WorkingTime'
import { styles } from './styles'
import { Text, View } from 'react-native'
import { TimeRangePicker } from '@shared/moduls/timePickers/ui/TimeRangePicker'
import { TimeRange } from '@shared/moduls/timePickers/types'
import { ReactNode, useState } from 'react'
import { useTheme } from '@shared/moduls/theme'
import { Host } from '@shared/entities/host/types'
import { Time } from '@shared/entities/types'
import { UpdateHostValues } from '../Profile'
import { timeSchema } from '@shared/constants/timeSchema'
import { useModal } from '@shared/moduls/modals/useModal'
import { Toast, ToastType } from '@shared/ui/Toast'
import { timeToDate } from '@shared/utils/timeToDate'

interface Props {
  isEditing?: boolean
  workingHours?: UpdateHostValues['workHours']
  onChange: (workHours: UpdateHostValues['workHours']) => void
}

export const WorkingHours = ({ isEditing, workingHours, onChange }: Props) => {
  const { colors } = useTheme()
  // const { openModal } = useModal()

  const handleChange = (timeRange: TimeRange) => {
    const { start, end } = timeRange
    const time = {
      from: start && start.toTimeString().slice(0, 5),
      to: end && end.toTimeString().slice(0, 5),
    } as Time

    // timeSchema
    // .validate(time)
    // .then(() => {
    onChange([time])
    // })
    // .catch((e) => {
    //   const err = e as { errors: string[] }
    //   const errorMsg = err.errors[0]

    //   openModal<{
    //     type: ToastType
    //     children: ReactNode
    //   }>({
    //     name: 'TimePicker',
    //     modal: Toast,
    //     duration: 2000,
    //     props: {
    //       type: 'error',
    //       children: errorMsg,
    //     },
    //   })
    // })
  }

  // TODO: fix this
  const workingTime = workingHours?.at(0)
  const initTimeRange: TimeRange = {
    start: workingTime ? timeToDate(workingTime.from) : null,
    end: workingTime ? timeToDate(workingTime.to) : null,
  }
  const { start: startTime, end: endTime } = initTimeRange
  return (
    <>
      <Text
        style={[styles.sectionTitle, { color: colors.color_section_title }]}
      >
        {isEditing ? 'Choose working hours' : 'Working hours'}
      </Text>
      <View style={styles.paddingSection}>
        {isEditing ? (
          <>
            <TimeRangePicker initTime={initTimeRange} onChange={handleChange} />
          </>
        ) : (
          <>
            {workingHours?.map((time, index) => (
              <WorkingTime key={index}>
                from {startTime && startTime.toTimeString().slice(0, 5)} to{' '}
                {endTime && endTime.toTimeString().slice(0, 5)}
              </WorkingTime>
            ))}
          </>
        )}
      </View>
    </>
  )
}
