import { WorkingTime } from '@shared/ui/WorkingTime'
import { styles } from './styles'
import { Text } from 'react-native'
import { useState } from 'react'
import { TimeRange } from '@shared/moduls/timePickers/types'
import { TimeRangePicker } from '@shared/moduls/timePickers'
import { useTheme } from '@shared/moduls/theme'

interface Props {
  isEditing?: boolean
}

export const BreakTime = ({ isEditing }: Props) => {
  const { colors } = useTheme()

  const [time, setTime] = useState<TimeRange>({
    start: null,
    end: null,
  })

  const handleChange = (time: TimeRange) => {
    setTime(time)
  }

  return (
    <>
      {isEditing ? (
        <>
          <Text
            style={[styles.sectionTitle, { color: colors.color_section_title }]}
          >
            Choose Break time
          </Text>

          <TimeRangePicker initTime={time} onChange={handleChange} />
        </>
      ) : (
        <>
          <Text
            style={[styles.sectionTitle, { color: colors.color_section_title }]}
          >
            Break time
          </Text>
          <WorkingTime>
            {' '}
            {time.start
              ? time.start.toTimeString().slice(0, 5)
              : '00:00 AM'}{' '}
            {' - '}
            {time.end ? time.end.toTimeString().slice(0, 5) : '00:00 PM'}
          </WorkingTime>
        </>
      )}
    </>
  )
}
