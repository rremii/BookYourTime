import { useTheme } from '@shared/moduls/theme'
import { useAnimatedValue } from '@shared/utils/useAnimatedValue'
import { useRef, useState } from 'react'
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
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native'

interface Props {
  label: string
  inputStyles?: StyleProp<TextStyle>
  contStyles?: StyleProp<ViewStyle>
  labelStyles?: StyleProp<TextStyle>
  labelContStyles?: StyleProp<ViewStyle>
}

export const InputWithLabel = ({
  label,
  contStyles,
  labelContStyles,
  inputStyles,
  labelStyles,
}: Props) => {
  const { colors } = useTheme()

  const [fieldHeight, setFieldHeight] = useState(40)
  const [labelHeight, setLabelHeight] = useState(20)

  const [isFocused, setIsFocused] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef<TextInput | null>(null)

  const onTextChange = (text: string) => {
    setInputValue(text)
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

  return (
    <View onLayout={onLayout} style={[styles.fieldContainer, contStyles]}>
      <View
        style={[
          {
            pointerEvents: 'none',
            zIndex: 1,
            // backgroundColor: colors.bcColor_layout,
          },
          labelContStyles,
        ]}
        onLayout={onLayout}
      >
        <Animated.Text
          onLayout={onLabelLayout}
          style={[
            styles.label,
            labelStyles,
            {
              transform: [{ translateY: slideY }, { translateX: slideX }],
            },
          ]}
        >
          {label}
        </Animated.Text>
      </View>
      <TextInput
        onChangeText={onTextChange}
        value={inputValue}
        ref={inputRef}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[
          styles.field,
          inputStyles,
          // {
          //   backgroundColor: colors.bcColor_input,
          //   borderColor: colors.borderColor_standart,
          // },
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  fieldContainer: {
    position: 'relative',
    marginBottom: 15,
    justifyContent: 'center',
    height: 40,
  },
  label: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 20,
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 5,
    zIndex: 1,
    paddingLeft: 7,
    paddingRight: 7,
  },

  field: {
    fontSize: 15,
    borderWidth: 1,
    // padding: 5,
    height: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    width: '100%',
  },
})
