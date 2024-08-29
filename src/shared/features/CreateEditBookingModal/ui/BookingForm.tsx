import { StyleSheet, Text, TextInput, View } from 'react-native'
import { inputSectionStyles } from '@shared/ui/styles/InputSectionStyles'
import { DatePicker } from '@shared/moduls/datePicker/DatePicker'
import { TimePicker } from '@shared/moduls/timePickers/ui/TimePicker'
import { useModal } from '@shared/moduls/modals/useModal'
import { ReactNode, useState } from 'react'
import { Toast, ToastType } from '@shared/ui/Toast'
import { UIButton } from '@shared/ui/UIButton/UIButton'
import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'
import { Booking } from '@shared/entities/booking/types'
import {
  CreateBookingDto,
  UpdateBookingDto,
} from '@user/entities/booking/types'
import { useGetMe } from '@user/entities/client/model/useGetMe'
import { Time } from '@shared/entities/types'
import { bookingFormSchema } from '../constants/bookingFormSchema'
import { BookingFormValues, BookingInfoDto } from '../types'
import { BookingModalType } from '@user/features/CreateEditBookingModal'
import * as yup from 'yup'
import { timeToDate } from '@shared/utils/timeToDate'

interface Props {
  type: BookingModalType
  booking?: Booking
  onCreate?: (bookingInfo: BookingInfoDto) => void
  onUpdate: (bookingInfo: BookingInfoDto) => void
  onDelete: () => void
  onCancel: () => void
  deleting: boolean
  updating: boolean
  creating?: boolean
}

export const BookingForm = ({
  type,
  booking,
  onCreate,
  onUpdate,
  onCancel,
  onDelete,
  deleting,
  updating,
  creating,
}: Props) => {
  const { date, time } = booking || {}
  const startTime = time?.from
  const endTime = time?.to

  const { colors } = useTheme()
  const { openModal } = useModal()

  const [formValues, setFormValues] = useState<BookingFormValues>({
    date: date ? new Date(date) : null,
    startTime: timeToDate(startTime),
    endTime: timeToDate(endTime),
    title: booking?.title || '',
  })

  const onFilterChange =
    (filter: keyof BookingFormValues) =>
    (value: BookingFormValues[keyof BookingFormValues]) => {
      setFormValues({
        ...formValues,
        [filter]: value,
      })
    }

  const handleSubmit = async () => {
    const { date, endTime, startTime, title } = formValues
    try {
      await bookingFormSchema.validate(formValues)

      const dto = {
        date: date?.toISOString(),
        time: {
          from: startTime?.toISOString(),
          to: endTime?.toISOString(),
        },
        title,
      } as BookingInfoDto

      if (type === 'edit') onUpdate(dto)
      if (type === 'create' && onCreate) onCreate(dto)
    } catch (err: unknown) {
      const validationError = err as { errors: string[] }
      const errorMsg = validationError.errors[0]

      openModal<{ type: ToastType; children: ReactNode }>({
        name: 'Toast',
        modal: Toast,
        duration: 3000,
        props: { children: errorMsg, type: 'error' },
      })
    }
  }
  const onReset = () => {
    setFormValues({
      date: null,
      startTime: null,
      endTime: null,
      title: '',
    })
  }

  const handleCancel = () => {
    onReset()
    onCancel()
  }

  const styles = getStyles(colors)
  return (
    <>
      <View style={inputSectionStyles.sectionContainer}>
        <Text
          style={[
            inputSectionStyles.sectionTitle,
            { color: colors.color_standart_text },
          ]}
        >
          title:{' '}
        </Text>
        <TextInput
          value={formValues.title}
          onChangeText={onFilterChange('title')}
          style={styles.titleInput}
        />
      </View>
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
          onChange={onFilterChange('date')}
          initDate={formValues.date}
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
          <Text style={styles.text}>Start</Text>
          <TimePicker
            onChange={onFilterChange('startTime')}
            initTime={formValues.startTime}
          />
        </View>
        <View
          style={[
            inputSectionStyles.sectionContainer,
            inputSectionStyles.withPadding,
          ]}
        >
          <Text style={styles.text}>End</Text>
          <TimePicker
            onChange={onFilterChange('endTime')}
            initTime={formValues.endTime}
          />
        </View>
      </View>
      <View style={styles.btnContainer}>
        {type === 'create' ? (
          <>
            <UIButton
              type="simple"
              onPress={onReset}
              mainColor={colors.borderColor_standart}
              activeColor={colors.borderColor_active}
            >
              Reset
            </UIButton>
            <UIButton
              pending={creating}
              type="filled"
              onPress={handleSubmit}
              mainColor={colors.bcColor_btn_filled}
              activeColor={colors.bcColor_btn_filled_active}
              subColor={colors.color_btn_filled}
            >
              Create
            </UIButton>
          </>
        ) : (
          <>
            <UIButton
              pending={deleting}
              type="danger"
              onPress={onDelete}
              mainColor={colors.bcColor_btn_danger}
              activeColor={colors.bcColor_btn_danger_active}
              subColor={colors.color_btn_danger}
            >
              Delete
            </UIButton>
            <UIButton
              type="simple"
              onPress={handleCancel}
              mainColor={colors.borderColor_standart}
              activeColor={colors.borderColor_active}
            >
              Cancel
            </UIButton>
            <UIButton
              pending={updating}
              type="filled"
              onPress={handleSubmit}
              mainColor={colors.bcColor_btn_filled}
              activeColor={colors.bcColor_btn_filled_active}
              subColor={colors.color_btn_filled}
            >
              Apply
            </UIButton>
          </>
        )}
      </View>
    </>
  )
}
const getStyles = (colors: Theme) =>
  StyleSheet.create({
    titleInput: {
      fontSize: 16,
      flex: 1,
      marginLeft: 10,
      borderWidth: 1,
      borderRadius: 7,
      padding: 12,
      paddingTop: 3,
      paddingBottom: 3,
      borderColor: colors.borderColor_titleInput,
      color: colors.color_titleInput,
    },

    btnContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: 10,
      marginTop: 15,
    },
    text: {
      fontSize: 16,
      color: colors.color_standart_text,
    },
  })
