import { ModalProps } from '@shared/moduls/modals/types'
import { useModal } from '@shared/moduls/modals/useModal'
import { Overlay } from '@shared/ui/Overlay'
import { useAnimatedValue } from '@shared/utils/useAnimatedValue'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  FlatList,
} from 'react-native'
import { BookingCard } from './BookingCard'

interface Props extends ModalProps {}

export const BookingPreviewModal = ({ isOpen, name }: Props) => {
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
      <Overlay onPress={close} isActive={isOpen} />
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

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    width: '80%',
    height: '100%',
    right: 0,
    top: 0,
    backgroundColor: 'white',
    zIndex: 1,
    gap: 10,
    padding: 5,
  },
})
