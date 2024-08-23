import { useAnimatedValue } from '@shared/utils/useAnimatedValue'
import { ModalProps } from '@shared/moduls/modals/types'
import { useModal } from '@shared/moduls/modals/useModal'
import { Overlay } from '@shared/ui/Overlay'
import {
  Animated,
  Dimensions,
  LayoutChangeEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React, { useState } from 'react'
import { DatePicker } from '../../../shared/moduls/datePicker/DatePicker'
import { TimePicker } from '@shared/moduls/timePickers/ui/TimePicker'
import { inputSectionStyles } from '@shared/ui/styles/InputSectionStyles'
import { TagsPicker } from '@shared/moduls/tagsPicker/TagsPicker'
import { Header } from './ui/Header'
import { UIButton } from '@shared/ui/UIButton/UIButton'
import { useTheme } from '@shared/moduls/theme/useTheme'

interface Filters {
  date: Date | null
  startTime: Date | null
  endTime: Date | null
  tags: string[]
}

const initTags = ['Frontend', 'Backend']

interface Props extends ModalProps {}

export const SearchFilters = ({ isOpen }: Props) => {
  const { colors } = useTheme()
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
            transform: [{ translateY: slideAnim }],
            backgroundColor: colors.bcColor_standart_container,
          },
        ]}
      >
        <Header />

        <View style={inputSectionStyles.sectionContainer}>
          <Text
            style={[
              inputSectionStyles.sectionTitle,
              { color: colors.color_standart_text },
            ]}
          >
            Date:
          </Text>
          <DatePicker
            initDate={filters.date}
            onChange={onFilterChange('date')}
          />
        </View>
        <View>
          <Text
            style={[
              inputSectionStyles.sectionTitle,
              { color: colors.color_standart_text },
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
            <Text style={{ fontSize: 16, color: colors.color_standart_text }}>
              Start
            </Text>
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
            <Text style={{ fontSize: 16, color: colors.color_standart_text }}>
              End
            </Text>
            <TimePicker
              initTime={filters.endTime}
              onChange={onFilterChange('endTime')}
            />
          </View>
        </View>
        <View>
          <Text
            style={[
              inputSectionStyles.sectionTitle,
              { color: colors.color_standart_text },
            ]}
          >
            Tags:
          </Text>
          <View style={[inputSectionStyles.withPadding, { marginTop: 5 }]}>
            <TagsPicker onChange={onFilterChange('tags')} tags={filters.tags} />
          </View>
        </View>

        <View style={styles.btnContainer}>
          <UIButton
            type="simple"
            onPress={onReset}
            btnStyles={{
              backgroundColor: colors.bcColor_button,
              borderColor: colors.borderColor_standart,
            }}
            textStyles={{ color: colors.color_standart_text }}
          >
            Reset
          </UIButton>
          <UIButton
            type="filled"
            onPress={onSubmit}
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
    zIndex: 1,
    transform: [{ translateY: 0 }],
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 15,
    marginTop: 15,
  },
})
