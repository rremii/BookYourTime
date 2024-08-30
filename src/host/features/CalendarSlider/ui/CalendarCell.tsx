import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {EventPreview} from './EventPreview'
import {LinearGradient} from 'expo-linear-gradient'
import {useModal} from '@shared/moduls/modals/useModal'
import {BookingPreviewModal} from '@host/features/BookingPreviewModal/BookingPreviewModal'
import {memo} from 'react'
import {useTheme} from '@shared/moduls/theme'
import {Theme} from '@shared/moduls/theme/types'

interface Props {
  dateFrom: string
  dateTo: string
}

export const CalendarCell = memo(({ dateFrom, dateTo }: Props) => {
  const { colors } = useTheme()
  const styles = getStyles(colors)

  const { openModal } = useModal()

  const openPreview = () => {
    openModal({ name: 'BookingPreview', modal: BookingPreviewModal })
  }

  const gradientColors = ['transparent', colors.color_linearGradient]
  return (
    <TouchableOpacity onPress={openPreview} style={styles.container}>
      <Text style={styles.date}>{new Date(dateTo).getDate()}</Text>

      <EventPreview title="Event qwe" time={new Date(2024, 8, 20, 15, 30)} />
      <EventPreview title="Event qwe" time={new Date(2024, 8, 20, 15, 30)} />

      <LinearGradient colors={gradientColors} style={styles.shadow} />
    </TouchableOpacity>
  )
})

const getStyles = (colors: Theme) =>
  StyleSheet.create({
    container: {
      paddingTop: 10,
      paddingBottom: 10,
      maxWidth: Math.floor(Dimensions.get('screen').width / 7) - 1, // width  / daysAmount
      width: '100%',
      height: '13%',
      maxHeight: 130,
      padding: 2,
      gap: 4,
      position: 'relative',
      overflow: 'hidden',
    },
    date: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      color: colors.color_standart_text,
    },
    shadow: {
      position: 'absolute',
      bottom: -1,
      left: 0,
      width: '110%',
      height: '50%',
    },
  })
