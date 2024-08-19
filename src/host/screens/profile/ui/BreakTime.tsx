import { WorkingTime } from '@shared/ui/WorkingTime'
import { styles } from './styles'
import { View, Text } from 'react-native'
import { useState } from 'react'
import { TimeRange } from '@shared/moduls/timePickers/types'
import { TimeRangePicker } from '@shared/moduls/timePickers'

interface Props {
  isEditing?: boolean
}

export const BreakTime = ({ isEditing }: Props) => {
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
          <Text style={styles.sectionTitle}>Choose Break time</Text>

          <TimeRangePicker initTime={time} onChange={handleChange} />
        </>
      ) : (
        <>
          <Text style={styles.sectionTitle}>Break time</Text>
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
