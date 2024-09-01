import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
} from 'react-native'
import { Calendar } from './ui/Calendar'
import { useSliderIndexes } from './model/useSliderIndexes'
import { timeGap } from '@host/shared/utils/TimeGap'
import React from 'react'
import { useGetBookings } from '@host/entities/booking/model/useGetBookings'

const initialScrollIndexes: number[] = [-3, -2, -1, 0, 1, 2, 3]

export const CalendarSlider = () => {
  const { bookings } = useGetBookings()
  const { scrollIndexes, shiftLeft, shiftRight, scrollContRef } =
    useSliderIndexes(initialScrollIndexes)

  const monthsDates = scrollIndexes.map((index) => timeGap.GetMonthGap(index))

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollX = event.nativeEvent.contentOffset.x
    if (scrollX === 0) shiftLeft()
  }

  const calendarWidth = Dimensions.get('window').width
  return (
    <>
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={true}
        ref={scrollContRef}
        getItemLayout={(_, index) => ({
          length: calendarWidth,
          offset: calendarWidth * index,
          index,
        })}
        onScroll={onScroll}
        scrollEventThrottle={16}
        onEndReachedThreshold={1.9}
        onEndReached={shiftRight}
        keyExtractor={(item) => item.dateFrom.toUTCString()}
        contentContainerStyle={styles.scrollContainer}
        data={monthsDates}
        renderItem={({ item: month, index }) => {
          const monthBookings = bookings?.filter(
            ({ date }) =>
              month.dateFrom <= new Date(date) &&
              month.dateTo >= new Date(date),
          )
          return (
            <>
              <Calendar
                bookings={monthBookings}
                dateFrom={month.dateFrom.toString()}
                dateTo={month.dateTo.toString()}
                calendarId={scrollIndexes[index]}
              />
            </>
          )
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    position: 'relative',
    height: '100%',
  },
})
