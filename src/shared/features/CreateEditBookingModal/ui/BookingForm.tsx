import { StyleSheet, Text, TextInput, View } from 'react-native'
import { inputSectionStyles } from '@shared/ui/InputSection/InputSectionStyles'
import { DatePicker } from '@shared/moduls/datePicker/DatePicker'
import { TimePicker } from '@shared/moduls/timePickers/ui/TimePicker'
import { useModal } from '@shared/moduls/modals/useModal'
import { ReactNode, useState } from 'react'
import { Toast, ToastType } from '@shared/ui/Toast'
import { BookingModalType } from '../CreateEditBookingModal'
import { UIButton } from '@shared/ui/UIButton/UIButton'

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
        <Text style={inputSectionStyles.sectionTitle}>title: </Text>
        <TextInput
          value={formValues.title}
          onChangeText={onFilterChange('title')}
          style={styles.titleInput}
        />
      </View>
      <View style={inputSectionStyles.sectionContainer}>
        <Text style={inputSectionStyles.sectionTitle}>Date:</Text>
        <DatePicker
          onChange={onFilterChange('date')}
          initDate={formValues.date}
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
          <Text style={{ fontSize: 16 }}>End</Text>
          <TimePicker
            onChange={onFilterChange('endTime')}
            initTime={formValues.endTime}
          />
        </View>
      </View>
      <View style={styles.btnContainer}>
        {type === 'create' ? (
          <>
            <UIButton type="simple" onPress={onReset}>
              Reset
            </UIButton>
            <UIButton type="filled" onPress={onSubmit}>
              Create
            </UIButton>
          </>
        ) : (
          <>
            <UIButton type="danger" onPress={onDelete}>
              Delete
            </UIButton>
            <UIButton type="simple" onPress={onCancel}>
              Cancel
            </UIButton>
            <UIButton type="filled" onPress={onSubmit}>
              Apply
            </UIButton>
          </>
        )}
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  titleInput: {
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
    borderColor: '#48484866',
    color: '#000',
    borderWidth: 1,
    borderRadius: 7,
    padding: 12,
    paddingTop: 3,
    paddingBottom: 3,
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 10,
    marginTop: 15,
  },
})
