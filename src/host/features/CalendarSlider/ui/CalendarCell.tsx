import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import { EventPreview } from './EventPreview'
import { LinearGradient } from 'expo-linear-gradient'
import { useModal } from '@shared/moduls/modals/useModal'
import { BookingPreviewModal } from '@host/features/BookingPreviewModal/BookingPreviewModal'
import { memo } from 'react'
import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'
import { Booking } from '@shared/entities/booking/types'

interface Props {
  dateFrom: string
  dateTo: string
  bookings?: Booking[]
}

export const CalendarCell = memo(({ dateFrom, bookings, dateTo }: Props) => {
  const { colors } = useTheme()
  const styles = getStyles(colors)

  const { openModal } = useModal()

  const openPreview = () => {
    openModal<{
      bookings?: Booking[]
    }>({
      name: 'BookingPreview',
      modal: BookingPreviewModal,
      props: {
        bookings,
      },
    })
  }

  const gradientColors = ['transparent', colors.color_linearGradient]
  return (
    <TouchableOpacity onPress={openPreview} style={styles.container}>
      <Text style={styles.date}>{new Date(dateTo).getDate()}</Text>
      {bookings?.length && (
        <FlatList
          data={bookings}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <EventPreview time={new Date(item.time.from)} title={item.title} />
          )}
        />
      )}

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
