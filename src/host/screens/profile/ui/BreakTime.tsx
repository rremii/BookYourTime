import { WorkingTime } from '@shared/ui/WorkingTime'
import { styles } from './styles'
import { Text } from 'react-native'
import { ReactNode, useState } from 'react'
import { TimeRange } from '@shared/moduls/timePickers/types'
import { TimeRangePicker } from '@shared/moduls/timePickers'
import { useTheme } from '@shared/moduls/theme'
import { UpdateHostValues } from '../Profile'
import { useModal } from '@shared/moduls/modals/useModal'
import { timeSchema } from '@shared/constants/timeSchema'
import { Time } from '@shared/entities/types'
import { Toast, ToastType } from '@shared/ui/Toast'

interface Props {
  isEditing?: boolean
  // breakingHours?: UpdateHostValues['workHours']
  // onChange: (breakHours: UpdateHostValues['workHours']) => void
}

export const BreakTime = ({ isEditing }: Props) => {
  const { colors } = useTheme()
  const { openModal } = useModal()

  const handleChange = (timeRange: TimeRange) => {
    // try {
    //   const { start, end } = timeRange
    //   const time = {
    //     from: start && start.toDateString(),
    //     to: end && end.toDateString(),
    //   } as Time
    //   timeSchema.validateSync(time)
    //   onChange([time])
    // } catch (e) {
    //   const err = e as { errors: string[] }
    //   const errorMsg = err.errors[0]
    //   openModal<{
    //     type: ToastType
    //     children: ReactNode
    //   }>({
    //     name: 'TimePicker',
    //     modal: Toast,
    //     props: {
    //       type: 'error',
    //       children: errorMsg,
    //     },
    //   })
    // }
  }

  // // TODO: fix this
  // const breakingTime = breakingHours?.at(0)
  // const initBreakTimeRange: TimeRange = {
  //   start: breakingTime ? new Date(breakingTime.from) : null,
  //   end: breakingTime ? new Date(breakingTime.to) : null,
  // }

  return (
    <>
      {isEditing ? (
        <>
          <Text
            style={[styles.sectionTitle, { color: colors.color_section_title }]}
          >
            Choose Break time
          </Text>

          <TimeRangePicker
            initTime={{
              start: null,
              end: null,
            }}
            onChange={handleChange}
          />
        </>
      ) : (
        <>
          <Text
            style={[styles.sectionTitle, { color: colors.color_section_title }]}
          >
            Break hours
          </Text>
          {/* {breakingHours?.map((time, index) => (
            <WorkingTime key={index}>
              from {time.from} to {time.to}
            </WorkingTime>
          ))} */}
        </>
      )}
    </>
  )
}
