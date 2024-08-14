import { ModalProps } from '@shared/moduls/modals/types'
import { useModal } from '@shared/moduls/modals/useModal'
import { Overlay } from '@shared/ui/Overlay'
import { useAnimatedValue } from '@shared/utils/useAnimatedValue'
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native'

interface Props extends ModalProps {}

export const CreateBookingModal = ({ isOpen, name }: Props) => {
  const { closeModal } = useModal()

  const modalHeight = +Math.round(+Dimensions.get('screen').height * 0.7)
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
    closeModal('CreateBooking')
  }

  return (
    <>
      <Overlay onPress={close} isActive={isOpen} />
      <Animated.View
        style={[
          styles.container,
          { transform: [{ translateY: slideAnim }], height: modalHeight },
        ]}
      >
        <Text>create Booking</Text>
      </Animated.View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 15,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'white',
    zIndex: 1,
    transform: [{ translateY: 0 }],
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
