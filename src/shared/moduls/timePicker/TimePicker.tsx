import React, { useEffect, useState } from 'react'
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  StyleSheet,
  TextStyle,
} from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

interface Props {
  onChange?: (date: Date | null) => void
  initTime: Date | null
  styles?: {
    btn?: StyleProp<ViewStyle>
    Text?: StyleProp<TextStyle>
  }
}

export const TimePicker = ({ initTime, onChange, ...props }: Props) => {
  const [date, setDate] = useState<Date | null>(null)
  const [isPicker, setIsPicker] = useState(false)

  useEffect(() => {
    setDate(initTime)
  }, [initTime])

  useEffect(() => {
    if (onChange) onChange(date)
  }, [date])

  const openPicker = () => {
    setIsPicker(true)
  }
  const closePicker = () => {
    setIsPicker(false)
  }
  const handleChange = (date: Date) => {
    closePicker()
    setDate(date)
  }

  const btnStyles = props.styles?.btn || {}
  const textStyles = props.styles?.Text || {}
  return (
    <>
      <DateTimePickerModal
        accentColor="#0A8537"
        date={date || new Date()}
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
