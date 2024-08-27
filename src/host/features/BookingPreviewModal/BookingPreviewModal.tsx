import { ModalProps } from '@shared/moduls/modals/types'
import { useModal } from '@shared/moduls/modals/useModal'
import { Overlay } from '@shared/ui/Overlay'
import { useAnimatedValue } from '@shared/utils/useAnimatedValue'
import { Animated, Dimensions, StyleSheet } from 'react-native'
import { BookingCard } from './BookingCard'
import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'

interface Props extends ModalProps {}

export const BookingPreviewModal = ({ isOpen, name }: Props) => {
  const { colors } = useTheme()
  const styles = getStyles(colors)

  const modalWidth = Dimensions.get('screen').width * 0.8
  const slideAnim = useAnimatedValue({
    isActive: isOpen,
    initValue: modalWidth,
    active: {
      value: 0,
    },
    inactive: {
      value: modalWidth,
    },
  })

  const { closeModal } = useModal()

  const close = () => {
    closeModal('BookingPreview')
  }

  return (
    <>
      <Overlay
        onPress={close}
        isActive={isOpen}
        backgroundColor={colors.bcColor_overlay}
      />
      <Animated.View
        style={[
          {
            transform: [{ translateX: slideAnim }],
          },
          styles.modal,
        ]}
      >
        <BookingCard />
        <BookingCard />
        <BookingCard />
      </Animated.View>
    </>
  )
}

const getStyles = (colors: Theme) => StyleSheet.create({
  modal: {
    position: 'absolute',
    width: '80%',
    height: '100%',
    right: 0,
    top: 0,
    zIndex: 1,
    gap: 10,
    padding: 5,
    backgroundColor: colors.bcColor_standart_container,
  },
})
