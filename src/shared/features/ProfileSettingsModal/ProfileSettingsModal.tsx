import { ModalProps } from '@shared/moduls/modals/types'
import { useTheme } from '@shared/moduls/theme'
import { useAnimatedValue } from '@shared/utils/useAnimatedValue'
import {
  Animated,
  View,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native'
import { Header } from './ui/Header'
import { Theme } from '@shared/moduls/theme/types'
import { OpenThemePicker } from './ui/OpenThemePicker'

interface Props extends ModalProps {}

export const ProfileSettingsModal = ({ isOpen }: Props) => {
  const { colors } = useTheme()
  const styles = getStyles(colors)

  const { width: modalWidth } = useWindowDimensions()

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

  const settings = [OpenThemePicker]

  return (
    <Animated.View
      style={[{ transform: [{ translateX: slideAnim }] }, styles.animContainer]}
    >
      <Header />
      <View style={styles.body}>
        <ScrollView contentContainerStyle={{ gap: 20 }}>
          {settings.map((_, index) => (
            <OpenThemePicker key={index} />
          ))}
        </ScrollView>
      </View>
    </Animated.View>
  )
}

const getStyles = (colors: Theme) =>
  StyleSheet.create({
    animContainer: {
      backgroundColor: colors.bcColor_standart_container,
      height: '100%',
      width: '100%',
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: 1,
    },
    body: {
      width: '100%',
      height: '80%',
      padding: 20,
    },
  })
