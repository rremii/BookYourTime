import { useAnimatedValue } from '@shared/utils/useAnimatedValue'
import { useEffect, useRef, useState } from 'react'
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  LayoutChangeEvent,
  Animated,
  TouchableOpacity,
  Touchable,
  TouchableHighlight,
  KeyboardTypeOptions,
} from 'react-native'

interface Props {
  isError?: boolean
  label: string
  onChangeText: (text: string) => void
  onBlur?: () => void
  keyboardType?: KeyboardTypeOptions
  value?: string
}

//FOLLOWS THE LOGIC OF NATIVE TEXT INPUT
export const InputWithLabel = ({
  isError = false,
  label,
  onBlur: handleBlur,
  onChangeText: handleChangeText,
  value,
  keyboardType,
}: Props) => {
  const [fieldHeight, setFieldHeight] = useState(40)
  const [labelHeight, setLabelHeight] = useState(20)

  const [isFocused, setIsFocused] = useState(false)
  const [inputValue, setInputValue] = useState(value || '')
  const inputRef = useRef<TextInput | null>(null)

  useEffect(() => {
    if (value || value === '') setInputValue(value)
  }, [value])

  const onTextChange = (text: string) => {
    if (value || value === '') handleChangeText(text)
    else {
      handleChangeText(text)
      setInputValue(text)
    }
  }
  const onBlur = () => {
    if (handleBlur) handleBlur()
    setIsFocused(false)
  }
  const onFocus = () => {
    setIsFocused(true)
  }

  const isAnimated = isFocused || inputValue.length > 0
  const slideX = useAnimatedValue({
    isActive: isAnimated,
    initValue: 20,
    active: {
      duration: 100,
      value: 15,
    },
    inactive: {
      duration: 100,
      value: 20,
    },
  })
  const slideY = useAnimatedValue({
    isActive: isAnimated,
    initValue: fieldHeight / 2 - labelHeight / 2,
    active: {
      duration: 100,
      value: -labelHeight / 2,
    },
    inactive: {
      duration: 100,
      value: fieldHeight / 2 - labelHeight / 2,
    },
  })

  const onLayout = (e: LayoutChangeEvent) => {
    if (e.nativeEvent.layout.height) setFieldHeight(e.nativeEvent.layout.height)
  }
  const onLabelLayout = (e: LayoutChangeEvent) => {
    if (e.nativeEvent.layout.height) setLabelHeight(e.nativeEvent.layout.height)
  }

  const styles = getStyles(isError)
  return (
    <View onLayout={onLayout} style={styles.fieldContainer}>
      <View style={styles.labelContainer} onLayout={onLayout}>
        <Animated.Text
          onLayout={onLabelLayout}
          style={[
            styles.label,
            {
              transform: [{ translateY: slideY }, { translateX: slideX }],
            },
          ]}
        >
          {label}
        </Animated.Text>
      </View>
      <TextInput
        keyboardType={keyboardType}
        onChangeText={onTextChange}
        value={inputValue}
        ref={inputRef}
        onFocus={onFocus}
        onBlur={onBlur}
        style={styles.field}
      />
    </View>
  )
}

const getStyles = (isError: boolean) =>
  StyleSheet.create({
    fieldContainer: {
      position: 'relative',
      marginBottom: 15,
      justifyContent: 'center',
      height: 40,
    },
    labelContainer: {
      pointerEvents: 'none',
      backgroundColor: 'transparent',
      zIndex: 1,
    },
    label: {
      position: 'absolute',
      top: 0,
      left: 0,
      borderRadius: 20,
      fontSize: 14,
      fontWeight: '500',
      marginBottom: 5,
      backgroundColor: 'white',
      zIndex: 1,
      paddingLeft: 7,
      paddingRight: 7,
      color: isError ? '#FF0000' : 'white',
    },

    field: {
      fontSize: 15,
      backgroundColor: 'white',
      borderColor: isError ? '#FF0000' : 'black',
      borderWidth: 1,
      // padding: 5,
      height: '100%',
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 10,
      width: '100%',
    },
  })
