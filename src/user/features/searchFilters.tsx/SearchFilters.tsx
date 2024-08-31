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
import React, { useContext, useState } from 'react'
import { DatePicker } from '../../../shared/moduls/datePicker/DatePicker'
import { TimePicker } from '@shared/moduls/timePickers/ui/TimePicker'
import { inputSectionStyles } from '@shared/ui/styles/InputSectionStyles'
import { TagsPicker } from '@shared/moduls/tagsPicker/TagsPicker'
import { Header } from './ui/Header'
import { UIButton } from '@shared/ui/UIButton/UIButton'
import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'
import { HostFilters } from '@user/entities/host/type'
import {
  HostFilterContext,
  HostFilterDispatchContext,
  resetFilters,
  setFilters,
} from '@user/entities/host/model/filtersStore'
import { TimeRangePicker } from '@shared/moduls/timePickers'

interface Props extends ModalProps {}

export const SearchFilters = ({ isOpen }: Props) => {
  const { colors } = useTheme()

  const [modalHeight, setModalHeight] = useState(
    Dimensions.get('screen').height * 0.6, // approximate
  )

  const { ...filters } = useContext(HostFilterContext)
  const { dispatch } = useContext(HostFilterDispatchContext)

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

  const onReset = () => {
    dispatch(resetFilters())
  }

  const onFilterChange =
    (filter: keyof HostFilters) => (value: HostFilters[keyof HostFilters]) => {
      dispatch(setFilters({ [filter]: value }))
    }
  const close = () => {
    closeModal('SearchFilters')
  }
  const onLayout = (e: LayoutChangeEvent) => {
    setModalHeight(+e.nativeEvent.layout.height)
  }
  const styles = getStyles(colors)
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
        <View style={inputSectionStyles.sectionContainer}>
          <Text
            style={[
              inputSectionStyles.sectionTitle,
              { color: colors.color_standart_text },
            ]}
          >
            Work time:
          </Text>
          <TimeRangePicker
            initTime={{ start: filters.startTime, end: filters.endTime }}
            onChange={(timeRange) => {
              onFilterChange('startTime')(timeRange.start)
              onFilterChange('endTime')(timeRange.end)
            }}
          />
        </View>
        <View
          style={[inputSectionStyles.sectionContainer, styles.tagsContainer]}
        >
          <Text
            style={[
              inputSectionStyles.sectionTitle,
              styles.tagsTitle,
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
            mainColor={colors.borderColor_standart}
            activeColor={colors.borderColor_active}
          >
            Reset
          </UIButton>
        </View>
      </Animated.View>
    </>
  )
}

const getStyles = (colors: Theme) =>
  StyleSheet.create({
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
      backgroundColor: colors.bcColor_standart_container,
    },

    btnContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: 15,
    },

    tagsContainer: {
      alignItems: 'flex-start',
    },
    tagsTitle: {
      lineHeight: 35,
    },

    text: {
      fontSize: 16,
      color: colors.color_standart_text,
    },

    btnSimple: {
      backgroundColor: colors.bcColor_button,
      borderColor: colors.borderColor_standart,
    },
  })
