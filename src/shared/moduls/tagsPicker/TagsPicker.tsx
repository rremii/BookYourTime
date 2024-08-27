import React, { useState } from 'react'
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputSubmitEditingEventData,
  TouchableOpacity,
  View,
} from 'react-native'
import { Tag } from '@shared/ui/Tag'
import Cross from '@icons/cross.svg'
import { useTheme } from '../theme'
import { Theme } from '../theme/types'

interface Props {
  tags: string[]
  onChange?: (tags: string[]) => void
}
export const TagsPicker = ({ onChange, tags = [] }: Props) => {
  const { colors } = useTheme()
  const styles = getStyles(colors)

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
            {tag} <Cross width={10} height={10} color={colors.color_cross} />
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

const getStyles = (colors: Theme) =>
  StyleSheet.create({
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
      borderColor: colors.borderColor_tags,
      borderWidth: 1,
    },
    input: {
      height: 30,
      borderRadius: 20,
      paddingLeft: 7,
      paddingRight: 7,
      paddingTop: 3,
      paddingBottom: 3,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: colors.borderColor_tags,
    },
    btn: {
      width: 30,
      height: 30,
      borderRadius: 20,
      paddingLeft: 7,
      paddingRight: 7,
      paddingTop: 3,
      paddingBottom: 3,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: colors.borderColor_tags,
    },
    text: {
      width: 35,
      height: 35,
      textAlign: 'center',
      fontSize: 25,
      color: colors.color_standart_text,
    },
  })
