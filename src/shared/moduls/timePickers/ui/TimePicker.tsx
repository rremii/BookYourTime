import { useTheme } from '@shared/moduls/theme/useTheme'
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

  return (
    <>
      <DateTimePickerModal
        accentColor={colors.color_accentPicker}
        date={date || new Date()}
        isVisible={isPicker}
        mode="time"
        onConfirm={handleChange}
        onCancel={closePicker}
      />
      <TouchableOpacity
        style={[
          btnStyles,
          styles.btn,
          { borderColor: colors.borderColor_date_picker },
        ]}
        onPress={openPicker}
      >
        <Text
          style={[
            textStyles,
            styles.text,
            { color: colors.color_standart_text },
          ]}
        >
          {date ? date.toTimeString().slice(0, 5) : '- : -'}
        </Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
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
  },
  text: {
    fontSize: 16,
  },
})
