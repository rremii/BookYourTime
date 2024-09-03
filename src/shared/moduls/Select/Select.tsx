import { useTheme } from '@shared/moduls/theme'
import { useAnimatedValue } from '@shared/utils/useAnimatedValue'
import {
  Animated,
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  LayoutChangeEvent,
  Dimensions,
} from 'react-native'
import { useEffect, useRef, useState } from 'react'
import { Theme } from '@shared/moduls/theme/types'
import ArrowUpIcon from '@icons/arrowUp.svg'

interface Props {
  initItems: string[]
  currentItem: string | null
  onChange: (item: string) => void
  label: string
  height?: number
  width?: number
  withLabel?: boolean
}
export const Select = ({
  initItems,
  currentItem,
  label,
  onChange,
  width = 200,
  height,
  withLabel = true,
}: Props) => {
  const itemCellHeight = height || 50

  const { colors } = useTheme()

  const [isActive, setIsActive] = useState(false)
  const [labelHeight, setLabelHeight] = useState(20)

  const handleChoice = (item: string) => {
    setIsActive(false)
    onChange(item)
  }

  const pressButton = () => {
    setIsActive((prev) => !prev)
  }

  const isLabelShown = !!currentItem
  const labelX = useAnimatedValue({
    isActive: isLabelShown,
    initValue: 3,
    active: {
      duration: 100,
      value: 2,
    },
    inactive: {
      duration: 100,
      value: 2,
    },
  })
  const labelY = useAnimatedValue({
    isActive: isLabelShown,
    initValue: itemCellHeight / 2 - labelHeight / 2,
    active: {
      duration: 100,
      value: -labelHeight / 2,
    },
    inactive: {
      duration: 100,
      value: itemCellHeight / 2 - labelHeight / 2,
    },
  })
  const itemBoxSlide = useAnimatedValue({
    isActive,
    initValue: -itemCellHeight * 4,
    active: {
      duration: 200,
      value: 0,
    },
    inactive: {
      duration: 200,
      value: -itemCellHeight * 4,
    },
  })
  const iconRotate = useAnimatedValue({
    isActive,
    initValue: 0,
    active: {
      duration: 100,
      value: 1,
    },
    inactive: {
      duration: 100,
      value: 0,
    },
  })
  const rotateAnim = iconRotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  })

  const onLabelLayout = (e: LayoutChangeEvent) => {
    if (e.nativeEvent.layout.height) setLabelHeight(e.nativeEvent.layout.height)
  }
  const getBcColorItem = (item: string) => {
    if (currentItem === item) return colors.borderColor_active
    return colors.bcColor_standart_container
  }

  const styles = getStyle(colors, isActive, width, itemCellHeight)
  return (
    <View style={[styles.container]}>
      <Pressable style={[styles.btn]} onPress={pressButton}>
        {withLabel && (
          <Animated.Text
            onLayout={onLabelLayout}
            style={[
              styles.label,
              {
                transform: [{ translateY: labelY }, { translateX: labelX }],
              },
            ]}
            numberOfLines={1}
          >
            {label}
          </Animated.Text>
        )}
        <Text style={styles.checkedText}>{currentItem}</Text>

        <Animated.View
          style={[
            styles.icon,
            {
              transform: [{ rotate: rotateAnim }],
            },
          ]}
        >
          <ArrowUpIcon
            color={
              isActive
                ? colors.color_tabBar_active
                : colors.borderColor_standart
            }
          />
        </Animated.View>
      </Pressable>

      <View style={styles.itemsContainer}>
        <Animated.View
          style={[
            styles.animContainer,
            { transform: [{ translateY: itemBoxSlide }] },
          ]}
        >
          <FlatList
            data={initItems}
            contentContainerStyle={styles.flat}
            renderItem={({ item, index }) => {
              const bcColor = getBcColorItem(item)
              return (
                <Pressable
                  key={item}
                  style={[styles.itemCell, { backgroundColor: bcColor }]}
                  onPress={() => handleChoice(item)}
                >
                  <Text style={styles.text}>{item}</Text>
                </Pressable>
              )
            }}
          />
        </Animated.View>
      </View>
    </View>
  )
}

const getStyle = (
  colors: Theme,
  isActive: boolean,
  width: number,
  height: number,
) =>
  StyleSheet.create({
    container: {
      width,
      position: 'relative',
    },
    btn: {
      width,
      height: height,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderColor: isActive
        ? colors.color_tabBar_active
        : colors.borderColor_standart,
      backgroundColor: colors.bcColor_standart_container,
      borderWidth: 1,
    },
    itemsContainer: {
      position: 'absolute',
      top: '102%',
      zIndex: 1,
      left: 0,
      width: '100%',
      height: Dimensions.get('window').height,
      overflow: 'hidden',
    },
    checkedText: {
      paddingLeft: 10,
    },
    label: {
      position: 'absolute',
      top: 0,
      left: 0,
      fontSize: 14,
      fontWeight: '500',
      paddingLeft: 7,
      paddingRight: 7,
      backgroundColor: colors.bcColor_standart_container,
      zIndex: 1,
      color: colors.color_standart_text,
    },
    animContainer: {
      maxHeight: height * 4,
      height: 'auto',
      width: '100%',
      backgroundColor: colors.bcColor_standart_container,
      position: 'relative',
      zIndex: 1,
      elevation: 5,
      shadowColor: 'grey',
      shadowOffset: { width: 2, height: 4 },
    },
    flat: {
      backgroundColor: colors.bcColor_standart_container,
    },
    itemCell: {
      alignItems: 'center',
      width: '100%',
      height,
      justifyContent: 'center',
    },
    text: {
      color: colors.color_standart_text,
      width: '100%',
      padding: 10,
    },
    icon: {
      marginRight: 10,
    },
  })
