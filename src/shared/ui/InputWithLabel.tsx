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
} from 'react-native'

interface Props {
  label: string
}

export const InputWithLabel = ({ label }: Props) => {
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
    <View onLayout={onLayout} style={styles.fieldContainer}>
      <View
        style={{
          pointerEvents: 'none',
          backgroundColor: 'transparent',
          zIndex: 1,
        }}
        onLayout={onLayout}
      >
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
        onChangeText={onTextChange}
        value={inputValue}
        ref={inputRef}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={styles.field}
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
    backgroundColor: 'white',
    zIndex: 1,
    paddingLeft: 7,
    paddingRight: 7,
  },

  field: {
    fontSize: 15,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    // padding: 5,
    height: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    width: '100%',
  },
})

// import { useAnimatedValue } from '@shared/utils/useAnimatedValue'
// import { useRef, useState } from 'react'
// import {
//   TextInput,
//   View,
//   Text,
//   StyleSheet,
//   LayoutChangeEvent,
//   Animated,
//   TouchableOpacity,
//   Touchable,
//   TouchableHighlight,
// } from 'react-native'

// interface Props {
//   label: string
// }

// //TODO
// /**
// how does the layout work?
// slide optimization
// the animations are not working

// */

// export const InputWithLabel = ({ label }: Props) => {
//   const [fieldHeight, setFieldHeight] = useState(0)
//   const [labelHeight, setLabelHeight] = useState(0)

//   const [isFocused, setIsFocused] = useState(false)
//   const inputRef = useRef<TextInput | null>(null)

//   const slideX = useAnimatedValue({
//     isActive: isFocused,
//     initValue: 20,
//     active: {
//       duration: 100,
//       value: 15,
//     },
//     inactive: {
//       duration: 100,
//       value: 20,
//     },
//   })

//   const slideY = useAnimatedValue({
//     isActive: isFocused,
//     initValue: fieldHeight / 2 - labelHeight / 2,
//     active: {
//       duration: 100,
//       value: -labelHeight / 2,
//     },
//     inactive: {
//       duration: 100,
//       value: fieldHeight / 2 - labelHeight / 2,
//     },
//   })

//   const handleFocus = () => {
//     if (!inputRef.current) return

//     if (!isFocused) inputRef.current.focus()
//     setIsFocused(!isFocused)
//   }

//   const onLayout = (e: LayoutChangeEvent) => {
//     setFieldHeight(e.nativeEvent.layout.height)
//   }
//   const onLabelLayout = (e: LayoutChangeEvent) => {
//     setLabelHeight(e.nativeEvent.layout.height)
//   }

//   return (
//     <TouchableOpacity
//       activeOpacity={1}
//       //   onPress={handleFocus}
//       onLayout={onLayout}
//       style={styles.fieldContainer}
//     >
//       <Animated.Text
//         pointerEvents="none"
//         onLayout={onLabelLayout}
//         style={[
//           styles.label,
//           {
//             transform: [{ translateY: slideY }, { translateX: slideX }],
//           },
//         ]}
//       >
//         {label}
//       </Animated.Text>
//       <TextInput ref={inputRef} onBlur={handleFocus} style={styles.field} />
//     </TouchableOpacity>
//   )
// }

// const styles = StyleSheet.create({
//   fieldContainer: {
//     position: 'relative',
//     marginBottom: 15,
//   },
//   label: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     fontSize: 16,
//     fontWeight: '500',
//     marginBottom: 5,
//     backgroundColor: 'white',
//     zIndex: 1,
//     paddingLeft: 7,
//     paddingRight: 7,
//     pointerEvents: 'none',
//   },

//   field: {
//     backgroundColor: 'white',
//     borderColor: 'black',
//     borderWidth: 1,
//     padding: 3,
//     paddingLeft: 15,
//     paddingRight: 15,
//     borderRadius: 10,
//     width: '100%',
//   },
// })
