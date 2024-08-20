import React, { useEffect, useRef, useState } from 'react'
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native'
import { Tag } from '@shared/ui/Tag'
import { StyleSheet } from 'react-native'
import Cross from '@icons/cross.svg'

interface Props {
  tags: string[]
  onChange?: (tags: string[]) => void
}
export const TagsPicker = ({ onChange, tags = [] }: Props) => {
  const [isAdding, setIsAdding] = useState(false)

  const onSubmit = (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => {
    if (!onChange) return

    const newTag = e.nativeEvent.text
    if (newTag.length > 0) {
      onChange([...tags, newTag])
    }

    setIsAdding(false)
  }
  const onRemove = (removeTag: string) => {
    if (!onChange) return
    onChange(tags.filter((tag) => tag !== removeTag))
  }

  const startAdding = () => {
    setIsAdding(true)
  }

  return (
    <View style={styles.container}>
      {tags.map((tag) => (
        <TouchableOpacity key={tag} onPress={() => onRemove(tag)}>
          <Tag>
            {tag} <Cross width={10} height={10} color="black" />
          </Tag>
        </TouchableOpacity>
      ))}

      {isAdding ? (
        <TextInput
          autoFocus={true}
          onSubmitEditing={onSubmit}
          style={styles.input}
        />
      ) : (
        <TouchableOpacity style={styles.btn} onPress={startAdding}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    flexWrap: 'wrap',
  },
  inputContainer: {
    borderRadius: 10,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 3,
    paddingBottom: 3,
    borderColor: '#0a853760',
    borderWidth: 1,
  },
  input: {
    height: 30,
    borderRadius: 20,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 3,
    paddingBottom: 3,
    borderColor: '#0a853760',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: 30,
    height: 30,
    borderRadius: 20,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 3,
    paddingBottom: 3,
    borderColor: '#0a853760',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    width: 35,
    height: 35,
    textAlign: 'center',
    color: '#000000',
    fontSize: 25,
  },
})
