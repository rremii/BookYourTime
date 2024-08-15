import { View, Text, TextInput } from 'react-native'
import { inputSectionStyles } from '@shared/ui/InputSection/InputSectionStyles'
import { DatePicker } from '@shared/moduls/datePicker/DatePicker'
import { TimePicker } from '@shared/moduls/timePicker/TimePicker'
import { BtnSimple } from '@shared/ui/BtnSimple'
import { BtnFilled } from '@shared/ui/BtnFilled'
import { StyleSheet } from 'react-native'

export const BookingForm = () => {
  return (
    <>
      <View style={inputSectionStyles.sectionContainer}>
        <Text style={inputSectionStyles.sectionTitle}>title: </Text>
        <TextInput style={styles.titleInput} />
      </View>
      <View style={inputSectionStyles.sectionContainer}>
        <Text style={inputSectionStyles.sectionTitle}>Date:</Text>
        <DatePicker initDate={null} />
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
          <TimePicker initTime={null} />
        </View>
        <View
          style={[
            inputSectionStyles.sectionContainer,
            inputSectionStyles.withPadding,
          ]}
        >
          <Text style={{ fontSize: 16 }}>End</Text>
          <TimePicker initTime={null} />
        </View>
      </View>
      <View style={styles.btnContainer}>
        <BtnSimple>Reset</BtnSimple>
        <BtnFilled>Apply</BtnFilled>
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
