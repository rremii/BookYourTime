import { useEffect, useRef, useState } from 'react'
import { Dimensions, FlatList } from 'react-native'

export const useSliderIndexes = (initIndexes: number[]) => {
  const middleIndex = Math.floor(initIndexes.length / 2)
  const lastIndex = initIndexes.length - 1
  const firstIndex = 0

  const [scrollIndexes, setScrollIndexes] = useState<number[]>(initIndexes)
  const scrollContRef = useRef<FlatList<{ dateFrom: Date; dateTo: Date }>>(null)

  useEffect(() => {
    if (!scrollContRef.current) return
    scrollContRef.current.scrollToIndex({
      index: middleIndex,
      animated: false,
    })
  }, [middleIndex, scrollContRef])

  const shiftRight = () => {
    if (!scrollIndexes.length || !scrollContRef.current) return

    const newIndexes = [...scrollIndexes]

    const lastIndex = newIndexes[newIndexes.length - 1]
    newIndexes.push(lastIndex + 1)

    setScrollIndexes(newIndexes)
  }
  const calendarWidth = Dimensions.get('window').width

  const shiftLeft = () => {
    if (!scrollIndexes.length || !scrollContRef.current) return

    const newIndexes = [...scrollIndexes]

    const firstIndex = newIndexes[0]
    newIndexes.unshift(firstIndex - 1)

    setScrollIndexes(newIndexes)

    scrollContRef.current.scrollToIndex({
      index: 1,
      animated: false,
    })
  }

  return { scrollIndexes, scrollContRef, shiftLeft, shiftRight }
}
