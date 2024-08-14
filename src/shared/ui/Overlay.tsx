import { useAnimatedValue } from '@shared/utils/useAnimatedValue'
import {
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native'

interface Props {
  isActive: boolean
  onPress: () => void
  backgroundColor?: string
  startDuration?: number
  endDuration?: number
  zIndex?: number
}

export const Overlay = ({
  isActive,
  onPress,
  backgroundColor = 'rgba(0, 0, 0, 0.5)',
  startDuration = 300,
  endDuration = 300,
  zIndex = 1,
}: Props) => {
  const fadeAnim = useAnimatedValue({
    isActive,
    initValue: 0,
    active: {
      duration: startDuration,
      value: 1,
      delay: 0,
    },
    inactive: {
      duration: endDuration,
      value: 0,
      delay: 0,
    },
  })

  return (
    <>
      <Animated.View
        style={[
          styles.fullScreen,
          {
            pointerEvents: isActive ? 'auto' : 'none',
            zIndex,
            backgroundColor,
            opacity: fadeAnim,
          },
        ]}
      ></Animated.View>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.fullScreen,
          {
            zIndex,
            pointerEvents: isActive ? 'auto' : 'none',
          },
        ]}
      />
    </>
  )
}

const styles = StyleSheet.create({
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
})
