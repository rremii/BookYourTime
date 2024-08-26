import { PropsWithChildren } from 'react'
import { Text, StyleSheet } from 'react-native'

interface Props extends PropsWithChildren {
  rounded?: boolean
}

export const WorkingDay = ({ children, rounded = false }: Props) => {
  const workDayStyle = rounded ? styles.roundedWorkingDay : styles.workingDay

  return <Text style={workDayStyle}>{children}</Text>
}
const styles = StyleSheet.create({
  workingDay: {
    color: '#6E6E77',
  },

  roundedWorkingDay: {
    borderColor: '#000000',
    color: '#000000',
    borderWidth: 1,
    padding: 7,
    borderRadius: 15,
    paddingTop: 3,
    paddingBottom: 3,
  },
})
