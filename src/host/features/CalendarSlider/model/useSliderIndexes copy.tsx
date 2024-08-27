import { useEffect, useRef, useState } from 'react'
import { Dimensions, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export const useSliderIndexesCopy = (initIndexes: number[]) => {
  const middleIndex = Math.floor(initIndexes.length / 2)
  const lastIndex = initIndexes.length - 1
  const firstIndex = 0

  const [scrollIndexes, setScrollIndexes] = useState<number[]>(initIndexes)
  // const scrollContRef = useRef<FlatList<{ dateFrom: Date; dateTo: Date }>>(null)
  const scrollContRef = useRef<ScrollView>(null)

  useEffect(() => {
    if (!scrollContRef.current) return
    scrollContRef.current.scrollTo({
      x: middleIndex * 400,
      animated: false,
    })
  }, [middleIndex, scrollContRef])

  const shiftRight = () => {
    if (!scrollIndexes.length) return

    const newIndexes = [...scrollIndexes]

    const lastIndex = newIndexes[newIndexes.length - 1]
    newIndexes.push(lastIndex + 1)
    // newIndexes.push(lastIndex + 2)
    // newIndexes.push(lastIndex + 3)
    // newIndexes.push(lastIndex + 4)
    // newIndexes.push(lastIndex + 5)

    setScrollIndexes(newIndexes)

    // scrollContRef.current.scrollToIndex({
    // index: lastIndex - 1,
    // animated: false,
    // })
  }
  const calendarWidth = Dimensions.get('window').width

  const shiftLeft = (distanceFromStart: number) => {
    if (!scrollIndexes.length || !scrollContRef.current) return

    const newIndexes = [...scrollIndexes]

    const firstIndex = newIndexes[0]
    newIndexes.unshift(firstIndex - 1)

    setScrollIndexes(newIndexes)
    console.log(distanceFromStart)
    scrollContRef.current.scrollTo({
      x: calendarWidth,
      animated: false,
    })
  }

  return { scrollIndexes, scrollContRef, shiftLeft, shiftRight }
}
