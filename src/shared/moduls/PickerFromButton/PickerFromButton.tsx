import { ModalProps } from '@shared/moduls/modals/types'
import { useTheme } from '@shared/moduls/theme'
import { useAnimatedValue } from '@shared/utils/useAnimatedValue'
import {
  Animated,
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
} from 'react-native'
import { useEffect, useState } from 'react'
import { Theme } from '@shared/moduls/theme/types'
import { useModal } from '../modals/useModal'

interface Props extends ModalProps {
  initItems: string[]
  currentItem: string
  onChange: (chosenItem: string) => void
  x: number //from button layout
  y: number
  width: number
}

export const PickerFromButton = ({
  isOpen,
  onChange,
  initItems,
  currentItem,
  name,
  x,
  y,
  width,
}: Props) => {
  const { colors } = useTheme()
  const [checked, setChecked] = useState(currentItem)
  const { closeModal } = useModal()

  const close = () => {
    closeModal(name)
  }

  const slideAnim = useAnimatedValue({
    initValue: 0,
    isActive: isOpen,
    active: {
      value: 0,
    },
    inactive: {
      value: 0,
    },
  })

  useEffect(() => {
    if (checked !== currentItem) {
      onChange(checked)
    }
  }, [checked])

  const handleChoice = (item: string) => {
    setChecked(item)
    close()
  }

  const seperator = () => (
    <View style={{ height: 1, backgroundColor: colors.borderColor_standart }} />
  )

  const styles = getStyle(colors, x, y, width)
  return (
    <Animated.View
      style={[{ transform: [{ translateY: slideAnim }] }, styles.animContainer]}
    >
      <FlatList
        data={initItems}
        ItemSeparatorComponent={seperator}
        renderItem={({ item }) => {
          const bcColor =
            item === checked
              ? colors.borderColor_active
              : colors.bcColor_standart_container
          return (
            <Pressable
              key={item}
              onPress={() => handleChoice(item)}
            >
              <View
                style={[styles.itemContainer, { backgroundColor: bcColor }]}
              >
                <Text style={styles.text}>{item}</Text>
              </View>
            </Pressable>
          )
        }}
        contentContainerStyle={styles.flat}
      />
    </Animated.View>
  )
}

const getStyle = (
  colors: Theme,
  x: number,
  y: number,
  width: number,
) =>
  StyleSheet.create({
    animContainer: {
      maxHeight: 203,
      height: 'auto',
      width: width,
      backgroundColor: colors.bcColor_standart_container,
      position: 'absolute',
      left: x,
      top: y,
      zIndex: 1,
      borderColor: colors.borderColor_standart,
      borderWidth: 1,
    },
    flat: {
      backgroundColor: colors.bcColor_standart_container,
    },

    itemContainer: {
      alignItems: 'center',
      width: '100%',
      height: 50,
      justifyContent: 'center',
    },
    text: {
      color: colors.color_standart_text,
      fontSize: 20,
      width: '100%',
      padding: 10,
    },
  })
