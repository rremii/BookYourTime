import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import SelectBox, { Item } from 'react-native-multi-selectbox-typescript'
import { initTags } from './constants'

interface Props {
  tags: string[]
  onChange?: (tags: string[]) => void
}

export const TagsPicker = ({ onChange, tags = [] }: Props) => {
  function onRemove(item: Item) {
    if (!onChange) return

    onChange(tags.filter((tag) => tag !== item.item))
  }
  function onSelect(item: Item) {
    if (!onChange) return

    if (tags.find((tag) => tag === item.item)) onRemove(item)
    else onChange([...tags, item.item])
  }

  return (
    <SelectBox
      containerStyle={{
        width: '100%',
        alignItems: 'center',
      }}
      selectedItemStyle={{ backgroundColor: '#0A8537' }}
      multiOptionContainerStyle={{ backgroundColor: '#494949' }}
      multiListEmptyLabelStyle={{ color: '#000000' }}
      optionsLabelStyle={{ color: '#000000' }}
      labelStyle={{ display: 'none' }}
      options={initTags.map((tag, index) => ({ item: tag, id: index }))}
      selectedValues={tags.map((tag, index) => ({ item: tag, id: index }))}
      onMultiSelect={onSelect}
      onTapClose={onRemove}
      hideInputFilter
      isMulti
    />
  )
}
