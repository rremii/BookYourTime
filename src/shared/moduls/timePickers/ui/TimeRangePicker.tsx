import React from 'react'
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native'
import { useModal } from '../../modals/useModal'
import { TimeRangeModal } from './TimeRangeModal'
import { TimeRange } from '../types'
import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'

interface Props {
  onChange: (time: TimeRange) => void
  initTime: TimeRange
  btnStyles?: StyleProp<ViewStyle>
  textStyles?: StyleProp<TextStyle>
}

export const TimeRangePicker = ({
  initTime,
  onChange,
  btnStyles,
  textStyles,
}: Props) => {
  const { openModal } = useModal()

  const { colors } = useTheme()
  const styles = getStyles(colors)

  const openPicker = () => {
    openModal({
      name: 'TimeRangePicker',
      modal: TimeRangeModal,
      props: { initTime, onChange },
    })
  }

  const { start: startTime, end: endTime } = initTime
  return (
    <>
      <TouchableOpacity style={[btnStyles, styles.btn]} onPress={openPicker}>
        <Text style={[textStyles, styles.text]}>
          {startTime ? startTime.toTimeString().slice(0, 5) : '00:00 AM'}{' '}
          {' - '}
          {endTime ? endTime.toTimeString().slice(0, 5) : '00:00 PM'}
        </Text>
      </TouchableOpacity>
    </>
  )
}

const getStyles = (colors: Theme) =>
  StyleSheet.create({
    btn: {
      zIndex: 10,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 17,
      paddingRight: 17,
      alignSelf: 'flex-start',
      borderRadius: 10,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: colors.borderColor_date_picker,
    },
    text: {
      fontSize: 16,
      color: colors.color_standart_text,
    },
  })
