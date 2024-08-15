import { View, Text, TextInput } from 'react-native'
import { inputSectionStyles } from '@shared/ui/InputSection/InputSectionStyles'
import { DatePicker } from '@shared/moduls/datePicker/DatePicker'
import { TimePicker } from '@shared/moduls/timePicker/TimePicker'
import { BtnSimple } from '@shared/ui/BtnSimple'
import { BtnFilled } from '@shared/ui/BtnFilled'
import { StyleSheet } from 'react-native'
import { useModal } from '@shared/moduls/modals/useModal'
import { ReactNode, useState } from 'react'
import { set } from 'react-hook-form'
import { Toast, ToastType } from '@shared/ui/Toast'

interface FormValues {
  date: Date | null
  startTime: Date | null
  endTime: Date | null
  title: string
}

export const BookingForm = () => {
  const { closeModal, openModal } = useModal()

  const [formValues, setFormValues] = useState<FormValues>({
    date: null,
    startTime: null,
    endTime: null,
    title: '',
  })

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
        <BtnSimple onPress={onReset}>Reset</BtnSimple>
        <BtnFilled onPress={onSubmit}>Apply</BtnFilled>
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
    gap: 15,
    marginTop: 15,
  },
})
