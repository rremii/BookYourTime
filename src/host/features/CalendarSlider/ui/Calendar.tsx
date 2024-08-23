import {
  Dimensions,
  LayoutChangeEvent,
  StyleSheet,
  View,
  Text,
} from 'react-native'
import { CalendarCell } from './CalendarCell'
import { GetMonthDays } from '@host/shared/utils/GetMonthDays'
import { SubHeader } from './SubHeader'
import { Header } from './Header'
import { memo, useEffect, useRef, useState } from 'react'
import { useTheme } from '@shared/moduls/theme/useTheme'

interface Props {
  calendarId: number
  dateFrom: string
  dateTo: string
}

export const Calendar = memo(({ calendarId, dateFrom, dateTo }: Props) => {
  const { colors } = useTheme()

  const { days, weekDayShift } = GetMonthDays(dateFrom)

  const [active, setActive] = useState(false)

  useEffect(() => {
    setActive(true)
  }, [])
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.bcColor_standart_container,
          borderColor: colors.borderColor_standart,
        },
      ]}
    >
      {active ? (
        <>
          <Header date={new Date(dateFrom)} />
          <SubHeader />
          <View
            style={[
              styles.monthDaysContainer,
              { backgroundColor: colors.bcColor_standart_container },
            ]}
          >
            {/* +1 due to we start at sunday */}
            {weekDayShift + 1 < 6
              ? new Array(weekDayShift + 1)
                  .fill(null)
                  .map((_, index) => (
                    <View key={index} style={styles.emptyCell} />
                  ))
              : null}
            {days.map(({ dateFrom, dateTo }) => (
              <CalendarCell
                key={dateFrom.toUTCString()}
                dateFrom={dateFrom}
                dateTo={dateTo}
              />
            ))}
          </View>
        </>
      ) : (
        <View style={styles.loader}>
          <Text style={styles.loaderText}>LOADING</Text>
        </View>
      )}
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,

    borderWidth: 1,
  },
  monthDaysContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  emptyCell: {
    maxWidth: Math.floor(Dimensions.get('screen').width / 7) - 1, // width - / daysAmount
    width: '100%',
    height: '15%',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
