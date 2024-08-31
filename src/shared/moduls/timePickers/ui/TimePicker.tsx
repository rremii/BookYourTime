import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'
import React, { useEffect, useState } from 'react'
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

interface Props {
  onChange?: (date: Date | null) => void
  initTime: Date | null
  btnStyles?: StyleProp<ViewStyle>
  textStyles?: StyleProp<TextStyle>
}

export const TimePicker = ({
  initTime,
  onChange,
  btnStyles,
  textStyles,
}: Props) => {
  const { colors } = useTheme()
  const styles = getStyles(colors)

  const [date, setDate] = useState<Date | null>(initTime)
  const [isPicker, setIsPicker] = useState(false)

  useEffect(() => {
    setDate(initTime)
  }, [initTime])

  const openPicker = () => {
    setIsPicker(true)
  }
  const closePicker = () => {
    setIsPicker(false)
  }
  const handleChange = (date: Date) => {
    closePicker()
    setDate(date)
    if (onChange) onChange(date)
  }
  // console.log(date)
  return (
    <>
      <DateTimePickerModal
        accentColor={colors.color_accentPicker}
        date={date || new Date()}
        is24Hour={true}
        isVisible={isPicker}
        mode="time"
        onConfirm={handleChange}
        onCancel={closePicker}
      />
      <TouchableOpacity style={[btnStyles, styles.btn]} onPress={openPicker}>
        <Text style={[textStyles, styles.text]}>
          {date ? date.toTimeString().slice(0, 5) : '- : -'}
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
