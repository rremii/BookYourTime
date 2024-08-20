import { WorkingTime } from '@shared/ui/WorkingTime'
import { styles } from './styles'
import { Text, View } from 'react-native'
import { TimeRangePicker } from '@shared/moduls/timePickers/ui/TimeRangePicker'
import { TimeRange } from '@shared/moduls/timePickers/types'
import { useState } from 'react'

interface Props {
  isEditing?: boolean
}

export const WorkingHours = ({ isEditing }: Props) => {
  const [time, setTime] = useState<TimeRange>({
    start: null,
    end: null,
  })

  const handleChange = (time: TimeRange) => {
    setTime(time)
  }

  return (
    <>
      <Text style={styles.sectionTitle}>
        {isEditing ? 'Choose working hours' : 'Working hours'}
      </Text>
      <View style={styles.paddingSection}>
        {isEditing ? (
          <>
            <TimeRangePicker initTime={time} onChange={handleChange} />
          </>
        ) : (
          <>
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
      </View>
    </>
  )
}
