import { PropsWithChildren } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Tags } from './types'
import { colorByTag } from './colorByTag'

interface Props extends PropsWithChildren {
  value: Tags
}

export const Tag = ({ value }: Props) => {
  const styles = getStyles(colorByTag(value))

  return <Text style={styles.workingDay}>{value}</Text>
}
const getStyles = (color: string) =>
  StyleSheet.create({
    workingDay: {
      backgroundColor: color,
      borderRadius: 10,
      paddingLeft: 7,
      paddingRight: 7,
      paddingTop: 3,
      paddingBottom: 3,
      color: '#FFFFFF',
    },
  })
