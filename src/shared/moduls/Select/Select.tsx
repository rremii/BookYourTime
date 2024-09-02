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
import { useState } from 'react'
import { Theme } from '@shared/moduls/theme/types'
import ArrowUpIcon from '@icons/arrowUp.svg'
import ArrowDownIcon from '@icons/arrowDown.svg'

interface Props {
  initItems: string[]
  currentItem: string | null
  onChange: (item: string) => void
  label: string
  width: number
  withLabel: boolean
}
const itemCellHeight = 50
export const Select = ({
  initItems,
  currentItem,
  label,
  onChange,
  width,
  withLabel,
}: Props) => {
  const { colors } = useTheme()

  const getBcColorItem = (item: string, index: number) => {
    if (currentItem == null) {
      if (index === 0) return colors.borderColor_active
      else return colors.bcColor_standart_container
    } else if (currentItem === item) return colors.borderColor_active
    else return colors.bcColor_standart_container
  }

  const [isActive, setIsActive] = useState(false)
  const [labelSize, setLabelSize] = useState(20)

  const [fieldHeight, setFieldHeight] = useState(50)

  const handleChoice = (item: string) => {
    setIsActive(false)
    onChange(item)
  }

  const pressButton = () => {
    setIsActive((prev) => !prev)
  }

  const isLabelShown = !!currentItem
  const slideX = useAnimatedValue({
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
  const slideY = useAnimatedValue({
    isActive: isLabelShown,
    initValue: fieldHeight / 2 - labelSize / 2,
    active: {
      duration: 100,
      value: -labelSize / 2,
    },
    inactive: {
      duration: 100,
      value: fieldHeight / 2 - labelSize / 2,
    },
  })
  const itemBoxYAnim = useAnimatedValue({
    isActive: isActive,
    initValue: -itemCellHeight * 4,
    active: {
      duration: 100,
      value: 0,
    },
    inactive: {
      duration: 100,
      value: -itemCellHeight * 4,
    },
  })

  const onLabelLayout = (e: LayoutChangeEvent) => {
    if (e.nativeEvent.layout.height) setLabelSize(e.nativeEvent.layout.height)
  }

  const onLayout = (e: LayoutChangeEvent) => {
    if (e.nativeEvent.layout.height) setFieldHeight(e.nativeEvent.layout.height)
  }

  const styles = getStyle(colors, isActive)

  return (
    <Pressable
      onLayout={onLayout}
      style={[styles.btn, { width }]}
      onPress={pressButton}
    >
      {withLabel && (
        <Animated.Text
          onLayout={onLabelLayout}
          style={[
            styles.label,
            {
              transform: [{ translateY: slideY }, { translateX: slideX }],
            },
          ]}
          numberOfLines={1}
        >
          {label}
        </Animated.Text>
      )}
      <Text style={styles.checkedText}>
        {currentItem === null ? initItems[0] : currentItem}
      </Text>
      {isActive ? (
        <ArrowUpIcon style={styles.icon} color={colors.color_fill_icon} />
      ) : (
        <ArrowDownIcon style={styles.icon} color={colors.color_fill_icon} />
      )}

      <View style={styles.itemsContainer}>
        <Animated.View
          style={[
            styles.animContainer,
            { transform: [{ translateY: itemBoxYAnim }] },
          ]}
        >
          <FlatList
            data={initItems}
            contentContainerStyle={styles.flat}
            renderItem={({ item, index }) => {
              const bcColor = getBcColorItem(item, index)
              return (
                <Pressable
                  style={{ width }}
                  key={item}
                  onPress={() => handleChoice(item)}
                >
                  <View
                    style={[
                      styles.itemContainer,
                      { backgroundColor: bcColor, width },
                    ]}
                  >
                    <Text style={styles.text}>{item}</Text>
                  </View>
                </Pressable>
              )
            }}
          />
        </Animated.View>
      </View>
    </Pressable>
  )
}

const getStyle = (colors: Theme, isActive: boolean) =>
  StyleSheet.create({
    itemsContainer: {
      position: 'absolute',
      top: '102%',
      zIndex: 1,
      left: 0,
      width: '100%',
      height: Dimensions.get('window').height,
      overflow: 'hidden',
    },
    btn: {
      position: 'relative',
      height: itemCellHeight,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderColor: isActive
        ? colors.color_tabBar_active
        : colors.borderColor_standart,
      backgroundColor: colors.bcColor_standart_container,
      borderWidth: 1,
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
      maxHeight: itemCellHeight * 4,
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
    itemContainer: {
      alignItems: 'center',
      width: '100%',
      height: itemCellHeight,
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
