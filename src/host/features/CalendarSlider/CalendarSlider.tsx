import { Dimensions, FlatList, StyleSheet } from 'react-native'
import { Calendar } from './ui/Calendar'
import { useSliderIndexes } from './model/useSliderIndexes'
import { timeGap } from '@host/shared/utils/TimeGap'

const initialScrollIndexes: number[] = [-2, -1, 0, 1, 2]

export const CalendarSlider = () => {
  const { scrollIndexes, shiftLeft, shiftRight, scrollContRef } =
    useSliderIndexes(initialScrollIndexes)

  const monthsDates = scrollIndexes.map((index) => timeGap.GetMonthGap(index))

  const onRightSideReach = () => {
    shiftRight()
  }
  const onLeftSideReach = () => {
    shiftLeft()
  }
  const calendarWidth = Dimensions.get('window').width
  return (
    <>
      <FlatList
        initialNumToRender={initialScrollIndexes.length}
        horizontal
        pagingEnabled
        onEndReached={onRightSideReach}
        onStartReached={onLeftSideReach}
        onScrollToIndexFailed={() => console.log('onScrollToIndexFailed')}
        showsHorizontalScrollIndicator={true}
        ref={scrollContRef}
        getItemLayout={(_, index) => ({
          length: calendarWidth,
          offset: calendarWidth * index,
          index,
        })}
        contentContainerStyle={styles.scrollContainer}
        data={monthsDates}
        renderItem={({ item: month, index }) => (
          <Calendar
            dateFrom={month.dateFrom}
            dateTo={month.dateTo}
            key={month.dateFrom.getTime()}
            calendarId={scrollIndexes[index]}
          />
        )}
      />
    </>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    height: '100%',
  },
})
