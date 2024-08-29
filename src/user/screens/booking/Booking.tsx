import { FlatList, StyleSheet, View } from 'react-native'
import { Header } from './Header'
import { BookingCard } from '@user/features/bookingCard/BookingCard'
import { useTheme } from '@shared/moduls/theme'
import { Theme } from '@shared/moduls/theme/types'
import { useGetBookings } from '@user/entities/booking/model/useGetBookings'
import { useGetMe } from '@user/entities/client/model/useGetMe'
import { Text } from 'react-native'

export const Booking = () => {
  const { colors } = useTheme()

  const { client } = useGetMe()
  const { bookings } = useGetBookings(client?.id)

  const styles = getStyles(colors)
  return (
    <View>
      <Header>Your bookings</Header>

      <BookingCard
        clientId="1"
        date={new Date().toISOString()}
        time={{ from: '12 AM', to: '1 PM' }}
        hostId="1"
        id="1"
        title="Some cool damn title"
      />
      {!bookings?.length ? (
        <Text style={styles.noBookings}>No bookings yet</Text>
      ) : (
        <FlatList
          contentContainerStyle={styles.listContainer}
          data={bookings}
          renderItem={({ item }) => <BookingCard {...item} />}
        />
      )}
    </View>
  )
}
const getStyles = (colors: Theme) =>
  StyleSheet.create({
    listContainer: {
      paddingBottom: 70,
      paddingTop: 20,
      gap: 10,
      backgroundColor: colors.bcColor_standart_container,
    },
    noBookings: {
      marginTop: 20,
      textAlign: 'center',
      fontSize: 20,
      color: colors.color_standart_text,
    },
  })
