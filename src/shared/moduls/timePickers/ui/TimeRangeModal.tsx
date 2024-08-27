import {
  Animated,
  Dimensions,
  LayoutChangeEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { ModalProps } from '../../modals/types'
import { Overlay } from '@shared/ui/Overlay'
import { useModal } from '../../modals/useModal'
import { useState } from 'react'
import { useAnimatedValue } from '@shared/utils/useAnimatedValue'
import { inputSectionStyles } from '@shared/ui/styles/InputSectionStyles'
import { TimePicker } from './TimePicker'
import { TimeRange } from '../types'
import { UIButton } from '@shared/ui/UIButton/UIButton'
import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'

interface Props extends ModalProps {
  onChange: (time: TimeRange) => void
  initTime: TimeRange
}

export const TimeRangeModal = ({ isOpen, initTime, onChange }: Props) => {
  const { colors } = useTheme()
  const [timeRange, setTimeRange] = useState<TimeRange>(initTime)

  const handleChange = (type: keyof TimeRange) => (newTime: Date | null) => {
    setTimeRange({
      ...timeRange,
      [type]: newTime,
    })
  }

  const { closeModal } = useModal()
  const close = () => closeModal('TimeRangePicker')

  const apply = () => {
    onChange(timeRange)
    close()
  }

  const reset = () => {
    setTimeRange(initTime)
  }

  const fadeAnim = useAnimatedValue({
    initValue: 0,
    isActive: isOpen,
    active: {
      value: 1,
    },
    inactive: {
      value: 0,
    },
  })

  const [modalSizes, setModalSizes] = useState({
    width: Dimensions.get('screen').width * 0.9,
    height: 208,
  })

  const onLayout = (e: LayoutChangeEvent) => {
    setModalSizes({
      width: e.nativeEvent.layout.width,
      height: e.nativeEvent.layout.height,
    })
  }
  const styles = getStyles(modalSizes.width, modalSizes.height, colors)
  return (
    <>
      <Overlay
        onPress={close}
        isActive={isOpen}
        backgroundColor={colors.bcColor_overlay}
      />
      <Animated.View
        onLayout={onLayout}
        style={[
          styles.container,
          {
            opacity: fadeAnim,
          },
        ]}
      >
        <Text
          style={[
            inputSectionStyles.sectionTitle,
            styles.sectionTitle,
          ]}
        >
          Time:
        </Text>
        <View
          style={[
            inputSectionStyles.sectionContainer,
            inputSectionStyles.withPadding,
          ]}
        >
          <Text style={styles.optionTitle}>
            Start
          </Text>
          <TimePicker
            initTime={timeRange.start}
            onChange={handleChange('start')}
          />
        </View>
        <View
          style={[
            inputSectionStyles.sectionContainer,
            inputSectionStyles.withPadding,
          ]}
        >
          <Text style={styles.optionTitle}>
            End
          </Text>
          <TimePicker initTime={timeRange.end} onChange={handleChange('end')} />
        </View>

        <View style={styles.btnContainer}>
          <UIButton
            type="simple"
            onPress={reset}
            btnStyles={styles.btnSimple}
            textStyles={{ color: colors.color_standart_text }}
          >
            Reset
          </UIButton>
          <UIButton
            type="filled"
            onPress={apply}
            btnStyles={{ backgroundColor: colors.bcColor_btn_filled }}
            textStyles={{ color: colors.color_btn_filled }}
          >
            Apply
          </UIButton>
        </View>
      </Animated.View>
    </>
  )
}
const getStyles = (width: number, height: number, colors: Theme) => {
  return StyleSheet.create({
    container: {
      width: '90%',
      maxWidth: 350,
      top: '50%',
      left: '50%',
      position: 'absolute',
      transform: [{ translateY: -height / 2 }, { translateX: -width / 2 }],
      zIndex: 100,
      padding: 20,
      borderRadius: 10,
      backgroundColor: colors.bcColor_standart_container,
    },
    btnContainer: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: 10,
    },
    optionTitle: {
      fontSize: 16,
      color: colors.color_standart_text
    },
    sectionTitle: {
      marginBottom: 10,
      color: colors.color_standart_text
    },
    btnSimple: {
      backgroundColor: colors.bcColor_button,
      borderColor: colors.borderColor_standart,
    }
  })
}
