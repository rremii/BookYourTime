import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { set } from 'react-hook-form'
import { FlatList } from 'react-native'

export const useSliderIndexes = (initIndexes: number[]) => {
  const middleIndex = Math.floor(initIndexes.length / 2)
  const lastIndex = initIndexes.length - 1
  const firstIndex = 0

  const [scrollIndexes, setScrollIndexes] = useState<number[]>(initIndexes)
  const scrollContRef = useRef<FlatList<number[]> | null>(null)

  useEffect(() => {
    if (!scrollContRef.current) return
    scrollContRef.current.scrollToIndex({
      index: middleIndex,
      animated: false,
    })
  }, [middleIndex, scrollContRef])

  const shiftRight = () => {
    if (!scrollContRef.current || !scrollIndexes.length) return

    const newIndexes = [...scrollIndexes].slice(1)
    newIndexes.push(newIndexes[newIndexes.length - 1] + 1)
    setScrollIndexes(newIndexes)

    scrollContRef.current.scrollToIndex({
      index: lastIndex - 1,
      animated: false,
    })
  }

  const shiftLeft = () => {
    if (!scrollContRef.current || !scrollIndexes.length) return

    const newIndexes = [...scrollIndexes].slice(0, -1)
    newIndexes.unshift(newIndexes[0] - 1)
    setScrollIndexes(newIndexes)

    scrollContRef.current.scrollToIndex({
      index: firstIndex + 1,
      animated: false,
    })
  }

  return { scrollIndexes, scrollContRef, shiftLeft, shiftRight }
}
