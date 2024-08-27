// import { Dimensions, StyleSheet, ScrollView } from 'react-native'
// import { Calendar } from './ui/Calendar'
// import { useSliderIndexes } from './model/useSliderIndexes'
// import { timeGap } from '@host/shared/utils/TimeGap'
// import { FlatList } from 'react-native-bidirectional-infinite-scroll'

// const initialScrollIndexes: number[] = [-2, -1, 0, 1, 2]

// export const CalendarSlider = () => {
//   // const { scrollIndexes, shiftLeft, shiftRight, scrollContRef } =
//   //   useSliderIndexesCopy(initialScrollIndexes)

//   const { scrollIndexes, shiftLeft, shiftRight, scrollContRef } =
//     useSliderIndexes(initialScrollIndexes)

//   const monthsDates = scrollIndexes.map((index) => timeGap.GetMonthGap(index))

//   const onRightSideReach = async () => {
//     shiftRight()
//   }
//   const onLeftSideReach = async () => {
//     console.log('load')
//     shiftLeft()
//   }

//   const calendarWidth = Dimensions.get('window').width
//   const onScroll = (event: {
//     nativeEvent: { contentOffset: { x: number } }
//   }) => {
//     const scrollX = event.nativeEvent.contentOffset.x

//     // console.log(scrollX)
//     if (scrollX === 0) {
//       console.log('load')
//       shiftLeft(scrollX)
//     }
//   }

//   return (
//     <>
//       {/* <ScrollView
//         ref={scrollContRef}
//         contentContainerStyle={styles.scrollContainer}
//         horizontal
//         pagingEnabled
//         onScroll={onScroll}
//         // scrollEventThrottle={30}
//         showsHorizontalScrollIndicator={true}
//       >
//         {monthsDates.map((month, index) => (
//           <Calendar
//             key={month.dateFrom.toUTCString()}
//             dateFrom={month.dateFrom}
//             dateTo={month.dateTo}
//             calendarId={scrollIndexes[index]}
//           />
//         ))}
//       </ScrollView> */}

//       <FlatList
//         initialNumToRender={initialScrollIndexes.length}
//         horizontal
//         pagingEnabled
//         // onScroll={onScroll}
//         onEndReached={onRightSideReach}
//         onEndReachedThreshold={0}
//         onStartReachedThreshold={0}
//         onStartReached={onLeftSideReach}
//         onScrollToIndexFailed={() => console.log('onScrollToIndexFailed')}
//         showsHorizontalScrollIndicator={true}
//         getItemLayout={(_, index) => ({
//           length: calendarWidth,
//           offset: calendarWidth * index,
//           index,
//         })}
//         ref={scrollContRef}
//         keyExtractor={(item) => item.dateFrom.toUTCString()}
//         contentContainerStyle={styles.scrollContainer}
//         data={monthsDates}
//         // ListHeaderComponent={LoadingCalendar}
//         // ListFooterComponent={LoadingCalendar}
//         renderItem={({ item: month, index }) => (
//           <Calendar
//             dateFrom={month.dateFrom}
//             dateTo={month.dateTo}
//             calendarId={scrollIndexes[index]}
//           />
//         )}
//       />
//     </>
//   )
// }

// const styles = StyleSheet.create({
//   scrollContainer: {
//     position: 'relative',
//     height: '100%',
//   },
// })

import {
  Dimensions,
  FlatList,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native'
import { Calendar } from './ui/Calendar'
import { useSliderIndexes } from './model/useSliderIndexes'
import { timeGap } from '@host/shared/utils/TimeGap'
import { LoadingCalendar } from './ui/LoadingCalendar'
import { useSliderIndexesCopy } from './model/useSliderIndexes copy'

const initialScrollIndexes: number[] = [-3, -2, -1, 0, 1, 2, 3]

export const CalendarSlider = () => {
  // const { scrollIndexes, shiftLeft, shiftRight, scrollContRef } =
  //   useSliderIndexesCopy(initialScrollIndexes)

  const { scrollIndexes, shiftLeft, shiftRight, scrollContRef } =
    useSliderIndexes(initialScrollIndexes)

  const monthsDates = scrollIndexes.map((index) => timeGap.GetMonthGap(index))

  const onRightSideReach = () => {
    shiftRight()
  }
  const onLeftSideReach = (info: { distanceFromStart: number }) => {
    console.log('load')
    shiftLeft()
  }

  const calendarWidth = Dimensions.get('window').width
  const onScroll = (event: {
    nativeEvent: { contentOffset: { x: number } }
  }) => {
    const scrollX = event.nativeEvent.contentOffset.x

    // console.log(scrollX)
    if (scrollX === 0) {
      console.log('load')
      shiftLeft(scrollX)
    }
  }

  return (
    <>
      {/* <ScrollView
        ref={scrollContRef}
        contentContainerStyle={styles.scrollContainer}
        horizontal
        pagingEnabled
        onScroll={onScroll}
        // scrollEventThrottle={30}
        showsHorizontalScrollIndicator={true}
      >
        {monthsDates.map((month, index) => (
          <Calendar
            key={month.dateFrom.toUTCString()}
            dateFrom={month.dateFrom}
            dateTo={month.dateTo}
            calendarId={scrollIndexes[index]}
          />
        ))}
      </ScrollView> */}

      <FlatList
        initialNumToRender={initialScrollIndexes.length}
        horizontal
        pagingEnabled
        onScroll={onScroll}
        // onEndReached={onRightSideReach}
        onEndReachedThreshold={0}
        onStartReachedThreshold={0}
        // onStartReached={onLeftSideReach}
        onScrollToIndexFailed={() => console.log('onScrollToIndexFailed')}
        showsHorizontalScrollIndicator={true}
        getItemLayout={(_, index) => ({
          length: calendarWidth,
          offset: calendarWidth * index,
          index,
        })}
        ref={scrollContRef}
        keyExtractor={(item) => item.dateFrom.toUTCString()}
        contentContainerStyle={styles.scrollContainer}
        data={monthsDates}
        // ListHeaderComponent={LoadingCalendar}
        // ListFooterComponent={LoadingCalendar}
        renderItem={({ item: month, index }) => (
          <Calendar
            dateFrom={month.dateFrom}
            dateTo={month.dateTo}
            calendarId={scrollIndexes[index]}
          />
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
