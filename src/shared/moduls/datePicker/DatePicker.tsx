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
import { useTheme } from '../theme'
import { Theme } from '../theme/types'

interface Props {
  onChange?: (date: Date | null) => void
  initDate: Date | null
  btnStyles?: StyleProp<ViewStyle>
  textStyles?: StyleProp<TextStyle>
}

export const DatePicker = ({ initDate, onChange, ...props }: Props) => {
  const { colors } = useTheme()
  const styles = getStyles(colors)

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
        accentColor={colors.color_accentPicker}
        onConfirm={handleChange}
        onCancel={closePicker}
        isDarkModeEnabled={true}
      />
      <TouchableOpacity
        style={[
          btnStyles,
          styles.btn,
        ]}
        onPress={openPicker}
      >
        <Text
          style={[
            textStyles,
            styles.text,
          ]}
        >
          {date ? date.toDateString() : '- - -'}
        </Text>
      </TouchableOpacity>
    </>
  )
}

const getStyles = (colors: Theme) => StyleSheet.create({
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
    borderColor: colors.borderColor_date_picker
  },
  text: {
    fontSize: 16,
    color: colors.color_standart_text
  },
})
