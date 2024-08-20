import React, { useEffect, useState } from 'react'
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import { Text, StyleSheet } from 'react-native'
import { useModal } from '../../modals/useModal'
import { TimeRangeModal } from './TimeRangeModal'
import { TimeRange } from '../types'

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
