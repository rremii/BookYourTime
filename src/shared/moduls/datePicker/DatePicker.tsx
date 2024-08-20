import React, { useEffect, useState } from 'react'
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  StyleSheet,
  TextStyle,
  Modal,
  View,
} from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

interface Props {
  onChange?: (date: Date | null) => void
  initDate: Date | null
  btnStyles?: StyleProp<ViewStyle>
  textStyles?: StyleProp<TextStyle>
}

export const DatePicker = ({ initDate, onChange, ...props }: Props) => {
  const [date, setDate] = useState<Date | null>(initDate)
  const [isPicker, setIsPicker] = useState(false)

  useEffect(() => {
    setDate(initDate)
  }, [initDate])

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

  const btnStyles = props.styles?.btn || {}
  const textStyles = props.styles?.Text || {}
  return (
    <>
      <DateTimePickerModal
        date={date || new Date()}
        isVisible={isPicker}
        mode="date"
        accentColor="#0A8537"
        onConfirm={handleChange}
        onCancel={closePicker}
      />
      <TouchableOpacity style={[btnStyles, styles.btn]} onPress={openPicker}>
        <Text style={[textStyles, styles.text]}>
          {date ? date.toDateString() : '- - -'}
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
    borderColor: '#acacac',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,

    color: 'black',
  },
})
