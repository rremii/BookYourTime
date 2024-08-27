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

const initialScrollIndexes: number[] = [-3, -2, -1, 0, 1, 2, 3]

export const CalendarSlider = () => {
  const { scrollIndexes, shiftLeft, shiftRight, scrollContRef } =
    useSliderIndexes(initialScrollIndexes)

  const monthsDates = scrollIndexes.map((index) => timeGap.GetMonthGap(index))

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollX = event.nativeEvent.contentOffset.x
    if (scrollX === 0) {
      shiftLeft()
    }
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
        renderItem={({ item: month, index }) => (
          <>
            <Calendar
              dateFrom={month.dateFrom.toString()}
              dateTo={month.dateTo.toString()}
              calendarId={scrollIndexes[index]}
            />
          </>
        )}
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
