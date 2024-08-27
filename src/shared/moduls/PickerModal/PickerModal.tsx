import { ModalProps } from '@shared/moduls/modals/types'
import { useTheme } from '@shared/moduls/theme'
import { Overlay } from '@shared/ui/Overlay'
import { useAnimatedValue } from '@shared/utils/useAnimatedValue'
import {
  Animated,
  Pressable,
  View,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native'
import { useEffect, useState } from 'react'
import { Theme } from '@shared/moduls/theme/types'
import CircleIcon from '@icons/circle.svg'
import FillCircleIcon from '@icons/fill-circle.svg'
import { useModal } from '../modals/useModal'

interface Props extends ModalProps {
  initItems: string[]
  currentItem: string
  onChange: (chosenItem: string) => void
}

export const PickerModal = ({
  isOpen,
  onChange,
  initItems,
  currentItem,
  name,
}: Props) => {
  const { colors } = useTheme()
  const [checked, setChecked] = useState(currentItem)
  const { closeModal } = useModal()

  const { height: modalHeight } = useWindowDimensions()
  const slideAnim = useAnimatedValue({
    initValue: modalHeight,
    isActive: isOpen,
    active: {
      value: 0,
    },
    inactive: {
      value: modalHeight,
    },
  })

  const close = () => {
    closeModal(name, 500)
  }

  useEffect(() => {
    if (checked !== currentItem) {
      onChange(checked)
    }
  }, [checked])

  const handleChoice = (item: string) => {
    setChecked(item)
  }

  const styles = getStyle(colors)
  return (
    <View style={styles.mainContainer}>
      <Overlay
        onPress={close}
        isActive={isOpen}
        backgroundColor={colors.bcColor_overlay}
      />
      <Animated.View
        style={[
          { transform: [{ translateY: slideAnim }] },
          styles.animContainer,
        ]}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {initItems.map((item) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                key={item}
                onPress={() => handleChoice(item)}
              >
                <View style={styles.itemContainer}>
                  {checked === item ? (
                    <FillCircleIcon color={colors.color_fill_icon} />
                  ) : (
                    <CircleIcon color={colors.color_fill_icon} />
                  )}
                  <Text style={styles.text}>{item}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </Animated.View>
    </View>
  )
}

const getStyle = (colors: Theme) =>
  StyleSheet.create({
    mainContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    animContainer: {
      maxHeight: '50%',
      height: 'auto',
      width: '80%',
      backgroundColor: colors.bcColor_standart_container,
      position: 'absolute',
      zIndex: 1,
      borderColor: colors.borderColor_standart,
      padding: 20,
      paddingTop: 30,
      paddingBottom: 30,
    },
    scrollContainer: {
      gap: 20,
      backgroundColor: colors.bcColor_standart_container,
    },

    itemContainer: {
      alignItems: 'center',
      backgroundColor: colors.bcColor_standart_container,
      flexDirection: 'row',
      gap: 20,
    },
    text: {
      color: colors.color_standart_text,
      fontSize: 20,
    },
  })
