import { StyleSheet, Text, TextInput, View } from 'react-native'
import { inputSectionStyles } from '@shared/ui/styles/InputSectionStyles'
import { DatePicker } from '@shared/moduls/datePicker/DatePicker'
import { TimePicker } from '@shared/moduls/timePickers/ui/TimePicker'
import { useModal } from '@shared/moduls/modals/useModal'
import { ReactNode, useState } from 'react'
import { Toast, ToastType } from '@shared/ui/Toast'
import { BookingModalType } from '../CreateEditBookingModal'
import { UIButton } from '@shared/ui/UIButton/UIButton'
import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'

interface FormValues {
  date: Date | null
  startTime: Date | null
  endTime: Date | null
  title: string
}

interface Props {
  type: BookingModalType
}

export const BookingForm = ({ type }: Props) => {
  const { colors } = useTheme()
  const styles = getStyles(colors)

  const { closeModal, openModal } = useModal()

  const [formValues, setFormValues] = useState<FormValues>({
    date: null,
    startTime: null,
    endTime: null,
    title: '',
  })

  const onFilterChange =
    (filter: keyof FormValues) => (value: string[] | Date | null | string) => {
      if (filter === 'title') {
        const title = value as string
        if (title.length > 25) return
      }

      setFormValues({
        ...formValues,
        [filter]: value,
      })
    }

  const onSubmit = () => {
    const { date, endTime, startTime, title } = formValues

    if (!date || !startTime || !endTime || !title) {
      return openModal<{ type: ToastType; children: ReactNode }>({
        name: 'Toast',
        modal: Toast,
        duration: 3000,
        props: { children: 'Please fill all fields', type: 'error' },
      })
    }

    console.log(formValues)
    close()
  }
  const onReset = () => {
    setFormValues({
      date: null,
      startTime: null,
      endTime: null,
      title: '',
    })
  }

  const onCancel = () => {
    onReset()
    closeModal('CreateEditBooking')
  }

  const onDelete = () => {
    closeModal('CreateEditBooking')
  }

  const close = () => {
    closeModal('CreateEditBooking')
  }

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
              type="filled"
              onPress={onSubmit}
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
              onPress={onCancel}
              mainColor={colors.borderColor_standart}
              activeColor={colors.borderColor_active}
            >
              Cancel
            </UIButton>
            <UIButton
              type="filled"
              onPress={onSubmit}
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
