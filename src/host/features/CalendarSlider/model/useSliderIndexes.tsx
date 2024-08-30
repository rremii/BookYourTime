import {useEffect, useRef, useState} from 'react'
import {FlatList} from 'react-native'

export const useSliderIndexes = (initIndexes: number[]) => {
  const [scrollIndexes, setScrollIndexes] = useState<number[]>(initIndexes)
  const scrollContRef = useRef<FlatList<{ dateFrom: Date; dateTo: Date }>>(null)

  const [isCentered, setIsCentered] = useState(false)

  useEffect(() => {
    if (!scrollContRef.current || isCentered) return
    const middleIndex = Math.floor(initIndexes.length / 2)

    scrollContRef.current.scrollToIndex({
      index: middleIndex,
      animated: false,
    })

    setIsCentered(true)
  }, [scrollContRef])

  const shiftRight = () => {
    if (!scrollIndexes.length || !scrollContRef.current || !isCentered) return

    const newIndexes = [...scrollIndexes]

    const lastIndex = newIndexes[newIndexes.length - 1]
    newIndexes.push(lastIndex + 1)

    setScrollIndexes(newIndexes)
  }

  const shiftLeft = () => {
    if (!scrollIndexes.length || !scrollContRef.current || !isCentered) return

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
