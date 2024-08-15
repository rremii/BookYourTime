import { useAnimatedValue } from '@shared/utils/useAnimatedValue'
import { ModalProps } from '@shared/moduls/modals/types'
import { useModal } from '@shared/moduls/modals/useModal'
import { Overlay } from '@shared/ui/Overlay'
import {
  View,
  StyleSheet,
  Modal,
  Dimensions,
  Animated,
  Text,
  TouchableOpacity,
  LayoutChangeEvent,
} from 'react-native'
import RNDateTimePicker from '@react-native-community/datetimepicker'
import React, { useState } from 'react'
import { DatePicker } from '../../../shared/moduls/datePicker/DatePicker'
import { TimePicker } from '@shared/moduls/timePicker/TimePicker'
import { TagsPicker } from '@shared/moduls/tagsPicker/TagsPicker'
import { BtnSimple } from '@shared/ui/BtnSimple'
import { BtnFilled } from '@shared/ui/BtnFilled'
import { initTags } from '@shared/moduls/tagsPicker/constants'
import { inputSectionStyles } from '@shared/ui/InputSection/InputSectionStyles'

interface Filters {
  date: Date | null
  startTime: Date | null
  endTime: Date | null
  tags: string[]
}

interface Props extends ModalProps {}

export const SearchFilters = ({ isOpen }: Props) => {
  const [modalHeight, setModalHeight] = useState(
    Dimensions.get('screen').height * 0.6, // approximate
  )

  const [filters, setFilters] = useState<Filters>({
    date: null,
    startTime: null,
    endTime: null,
    tags: initTags,
  })
  const { closeModal } = useModal()
  const slideAnim = useAnimatedValue({
    initValue: modalHeight,
    isActive: isOpen,
    active: {
      value: 0,
    },
    inactive: {
      value: modalHeight,
    },
  })

  const onSubmit = () => {
    console.log(filters)
    close()
  }
  const onReset = () => {
    setFilters({
      date: null,
      startTime: null,
      endTime: null,
      tags: initTags,
    })
  }

  const onFilterChange =
    (filter: keyof Filters) => (value: string[] | Date | null) => {
      setFilters({
        ...filters,
        [filter]: value,
      })
    }
  const close = () => {
    closeModal('SearchFilters')
  }
  const onLayout = (e: LayoutChangeEvent) => {
    setModalHeight(+e.nativeEvent.layout.height)
  }
  return (
    <>
      <Overlay onPress={close} isActive={isOpen} />
      <Animated.View
        onLayout={onLayout}
        style={[
          styles.container,
          {
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <Text style={styles.title}>Filters</Text>
        <View style={inputSectionStyles.sectionContainer}>
          <Text style={inputSectionStyles.sectionTitle}>Date:</Text>
          <DatePicker
            initDate={filters.date}
            onChange={onFilterChange('date')}
          />
        </View>
        <View>
          <Text style={inputSectionStyles.sectionTitle}>Time:</Text>
          <View
            style={[
              inputSectionStyles.sectionContainer,
              inputSectionStyles.withPadding,
            ]}
          >
            <Text style={{ fontSize: 16 }}>Start</Text>
            <TimePicker
              initTime={filters.startTime}
              onChange={onFilterChange('startTime')}
            />
          </View>
          <View
            style={[
              inputSectionStyles.sectionContainer,
              inputSectionStyles.withPadding,
            ]}
          >
            <Text style={{ fontSize: 16 }}>End</Text>
            <TimePicker
              initTime={filters.endTime}
              onChange={onFilterChange('endTime')}
            />
          </View>
        </View>
        <View>
          <Text style={inputSectionStyles.sectionTitle}>Tags:</Text>
          <View style={inputSectionStyles.withPadding}>
            <TagsPicker onChange={onFilterChange('tags')} tags={filters.tags} />
          </View>
        </View>

        <View style={styles.btnContainer}>
          <BtnSimple onPress={onReset}>Reset</BtnSimple>
          <BtnFilled onPress={onSubmit}>Apply</BtnFilled>
        </View>
      </Animated.View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 20,
    gap: 15,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'white',
    zIndex: 1,
    transform: [{ translateY: 0 }],
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 15,
    marginTop: 15,
  },
})
